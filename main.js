var nav_link_list = document.querySelectorAll('.navbar__link');
var header = document.querySelector('header');
var home_section = document.querySelector('#home');
var work_section = document.querySelector('#work');
var contact_section = document.querySelector('#contact');
var loading_background = document.querySelector('.loading-screen__background');
var loading_screen = document.querySelector('.loading-screen');
var loading_screen_text = document.querySelectorAll('.loading-screen__title-text');
var colorsList = [
	'#86f3b8',
	'#fdaed8',
	'#8bdeff',
	'#fabc60'
];
var selectedColor;
for (let i = 0; i < nav_link_list.length; i++) {
	nav_link_list[i].addEventListener('click', function() {
		removeActive();
		nav_link_list[i].classList.add('active');
	});
}

document.addEventListener('scroll', function() {
	if (window.pageYOffset > 300) {
		header.style.boxShadow = '2px 2px #eee';
	} else {
		header.style.boxShadow = 'none';
	}
});

function removeActive() {
	for (let j = 0; j < nav_link_list.length; j++) {
		nav_link_list[j].classList.remove('active');
	}
}

window.onload = function() {
	setTimeout(() => {
		this.pickRandomColors();
		loading_background.style.backgroundColor = selectedColor;
		loading_background.classList.add('fade-up');
	}, 1400);

	setTimeout(() => {
		loading_screen.classList.add('hide');
		for (let i = 0; i < loading_screen_text.length; i++) {
			loading_screen_text[i].style.display = 'none';
		}
	}, 2000);
};

function pickRandomColors() {
	var idx = Math.floor(Math.random() * colorsList.length);
	selectedColor = colorsList[idx];
}
