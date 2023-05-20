// ANIMACIÓN DE BARRAS 
document.querySelector(".barsMenu").addEventListener('click', animateOptions);

let bar1 = document.querySelector(".lineBar1");
let bar2 = document.querySelector(".lineBar2");
let bar3 = document.querySelector(".lineBar3");

function animateMenu() {
    bar1.classList.toggle("lineBar1active")
    bar2.classList.toggle("lineBar2active")
    bar3.classList.toggle("lineBar3active")   
}



// VARIABLES 
let menuItemsContainer = document.querySelector(".menuItemsContainer");
let menuOptions = document.querySelector(".menuOptions");
let menuContainerLogin = document.querySelector(".menuContainerLogin");
let ancho = window.innerWidth;


function animateOptions() {

    if (menuItemsContainer.classList.contains('menuMobile') == true) {
        menuItemsContainer.classList.remove("menuMobile");
        menuOptions.style.display = 'none';
        menuContainerLogin.style.display = 'none';
        menuItemsContainer.style.display = 'none';
        animateMenu();
        enableScroll();
    } else {
        menuItemsContainer.style.display = 'flex';
        menuOptions.style.display = 'flex';
        menuContainerLogin.style.display = 'flex';
        menuItemsContainer.classList.add("menuMobile")
        animateMenu();
        disableScroll();
    }

}





function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}




// // --------------------------- DETECT CHANGE OF THE SCREEN SIZE ------------------------

window.addEventListener("resize", function(){
    verificarTamanho();
});


function verificarTamanho() {

    if (window.innerWidth > 550) {
        menuOptions.style.display = 'flex';
        menuContainerLogin.style.display = 'flex';
        menuItemsContainer.style.display = 'flex';

        if (menuItemsContainer.classList.contains('menuMobile') == true) {
            animateMenu();
            menuItemsContainer.classList.remove("menuMobile");
            enableScroll();
        }

    } else {
        if (menuItemsContainer.classList.contains('menuMobile') != true) {
            menuOptions.style.display = 'none';
            menuContainerLogin.style.display = 'none';
            menuItemsContainer.style.display = 'none';
        } 
    }
}
