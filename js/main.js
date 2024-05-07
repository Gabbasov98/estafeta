"use strict"

$('.partners-items--index').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    easing: 'linear', 
    cssEase: 'linear',
    waitForAnimate: false,
    speed: 20000,
    centerMode: true,
    edgeFriction: 0,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    autoSlidesToShow: true,
    variableWidth: true,
});

$('.info__item:not(.info__item--double)').on('click', function(){
	// $(this).find('input').val('');
	$(this).find('input').focus();
});

$('[data-counter] textarea').on('keyup', function(){
	var dataCounter = $(this).closest('[data-counter]').attr('data-counter');
	var $this = $(this);

	var length = $this.val().length;

	var current = $this.closest('[data-counter]').find('.current');
	console.log(current, length)

	current.text(length)
});

$('.inp-group input, .inp-group textarea').on('focus', function(){
	$('.inp-group').removeClass('is-focused');
	$(this).closest('.inp-group').addClass('is-focused');
});

$('.inp-group input, .inp-group textarea').on('focusout', function(){
	$('.inp-group').removeClass('is-focused');
});

$('.info__item input').on('focusout', function(){
	$('.info__item').removeClass('is-focused');
});

$('.info__item input').on('focus', function(){
	$('.info__item').removeClass('is-focused');
	$(this).closest('.info__item').addClass('is-focused');
});


var allPanels = $('.faq__item-content').hide();
var allPanelsItems = $('.faq__item-content');
    
$('.faq__item-headline').click(function() {
	var $this = $(this).closest('.faq__item');
	var itemContent = $(this).closest('.faq__item').find('.faq__item-content');

	$('.faq__item').not($this).removeClass('is-active');

	$this.toggleClass('is-active');

	itemContent.slideToggle();

	allPanelsItems.not(itemContent).slideUp();
	// allPanelsItems.slideUp();
	// itemContent.slideToggle();
	return false;
});


if ($('.press-single__imgs').length) {
	$('.press-single__imgs').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.top-slider__arrow.prev'),
		nextArrow: $('.top-slider__arrow.next'),
		autoplay: false,
  		autoplaySpeed: 3500,
  		pauseOnFocus: false,
  		swipeToSlide: true,
  		pauseOnHover: false,
  		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        autoplay: false,
		        dots: true,
		      }
		    },
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	});

	var topSliderCurrent = $('.press-single__imgs-controls .top-slider__current');
	var topSliderTotal = $('.press-single__imgs-controls .top-slider__total');

	$('.press-single__imgs').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide + 1);
		topSliderCurrent.text((nextSlide + 1));
	});
}

$('.faq__more .faq__more-btn .btn').on('click', function(){
	$('.faq__more .faq__items').slideToggle();
});

$('.btn-burger__wrapper').on('click', function(){
	$('body, html').toggleClass('is-ovh');

	$('body').toggleClass('menu--active');

	$('.btn-burger').toggleClass('is-active');
});

// $('.press-single__imgs').slick({
// 	infinite: true,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	prevArrow: $('.hero-nav__prev'),
// 	nextArrow: $('.hero-nav__next'),

// 	responsive: [
// 	    {
// 	      breakpoint: 1024,
// 	      settings: {
// 	        slidesToShow: 1,
// 	        slidesToScroll: 1,
// 	        infinite: true,
// 	        dots: false,
// 	        focusOnSelect: true
// 	      }
// 	    },
// 	    // You can unslick at a given breakpoint now by adding:
// 	    // settings: "unslick"
// 	    // instead of a settings object
// 	]
// });

if ($('.hero--index').length) {
	$('.hero--index').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: $('.hero-nav__prev'),
		nextArrow: $('.hero-nav__next'),

		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: false,
		        focusOnSelect: true
		      }
		    },
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	});

	$('.hero-items').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.hero-in').removeClass('is-decorated');
	});
}

$('.hero-items').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$('.hero-in').removeClass('is-decorated');
});

if ($('.partners-blockquote').length) {
	$('.partners-blockquote').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.partners-blockquote__arrow.prev'),
		nextArrow: $('.partners-blockquote__arrow.next'),
	});
}

