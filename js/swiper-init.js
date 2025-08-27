const swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',   // кнопки берут ширину из CSS
  spaceBetween: 10,        // отступ между кнопками
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
