document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                skillsObserver.unobserve(entry.target); // فقط یک‌بار اجرا شود
            }
        });
    }, { threshold: 0.1 });
    
    skillCards.forEach(card => {
        skillsObserver.observe(card);
    });
    
    // مشاهده پروژه‌ها هنگام اسکرول
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                projectsObserver.unobserve(entry.target); // فقط یک‌بار اجرا شود
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease ' + (Math.random() * 0.3) + 's';
        projectsObserver.observe(card);
    });

    // انیمیشن برای آیکون اینستاگرام
    const instagramLink = document.querySelector('.instagram-highlight');
    if (instagramLink) {
        instagramLink.addEventListener('mouseenter', () => {
            instagramLink.style.animation = 'pulse 0.5s infinite';
        });
        instagramLink.addEventListener('mouseleave', () => {
            instagramLink.style.animation = 'pulse 2s infinite';
        });
    }
});

// اسکرول به بخش‌ها
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// افکت پارالاکس برای بنر
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});