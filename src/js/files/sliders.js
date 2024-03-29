/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper"
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules"
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss"
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss"
// Полный набор стилей из node_modules
// import 'swiper/css';
import "swiper/css/grid"

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)')
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add("swiper")
			slider.classList.add("swiper-wrapper")
			for (const slide of slider.children) {
				slide.classList.add("swiper-slide")
			}
		})
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders()

	// Перечень слайдеров
	if (document.querySelector(".swiper")) {
		new Swiper(".swiper", {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay],
			/*
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 40,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			pagination: {
				el: ".gallery__slider_pagination",
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: ".gallery__slider .gallery__slider_prev",
				prevEl: ".gallery__slider .gallery__slider_next",
			},
			breakpoints: {
				325: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
					width: 552,
				},
				1440: {
					slidesPerView: 3,
					width: undefined,
				},
			},
			on: {},
		})
	}
	if (document.querySelector(".team__slider")) {
		new Swiper(".team__slider", {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Grid, Pagination, Autoplay],
			/*
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 40,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			// pagination: {
			// 	el: ".gallery__slider_pagination",
			// 	clickable: true,
			// },
			// Arrows
			navigation: {
				nextEl: ".team__slider_arrows .team__slider_prev",
				prevEl: ".team__slider_arrows .team__slider_next",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 24,
					grid: {
						rows: 2,
						fill: "row",
					},
					pagination: {
						el: ".team__slider_pagination",
						clickable: true,
					},
				},
				1440: {
					slidesPerView: 3,
					spaceBetween: 20,

					grid: {
						rows: 1,
					},
				},
				1760: {
					slidesPerView: 4,
				},
			},
			on: {},
		})
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders()

	let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index]
			const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar")
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			})
			sliderScroll.scrollbar.updateSize()
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders()
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
})
