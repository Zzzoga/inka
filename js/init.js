var newsSwiper = new Swiper(".news__list", {
    navigation: {
      nextEl: "section.news .arrow.next",
      prevEl: "section.news .arrow.prev",
    },
    slidesPerView: 'auto', 
    spaceBetween: 20,
});

var casesSwiper = new Swiper("section.cases .cards__items", {
    navigation: {
      nextEl: "section.cases .arrow.next",
      prevEl: "section.cases .arrow.prev",
    },
    slidesPerView: 'auto', 
    spaceBetween: 20,
});

var partnersSwiper = new Swiper(".partners__wrapper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 'auto', 
    spaceBetween: 20,
});