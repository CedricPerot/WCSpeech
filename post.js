// Déclaration des variables
const newPost = document.querySelector("textarea");
const postButton = document.querySelector('button[type="submit"]');
const feedContainer = document.querySelector(".feed");

//ajout des Event Listener
window.addEventListener("load", autoResizeArea());
postButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(newPost.value);
  console.log(post1);
  newPost.value = "";
});

/** POUR RAPPEL
 
 * scrollHeight: ENTIRE content (visible or not) + padding  (Height of all content + paddings, despite of height of the element.
 * clientHeight: VISIBLE content & padding
Only visible height: content portion limited by explicitly defined height of the element.
 * offsetHeight: VISIBLE content & padding + border + scrollbar
Height occupied by the element on document. */

function autoResizeArea() {
  document.querySelectorAll("[data-autoresize]").forEach(function (element) {
    let offset = element.offsetHeight - element.clientHeight; // calcule la hauteur des éventuels border et scroll bar
    element.addEventListener("input", function (e) {
      e.target.style.height = "auto";
      e.target.style.height = e.target.scrollHeight + offset + "px"; // définit la hauteur de l'élément selon la hauteur du contenu (scrollHeight) + les éventuels border et nav bar calculés précédement
    });
  });
}

/** FONCTION AJOUT DE POST */

class post {
  constructor(first, last, picture, content, date, likeStatus, likeNum) {
    this.firstName = first;
    this.lastName = last;
    this.profilePicture = picture;
    this.postContent = content;
    this.postDate = date;
    this.likeStatus = likeStatus;
    this.likeNumber = likeNum;
  }
}
const post1 = new post(
  "Olive",
  "Gomez",
  "./images/profile-pictures/Olive.jpg",
  "j'écris mon premier post pour tester mon objet. Et je test, si tout fonctionne bien.",
  "10 mars 2023",
  false,
  11
);
addPost(post1);
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
  userName.innerHTML = `${post.firstName} ${post.lastName}`;
  postCardHeader.appendChild(userName);

  let postDate = document.createElement("p");
  postDate.classList.add("post-date");
  postDate.innerHTML = `${post.postDate}`;
  postCardHeader.appendChild(postDate);

  let postContent = document.createElement("p");
  postContent.classList.add("post-content");
  postContent.innerHTML = `${post.postContent}`;
  postCard.appendChild(postContent);
}
