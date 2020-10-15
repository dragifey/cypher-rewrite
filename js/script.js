TweenMax.to(".overlay h1", 2, {
	opacity: 0,
	y: -60,
	ease: Expo.easeInOut
	})

TweenMax.to(".overlay img", 2, {
	opacity: 0,
	y: -60,
	ease: Expo.easeInOut
	})

TweenMax.to(".overlay", 2, {
	delay: 0.7,
	top: "-100%",
	ease: Expo.easeInOut
	})

	/*===== MENU SHOW =====*/ 
	const showMenu = (toggleId, navId) =>{
	    const toggle = document.getElementById(toggleId),
	    nav = document.getElementById(navId)

	    if(toggle && nav){
	        toggle.addEventListener('click', ()=>{
	            nav.classList.toggle('show')
	        })
	    }
	}
	showMenu('nav-toggle','nav-menu')

	/*===== ACTIVE AND REMOVE MENU =====*/
	const navLink = document.querySelectorAll('.link');   

	function linkAction(){
	  /*Active link*/
	  navLink.forEach(n => n.classList.remove('active'));
	  this.classList.add('active');
	  
	  /*Remove menu mobile*/
	  const navMenu = document.getElementById('nav-menu')
	  navMenu.classList.remove('show')
	}
	navLink.forEach(n => n.addEventListener('click', linkAction));	