$(document).ready(function() {
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 40) {
			if( navigator.userAgent.match(/Android/i) ||
					navigator.userAgent.match(/webOS/i) ||
					navigator.userAgent.match(/iPhone/i) ||
					navigator.userAgent.match(/iPod/i) ||
					navigator.userAgent.match(/iPod/i) ||
					navigator.userAgent.match(/iPad/i)
					){
						//Do nothing
					}else {
						$('#header-sc').fadeIn(100);
						$('nav').css('padding', '20px 0');
						$('.sign-up-btn').css('padding', '10px 45px');
						
					}
		} else {
			$('#header-sc').hide();
			$('nav').css('padding', '35px 0');
			$('.sign-up-btn').css('padding', '15px 64px');
		}
    });

	$.slidebars();
	
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 700) {
	        $('.feature-left:eq()').addClass('animated fadeInLeft');
	        $('.feature-right:eq()').addClass('animated fadeInRight');
	    }
	    if ($(this).scrollTop() > 1000) {
			$('.feature-left:eq(1)').addClass('animated fadeInLeft');
			$('.feature-right:eq(1)').addClass('animated fadeInRight');
		}
	    if ($(this).scrollTop() > 1300) {
			$('.feature-left:eq(2)').addClass('animated fadeInLeft');
			$('.feature-right:eq(2)').addClass('animated fadeInRight');
		}
	    if ($(this).scrollTop() > 1600) {
			$('.feature-left:eq(3)').addClass('animated fadeInLeft');
			$('.feature-right:eq(3)').addClass('animated fadeInRight');
		}
	    if ($(this).scrollTop() > 1900) {
			$('.feature-left:eq(4)').addClass('animated fadeInLeft');
			$('.feature-right:eq(4)').addClass('animated fadeInRight');
		}
	});
	
	$('.ad-item').hover(function() {
			var src = $(this).find('img').attr('src');
			if(src.match('png')){
				src = src.replace('out.png','in.gif');
				$(this).find('img').attr('src', src);
			} else {
				src = src.replace('out.gif','in.gif');
				$(this).find('img').attr('src', src);
			}
		}, function() {
			  var src = $(this).find('img').attr('src').replace('in.gif','out.gif');
			  $(this).delay(1660).find('img').attr('src', src);
	});
	
	$('.price').hover(function() {
		$('.price').removeClass('price-active');
		$(this).addClass('price-active');
	}, function () {
		
	});
	
	$(".features-btn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#features-wrap").offset().top
	    }, 1000);
	});
	
	$(".pricing-btn").click(function() {
		$('html, body').animate({
            scrollTop: $("#pricing-plans-wrap").offset().top
		}, 1500);
	});
	
	$(".features-com-btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#com-features-wrap").offset().top
		}, 1000);
	});
	
	$(".pricing-com-btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#pricing-plans").offset().top
		}, 1500);
	});

});
