/*----------------VARIABLES DECLARATION----------------*/
//
let dataId = 1;

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
window.addEventListener('scroll', function(){
  let scrollUp = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollUp > lastScroll) {
    deskNavbar.style.top = '-150px'
  } else {
    deskNavbar.style.top = '0'
  }
  lastScroll = scrollUp
})


//Text-area variables
const newPost = document.querySelector("textarea");

//Post variables
const postButton = document.querySelector('button[type="submit"]');
const feedContainer = document.querySelector(".feed");

/*----------------CLASSES & OBJETS----------------*/

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
  "Eloïse",
  "Brochier",
  "./images/profile-pictures/eloise.jpg",
  "j'écris mon premier post pour tester mon objet. Et je test, si tout fonctionne correctement. Mais comme je suis un génie, ça devrait le faire sans souci.",
  [
    {
      nom: "Cédric",
      commentaire: "Au top, tu gères!",
    },
    {
      nom: "Romain",
      commentaire: "Génie, génie... C'est vite dit",
    },
  ],
  "10 mars 2023",
  false,
  11
);

const post2 = new post(
  "2",
  "Romain",
  "Valot",
  "./images/profile-pictures/romain.jpg",
  "Vous connaissez la blague de l'homme à 5 bites? Et bien son slip lui va comme un gant",
  [
    {
      nom: "Olive",
      commentaire: "Bien joué.",
    },
    {
      nom: "Pablo",
      commentaire:
        "Wala vous êtes trop forts! Aucune idée de comment vous avez fait :)",
    },
  ],
  "7 février 2023",
  false,
  4
);

const post3 = new post(
  "3",
  "Cédric",
  "Perot",
  "./images/profile-pictures/Ceric.jpg",
  "Les gars, je comprend pas comment on push...",
  [
    {
      nom: "Olive",
      commentaire: "...",
    },
    {
      nom: "Eloïse",
      commentaire:
        "Bah tu fais git init, git clone repository-url, git add -A, git commit -m 'nom du commit', et git push ! C'est pourtant simple",
    },
  ],
  "7 février 2023",
  false,
  1
);

/*----------------EVENTS----------------*/

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
window.addEventListener("load", autoResizeArea);

//Post
postButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("test");
});

// //Like button
// likeButtons.forEach((likebtn) => {
//   likebtn.addEventListener("click", likeStatusSwitch);
// });

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
addPost(post2);
addPost(post3);

