/*----------------VARIABLES DECLARATION----------------*/

//Menu burger variables
const menuBurger = document.getElementById("menu-burger");
const menuContainer = document.querySelector(".burger-container");

//Text-area variables
const newPost = document.querySelector("textarea");

//Post variables
const postButton = document.querySelector('button[type="submit"]');
const feedContainer = document.querySelector(".feed");

//like button
const likeButtons = document.querySelectorAll(".like-btn");
const likeTexts = document.querySelectorAll(".like-txt");

/*----------------CLASSES----------------*/

class post {
  constructor(
    id,
    first,
    last,
    picture,
    content,
    comments,
    date,
    likeStatus,
    likeNum
  ) {
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.profilePicture = picture;
    this.postContent = content;
    this.postComments = comments;
    this.postDate = date;
    this.likeStatus = likeStatus;
    this.likeNumber = likeNum;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const post1 = new post(
  "1",
  "Olive",
  "Gomez",
  "./images/profile-pictures/Olive.jpg",
  "j'écris mon premier post pour tester mon objet. Et je test, si tout fonctionne bien.",
  [
    "je comment ce premier post et je test, si tout fonctionne bien.",
    "deuxième commentaire de ce post pour vérifier que tout est ok et fonctionne bien.",
  ],
  "10 mars 2023",
  false,
  11
);

/*----------------EVENTS----------------*/

//Menu burger
menuBurger.addEventListener("click", () => {
  menuContainer.classList.toggle("mobile-menu");
});

//Text-area auto-resize
window.addEventListener("load", autoResizeArea());

//like button : changing Like button status on click
likeButtons.forEach(function (likebtn) {
  likebtn.addEventListener("click", () => {
    if (likebtn.src.match("off")) {
      likebtn.src = "./images/heart-logo.png";
      for (let likeText of likeTexts) {
        if (likeText.dataset.id === likebtn.dataset.id) {
          likeText.style.color = "rgb(255, 27, 82)";
        }
      }
    } else {
      likebtn.src = "./images/heart-logo-off.png";
      for (let likeText of likeTexts) {
        if (likeText.dataset.id === likebtn.dataset.id) {
          likeText.style.color = "rgba(173, 170, 189, 1)";
        }
      }
    }
  });
});

//Post
postButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(newPost.value);
  console.log(post1);
  // newPost.value = "";
});

/*----------------FUNCTIONS----------------*/
//Function Text-area auto-resize
function autoResizeArea() {
  document.querySelectorAll("[data-autoresize]").forEach(function (element) {
    let offset = element.offsetHeight - element.clientHeight; // calcule la hauteur des éventuels border et scroll bar
    element.addEventListener("input", function (e) {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + offset + "px"; // définit la hauteur de l'élément selon la hauteur du contenu (scrollHeight) + les éventuels border et nav bar calculés précédement
    });
  });
}

addPost(post1);

//function add post
function addPost(post) {
  let postCard = document.createElement("div");
  postCard.classList.add("post-card");
  feedContainer.appendChild(postCard);

  let profilePicture = document.createElement("div");
  profilePicture.classList.add("profile-picture");
  profilePicture.style.backgroundImage = `url(${post.profilePicture})`;
  postCard.appendChild(profilePicture);

  let postCardHeader = document.createElement("div");
  postCardHeader.classList.add("post-header");
  postCard.appendChild(postCardHeader);

  let userName = document.createElement("h1");
  userName.classList.add("post-user");
  userName.textContent = post.fullName;
  postCardHeader.appendChild(userName);

  let postDate = document.createElement("p");
  postDate.classList.add("post-date");
  postDate.innerHTML = `${post.postDate}`;
  postCardHeader.appendChild(postDate);

  let postContent = document.createElement("p");
  postContent.classList.add("post-content");
  postContent.textContent = post.postContent;
  postCard.appendChild(postContent);

  let postButtons = document.createElement("div");
  postButtons.classList.add("post-buttons");
  postCard.appendChild(postButtons);

  let likeButton = document.createElement("img");
  likeButton.classList.add("like-btn");
  likeButton.dataset.id = "3";
  likeButton.src = "./images/heart-logo-off.png";
  postButtons.appendChild(likeButton);

  let txtButton = document.createElement("p");
  txtButton.classList.add("like-btn");
  txtButton.textContent = "like";
  postButtons.appendChild(txtButton);
}
