document.addEventListener('DOMContentLoaded', function(){

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;
    
        if (posicaoAtual < alturaHero){
    
        }
    })
})
