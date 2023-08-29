import $ from "jquery";
import Typed from "typed.js";


export function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}

export function burgerMenu() {
	$('.header__burger').on("click", function (event) {
		$('.header__burger, .header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
}

export function accordion() {
	const accordionTriggers = document.querySelectorAll('.accordion-trigger');

	// Додати обробник подій для кожного заголовку
	accordionTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			// Закрити всі аккордеони, крім того, який був клікнутий
			accordionTriggers.forEach(otherTrigger => {
				if (otherTrigger !== trigger) {
					otherTrigger.classList.remove('active');
					const otherContent = otherTrigger.nextElementSibling;
					let parentContainer = otherTrigger.parentNode.parentNode;
					otherContent.classList.remove('active');
				}
			});

			// Тоглі активний клас для заголовка
			trigger.classList.toggle('active');

			// Отримати відповідний вміст аккордеону
			const content = trigger.nextElementSibling;

			// Тоглі активний клас для вмісту аккордеону
			content.classList.toggle('active');
		});
	});
}

export function addClass() {
	// Вибір усіх елементів li, що містять підменю
	const liElementsWithSubMenu = document.querySelectorAll('.header__menu li ul');

	// Проходження по усіх знайдених елементах та додавання класу
	liElementsWithSubMenu.forEach(li => {
		const parentLi = li.parentElement; // Отримання батьківського елемента li
		parentLi.classList.add('accordion__mobile-trigger'); // Додавання класу до батьківського елемента li
		li.classList.add('accordion__mobile-content'); // Додавання класу до підменю (ul)
	});
}

export function accordion_mobile_ul() {
	const accordionTriggers = document.querySelectorAll('.accordion__mobile-trigger');

	// Додати обробник подій для кожного заголовку
	accordionTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			// Закрити всі аккордеони, крім того, який був клікнутий
			accordionTriggers.forEach(otherTrigger => {
				if (otherTrigger !== trigger) {
					otherTrigger.classList.remove('active');
					const otherContent = otherTrigger.nextElementSibling;
					let parentContainer = otherTrigger.parentNode.parentNode;
					otherContent.classList.remove('active');
				}
			});

			// Тоглі активний клас для заголовка
			trigger.classList.toggle('active');

			// Отримати відповідний вміст аккордеону
			const content = trigger.querySelector('ul');

			// Тоглі активний клас для вмісту аккордеону
			content.classList.toggle('active');
		});
	});
}

export function footer_nav() {
	const drop = document.querySelector('.footer__menu li a.drop');
	drop.addEventListener('click', (e) => {
		e.preventDefault();
		drop.parentNode.classList.toggle('active');
		drop.classList.toggle('active');
	});
}

export function textAnimation() {
	const spans = document.querySelectorAll('.home__animations span');
	if (spans) {
		const texts = [];

		spans.forEach(span => {
			texts.push(span.textContent);
			span.remove();
		});
		const newTextSpan = document.createElement('span');
		newTextSpan.id = 'text-span';
		document.querySelector('.home__animations').appendChild(newTextSpan);

		const options = {
			strings: texts,
			typeSpeed: 70, // Швидкість набору
			backSpeed: 70, // Швидкість стирання
			startDelay: 500, // Затримка перед початком анімації
			backDelay: 1000, // Затримка перед стиранням
			loop: true, // Зациклити анімацію
			showCursor: true, // Показувати курсор
		};

		const typed = new Typed("#text-span", options);
	}
	const message = document.querySelector('.home__message');

	if (message) {
		setTimeout(() => {
			message.classList.remove('disabled');
		}, 2000);
	}
}