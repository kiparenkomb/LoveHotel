(function ($) {

	$(document).ready(function () {
		$(document).on("scroll", onScroll);
		
		//smoothscroll
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			
			$('a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');
			
			var target = this.hash,
			menu = target;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('#menu-center a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('#menu-center ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else{
				currLink.removeClass("active");
			}
		});
	}




	$(window).on("load resize scroll",function() {
		if ($(window).width() > 768) {
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
		var maxHeight = 0;
		$('.more-info').each(function() {
			maxHeight = Math.max(maxHeight, $(this).innerHeight());
		});
		$('.more-info').css({height:maxHeight + 'px'});
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
			$('.background').show();
			$('.modal').removeClass('modal-open');
			$('.form').toggleClass('modal-open');
		});
		$('.background').click(function(){
			// $('.background').hide();
			$('.modal').toggleClass('modal-open');
		});
	});



	$(document).ready(function() {
		$(".form").submit(function() {
			$.ajax({
				type: "POST",
				// url: "/wp-content/themes/AO/mail.php",
				url: "mail.php",
				data: $(".form").serialize(),
				success: function success(data) {
					$('.success').modal("show");
					setTimeout(function () {
						$(".form").trigger("reset");
						$('.modal').hide();
					}, 5000);
				}
			})
			return false;
		});
	});





}(jQuery));