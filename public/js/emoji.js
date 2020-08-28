$(document).ready(function(){
	let emoji = ["🚀", "🏬", "🛍", "🛰"];
	$('#view-project1').on('mouseenter', function(){
		$('#view-project1').html(emoji[0]);
		$('#view-project1').css({
			'margin-right': '.7rem',
			'font-size': '.9rem'
		})
	})

	$('#view-project2').on('mouseenter', function(){
		$('#view-project2').html(emoji[1]);
		$('#view-project2').css({
			'margin-right': '.7rem',
			'font-size': '.9rem'
		})
	})

	$('#view-project3').on('mouseenter', function(){
		$('#view-project3').html(emoji[2]);
		$('#view-project3').css({
			'margin-right': '.7rem',
			'font-size': '.9rem'
		})
	})

	$('#view-project4').on('mouseenter', function(){
		$('#view-project4').html(emoji[3]);
		$('#view-project4').css({
			'margin-right': '.7rem',
			'font-size': '.9rem'
		})
	})

})