if ($('.top-slider__items').length) {
	$('.top-slider__items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.top-slider__arrow.prev'),
		nextArrow: $('.top-slider__arrow.next'),
		autoplay: false,
  		autoplaySpeed: 3500,
  		pauseOnFocus: false,
  		pauseOnHover: false,
  		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        autoplay: false,
		      }
		    },
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	});

	var topSliderCurrent = $('.top-slider__current');
	var topSliderTotal = $('.top-slider__total');

	var statusBlock = $('.top-slider__status');

	// statusBlock.html('<div class="dec"></div>');
		
	setTimeout(function(){
		// statusBlock.find('.dec').addClass('is-animated');
	}, 200);

	$('.top-slider__items').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide + 1);
		topSliderCurrent.text('0' + (nextSlide + 1));

		// statusBlock.html('<div class="dec"></div>');
		
		// setTimeout(function(){
		// 	statusBlock.find('.dec').addClass('is-animated');
		// }, 100);

		// setTimeout(function(){
		// 	statusBlock.find('.dec').removeClass('is-animated');
		// }, 4000);
	});

	console.log($('.top-slider__items img').length)
}

// Uncomment!
new WOW().init();

if ($(window).width() > 1024) {
	$('.hero--events .hero-items').slick({
	
		infinite: false,
		slidesToShow: 1,
		prevArrow: $('.hero--events .hero-nav__prev'),
		nextArrow: $('.hero--events .hero-nav__next'),
		variableWidth: true,
	});

	$('.hero--teams .hero-items').slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: $('.hero--teams .hero-nav__prev'),
		nextArrow: $('.hero--teams .hero-nav__next'),
	});

	$('.btn-search').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();

		$('.header-r .inp-group--search').toggleClass('is-active');
		$('.header-r .inp-group--search input').focus();
	});

	$('.header-r .inp-group--search input').on('click', function(e){
		e.stopPropagation();
	});

	$(document).on("click", function(e) {
		$('.header-r .inp-group--search').removeClass('is-active');
	});
}

$('.hero__more .btn').on('click', function(){
	$(this).slideToggle();
	$(this).closest('.hero--lk').find('.events-item').slideToggle();
});

