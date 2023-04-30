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

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', slideprecedent);
arrowRight.addEventListener('click', slidesuivant);


const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');

let currentSlide = 0;

function slide() {
    bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
}

function slidesuivant() {
    currentSlide++;
    slide();
}

function slideprecedent() {
    currentSlide--;   
	slide();
}

const dots = document.querySelector('.dots');




