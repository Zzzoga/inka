var newsSwiper = new Swiper(".news__list", {
    navigation: {
      nextEl: "section.news .arrow.next",
      prevEl: "section.news .arrow.prev",
    },
    slidesPerView: 'auto', 
    spaceBetween: 0,
    breakpoints: {
      768: {
        spaceBetween: 0,
      },
      1024: {
        spaceBetween: 16,
      },
      1366: {
        spaceBetween: 18.5,
      },
      1440: {
        spaceBetween: 20,
      },
    },
});

var casesSwiper = new Swiper("section.cases .cards__items", {
    navigation: {
      nextEl: "section.cases .arrow.next",
      prevEl: "section.cases .arrow.prev",
    },
    slidesPerView: 'auto', 
    spaceBetween: 0,
    breakpoints: {
      768: {
        spaceBetween: 0,
      },
      1024: {
        spaceBetween: 16,
      },
      1366: {
        spaceBetween: 18.5,
      },
      1440: {
        spaceBetween: 20,
      },
    },
});

var partnersSwiper = new Swiper(".partners__wrapper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto', 
    spaceBetween: 20,
});