const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const textArray = [
	"I am a Developer", 
	"I am an ML Enthusiast", 
	"I love AI & NLP", 
	"I build Web Solutions", 
	"I am a Full-Stack Engineer",
	"I create Intelligent Chatbots", 
	"I specialize in Deep Learning", 
	"I love Problem-Solving", 
	"I am a Data Scientist in the Making",
	"I bring Ideas to Life with Code",
	"I work with AI & Automation",
	"I craft Scalable Web Apps",
	"I explore the Future of AI",
	"I innovate with Cloud Computing",
	"I develop Secure Systems",
	"I transform Data into Insights"
  ];
  
let textIndex = 0;

function changeText() {
  const textElement = document.getElementById("changing-text");
  textElement.innerHTML = textArray[textIndex];
  textIndex = (textIndex + 1) % textArray.length;
}

// Change text every 2 seconds
setInterval(changeText, 2000);

// Initial call to set first text
changeText();

