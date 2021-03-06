// Mobile navigation
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});

// Close navbar after clicking a link
const navLinks = document.querySelectorAll('.nav__links');
navLinks.forEach(function (link) {
	link.addEventListener('click', () => {
		navbarLinks.classList.remove('active');
	});
});

// Scroll to different sections of the page
const scrollTop = document.querySelector('.scroll-top');
const scrollServ = document.querySelector('.scroll-serv');
const learnmoreBtn = document.querySelector('.learn-more');
const scrollPort = document.querySelector('.scroll-port');
const scrollFirm = document.querySelector('.scroll-firm');
const scrollConn = document.querySelector('.scroll-connect');

const topSec = document.querySelector('#top-section');
const servSec = document.querySelector('#services-section');
const portSec = document.querySelector('#portfolio-section');
const firmSec = document.querySelector('#firm-section');
const connSec = document.querySelector('#connect-section');

scrollTop.addEventListener('click', () =>
	topSec.scrollIntoView({ behavior: 'smooth' })
);

scrollServ.addEventListener('click', () =>
	servSec.scrollIntoView({ behavior: 'smooth' })
);

learnmoreBtn.addEventListener('click', () =>
	servSec.scrollIntoView({ behavior: 'smooth' })
);

scrollPort.addEventListener('click', () =>
	portSec.scrollIntoView({ behavior: 'smooth' })
);

scrollFirm.addEventListener('click', () =>
	firmSec.scrollIntoView({ behavior: 'smooth' })
);

scrollConn.addEventListener('click', () =>
	connSec.scrollIntoView({ behavior: 'smooth' })
);

// Add selected class
// const navBtn = document.querySelector('.navbar-links');
// navBtn.addEventListener('click', (e) => {
// 	const link = e.target;
// 	const siblings = link
// 		.closest('.navbar-links')
// 		.querySelectorAll('.nav__links');

// 	if (link.classList.contains('nav__links')) {
// 		link.classList.add('selected');
// 	}

// 	console.log(link);
// 	console.log(siblings);

// 	siblings.forEach((element) => {
// 		console.log(element);
// 		if (element == link) {
// 			element.classList.remove('selected');
// 		}
// 	});
// });

// Modal window on click
const blogItems = document.querySelector('.blog-items-2');
const showModal = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelectorAll('.modal-window');
const closeBtn = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');

blogItems.addEventListener('click', (e) => {
	const clicked = e.target.closest('.show-modal');
	if (!clicked) return;

	overlay.classList.remove('hidden');
	document
		.querySelector(`.modal-window-${clicked.dataset.set}`)
		.classList.remove('hidden');
});

closeBtn.forEach((btn) =>
	btn.addEventListener('click', () => {
		overlay.classList.add('hidden');
		modalWindow.forEach((el) => el.classList.add('hidden'));
	})
);

// Shrink navbar on scroll
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById('navbar').style.padding = '0.2rem 0';
		document.getElementById('company-title').style.fontSize = '1rem';
		document.getElementById('logo').style.width = '25px';
		document.getElementById('logo').style.height = '25px';
	} else {
		document.getElementById('navbar').style.padding = '0.5rem';
		document.getElementById('company-title').style.fontSize = '2rem';
		document.getElementById('logo').style.width = '50px';
		document.getElementById('logo').style.height = '50px';
	}
}
