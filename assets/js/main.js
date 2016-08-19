var main = function(){

	// Carusel functions

	var slideNext = function(){
		var currentSlide = $('.active-slide'),
			nextSlide = currentSlide.next();

		if (nextSlide.length === 0) {
			nextSlide = $('.slide').first();
		}
		currentSlide.hide().removeClass('active-slide');
		nextSlide.fadeIn(1000).addClass('active-slide');
	};

	//Auto-playing slider

	setInterval(slideNext, 4000);

	//Playing next/previous slide on click
	
	$('.arrow-next').click(slideNext);

	$('.arrow-prev').click(function(){
		var currentSlide = $('.active-slide'),
			prevSlide = currentSlide.prev();

		if (prevSlide.length === 0) {
			prevSlide = $('.slide').last();
		}
		currentSlide.hide().removeClass('active-slide');
		prevSlide.fadeIn(800).addClass('active-slide');
	});
};

$(document).ready(main);