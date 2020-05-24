$('.popular_slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots: false,
  responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
 		  variableWidth: false,
 		  centerMode: false,
        }
      },
    ]
});