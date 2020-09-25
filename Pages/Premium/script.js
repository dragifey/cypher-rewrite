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
			img.src = "images/red panda.png";
		})
		btn3.addEventListener('click', () => {
			img.src = "images/rac .png";
		})
		btn4.addEventListener('click', () => {
			img.src = "images/jifo.png";
		})		

		$(document).on('click', '.buttons a', function(){
			$(this).addClass('active').siblings().removeClass('active')
		})	