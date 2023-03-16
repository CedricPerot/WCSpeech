const menuBurger = document.getElementById("menu-burger");
const menuContainer = document.querySelector(".burger-container");

/* menuBurger.addEventListener('click', () => {
    menuContainer.classList.toggle('mobile-menu')
}); */
// opening the menu by clicking on the burger
menuBurger.onclick = function() {
    menuContainer.classList.toggle('mobile-menu');
    menuBurger.classList.toggle('mobile-menu'); 
}

//remove menu when clicking outside
document.onclick = function clickOutside(e) { 
    if (!menuBurger.contains(e.target) && !menuContainer.contains(e.target)) {
        menuContainer.classList.remove('mobile-menu');
        menuBurger.classList.remove('mobile-menu');
    }
};

const navbarIcons = document.querySelector(".nav-items-mobile");
const icons = navbarIcons.getElementsByClassName("icons");
for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', "");
        this.className += ' active';
    });
}

const desktop = document.querySelector(".nav-items");
const deskIcons = desktop.querySelectorAll(".desk-icons");
for (let j = 0; j < deskIcons.length; j++) {
    deskIcons[j].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

const deskBurger = document.getElementById("profile-menu");
const deskContainer = document.querySelector(".desk-container");

/* menuBurger.addEventListener('click', () => {
    menuContainer.classList.toggle('mobile-menu')
}); */
// opening the menu by clicking on the burger
deskBurger.onclick = function() {
    deskContainer.classList.toggle('desktop-menu');
    deskBurger.classList.toggle('desktop-menu'); 
}

//remove menu when clicking outside
document.onclick = function clickOutside(e) { 
    if (!deskBurger.contains(e.target) && !deskContainer.contains(e.target)) {
        deskContainer.classList.remove('desktop-menu');
        deskBurger.classList.remove('desktop-menu');
    }
}; 
