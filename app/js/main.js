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

var bgPositionX = 0;
new fullpage('#fullpage', {
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['1', '2','3','4','5'],
  showActiveTooltip: true,
  scrollingSpeed: 1500,
  easingcss3: 'cubic-bezier(0.5, 0, 0.5, 0)',
  scrollHorizontally: true,

  onLeave: function(origin, destination, direction){
    if (direction == 'down') {
      bgPositionX += 20;
    }
    else if (direction == 'up') {
      bgPositionX -= 20;
    }
    document.querySelector('body').style.backgroundPositionX = bgPositionX +'%'
  }
});



$('.flavor_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

function flavorDonts() {
  var e = event.target;
  if (e.classList.contains('flavor_dot')) {
    $('.flavor_slider').slick('slickGoTo', e.getAttribute('data-target'))
    document.querySelectorAll('.flavor_dot').forEach((item) => {
      item.classList.remove('active')
    })
    e.classList.add('active')
  }
}

$('.flavor_slider').on('afterChange', function(slick, currentSlide){
  document.querySelectorAll('.flavor_dot').forEach((item) => {
    item.classList.remove('active')
  })
  document.querySelectorAll('.flavor_dot')[currentSlide.currentSlide].classList.add('active')
});

document.addEventListener('click', flavorDonts)



function counters() {
  document.querySelectorAll('.selection_result-progress').forEach((item) => {
    var stop = item.parentNode.getAttribute('data-progress');
    var n = 0;
    var progress = setInterval(function(){
      if (n < stop) {
        item.querySelector('.current').style.width = n + '%';
        item.parentNode.querySelector('.selection_result-num').innerText = n;
        n++
      }
      else {
        clearInterval(progress)
      }

    },50)
  })
}

function selectFlavor() {
  var e = event.target;
  if (e.classList.contains('selection_input')) {
    e.parentNode.classList.add('hidden');
    e.parentNode.nextElementSibling.classList.remove('hidden');
    counters()
  }
}

document.addEventListener('click', selectFlavor)