//function add post
function addPost(post) {
  const postCard = document.createElement("div");
  postCard.classList.add("post-card");
  postCard.dataset.id = dataId;
  feedContainer.appendChild(postCard);

  const profilePicture = document.createElement("div");
  profilePicture.classList.add("profile-picture");
  profilePicture.dataset.id = dataId;
  profilePicture.style.backgroundImage = `url(${post.profilePicture})`;
  postCard.appendChild(profilePicture);

  const postCardHeader = document.createElement("div");
  postCardHeader.classList.add("post-header");
  postCardHeader.dataset.id = dataId;
  postCard.appendChild(postCardHeader);

  const userName = document.createElement("h1");
  userName.classList.add("post-user");
  userName.dataset.id = dataId;
  userName.textContent = post.fullName;
  postCardHeader.appendChild(userName);

  const postDate = document.createElement("p");
  postDate.classList.add("post-date");
  postDate.dataset.id = dataId;
  postDate.innerHTML = `${post.postDate}`;
  postCardHeader.appendChild(postDate);

  const postContent = document.createElement("p");
  postContent.classList.add("post-content");
  postContent.dataset.id = dataId;
  postContent.textContent = post.postContent;
  postCard.appendChild(postContent);

  const postButtons = document.createElement("div");
  postButtons.classList.add("post-buttons");
  postButtons.dataset.id = dataId;
  postCard.appendChild(postButtons);

  const likeButton = document.createElement("img");
  likeButton.classList.add("like-btn");
  likeButton.dataset.id = dataId;
  likeButton.src = "./images/heart-logo-off.png";
  likeButton.addEventListener("click", likeStatusSwitch);
  postButtons.appendChild(likeButton);

  const likeText = document.createElement("p");
  likeText.classList.add("like-text");
  likeText.dataset.id = dataId;
  likeText.textContent = "like";
  postButtons.appendChild(likeText);

  const shareButton = document.createElement("img");
  shareButton.classList.add("share-btn");
  shareButton.dataset.id = dataId;
  shareButton.src = "./images/share-logo.png";
  postButtons.appendChild(shareButton);

  const shareText = document.createElement("p");
  shareText.classList.add("share-txt");
  shareText.dataset.id = dataId;
  shareText.textContent = "share";
  postButtons.appendChild(shareText);

  const likeCount = document.createElement("div");
  likeCount.classList.add("like-count");
  postCard.appendChild(likeCount);

  const likeCountIcon = document.createElement("img");
  likeCountIcon.classList.add("like-count-icon");
  likeCountIcon.src = "./images/heart-logo.png";
  likeCount.appendChild(likeCountIcon);

  const likeCounter = document.createElement("p");
  likeCounter.classList.add("like-count-icon");
  likeCounter.textContent = post.likeNumber;
  likeCount.appendChild(likeCounter);

  const commentForm = document.createElement("form");
  commentForm.classList.add("post-form");
  commentForm.dataset.id = dataId;
  postCard.appendChild(commentForm);

  const commentInputDiv = document.createElement("div");
  commentInputDiv.classList.add("comment");
  commentForm.appendChild(commentInputDiv);

  const commentInput = document.createElement("input");
  commentInput.classList.add("comment-input");
  commentInput.type = "text";
  commentInput.name = "comment-input";
  commentInput.dataset.autoresize = "";
  commentInput.placeholder = "Ecrire un commentaire";
  commentInputDiv.appendChild(commentInput);

  if (post.postComments !== null) {
    let commentId = 1;
    for (let i = 0; i < post.postComments.length; i++) {
      const postComment = document.createElement("div");
      postComment.classList.add("post-comment");
      postComment.dataset.id = `${dataId}-${commentId}`;
      postCard.appendChild(postComment);

      const postCommentName = document.createElement("h2");
      postCommentName.classList.add("post-comment-user-name");
      postCommentName.dataset.id = `${dataId}-${commentId}`;
      postCommentName.innerHTML = post.postComments[i].nom;
      postComment.appendChild(postCommentName);

      const postCommentContent = document.createElement("p");
      postCommentContent.classList.add("post-content");
      postCommentContent.dataset.id = `${dataId}-${commentId}`;
      postCommentContent.innerText = post.postComments[i].commentaire;
      postComment.appendChild(postCommentContent);

      commentId++;
    }
  }
  dataId++;
}

//I select all the 'like buttons' and the 'like' text next to it.
const likeTexts = document.querySelectorAll(".like-text");
const likeButtons = document.querySelectorAll(".like-btn");

//Function to switch like button status (Clicked or uncliked)
function likeStatusSwitch() {
  //Checking if the icon url contains the word 'off' in it
  if (this.src.match("off")) {
    //if yes, I change the url of the icon for the "clicked version"
    this.src = "./images/heart-logo.png";
    //I check which 'like' text has the same data-id than my icon
    for (let likeText of likeTexts) {
      //I change the color of the corresponding 'like' text
      if (likeText.dataset.id === this.dataset.id) {
        likeText.style.color = "rgb(255, 27, 82)";
      }
    }
    //if the icon url doesn't contains the word 'off'
  } else {
    // I change the icon url for the Unclicked one
    this.src = "./images/heart-logo-off.png";
    //I check which 'like' text has the same data-id than my icon
    for (let likeText of likeTexts) {
      //I change the color of the corresponding 'like' text
      if (likeText.dataset.id === this.dataset.id) {
        likeText.style.color = "rgba(173, 170, 189, 1)";
      }
    }
  }
}

// let dataId = this.dataset.id;
// console.log(`post${dataId}.likeNumber`);
