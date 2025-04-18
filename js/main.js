document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swipers
    const createSwiper = (selector, options) => {
        const swiperContainer = document.querySelector(selector);
        if (swiperContainer) {
            swiperContainer.style.cursor = 'pointer';
            return new Swiper(selector, options);
        }
        console.error(`Swiper container not found: ${selector}`);
        return null;
    };

    const commonOptions = {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };

    // Initialize Swipers
    const skillsSwiper = createSwiper('.skillsSwiper', {
        ...commonOptions,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            ...commonOptions.pagination,
            el: '.skillsSwiper .swiper-pagination',
        },
        navigation: {
            ...commonOptions.navigation,
            nextEl: '.skillsSwiper .swiper-button-next',
            prevEl: '.skillsSwiper .swiper-button-prev',
        },
        breakpoints: {
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    const projectsSwiper = createSwiper('.projectsSwiper', {
        ...commonOptions,
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            ...commonOptions.pagination,
            el: '.projectsSwiper .swiper-pagination',
        },
        navigation: {
            ...commonOptions.navigation,
            nextEl: '.projectsSwiper .swiper-button-next',
            prevEl: '.projectsSwiper .swiper-button-prev',
        },
        breakpoints: {
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    const updateSwipers = () => {
        skillsSwiper?.update();
        projectsSwiper?.update();
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`)?.classList.add('active');
            
            setTimeout(updateSwipers, 50);
        });
    });

    window.addEventListener('resize', updateSwipers);

    // Initialize particles.js
    if (typeof particlesJS === 'function') {
        try {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#00bcd4" },
                    shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 } },
                    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
                    size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
                    line_linked: { enable: true, distance: 150, color: "#00bcd4", opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 140, line_linked: { opacity: 1 } },
                        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 }
                    }
                },
                retina_detect: true
            });
        } catch (error) {
            console.error('Particles.js initialization error:', error);
        }
    } else {
        console.warn('particlesJS function not available');
    }
});