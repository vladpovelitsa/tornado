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