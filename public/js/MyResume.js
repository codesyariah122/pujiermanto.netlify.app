// $('.resume_puji').hide();
//     $(document).ready(function(){
//         $('#generate_pdf').on('click', function(){
//             $('.resume_puji').show('slow').fadeIn(1000);
//             $('.resume_view').hide().fadeOut(1000);
//         })

//         $('#exit_pdf').on('click', function(){
//             $('.resume_puji').hide('slow').fadeOut(1000);
//             $('.resume_view').show('slow').fadeIn(1000);
//      })

// })
$(document).ready(function(){
	$('#generate_pdf').click(function(){
		$('#animated').load('/public/file/animated2.html').fadeIn(1500);
		$('.resume_view').hide('slow').fadeOut(1000);
		setTimeout(function(){
			$('#animated').hide('slow').slideUp(1000);
			$('#cv_resume').hide().load('/public/file/cv_resume.html').fadeIn(1000);
		}, 2500);
	})
})

