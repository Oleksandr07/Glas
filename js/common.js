$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input[placeholder], textarea[placeholder]').placeholder();

	/*--------------------       top-menu          ------------------*/
	$('.navbar').click(function() {
		$('.top-menu').slideToggle(300);
	});
	function navbar(){
		if ($(window).width() < 1000) {
			$('.top-menu').slideUp(300);
		}
		else{
			$('.top-menu').css({
				'display': ''
			})
		}
	}
	$(window).resize(function() {
		navbar();
	});
	navbar();

	/*--------------------       tabs          ------------------*/
	$('.tabs').click(function() {
		if (!$(this).hasClass('active')) {
			$('.tabs').removeClass('active');
			$(this).addClass('active');
			$('.head-box').removeClass('active');
			$('.head-box[data-title="' + $(this).attr('data-title') + '"]').addClass('active');
		}
	});

	/*--------------------       content-nav          ------------------*/
	$('.content-nav-title').click(function() {
		$('.content-nav ul').slideToggle(300);
	});
	function contentNav(){
		if ($(window).width() < 1000) {
			$('.content-nav ul').slideUp(300);
		}
		else{
			$('.content-nav ul').css({
				'display': ''
			})
		}
	}
	$(window).resize(function() {
		contentNav();
	});
	contentNav();

	/*--------------------       homeslider          ------------------*/
	function homeslider(){
		var current = 1,
		imageLenght = $('.slider-bg').length;
		$('.slider-bg').fadeOut(0);
		$('.slider-bg').eq(0).fadeIn(100);
		setInterval(function(){ 
			if (current >= imageLenght) {
				current = 0;
			}
			$('.slider-bg').fadeOut(800);
			$('.slider-bg').eq(current).fadeIn(800);
			current++;
			console.log(current);
		}, 4000);

	};
	homeslider();

	/*--------------------       ticker-slider          ------------------*/
	$('.ticker-slider').slick({
		infinite: false,
	});

});