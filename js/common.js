// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	const body = document.querySelector('body')

	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});

	// CORE ITEMS
	document.querySelectorAll('.core__item').forEach(item => {
		item.addEventListener('mouseover', e => {
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
	document.querySelectorAll('.card__item').forEach(card => {
		card.addEventListener('click', e => {
			if (!e.target.closest('.card__item').classList.contains('active')) {
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
	document.querySelector('.burger').addEventListener('click', e => {
		if (!document.querySelector('.header__left').classList.contains('active')) {
			document.querySelector('span.burger__text').innerHTML = 'Закрыть'
			document.querySelector('.header__left').classList.add('active')
		} else {
			document.querySelector('span.burger__text').innerHTML = 'Меню'
			document.querySelector('.header__left').classList.remove('active')
		}
	})

	document.querySelector('.btn.header__btn').addEventListener('click', e => {
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

	// AOS init
	AOS.init();
	
	// SessionStorage write
	sessionStorage.setItem('load', 'done')
})


