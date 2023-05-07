const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
let currentSlide = 0;

arrowLeft.addEventListener('click', slideprecedent);
arrowRight.addEventListener('click', slidesuivant);

function showSlide() {
    bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
}

function slidesuivant() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
	updateDots();
}

function slideprecedent() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
	showSlide();
	updateDots();
}

const dotsContainer = document.querySelector('.dots');
const dots = dotsContainer.querySelectorAll('.dot');

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

updateDots();







