

  let swiper = new Swiper( '.swiper', {
    autoplay: {
      delay: 0, //add
      disableOnInteraction: false,
    },
    speed:3000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 11,
    breakpoints: {
        
      768: {
        slidesPerView: 8,
      },
      1024: {
        slidesPerView: 11,
      },
    },
  });


  let swiper1 = new Swiper( '.swiper-container', {
    autoplay: {
      delay: 5000, //add
      disableOnInteraction: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    speed:500,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 1
  });