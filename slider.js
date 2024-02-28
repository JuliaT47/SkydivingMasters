const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".slider.next",
    prevEl: ".slider.prev",
  },
});
