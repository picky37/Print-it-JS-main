const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrow_left = document.querySelector('.arrow_left');

const arrow_right = document.querySelector('.arrow_right');

const dots = document.querySelector('.dots');

const banner_image = document.querySelector('.banner-img');

const tagline = document.querySelector('#banner p');

let indexn = 0;
function miseAjourSlide() {

	banner_image.src = `./assets/images/slideshow/${slides[indexn].image}`;

	tagline.innerHTML = slides[indexn].tagLine;

	const allDots = document.querySelectorAll('.dot');

	allDots.forEach((dot, index) => {
		dot.classList.remove('dot_selected');
		if (index === indexn) {
			dot.classList.add('dot_selected');
		}
	});
}

miseAjourSlide();
arrow_left.addEventListener('click', function () {
	indexn--;
	if (indexn < 0) {
		indexn = slides.length - 1;
	}
	miseAjourSlide();
}
);

arrow_right.addEventListener('click', function () {
	indexn++;
	if (indexn >= slides.length) {
		indexn = 0;
	}
	miseAjourSlide();
}
);


for (let i = 0; i < slides.length; i++) {
	dots.innerHTML +=
		'<span id="dot' +
		i +
		'" class="dot" title="Image ' +
		i +
		'"></span>';
}