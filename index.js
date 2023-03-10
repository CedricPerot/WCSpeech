const menuBurger = document.getElementById("menu-burger");
const menuContainer = document.querySelector(".burger-container");

menuBurger.addEventListener('click', () => {
    menuContainer.classList.toggle('mobile-menu')
});
