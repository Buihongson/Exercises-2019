window.onscroll = () => {
 	 	const nav = document.querySelector("nav");
  		if(this.scrollY <= 10) nav.className = ''; else nav.className = 'black';
};


document.addEventListener('DOMContentLoaded', function() {
	var menuButton = document.querySelector(".menu h4");
	var menu = document.querySelector("nav #button");

	menuButton.addEventListener('click', function() {
		menu.classList.toggle("active");
	});

}, false);

