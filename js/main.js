const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: { // افزودن دکمه‌های ناوبری
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
      },
      480: {
          slidesPerView: 1.5,
      },
  },
});

// تغییر علامت موس وقتی روی اسلایدر می‌رود
const swiperContainer = document.querySelector('.swiper');
swiperContainer.style.cursor = 'pointer'; // تغییر علامت موس به pointer
