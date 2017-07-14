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






}(jQuery));