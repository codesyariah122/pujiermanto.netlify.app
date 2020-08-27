// vanilla javascript
function playSound(audio){
	audio.play();
}

function pauseSound(audio){
	audio.pause()
}
$('.space').html('<i class="fas fa-user-astronaut"></i>').fadeIn(1000);
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

if(currentTheme){
	document.documentElement.setAttribute('data-theme', currentTheme);

	if(currentTheme === 'dark'){
		toggleSwitch.checked = true;
	}
}


function switchTheme(e)
{
	if(e.target.checked){
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	}else{
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);


