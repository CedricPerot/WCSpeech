import {postList} from "./postList.js"
import {postCreate} from "./postCreate.js"
import {likeStatusSwitch} from "./likeStatusSwitch.js"
import {addNewPost} from "./addNewPost.js"
import {autoResizeArea} from "./autoResizeArea.js"

/*----------------VARIABLES DECLARATION----------------*/

//copie du tableau des posts
const postListCopy = [...postList];
let dataId = 0;
//récupération de la date du jour
// let postDate = new Date();// recupère un timer depuis 1970
// let postDay = postDate.getDate();
// let postMonth = postDate.getMonth(); //renvoie de 0 à 11
// const monthsInLetters = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
// let postYear = postDate.getFullYear();
// let postFullDate = `${postDay} ${monthsInLetters[postMonth]} ${postYear}`;



//Menu burger mobile variables
const menuBurger = document.getElementById("menu-burger");
const menuContainer = document.querySelector(".burger-container");
const navbarIcons = document.querySelector(".nav-items-mobile");
const icons = navbarIcons.getElementsByClassName("icons");

//Menu burger Desktop variables
const deskBurger = document.getElementById("profile-menu");
const deskContainer = document.querySelector(".desk-container");
const desktop = document.querySelector(".nav-items");
const deskIcons = desktop.querySelectorAll(".desk-icons");

// Show/hide desktop nav on scroll
const deskNavbar = document.querySelector(".navbar-desktop");
let lastScroll;

//Text-area variables
const newPostTextArea = document.querySelector("textarea");

//Post variables
const postButton = document.querySelector('button[type="submit"]');


/*----------------- EVENTS ----------------*/

// opening the menu by clicking on the burger
menuBurger.onclick = function () {
  menuContainer.classList.toggle("mobile-menu");
  menuBurger.classList.toggle("mobile-menu");
};

//remove menu when clicking outside (mobile)
document.onclick = function clickOutside(e) {
  if (!menuBurger.contains(e.target) && !menuContainer.contains(e.target)) {
    menuContainer.classList.remove("mobile-menu");
    menuBurger.classList.remove("mobile-menu");
  }
};

//to make icon active (mobile)
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//to make icon active (desktop)
for (let j = 0; j < deskIcons.length; j++) {
  deskIcons[j].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// opening the menu by clicking profile picture
deskBurger.onclick = function () {
  deskContainer.classList.toggle("desktop-menu");
  deskBurger.classList.toggle("desktop-menu");
};

//remove menu when clicking outside
document.onclick = function clickOutside(e) {
  if (!deskBurger.contains(e.target) && !deskContainer.contains(e.target)) {
    deskContainer.classList.remove("desktop-menu");
    deskBurger.classList.remove("desktop-menu");
  }
};

//Text-area auto-resize
window.addEventListener("load", autoResizeArea());

//créer le feed de post 
postListCopy.forEach(post =>{
  postCreate(post, dataId);
  dataId++;
});
dataId=0;
likeStatusSwitch();

//Create Post
postButton.addEventListener("click", function(e) {
  e.preventDefault();
  postListCopy.unshift(addNewPost())
  postListCopy.forEach(post =>{
    postCreate(post, dataId);
    dataId++;
  });
  dataId=0;
  likeStatusSwitch();
});



// /*----------------FUNCTIONS----------------*/

// //Function Text-area auto-resize
// function autoResizeArea() {
//   document.querySelectorAll("[data-autoresize]").forEach(function (element) {
//     let offset = element.offsetHeight - element.clientHeight; // calcule la hauteur des éventuels border et scroll bar
//     element.addEventListener("input", function (e) {
//       e.target.style.height = "auto";
//       e.target.style.height = e.target.scrollHeight + offset + "px"; // définit la hauteur de l'élément selon la hauteur du contenu (scrollHeight) + les éventuels border et nav bar calculés précédement
//     });
//   });
// }