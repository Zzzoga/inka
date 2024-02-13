// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	const body = document.querySelector('body')

	// CORE ITEMS
	const coreList = document.querySelectorAll('.core__item')
	const bodyHeightFirst = coreList[0].querySelector('.core__body').offsetHeight
	const headerHeightFirst = coreList[0].querySelector('.core__header').offsetHeight
	coreList[0].style.height = `${bodyHeightFirst + headerHeightFirst}px`
	coreList[0].querySelector('span.core__title').classList.add('bold')
	
	document.querySelectorAll('.core__item').forEach(item => {
		item.addEventListener('mouseover', e => {
			document.querySelectorAll('.core__item').forEach(item => {
				item.querySelector('span.core__title').classList.remove('bold')
				const headerHeight = item.querySelector('.core__header').offsetHeight
				item.style.height = `${headerHeight}px`
			})

			const bodyHeight = e.target.closest('.core__item').querySelector('.core__body').offsetHeight
			const headerHeight = e.target.closest('.core__item').querySelector('.core__header').offsetHeight
			e.target.closest('.core__item').style.height = `${bodyHeight + headerHeight}px`
			e.target.closest('.core__item').querySelector('span.core__title').classList.add('bold')
		})
	
		item.addEventListener('mouseout', e => {
			e.target.closest('.core__item').querySelector('span.core__title').classList.remove('bold')
			const headerHeight = e.target.closest('.core__item').querySelector('.core__header').offsetHeight
			e.target.closest('.core__item').style.height = `${headerHeight}px`
		})
	})

	// CARD SHOW/HIDE
	const allCards = document.querySelectorAll('.card__item')
	allCards.forEach(card => {
		card.addEventListener('click', e => {
			if (!e.target.closest('.card__item').classList.contains('active')) {
				allCards.forEach(card => {
					card.classList.remove('active')
				})
				e.target.closest('.card__item').classList.add('active')
			} else {
				e.target.closest('.card__item').classList.remove('active')
			}
		})
	})

	// NEWS MODAL FUNCTION
	document.querySelectorAll('.news__item').forEach(news => {
		news.addEventListener('click', e => {
			e.preventDefault()

			document.querySelector('.modal.news__modal .modal__news__text').innerHTML = e.target.closest('.news__item').querySelector('.hidden__detail__text').innerHTML
			document.querySelector('.modal.news__modal .modal__news__title').innerHTML = e.target.closest('.news__item').querySelector('.news__title').innerHTML
			document.querySelector('.modal.news__modal .modal__news__img img').src = e.target.closest('.news__item').querySelector('.news__img img').src

			body.classList.add('hidden')
			document.querySelector('.modal.news__modal').classList.add('visible')
			setTimeout(() => {
				document.querySelector('.modal.news__modal .modal__overlay').classList.add('visible')
			}, 0)
			setTimeout(() => {
				document.querySelector('.modal.news__modal .modal__wrapper').classList.add('visible')
			}, 500)
			setTimeout(() => {
				document.querySelector('.modal.news__modal .modal__wrapper .modal__close').classList.add('visible')
			}, 1000)
		})
	})

	document.querySelector('.modal.news__modal .modal__wrapper .modal__close').addEventListener('click', e => {
        e.preventDefault()
        document.querySelector('.modal.news__modal .modal__wrapper .modal__close').classList.remove('visible')
        setTimeout(() => {
            document.querySelector('.modal.news__modal .modal__wrapper').classList.remove('visible')
        }, 500)
        setTimeout(() => {
            document.querySelector('.modal.news__modal .modal__overlay').classList.remove('visible')
        }, 1000)
        setTimeout(() => {
			body.classList.remove('hidden')
            document.querySelector('.modal.news__modal').classList.remove('visible')
        }, 1500)
    })
	
	document.querySelector('.modal.news__modal .modal__overlay').addEventListener('click', e => {
        e.preventDefault()
        document.querySelector('.modal.news__modal .modal__wrapper .modal__close').classList.remove('visible')
        setTimeout(() => {
            document.querySelector('.modal.news__modal .modal__wrapper').classList.remove('visible')
        }, 500)
        setTimeout(() => {
            document.querySelector('.modal.news__modal .modal__overlay').classList.remove('visible')
        }, 1000)
        setTimeout(() => {
			body.classList.remove('hidden')
            document.querySelector('.modal.news__modal').classList.remove('visible')
        }, 1500)
    })

	// MODAL FUNCTION
	function showHideModal(modal, close, wrapper, overlay, btn) {
		document.querySelectorAll(btn).forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault()
				body.classList.add('hidden')
				document.querySelector(modal).classList.add('visible')
				setTimeout(() => {
					document.querySelector(overlay).classList.add('visible')
				}, 0)
				setTimeout(() => {
					document.querySelector(wrapper).classList.add('visible')
				}, 500)
			})
		})

		document.querySelector(close).addEventListener('click', e => {
			e.preventDefault()
			setTimeout(() => {
				document.querySelector(wrapper).classList.remove('visible')
			}, 0)
			setTimeout(() => {
				document.querySelector(overlay).classList.remove('visible')
			}, 500)
			setTimeout(() => {
				body.classList.remove('hidden')
				document.querySelector(modal).classList.remove('visible')
			}, 1000)
		})

		document.querySelector(overlay).addEventListener('click', e => {
			e.preventDefault()
			setTimeout(() => {
				document.querySelector(wrapper).classList.remove('visible')
			}, 0)
			setTimeout(() => {
				document.querySelector(overlay).classList.remove('visible')
			}, 500)
			setTimeout(() => {
				body.classList.remove('hidden')
				document.querySelector(modal).classList.remove('visible')
			}, 1000)
		})
	}

	showHideModal('.call__modal','.call__modal .modal__close', '.call__modal .modal__wrapper', '.call__modal .modal__overlay', '.call__btn')
	showHideModal('.vacansy__modal','.vacansy__modal .modal__close', '.vacansy__modal .modal__wrapper', '.vacansy__modal .modal__overlay', '.team__item.vacansy')
	showHideModal('.video__modal','.video__modal .modal__close', '.video__modal .modal__wrapper', '.video__modal .modal__overlay', '.video__btn')

	// HEADER NAV SHOW/HIDE

	if (document.documentElement.clientWidth >= 1024) {
		document.querySelector('.burger').addEventListener('click', e => {
			if (!document.querySelector('.header__left').classList.contains('active')) {
				document.querySelector('span.burger__text').innerHTML = 'Закрыть'
				document.querySelector('.header__left').classList.add('active')
			} else if (document.querySelector('.header__left').classList.contains('active')) {
				document.querySelector('span.burger__text').innerHTML = 'Меню'
				document.querySelector('.header__left').classList.remove('active')
			}
		})
	} else if (document.documentElement.clientWidth < 1024) {
		document.querySelector('.burger').addEventListener('click', e => {
			if (!document.querySelector('.burger').classList.contains('active')) {
				document.querySelector('span.burger__text').innerHTML = 'Закрыть'
				document.querySelector('.hidden__mobile__nav').classList.add('active')
				document.querySelector('.burger').classList.add('active')
			} else if (document.querySelector('.burger').classList.contains('active')) {
				document.querySelector('span.burger__text').innerHTML = 'Меню'
				document.querySelector('.hidden__mobile__nav').classList.remove('active')
				document.querySelector('.burger').classList.remove('active')
			}
		})
	}

	function clickOnBurgerLink(nav) {
		nav.forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault()
				if (e.target.closest('a').href.includes('#')) {
					document.querySelector('span.burger__text').innerHTML = 'Меню'
					document.querySelector('.hidden__mobile__nav').classList.remove('active')
					document.querySelector('.burger').classList.remove('active')
				} else {
					location.href = e.target.closest('a').href
				}
			})
		})
	}

	const hiddenTopNavLink = document.querySelectorAll('.hidden__mobile__top__nav a.hidden__nav__link')
	const hiddenBottomNavLink = document.querySelectorAll('.big__nav a.hidden__nav__link')
	const headerNavLink = document.querySelectorAll('.hidden__nav a.hidden__nav__link')
	const hiddenNavLink = document.querySelectorAll('.small__nav a.nav__link')

	clickOnBurgerLink(hiddenTopNavLink)
	clickOnBurgerLink(hiddenBottomNavLink)
	clickOnBurgerLink(hiddenNavLink)

	headerNavLink.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault()
			if (e.target.closest('a').href.includes('#')) {
				document.querySelector('span.burger__text').innerHTML = 'Меню'
				document.querySelector('.header__left').classList.remove('active')
			} else {
				location.href = e.target.closest('a').href
			}
		})
	})

	document.querySelector('.btn.header__btn').addEventListener('click', e => {
		e.preventDefault()
		if (!document.querySelector('.header__right').classList.contains('active')) {
			document.querySelector('.header__right').classList.add('active')
		} else {
			document.querySelector('.header__right').classList.remove('active')
		}
	})

	// FILE INPUT CHANGE
	document.querySelector('#file').addEventListener('change', function() {
		const filename = this.files[0].name;
		document.querySelector('#file-label').innerText = filename;
		document.querySelector('.custom-file-upload').classList.add('load')
	});

	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		if (document.documentElement.clientWidth > 1023) {
			$page.animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 100
			}, 800);
			return false;
		} else {
			$page.animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 50
			}, 800);
			return false;
		}
		
	});

	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}

	maskPhone('input[type="tel"]')

	// AOS init
	AOS.init();
	
	// SessionStorage write
	sessionStorage.setItem('load', 'done')
})


