$('.header li a').on('click', function (e) {
    if (this.hash != '') {
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top - 60
        }, 800)
    }
})



$('.bounce a').on('click', function (e) {
    if (this.hash != '') {
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top - 60
        }, 800)

    }
})

function scrollAppear() {
    var aboutText = document.querySelector('.about-left-container .description');
    var skills = document.querySelector('.skills-right-container .description');
    var htmlcssbar = document.querySelector('.htmlcssbar');
    var jsbar = document.querySelector('.jsbar');
    var reactbar = document.querySelector('.reactbar');
    var dotnetbar = document.querySelector('.dotnetbar');
    var sqlbar = document.querySelector('.sqlbar');
    var programming = document.querySelector('.others .programming');
    var personal = document.querySelector('.others .personal')
    var socailNetwork = document.querySelector('.others .social-network')
    //below line will return the distance of aboutText class element from top
    var aboutPosition = aboutText.getBoundingClientRect().top;
    var skillposition = htmlcssbar.getBoundingClientRect().top;
    var contactsPosition = programming.getBoundingClientRect().top;
    //window.innerHeight will return the height of your screen
    var screenPosition = window.innerHeight / 1.2;
    if (aboutPosition < screenPosition) {
        aboutText.classList.add('animation');
    }
    if (skillposition < screenPosition) {
        htmlcssbar.classList.add('fill-htmlcss');
        jsbar.classList.add('fill-javascript');
        reactbar.classList.add('fill-react');
        dotnetbar.classList.add('fill-dotnet');
        sqlbar.classList.add('fill-sql');
        skills.classList.add('animation');
    }
    if (contactsPosition < screenPosition) {
        programming.classList.add('handles-animation');
        personal.classList.add('handles-animation');
        socailNetwork.classList.add('handles-animation')
    }
}

window.addEventListener('scroll', scrollAppear);


