const mainmenu = document.querySelector('.nav-menu');
const hambutton = document.querySelector('#navButton');

hambutton.addEventListener('click', () => {
	mainmenu.classList.toggle('open');
	hambutton.classList.toggle('open');
});