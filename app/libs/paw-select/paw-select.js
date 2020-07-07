function pawSelect(e) {
	// назначение переменных
	var list = this.querySelector('.paw-list'); 
	var selected = this.querySelector('.paw-current_value');  
	var counter = parseInt(selected.getAttribute('data-set'))
	var multiple = this.getAttribute('data-multiple');
	var items = this.querySelectorAll('.paw-list-item');
	var placeholder = this.getAttribute('data-placeholder');

	// код функции

		// показать список вариантов

		if (e.target.classList.contains('paw-current_value')) {
			e.target.nextElementSibling.classList.toggle('hidden')
			return
		}


		// выбор первого элемента списка

		else if(e.target.classList.contains('paw-list-item') && counter == 0) {
			selected.innerText = e.target.innerText
			selected.value = e.target.value

			if (multiple != 'true') {
				items.forEach(function(item) {
					item.classList.remove('selected')
				})
			}
			else {
				counter++
			}

			selected.setAttribute('data-set', counter)
			e.target.classList.add('selected')
		}

		// выбор первого элемента списка

		else if(e.target.classList.contains('paw-list-item') && counter > 0 && multiple == 'true') {
			if (e.target.classList.contains('selected')) {
				counter--
				if (counter == 0) {
					selected.innerText = placeholder;
				}
				else {
					selected.innerText = 'Выбрано:' + counter;
				}
				selected.setAttribute('data-set', counter)
				e.target.classList.remove('selected');
				list.classList.add('hidden')
				return
			}
			counter++
			selected.innerText = 'Выбрано:' + counter;
			selected.setAttribute('data-set', counter);
			selected.value += ', ' + e.target.value;

			e.target.classList.add('selected')
		}
}

// скрываем выпадающий список по клику вне элементов

document.addEventListener('click', function() {
	if (!event.target.classList.contains('paw-current_value')) {
		document.querySelectorAll('.paw-list').forEach(function(item) {
			item.classList.add('hidden');
		})
	}
})

function initPawSelect(selector) {
	if (document.querySelector(selector)) {
		document.querySelectorAll(selector).forEach(function(item){item.addEventListener('click', pawSelect)})
	}		
}	
