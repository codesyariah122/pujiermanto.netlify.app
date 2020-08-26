function activeNav(base){
	 let navbar = document.getElementsByClassName('sidebar-nav-item');
        for(let i=0; i<=navbar.length-1; i++){
           let item = document.getElementsByClassName('sidebar-nav-item')[i].getAttribute('href');
           let url = location.href;
           let baseUrl = base;

        if(url == baseUrl+item){
        	console.log(url+" : "+baseUrl+item);
            document.getElementsByClassName('sidebar-nav-item')[i].classList.add('active');
        }
    }
}



// const header = document.getElementById("navbar");
// const btns = header.getElementsByClassName("sidebar-nav-item");
// alert(btns.lengt);
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//   });
// }