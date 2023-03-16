/*----------------VARIABLES DECLARATION----------------*/

//Menu burger variables
const menuBurger = document.getElementById("menu-burger");
const menuContainer = document.querySelector(".burger-container");

//'modifier profile' button
const modifyProfile = document.querySelector(".profile-card-button");

/*----------------EVENTS----------------*/

//Menu burger
menuBurger.addEventListener("click", () => {
  menuContainer.classList.toggle("mobile-menu");
});

//Modify profile button
modifyProfile.addEventListener("click", formToggler);

/*----------------FUNCTIONS----------------*/

function formToggler(e) {
  console.log(e.target);
}