if ($(window).width() > 1024) {
	var wave1 = $('#feel-the-wave').wavify({
	  height: 100,
	  bones: 7,
	  amplitude: 60,
	  color: '#EBEDEF',
	  speed: .20
	});

	var wave2 = $('#feel-the-wave-two').wavify({
	  height: 80,
	  bones: 6,
	  amplitude: 80,
	  color: '#E3E6E9',
	  speed: .12
	});

	var wave3 = $('#feel-the-wave-three').wavify({
	  height: 90,
	  bones: 5,
	  amplitude: 90,
	  color: '#DADFE2',
	  speed: .17
	});

    skrollr.init({forceHeight: false});

    $('.about .about__tabs').pin({
	    containerSelector: '.about__in',
	    padding: {bottom: 0, top: 113, left: 0, right: 0},
	});


    $('.press-single--container .event-img__wrapper').pin({
	    containerSelector: '.event-page__wrapper',
	    padding: {bottom: 0, top: 112, left: 0, right: 0},
	});

	$('.member-page--container').pin({
		containerSelector: '.event-page__wrapper',
		padding: {bottom: 0, top: 112, left: 0, right: 0},
	});

	$(".top-slider").pin({containerSelector:".top",padding:{bottom:0,top:112,left:0,right:0}})

	
	// Uncomment

	var fixedBlock = $('.wrapper-card');
	var eventTeam = $('.event-team');

	$('.sticky .wrapper.wrapper-card').pin({
		containerSelector: '.event-page__wrapper',
		padding: {bottom: 0, top: 0, left: 0, right: 0},
	});

	if(eventTeam.length) {
		
	} else {
		if (fixedBlock.length) {
			var fixedBlockTop = fixedBlock.offset().top;

			$(window).on('scroll', function(){
				var documentScroll = $(document).scrollTop();

				if (documentScroll <= 200) {
					fixedBlock.addClass('is-transition');
				}

				if (documentScroll >= 400) {
					fixedBlock.removeClass('is-transition');
				}

				if (documentScroll > 50) {
					fixedBlock.css('transform', 'translate3d(0, 0px, 0)');
				} else if (documentScroll === 0) {
					fixedBlock.css('transform', 'translate3d(0, 272px, 0)');
				}
			});
		}
	}

	if ($('.how--index').length) {
		$.fn.isInViewport = function() {
		  var elementTop = $(this).offset().top;
		  var elementBottom = elementTop + $(this).outerHeight();

		  var viewportTop = $(window).scrollTop();
		  var viewportBottom = viewportTop + $(window).height();

		  return elementBottom > viewportTop && elementTop < viewportBottom;
		};

		$(window).on('resize scroll', function() {
		  $('.how').each(function() {
		    if ($(this).isInViewport()) {
		      setTimeout(function(){
		      	$('.how-in .headline-typical--1').addClass('is-hidden');
		      }, 3000);

		      setTimeout(function(){
		      	$('.how-in .headline-typical--2').addClass('is-visible');
		      }, 3250);

		      setTimeout(function(){
		      	$('.how-items__txt .how-item:first-child').addClass('is-hidden');
		      }, 3000);

		      setTimeout(function(){
		      	$('.how-items__txt .how-item:nth-child(2)').addClass('is-hidden');
		      }, 3250);

		      setTimeout(function(){
		      	$('.how-items__txt .how-item:nth-child(3)').addClass('is-hidden');
		      }, 3500);

		      setTimeout(function(){
		      	$('.how-items__icons .how-item:nth-child(1)').addClass('is-visible');
		      	$('.how-items__icons .how-item:nth-child(1)').removeClass('is-hidden');
		      }, 3500);

		      setTimeout(function(){
		      	$('.how-items__icons .how-item:nth-child(2)').addClass('is-visible');
		      	$('.how-items__icons .how-item:nth-child(2)').removeClass('is-hidden');
		      }, 3750);

		      setTimeout(function(){
		      	$('.how-items__icons .how-item:nth-child(3)').addClass('is-visible');
		      	$('.how-items__icons .how-item:nth-child(3)').removeClass('is-hidden');
		      }, 4000);
		    } else {
		      // console.log("not!")
		    }
		  });
		});
	}
}


$('.modal').on('hidden.bs.modal', function (e) { 
    if ($('.modal:visible').length) { 
        $('body').addClass('modal-open');
    }
});

if ($(window).width() < 1025) {
	$('.events-single .events-items').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true
	});
	
	$('.about-peoples').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: true,
		dots: true,
	});

	$('.news-items').slick({
		slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: false,
        focusOnSelect: true
	});

	$('.how-items__txt').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});

	$('.how-items__icons').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});
}

var eventsSlider = $('.events-single .events-items');

var eventsIndexSlickInit = function() {
	$('.events-single .events-items')[0].slick.refresh()
}

if (eventsSlider.length) {
	if ($(window).width() < 1025) {
		eventsIndexSlickInit();
	}
}



$(document).ready(function(){
	// $(".event-card").sticky({topSpacing:112});

	// var fixedBlock = $('.event-card');

	// if (fixedBlock.length) {
	// 	var footerHeight = $('.sharing-gallery').height() + $('.sharing').height() + $('.footer').height();
	// 	var stop = $('.sharing-gallery').offset().top - $('.event-card').height();
	// 	var fixedBlockTop = fixedBlock.offset().top;
	// 	var fixedBlockRight = $(window).width() - (fixedBlock.offset().left + fixedBlock.outerWidth())
	// 	console.log(footerHeight)

	// 	$(window).on('scroll', function(){
	// 		var documentScroll = $(document).scrollTop();

	// 		if (documentScroll > fixedBlockTop) {
	// 			fixedBlock.css('position', 'fixed')
	// 			fixedBlock.css('top', '112px!important')
	// 			fixedBlock.css('right', fixedBlockRight)
	// 			fixedBlock.css('transform', 'none')
	// 		} else {
	// 			fixedBlock.css('position', 'absolute')
	// 			fixedBlock.css('top', '112px!important')
	// 			fixedBlock.css('right', '15px')
	// 		}

	// 		if (documentScroll >= stop + fixedBlock.height()) {
	// 			fixedBlock.css('position', 'absolute')
	// 			fixedBlock.css('right', '15px')
	// 			fixedBlock.css('top', stop)
	// 			fixedBlock.css('bottom', 'initial')
	// 		} else {

	// 		}
			
	// 		console.log(documentScroll);
	// 	});
	// }
});

