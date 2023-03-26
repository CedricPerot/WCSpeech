import {postList} from "./js/postList.js"
import {postCreate} from "./js/postCreate.js"
// import {likeStatusSwitch} from "./js/likeStatusSwitch.js"
import {addNewPost} from "./js/addNewPost.js"
import {autoResizeArea} from "./js/autoResizeArea.js"
import {postFeedCreate} from "./js/postFeedCreate.js"

/*----------------VARIABLES DECLARATION----------------*/

//post array copy
const postListCopy = [...postList];

//variable to label each post
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

//----- Create the post Feed -----
postFeedCreate(postListCopy);


//-------- Adding New Post --------
postButton.addEventListener("click", function(e) {
  e.preventDefault();
  //creating the new post
  postListCopy.unshift(addNewPost(dataId));
  //Create posts Feed
  postFeedCreate(postListCopy);
});

//----- Increment like counter when liking -----
export function addLikeNumber(){
    let postDataId = this.dataset.id;
    if (postListCopy[postDataId].likeStatus === false){
      postListCopy[postDataId].likeStatus = true;
      postListCopy[postDataId].likeNumber++;
    }else if(postListCopy[postDataId].likeStatus === true){
      postListCopy[postDataId].likeStatus = false;
      postListCopy[postDataId].likeNumber--;
    }
    //Create posts feed 
    postFeedCreate(postListCopy);
}

//----- Add a comment to a post -----
export function addComment(e){
  e.preventDefault();
  const commentInputs = document.querySelectorAll(".comment-input");
  //Get the post data-id
  let postDataId = this.dataset.id;
  console.log(postDataId)
  //Create the comment object
  let postComment = commentInputs[postDataId].value;
  console.log(postComment);
  let post ={};
  post.commentFirst = 'olive';
  post.commentContent = postComment;
  console.log(post);
  //Push the object in the post array
  postListCopy[postDataId].postComments.unshift(post);
  console.log(postListCopy[postDataId]);

  //Create posts feed 
  postFeedCreate(postListCopy);
}