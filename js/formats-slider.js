const swiper = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1,

  breakpoints: {
    898: {
      slidesPerView: 2,
    },
    1240: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".arrow-button.next",
    prevEl: ".arrow-button.prev",
  },
});
