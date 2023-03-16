/*----------------VARIABLES DECLARATION----------------*/

//Menu burger variables
const menuBurger = document.getElementById("menu-burger");
const menuContainer = document.querySelector(".burger-container");

//modifiy profil button
const modifyProfile = document.querySelector(".profile-card-button");

//pop-up
const popUp = document.querySelector(".modifyPopup");

//closing cross
const closingCross = document.querySelector(".closing-cross");

//All profile fields
let myName = document.querySelector(".profile-card-name");
let myEmail = document.querySelector(".profile-card-email");
let myBio = document.querySelector(".profile-card-bio");
let myJob = document.querySelector(".my-job");
let myBirthday = document.querySelector(".my-birthday");
let myCity = document.querySelector(".my-city");

/*----------------EVENTS----------------*/

//Menu burger
menuBurger.addEventListener("click", () => {
  menuContainer.classList.toggle("mobile-menu");
});

//modify button popup
modifyProfile.addEventListener("click", formToggler);

//closing button popup
closingCross.addEventListener("click", formToggler);

//Text-area auto-resize
window.addEventListener("load", autoResizeArea);

/*----------------FUNCTIONS----------------*/

//to open or close the 'modify' popup
function formToggler() {
  popUp.classList.toggle("visible");
}

//to set auto resize to text-area
function autoResizeArea() {
  document.querySelectorAll("[data-autoresize]").forEach(function (element) {
    let offset = element.offsetHeight - element.clientHeight; // calcule la hauteur des éventuels border et scroll bar
    element.addEventListener("input", function (e) {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + offset + "px"; // définit la hauteur de l'élément selon la hauteur du contenu (scrollHeight) + les éventuels border et nav bar calculés précédement
    });
  });
}
