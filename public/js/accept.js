function imageURL(url, param){
	return url+param;
}

function getCookie(url){
	const baseUrl = `${url}/about/`;
	let getCookie = Cookies.get('codeXcode');
	if(location.href !== baseUrl){
		console.log(false);
	}else{

		if(!getCookie || getCookie == 'undefined'){
			askYou(getCookie);
		}else{
			Swal.fire({
				title: `halo ${getCookie}`,
				text: 'Salam Kenal Yah !',
				width: 400,
				padding: '.2rem',
				background: `#fff url(${imgURL}model1.jpg)`,
				backdrop: `
				  rgba(0,0,123,0.4)
				  url("${imgURL}animated/halo3.gif")
				  left top
				  no-repeat
				`
			  });
			// Swal.fire(imgURL+'model1.jpg');
			setTimeout(function(){
				$('#visitor').show('slow').fadeIn(1000);
				document.getElementById('namakamu').innerHTML = `Hai, ${getCookie} ... Salam kenal yah`;
				document.getElementById('nama_mu').innerHTML = getCookie;
				document.getElementById('namakamu').classList.remove('alert-primary');
				document.getElementById('namakamu').classList.add('alert-success');
				document.getElementById('namakamu').classList.add('text-danger');
			}, 2500);

		}

	}
}

function askYou(cookie){
	$('#aboutModal').modal({
		show: true,
		backdrop: 'static',
		keyboard: false
	});
	$('.close').hide();
	$('#visitor').hide();
	$('#namamu').hide();
	// document.getElementById('visitor').style.visibility="hidden";

	$(document).ready(function(){
		$('#aboutModal').on('shown.bs.modal', function(){
			$('#nama').trigger('focus');
		})
	})

	$('input[name=nama]').on('keyup', function(){
		$('#namamu').show('slow').fadeIn(1000);
		$('#namamu').addClass('mt-3 mb-5');

		const nama = $('#nama').val();
			
		$('#namamu').attr('placeholder', "Nama Kamu = "+nama);
	});

	const submit = document.querySelector('#submit');
	submit.addEventListener('click', function(){
		const letters = /^[A-Za-z]+$/;
		const tanya = document.querySelector('#nama').value;

		if(tanya.match(letters)){
			if(!tanya){
				Swal.fire({
					title: '<strong>Input <u>Nama</u> Anda</strong>',
					icon: 'info',
					html:
						'Form input nama <b>Harus</b> diisi, ' +
						'<a href="//pujiermanto.netlify.app">Kembali</a> ' +
						'klik kembali untuk keluar',
					showCloseButton: false,
					showCancelButton: false,
					focusConfirm: false,
					confirmButtonText:
						'<i class="fa fa-thumbs-up"></i> Great!',
					confirmButtonAriaLabel: 'Lanjut lagi',
				});
			}else{
				Swal.fire({
					title: `<strong>Hai, <u>${tanya}</u> </strong>`,
					html:
						`Terima kasih <b>${tanya}</b>, sudah mengisi input ini dengan benar.<br/> 
						<a href="//codesyariah122.github.io">My Blog</a> 
						sampai jumpa lagi.`,
					icon: 'info',
					confirmButtonColor: '#3085d6',
					confirmButtonText:
						'<i class="fa fa-thumbs-up"></i> Great!',
				}).then((result) => {
					if (result.isConfirmed) {
						Swal.fire(
							'Terimakasih',
							`${tanya}, salam kenal !`,
							'success'
						);
						setTimeout(function(){
							$('#visitor').show('slow').fadeIn(1000);
							document.getElementById('namakamu').innerHTML = "Terima kasih, "+tanya;
							document.getElementById('nama_mu').innerHTML = tanya;
						}, 1500)
					}
				});
				let id = tanya;
				Cookies.set('codeXcode', id, {expires: 1});
				$('#aboutModal').modal('hide');
				// document.getElementById('visitor').classList.add('is-visible');
				
			}
		}else{
			Swal.fire({
				title: '<strong>Input <u>Nama</u> Anda</strong>',
				icon: 'info',
				html:
					'Form input harus <b>Harus</b> diisi dengan alphabet, ' +
					'<a href="//pujiermanto.netlify.app">Kembali</a> ' +
					'klik kembali untuk keluar',
				showCloseButton: false,
				showCancelButton: false,
				focusConfirm: false,
				confirmButtonText:
					'<i class="fa fa-thumbs-up"></i> Great!',
				confirmButtonAriaLabel: 'Lanjut lagi',
			});
		}


	});
}


