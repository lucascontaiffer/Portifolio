/* SWIPER */
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    767:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    }
  },
});

/*CONTACT BTN*/
const copyBtn = document.querySelector('.contact-btn')
const eMail = "lucasdacostacontaiffer@gmail.com" 

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(eMail)
    setTimeout(() => copyBtn.innerText = "Copiado!", 500)
})