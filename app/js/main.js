$('.popular_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots: false,
  responsive: [
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

$('.offer').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:false,
  dots: true,
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