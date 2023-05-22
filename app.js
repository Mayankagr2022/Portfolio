// const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header = document.querySelector('.header.container');

// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('active');
// 	mobile_menu.classList.toggle('active');
// });

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 250) {
// 		header.style.backgroundColor = '#29323c';
// 	} else {
// 		header.style.backgroundColor = 'transparent';
// 	}
// });

// menu_item.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		hamburger.classList.toggle('active');
// 		mobile_menu.classList.toggle('active');
// 	});
// });
gsap.fromTo(
	".loading-page",
	{ opacity: 1, zIndex:"9999" },
	{
		opacity: 0,
		display: "none",
		duration: 1.5,
		delay: 3.5,
		zIndex: 0
	}
);

gsap.fromTo(
	".logo-name",
	{
		y: 50,
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		duration: 2,
		// delay: 0.5,
	}
);