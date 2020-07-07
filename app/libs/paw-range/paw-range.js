function pawSliderPre(selector) {
	// перемеенные

	var slider = document.querySelector(selector).querySelector('.paw-range-slider');
	var multiple = document.querySelector(selector).getAttribute('data-multiple');
	var drag = false;
	var current = document.querySelector(selector).querySelector('.paw-range-current');
	var maxValue = document.querySelector(selector).getAttribute('data-max');
	var minValue = document.querySelector(selector).getAttribute('data-min');
	var units = document.querySelector(selector).getAttribute('data-units');
	
 	if (multiple == "true") { // включаем слайдер с двумя ползунками
 		// добавление кнопок
			var buttonMin = document.createElement('button');
			var buttonMax = document.createElement('button');

				buttonMin.classList.add('paw-range-handler');
				buttonMin.classList.add('paw-range-handler-min');

				buttonMin.setAttribute('type','button');
				slider.appendChild(buttonMin);
				buttonMin.style.left='0';


				buttonMax.classList.add('paw-range-handler');
				buttonMax.classList.add('paw-range-handler-max');

				buttonMax.setAttribute('type','button');
				buttonMax.style.right='0';

				slider.appendChild(buttonMax);

			var spanMin = document.createElement('span');
				spanMin.classList.add('paw-range-value');
				spanMin.classList.add('paw-range-value-min');
				slider.appendChild(spanMin);
				spanMin.innerText=minValue;
			 	spanMin.setAttribute('data-units', units);

		 	var spanMax = document.createElement('span');
				spanMax.classList.add('paw-range-value');
		 		spanMax.classList.add('paw-range-value-max');
		 		slider.appendChild(spanMax);
		 		spanMax.innerText=maxValue;
		 	 	spanMax.setAttribute('data-units', units);

		pawRangeMultiple(slider, current,buttonMax, spanMax, buttonMin, spanMin, maxValue)
 	}
 	else {  // включаем слайдер с одним ползунками
 		var button = document.createElement('button');
			button.classList.add('paw-range-handler');
			button.setAttribute('type','button');
			slider.appendChild(button);
			button.style.left='0 ';
		var span = document.createElement('span');
			span.classList.add('paw-range-value');
			slider.appendChild(span);
			span.innerText=minValue;
		 	span.setAttribute('data-units', units)

		pawRangeSingle(slider,current,span, maxValue,button)
 	} 

}

// слайдер с одним ползунком
function pawRangeSingle(slider, current, span, maxValue, button) {
	function setPosition (e) {
		var position;
		if (e.target == slider) { // установка ползунка по клику
			position = event.offsetX / this.offsetWidth * 100
			changingPosition() 
		}
		if (e.target == button) { // установка ползунка при перетягивании
			drag = true;
			document.onmousemove = function (){
				var movePosition = window.event.clientX;
				var buttonPostion = button.getBoundingClientRect().left;

				if (drag) {
					position = parseInt(button.style.left);
					if(buttonPostion == movePosition) {
						buttonPostion = movePosition 
					}	

					else if (buttonPostion > movePosition) {
						if (position <= 0) {
							return
						}
						position -= 1;
						changingPosition() 
					}
					else if (buttonPostion < movePosition) {
						if (position >= 100) {
							return
						}
						position += 1;
						changingPosition() 
					}			
				}
			}	
			document.onmouseup = function(){
				drag = false;
				return drag
			}
		}
		function changingPosition() { // функция для внесения изменения в положение ползунка
			button.style.left = position + '%';
			span.style.left = position + '%';
			current.style.width = position + '%';
			span.innerText = Math.floor(maxValue / 100 * position);
		}
	}
	slider.addEventListener('mousedown', setPosition)
}

function pawRangeMultiple(slider, current,buttonMax, spanMax, buttonMin, spanMin,maxValue ){
	
	function setPosition(e) {
		var positionMin, positionMax;
		if (e.target == buttonMax) {
			drag = true;
			document.onmousemove = function (){
				var movePosition = window.event.clientX;
				var buttonPostion = buttonMax.getBoundingClientRect().left;

				if (drag) {
					var positionMax = parseInt(buttonMax.style.right);
					console.log(positionMax)
					if(buttonPostion == movePosition) {
						buttonPostion = movePosition 
					}	
					else if (buttonPostion < movePosition) {
						if (positionMax <= 0) {
							return
						}
						positionMax -= 1;
						current.style.right = positionMax + '%';
						buttonMax.style.right = positionMax + '%';
						spanMax.style.right = positionMax + '%';
						spanMax.innerText = maxValue -  Math.floor(maxValue / 100 * positionMax);
					}
					else if (buttonPostion > movePosition) {
						if (positionMax >= 100 || current.offsetWidth == 0) {
							return
						}
						positionMax += 1;
						current.style.right = positionMax + '%';
						buttonMax.style.right = positionMax + '%';
						spanMax.style.right = positionMax + '%';
						spanMax.innerText = maxValue -  Math.floor(maxValue / 100 * positionMax);
					}			
				}
			}	
			document.onmouseup = function(){
				drag = false;
				return drag
			}
		}
		else if (e.target == buttonMin) {
			drag = true;
			document.onmousemove = function (){
				var movePosition = window.event.clientX;
				var buttonPostion = buttonMin.getBoundingClientRect().left;


				if (drag) {
					var positionMin = parseInt(buttonMin.style.left);
					if(buttonPostion == movePosition) {
						buttonPostion = movePosition 
					}	
					else if (buttonPostion > movePosition) {
						if (positionMin <= 0 ) {
							return
						}
						positionMin -= 1;
						current.style.left = positionMin + '%';
						buttonMin.style.left = positionMin + '%';
						spanMin.style.left = positionMin + '%';
						spanMin.innerText = Math.floor(maxValue / 100 * positionMin);
					}
					else if (buttonPostion < movePosition) {
						if (positionMin >= 100 || current.offsetWidth == 0) {
							return
						}
						positionMin += 1;
						current.style.left = positionMin + '%';
						buttonMin.style.left = positionMin + '%';
						spanMin.style.left = positionMin + '%';
						spanMin.innerText = Math.floor(maxValue / 100 * positionMin);
					}			
				}
			}	
			document.onmouseup = function(){
				drag = false;
				return drag
			}
		}
		else if ((event.offsetX - current.offsetLeft) < current.offsetWidth / 2) {
			console.log('левый');
			positionMin = event.offsetX / this.offsetWidth * 100;
			current.style.left = positionMin + '%';
			buttonMin.style.left = positionMin + '%';
			spanMin.style.left = positionMin + '%';
			spanMin.innerText = Math.floor(maxValue / 100 * positionMin);
		}
		else {
			console.log('правый');
			positionMax = (event.offsetX / this.offsetWidth * -100 ) + 100;
			current.style.right = positionMax + '%';
			buttonMax.style.right = positionMax + '%';
			spanMax.style.right = positionMax + '%';
			spanMax.innerText = maxValue -  Math.floor(maxValue / 100 * positionMax);
		}
	}
	slider.addEventListener('mousedown', setPosition);
}

function pawRangeInit(selector) {
	if (document.querySelector(selector)) {
		window.addEventListener('load', pawSliderPre(selector))
	}
}

// function pawRangeInit(selector) {
// 	if (document.querySelector(selector)) {
// 		window.querySelectorAll(selector).forEach(function(item){item.addEventListener('load', pawSliderPre)})
// 	}		
// }	
