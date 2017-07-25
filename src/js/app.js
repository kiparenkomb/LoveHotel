(function ($) {

	$('.navbar-toggle').click(function() {
		$('.icon-bar').toggleClass('animate');
	});

	// Header navigations
	(function (document, window, index) {
		'use strict';

		var elSelector = '.header',
				element = document.querySelector(elSelector);

		if (!element) return true;

		var elHeight = 0,
				elTop = 0,
				dHeight = 0,
				wHeight = 0,
				wScrollCurrent = 0,
				wScrollBefore = 0,
				wScrollDiff = 0;

		window.addEventListener('scroll', function () {
			elHeight = element.offsetHeight;
			dHeight = document.body.offsetHeight;
			wHeight = window.innerHeight;
			wScrollCurrent = window.pageYOffset;
			wScrollDiff = wScrollBefore - wScrollCurrent;
			elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

			if (wScrollCurrent <= 0) element.style.top = '0px';else if (wScrollDiff > 0) element.style.top = (elTop > 0 ? 0 : elTop) + 'px';else if (wScrollDiff < 0) {
				if (wScrollCurrent + wHeight >= dHeight - elHeight) element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';else element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
			}

			wScrollBefore = wScrollCurrent;
		});
	})(document, window, 0);

	// Scroll
	$('.nav .menu__link_index, .nav a').click(function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
				top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});
	// end - Scroll




	$(window).on('load resize scroll',function() {
		if ($(window).width() > 991) {
			let heightBox = $('.js-margin').innerHeight();
			let heightParentBox = $('.js-margin').parent().parent().innerHeight();
			$('.js-margin').css('margin-top', heightParentBox/2 - heightBox/2);
		} else {
			$('.js-margin').css('margin', '20px 0');
		}
	});

	$(document).ready(function () {
		var galleryTopOne = new Swiper('.topOne', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			spaceBetween: 10,
		});
		var galleryThumbsOne = new Swiper('.thumbsOne', {
			spaceBetween: 10,
			centeredSlides: true,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true
		});
		galleryTopOne.params.control = galleryThumbsOne;
		galleryThumbsOne.params.control = galleryTopOne;
	});

	$(document).ready(function () {
		var galleryTopTwo = new Swiper('.topTwo', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			spaceBetween: 10,
		});
		var galleryThumbsTwo = new Swiper('.thumbsTwo', {
			spaceBetween: 10,
			centeredSlides: true,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true
		});
		galleryTopTwo.params.control = galleryThumbsTwo;
		galleryThumbsTwo.params.control = galleryTopTwo;
	});

	$(document).ready(function () {
		var galleryTopThree = new Swiper('.topThree', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			spaceBetween: 10,
		});
		var galleryThumbsThree = new Swiper('.thumbsThree', {
			spaceBetween: 10,
			centeredSlides: true,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true
		});
		galleryTopThree.params.control = galleryThumbsThree;
		galleryThumbsThree.params.control = galleryTopThree;
	});



	$('.js-more').click(function() {
		$('.more').slideToggle();
		if ($(window).width() > 767) {
			var maxHeight = 0;
			$('.more-info').each(function() {
				maxHeight = Math.max(maxHeight, $(this).innerHeight());
			});
			$('.more-info').css({height:maxHeight + 'px'});
		} else {
			$('.more-info').addClass('more-info--mob');
			$('.more-info li').addClass('more-info--mob__list');
			
		}
		$('.js-more .btn-icon').toggleClass('hidden');
		$('.js-more .btn-icon-close').toggleClass('hidden');
	});



	$(window).on("load resize scroll",function() {
		if ($(window).width() > 768) {
			let heightFooter = $('.footer').innerHeight();
			$('.section--regulations').css('margin-bottom', heightFooter);
		} else {
			$('.section--regulations').css('margin-bottom', '0');
		}
	});


	$(document).ready(function () {
		$('.js-btn-modal').click(function(){
			$('body').addClass('js-body-modal');
			$('.background').show();
			$('.modalbox').removeClass('modalbox-open');
			$('.form').toggleClass('modalbox-open');
		});
		$('.background, .btn-ok').click(function(){
			$('body').removeClass('js-body-modal');
			$('.background').hide();
			$('.modalbox').removeClass('modalbox-open');
		});
	});



	// FORM
	$(document).ready(function () {
		$('#application').submit(function () {
			$.ajax({
				type: "POST",
					url: "http://www.love-hotel.kh.ua/Love_Hotel/mail.php",
					data: $("#application").serialize(),
					success: function success(data) {
						$(".form").removeClass('modalbox-open');
						$('.success').addClass('modalbox-open');
						setTimeout(function () {
							$("#application").trigger("reset");
							$('body').removeClass('js-body-modal');
							$('.modalbox').removeClass('modalbox-open');
							$('.background').hide();
						},5000);
					}
				});
			return false;
		});
	});


	// ANIMATIONS
	$('.destiny__img').viewportChecker({
		classToAdd: 'fadeInLeft'
	});
	$('.destiny__box').viewportChecker({
		classToAdd: 'fadeInRight'
	});
	$('.benefits__img').viewportChecker({
		classToAdd: 'rubberBand'
	});
	$('.description__box, .swiper-container').viewportChecker({
		classToAdd: 'zoomIn'
	});


	// Back to top button
	$('.heart').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});

}(jQuery));