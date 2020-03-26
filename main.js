var nav_link_list = document.querySelectorAll('.navbar__link');
var header = document.querySelector('header');
var home_section = document.querySelector('#home');
var work_section = document.querySelector('#work');
var contact_section = document.querySelector('#contact');
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
