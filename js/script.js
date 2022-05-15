$(window).scroll(function() {
	let scrolled = $(window).scrollTop();
	if(scrolled > 350) {
		$('#back-to-top').addClass('active');
	} else {
		$('#back-to-top').removeClass('active');
	}
});

$('#back-to-top').click(function() {
	$('html,body').animate({scrollTop: 0}, 1000);
});

