const copyBtn = document.querySelector('.contact-btn')
const eMail = "lucasdacostacontaiffer@gmail.com" 

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(eMail)
    setTimeout(() => copyBtn.innerText = "Copiado!", 500)
})