function scrollSuave () {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection (event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href)
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    };

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    });
}

function scrollAnimado () {
    const sections = document.querySelectorAll(".js-scroll");
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade;
            if(sectionTop < 0) {
                section.classList.add('ativo')
            }
        });
    };
    window.addEventListener('scroll', animaScroll);
};

function activeMouseOver () {
    const textMouseOver = document.querySelector(".btn-info");

textMouseOver.addEventListener('mouseover', cardBack)
textMouseOver.style.background = '#222';
textMouseOver.style.color = '#CEB28F';
textMouseOver.style.margin = '70px 40px'

function cardBack () {
    textMouseOver.classList.add('active')
        textMouseOver.innerHTML =  
        '- Pão australiano' + 
        '<br>- Cebola roxa' +
        '<br>- Alface' +
        '<br>- 90g do nosso blend secreto' +
        '<br>- Muuuuuuuuuito bacon' + 
        '<br><br>- Por apenas: R$ 23,90'
}

const textMouseOver2 = document.querySelector(".btn-info2");

textMouseOver2.addEventListener('mouseover', cardBack2)
textMouseOver2.style.background = '#222';
textMouseOver2.style.color = '#CEB28F';
textMouseOver2.style.margin = '70px 40px'

function cardBack2 () {
    textMouseOver2.classList.add('active')
        textMouseOver2.innerHTML =  
        '- Pão australiano' + 
        '<br>- Cebola roxa' +
        '<br>- Alface' +
        '<br>- 90g do nosso blend secreto' +
        '<br>- Muuuuuuuuuito bacon' + 
        '<br><br>- Por apenas: R$ 28,90'
}

const textMouseOver3 = document.querySelector(".btn-info3");

textMouseOver3.addEventListener('mouseover', cardBack3)
textMouseOver3.style.background = '#222';
textMouseOver3.style.color = '#CEB28F';
textMouseOver3.style.margin = '70px 40px'

function cardBack3 () {
    textMouseOver3.classList.add('active')
        textMouseOver3.innerHTML =  
        '- Pão australiano' + 
        '<br>- Cebola roxa' +
        '<br>- Alface' +
        '<br>- 90g do nosso blend secreto' +
        '<br>- Muuuuuuuuuito bacon' + 
        '<br><br>- Por apenas: R$ 34,90'
}
};

scrollSuave ()
scrollAnimado ()
activeMouseOver ()