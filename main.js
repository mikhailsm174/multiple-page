const menuBtn = document.querySelector('.menu');
const navbarUl = document.querySelector('.navbar_ul');


menuBtn.addEventListener('click', ()=>{
	menuBtn.classList.toggle('active');
	navbarUl.classList.toggle('small');
})
