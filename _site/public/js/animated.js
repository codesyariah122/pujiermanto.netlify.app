$(document).ready(function(){
	$('.sidebar-nav').on('click', '#about', function(){
		$('.home').hide('slow');
		$('#animated').load('http://localhost:4000/public/file/animated.html').fadeIn(1000);
	});
});