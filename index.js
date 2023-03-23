import {postList} from "./postList.js"
import {postCreate} from "./postCreate.js"
import {likeStatusSwitch} from "./likeStatusSwitch.js"
import {addNewPost} from "./addNewPost.js"
import {autoResizeArea} from "./autoResizeArea.js"

/*----------------VARIABLES DECLARATION----------------*/

//copie du tableau des posts
const postListCopy = [...postList];

//variable used to label posts
let dataId = 0;

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

//Post variables
const postButton = document.querySelector('button[type="submit"]');

//post-container
const postContainer = document.querySelector(".post-container");


/*----------------- EVENTS ----------------*/

// showing / hidding menu on scroll
window.addEventListener('scroll', function(){
  let scrollUp = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollUp > lastScroll) {
    deskNavbar.style.top = '-150px'
  } else {
    deskNavbar.style.top = '0'
  }
  lastScroll = scrollUp
});

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

//Loading Textarea auto-resize function
window.addEventListener("load", autoResizeArea());

//Create posts feed 
postListCopy.forEach(post =>{
  postCreate(post, dataId);
  dataId++;
});
dataId=0;
//adding the eventListener 
const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach((button) => {
  button.addEventListener("click", addLikeNumber);
  button.addEventListener("click", likeStatusSwitch);
});


//Adding a Post and recreating the new posts feed
postButton.addEventListener("click", function(e) {
  e.preventDefault();
  postListCopy.unshift(addNewPost());
  postListCopy.forEach(post =>{
    postCreate(post, dataId);
    dataId++;
  });
  //adding the eventListener 
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach((button) => {
    button.addEventListener("click", addLikeNumber);
    button.addEventListener("click", likeStatusSwitch);
  });
  //reseting dataId variable
  dataId=0;
});

//function to increment like counter when liking
function addLikeNumber(){
    let postDataId = this.dataset.id;
    if (postListCopy[postDataId].likeStatus === false){
      postListCopy[postDataId].likeStatus = true;
      postListCopy[postDataId].likeNumber++;
    }else if(postListCopy[postDataId].likeStatus === true){
      postListCopy[postDataId].likeStatus = false;
      postListCopy[postDataId].likeNumber--;
    }
    postContainer.innerHTML ="";

   //Create posts feed 
    postListCopy.forEach(post =>{
      postCreate(post, dataId);
      dataId++;
    });
    const likeButtons = document.querySelectorAll(".like-btn");
    likeButtons.forEach((button) => {
    button.addEventListener("click", addLikeNumber);
    button.addEventListener("click", likeStatusSwitch);
  });

  dataId=0;
}