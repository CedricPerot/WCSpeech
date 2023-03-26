import{getTheDate} from "./getTheDate.js"

export function addNewPost(dataId){
//Text-area variable
const newPostTextArea = document.querySelector("textarea");
//post-container
const postContainer = document.querySelector(".post-container");

    const post = {
      postId : dataId,
      first : "Olive",
      last : "Gomez",
      picture : "./images/profile-pictures/Olive.jpg",
      postContent : newPostTextArea.value,
      postComments : [],
      postDate : getTheDate(),
      likeStatus : false,
      likeNumber : 0
    }
    newPostTextArea.value = "";
    postContainer.innerHTML ="";

    return post;
}