var underline_list = document.querySelectorAll('.underline');
var nav_link_list = document.querySelectorAll('.nav__link');
var header = document.querySelector('header');
var home_section = document.querySelector('#home');
var work_section = document.querySelector('#work');
var contact_section = document.querySelector('#contact');
console.log(underline_list.length);
for (let i = 0; i < nav_link_list.length; i++) {
	nav_link_list[i].addEventListener('click', function() {
		removeActive();
		underline_list[i].classList.add('active');
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
	for (let j = 0; j < underline_list.length; j++) {
		console.log('heli');
		underline_list[j].classList.remove('active');
	}
}
