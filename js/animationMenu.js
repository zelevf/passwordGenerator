

document.querySelector(".barsMenu").addEventListener('click', animateMenu);
let menu = document.querySelector(".menuOptions");

let bar1 = document.querySelector(".lineBar1");
let bar2 = document.querySelector(".lineBar2");
let bar3 = document.querySelector(".lineBar3");

function animateMenu() {
    bar1.classList.toggle("lineBar1active")
    bar2.classList.toggle("lineBar2active")
    bar3.classList.toggle("lineBar3active")
    animateOptions();
}


function animateOptions() {
    let ancho = window.innerWidth;

    if (ancho > 540) {
        if(!element) {
            enableScroll();
        } else {
            const socialContainer = document.querySelector('.socialNetworkMenu');
            socialContainer.remove();
            menu.style.display = 'none';
        }
    } else {
        
        let element = document.querySelector(".socialNetworkMenu")

        if(!element) {
            disableScroll();
            menu.style.display = 'flex';

            const socialNetworkMenu = document.createElement('li');
            socialNetworkMenu.classList.add('socialNetworkMenu');
            socialNetworkMenu.id = "socialNetworkMenu";

            const linkLinkedin = document.createElement('a');
            linkLinkedin.href = "https://www.linkedin.com/in/fernandoveleze/";
            linkLinkedin.target = "_blank";
            linkLinkedin.classList.add('socialNetworkLink');
            const linkedinImage = document.createElement('img');
            linkedinImage.src = '../images/header/linkedin.png';
            linkedinImage.alt = 'Go to Fernando Velez LinkedIn';
            linkedinImage.classList.add('socialNetworkItem');

            const linkGithub = document.createElement('a');
            linkGithub.href = "https://github.com/zelevf";
            linkGithub.target = "_blank";
            linkGithub.classList.add('socialNetworkLink');
            const githubImage = document.createElement('img');
            githubImage.src = "../images/header/github.png";
            githubImage.alt = 'Go to Fernando Velez GitHub';
            githubImage.classList.add('socialNetworkItem');

            const linkFrontendmentor = document.createElement('a');
            linkFrontendmentor.href = "https://www.frontendmentor.io/profile/zelevf";
            linkFrontendmentor.target = "_blank";
            linkFrontendmentor.classList.add('socialNetworkLink');
            const frontendmentorImage = document.createElement('img');
            frontendmentorImage.src = '../images/header/frontend-mentor-logo.png';
            frontendmentorImage.alt = 'Go to Fernando Velez Frontend Mentor profile';
            frontendmentorImage.classList.add('socialNetworkItem');



            menu.appendChild(socialNetworkMenu);

            socialNetworkMenu.appendChild(linkLinkedin);
            linkLinkedin.appendChild(linkedinImage);

            socialNetworkMenu.appendChild(linkGithub);
            linkGithub.appendChild(githubImage);

            socialNetworkMenu.appendChild(linkFrontendmentor);
            linkFrontendmentor.appendChild(frontendmentorImage);
        } else {
            enableScroll();
            const socialContainer = document.querySelector('.socialNetworkMenu');
            socialContainer.remove();
            menu.style.display = 'none';
        }
    }
}


document.querySelector(".workExperienceMenu").addEventListener('click', goTo);
document.querySelector(".projectsMenu").addEventListener('click', goTo);
document.querySelector(".contactMenu").addEventListener('click', goTo);

function goTo() {
    enableScroll();
    animateMenu();
    const socialContainer = document.querySelector('.socialNetworkMenu');
    socialContainer.remove();
    menu.style.display = 'none';
}









function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}




















// --------------------------- DETECT CHANGE OF THE SCREEN SIZE ------------------------

window.addEventListener("resize", function(){
    verificarTamanho();
    let revisarMenu = document.body.contains(document.querySelector(".socialNetworkLink"));

    if (revisarMenu === true) {
        animateMenu();
    }
});


function verificarTamanho() {

    if (window.innerWidth > 540) {

        let menuDesktop = document.querySelector(".menuOptions");
        menuDesktop.style.display = 'flex';

        let revisar = document.body.contains(document.querySelector(".socialNetworkLink"));

        if (revisar === true) {

            let borrar = document.querySelector(".socialNetworkMenu")
            borrar.remove();

            let aparecer = document.querySelector(".menu");
            aparecer.style.display = 'flex';

            animateMenu()
        } 

    } else {
        let menuMobile = document.querySelector(".menuOptions");
        menuMobile.style.display = 'none';
    }
}


