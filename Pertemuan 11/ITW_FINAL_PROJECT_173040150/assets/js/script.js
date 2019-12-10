$('.page-scroll').on('click', function(e){
	var tujuan = $(this).attr('href');

	var tujuan = $(tujuan);

	$('html,body').animate({
		scrollTop: tujuan.offset().top -50
	}, 1200, 'easeInOutExpo');
});