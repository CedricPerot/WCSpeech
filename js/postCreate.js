//variables
const postContainer = document.querySelector(".post-container");

//function add post
export function postCreate(post, id) {
    const postCard = document.createElement("div");
    postCard.classList.add("post-card");
    postCard.dataset.id = id;
    postContainer.appendChild(postCard);
  
    const profilePicture = document.createElement("div");
    profilePicture.classList.add("profile-picture");
    profilePicture.dataset.id = id;
    profilePicture.style.backgroundImage = `url(${post.picture})`;
    postCard.appendChild(profilePicture);
  
    const postCardHeader = document.createElement("div");
    postCardHeader.classList.add("post-header");
    postCardHeader.dataset.id = id;
    postCard.appendChild(postCardHeader);
  
    const userName = document.createElement("h1");
    userName.classList.add("post-user");
    userName.dataset.id = id;
    userName.innerText = post.first + " " + post.last;
    postCardHeader.appendChild(userName);
  
    const postDate = document.createElement("p");
    postDate.classList.add("post-date");
    postDate.dataset.id = id;
    postDate.innerText = post.postDate;
    postCardHeader.appendChild(postDate);
  
    const postContent = document.createElement("p");
    postContent.classList.add("post-content");
    postContent.dataset.id = id;
    postContent.innerText = post.postContent;
    postCard.appendChild(postContent);
  
    const postButtons = document.createElement("div");
    postButtons.classList.add("post-buttons");
    postButtons.dataset.id = id;
    postCard.appendChild(postButtons);
  
    const likeButton = document.createElement("img");
    likeButton.classList.add("like-btn");
    //verifying the like status to show the correct icon
    likeButton.dataset.id = id;
    if (post.likeStatus === false){
      likeButton.src = "./images/heart-logo-off.png";
    }else{
      likeButton.src = "./images/heart-logo.png";
    }
    postButtons.appendChild(likeButton);
  
    const likeText = document.createElement("p");
    likeText.classList.add("like-text");
    likeText.dataset.id = id;
    likeText.innerText = "like";
    if (post.likeStatus === false){
      likeText.style.color = "rgb(173, 170, 189, 1)"
    }else{
      likeText.style.color = "rgba(255, 27, 82)";
    }
    postButtons.appendChild(likeText);
  
    const shareButton = document.createElement("img");
    shareButton.classList.add("share-btn");
    shareButton.dataset.id = id;
    shareButton.src = "./images/share-logo.png";
    postButtons.appendChild(shareButton);
  
    const shareText = document.createElement("p");
    shareText.classList.add("share-txt");
    shareText.dataset.id = id;
    shareText.innerText = "share";
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
    likeCounter.innerText = post.likeNumber;
    likeCount.appendChild(likeCounter);
  
    const commentForm = document.createElement("form");
    commentForm.classList.add("post-form");
    commentForm.dataset.id = id;
    postCard.appendChild(commentForm);
  
    const commentInputDiv = document.createElement("div");
    commentInputDiv.classList.add("comment");
    commentForm.appendChild(commentInputDiv);
  
    const commentInput = document.createElement("input");
    commentInput.classList.add("comment-input");
    commentInput.dataset.id = id;
    commentInput.type = "text";
    commentInput.name = "comment-input";
    commentInput.dataset.autoresize = "";
    commentInput.placeholder = "Ecrire un commentaire";
    commentInputDiv.appendChild(commentInput);

    //adding the post comments 
    if (post.postComments !== null) {
      let commentId = 1;
      for (let i = 0; i < post.postComments.length; i++) {
        const postComment = document.createElement("div");
        postComment.classList.add("post-comment");
        postComment.dataset.id = `${id}-${commentId}`;
        postCard.appendChild(postComment);
  
        const postCommentName = document.createElement("h2");
        postCommentName.classList.add("post-comment-user-name");
        postCommentName.dataset.id = `${id}-${commentId}`;
        postCommentName.innerHTML = post.postComments[i].commentFirst;
        postComment.appendChild(postCommentName);
  
        const postCommentContent = document.createElement("p");
        postCommentContent.classList.add("post-content");
        postCommentContent.dataset.id = `${id}-${commentId}`;
        postCommentContent.innerText = post.postComments[i].commentContent;
        postComment.appendChild(postCommentContent);
  
        commentId++;
      }
    }
    else{
      //instancier un tableau vide
    }
  }
  