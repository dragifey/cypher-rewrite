const accordionItemHeaders = document.querySelectorAll(".header");

accordionItemHeaders.forEach(accordionItemHeader => {
	accordionItemHeader.addEventListener("click", event => {
		const currentlyActiveAccordionItemHeader = document.querySelector(".header.active");
		if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
			currentlyActiveAccordionItemHeader.classList.toggle("active");
			currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
		}


		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if(accordionItemHeader.classList.contains("active")) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		}
		else{
			accordionItemBody.style.maxHeight = 0;
		}
	});
});

		let img = document.querySelector('.img');
		let btn1 = document.querySelector('#btn1');
		let btn2 = document.querySelector('#btn2');
		let btn3 = document.querySelector('#btn3');
		let btn4 = document.querySelector('#btn4');

		btn1.addEventListener('click', () => {
			img.src = "images/placeholder.jpg";

		})
		btn2.addEventListener('click', () => {
			img.src = "images/red_padna.png";
		})
		btn3.addEventListener('click', () => {
			img.src = "images/racc.png";
		})
		btn4.addEventListener('click', () => {
			img.src = "images/jifo.png";
		})

		$(document).on('click', '.buttons a', function(){
			$(this).addClass('active').siblings().removeClass('active')
		})


TweenMax.to(".loader h1", 2, {
 	opacity: 0,
 	y: -60,
 	ease: Expo.easeInOut
 	})

TweenMax.to(".loader p", 2, {
 	opacity: 0,
 	y: -60,
 	ease: Expo.easeInOut
 	})

TweenMax.to(".loader", 2, {
 	delay: 0.1,
 	top: "-100%",
 	ease: Expo.easeInOut
 	})
