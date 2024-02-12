function preloader() {
	function progressbarChange() {
		let percent = 0
		const changePercent = setInterval(function() {
			if (percent < 100) {
				percent++
			} else {
			  clearInterval(changePercent);
			}
		}, 50);
	}
	
	document.querySelector('body').style.overflowY = 'hidden'
	setTimeout(() => {
		document.querySelector('.preloader__wrapper').classList.add('visible')
	}, 1000)
	setTimeout(() => {
		document.querySelector('.preloader').classList.add('active')
        progressbarChange()
	}, 2000)
	setTimeout(() => {
		document.querySelector('.preloader').classList.add('disable')
		document.querySelector('body').style.overflowY = 'visible'
	}, 7000)
}

preloader()