let myButton = document.getElementById('btnTop');

window.onscroll = function () {
	checkScroll();
};

function checkScroll() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		myButton.style.display = 'block';
	} else {
		myButton.style.display = 'none';
	}
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