$(window).on('load', function(){
	// $(".event-card").sticky({topSpacing:0});

	var inpGroup = $('.support__sum .inp-group');

	var sumItem = $('.support__sum .inp-group--radio');
	var sumInput = $('.support__sum .inp-group--input input');

	inpGroup.on('click', function(){
		$(this).closest('.support__sum').find('.inp-group').removeClass('is-focused');

		$(this).addClass('is-focused');
	});

	sumInput.on('keyup', function(){
		var sumVal = $(this).val();

		var sumForm = $(this).closest('.support__form');
		var sumFormBtnValue = sumForm.find('.support__form-btn .btn i');

		sumFormBtnValue.text(sumVal + ' ₽');
	});

	sumItem.on('click', function(){
		var val = $(this).find('label').text();

		var sumForm = $(this).closest('.support__form');
		var sumFormBtnValue = sumForm.find('.support__form-btn .btn i');

		sumFormBtnValue.text(val);
	});

	$('select').styler({
		onSelectClosed: function() {
			// console.log($(this));

			// if ($(this).find('[data-link]')) {
			// 	var current = $(this).find('.selected.sel');
			// 	var currentAttr = current.attr('data-link');


			// 	// var $(this).index();
			// 	// var a = $(this).find('a');

			// 	// a.trigger('click');

			// 	// var href = a.attr('href');

			// 	console.log(current, currentAttr);

			// 	window.location = currentAttr;
			// }
		}
	});

	$('.inp-group--dropdown-link select').on('change', function(){

		var link = $(this).find(":selected").attr('data-link')

		window.location = link;

		if (link) {
			window.location = link;
		}
	});
	
	$('.more-badge__l .inp-group input').on('focus', function(){
		$(this).closest('.more-badge').addClass('is-active');
	});

	$('.more-badge__l .inp-group input').on('blur', function(){
		$(this).closest('.more-badge').removeClass('is-active');
	});

	$('.animate-1').addClass('is-animated');

	setTimeout(function(){
		$('.animate-2').addClass('is-animated');
	}, 500);

	var $nav = $('.header');
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    // $win.on("scroll", function () {
    // 	var navOffset = $nav.offset();

    //     if ($(this).scrollTop() > winH ) {
    //         $nav.addClass('is-frozen');
    //         console.log(navOffset.top);
    //     } else {
    //         $nav.removeClass('is-frozen');
    //     }
    // }).on("resize", function(){ // If the user resizes the window
    //    winH = $(this).height(); // you'll need the new height value
    // });

	// $('.header').pin({
	//     containerSelector: '.top-blocker',
	//     padding: {bottom: 0, top: 0, left: 0, right: 0},
	// });


	// var colors = ['rgba(255, 281, 75, .8)', '#dc75ff', '#9d9ade', '#6cd7ee', '#aceeae']

	// $("[data-pause]").on('click', function(){
	//   wave1.pause();
	//   wave2.pause();
	//   return false;
	// });

	// $("[data-play]").on('click', function(){
	//   wave1.play();
	//   wave2.play();
	//   return false;
	// });

	// $("[data-color]").on('click', function(){
	//   wave1.updateColor({
	//     color: colors[Math.floor(Math.random()*colors.length)],
	//     timing: 5
	//   });
	//   wave2.updateColor({
	//     color: colors[Math.floor(Math.random()*colors.length)],
	//     timing: 3
	//   });
	//   return false;
	// });

	$('.members-btn .btn').on('click', function(e){
		e.preventDefault();

		$(this).slideToggle();
		$('.members-more').slideToggle();
	});

	// $('.event-members__item').each(function(){
	// 	var width = $(this).width();

	// 	$(this).height(width)
	// });

	// $('.sharing-gallery__more .btn').on('click', function(){
	// 	$(this).slideToggle();
	// 	$('.sharing-gallery__more .sharing-gallery__items').slideToggle();
	// });
});
