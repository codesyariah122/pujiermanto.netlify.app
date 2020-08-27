// $('.progress-bar').hide();

// $('.progress-bar').hide('slow');
// $(document).ready(function(){
// 	let progress_bar = $('.progress-bar').length;

// 	for(let i=0; i<=progress_bar; i++){
// 		$('.progress').eq(i).mouseenter(function(){
// 			$('.progress-bar').eq(i).show('swing', {direction:"right"}, 500).toggleClass('trans');
// 		})
// 	}

// 	for(let i = 0; i<=progress_bar; i++){
// 		$('.progress-bar').eq(i).on("click", function(){

// 			let x = $(this).text();
// 			alert(x);
// 			console.log(x);

// 		})
// 	}


// })

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
	
	// const delay = 500;

	// $('.progress-bar').each(function(i){
	// 	$(this).show('slow');
	// 	$(this).delay(delay * i).animate({
	// 		width: $(this).attr('aria-valuenow') + '%'
	// 	}, delay);

	// 	$(this).prop('Counter', 0).animate({
	// 		Counter: $(this).text()
	// 	}, {
	// 		duration: delay,
	// 		step: function(now){
	// 			$(this).text(Math.ceil(now) + '%');
	// 		}
	// 	})
	// })

// set up with hover
$(document).ready(function(){
    $('.progress-bar').hover(function(){
        let value = $(this).attr('aria-valuenow');

     	$(this).animate({
            width: value+'%',
        }), function(){
                $(this).animate({
                    width:'0px'
             	})
         }
    })
})

$('.progress').css({
	'cursor':'alias',
	'content': 'Click Please !'
});
	// $('.progress-bar').on("click", function(){
	// 	const value = $(this).attr('aria-valuenow');
	// 	const skillName = $(this).attr('data-progress');
	// 	//alert(skillName);
	// 	if(skillName == "git"){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/git.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}else if(skillName == 'javascript'){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/javascript.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}else if(skillName === 'ruby'){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/ruby.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}else if(skillName == 'php'){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/php.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}else if(skillName == 'codeigniter'){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/codeigniter.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}else if(skillName == 'rails'){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/rails.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}else if(skillName == 'laravel'){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/laravel.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}else if(skillName == 'jekyll'){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/jekyll.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}else if(skillName == 'wordpress'){
	// 		Swal.fire({
	// 		  title: 'My '+skillName+' : '+value+'%',
	// 		  width: 600,
	// 		  padding: '2em',
	// 		  background: '#fff url(/public/images/animated/trees.png)',
	// 		  backdrop: `
	// 		    rgba(0,0,123,0.4)
	// 		    url("/public/images/animated/wp.gif")
	// 		    left top
	// 		    no-repeat
	// 		  `
	// 		});
	// 	}
	// })

})
