$('.popular_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots: false,
  responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
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


var sections = document.querySelectorAll('.section');
var offset = innerHeight * 0.9;
function setAnimation() {
  sections.forEach(function(item) {
    if (item.getBoundingClientRect().top < offset) {
      item.classList.add('animated')
      var timeout = setTimeout(function(){
        item.classList.add('animation_ends')
      },7000)
    }
  })
}

document.addEventListener('scroll', setAnimation)
setAnimation()