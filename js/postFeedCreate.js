import{postCreate} from "./postCreate.js"
import{addLikeNumber} from "../index.js"
import{likeStatusSwitch} from "./likeStatusSwitch.js"
import{addComment} from "../index.js"

export function postFeedCreate(postListCopy){
    //variable to label each post
    let dataId = 0;

    //resetting the feed container
    const postContainer = document.querySelector(".post-container");
    postContainer.innerHTML ="";

    //Create posts feed 
    postListCopy.forEach(post =>{
    postCreate(post, dataId);
    dataId++;
    });

    //add listeners on like buttons 
    const likeButtons = document.querySelectorAll(".like-btn");
    console.log(likeButtons);
    likeButtons.forEach((button) => {
    button.addEventListener("click", addLikeNumber);
    button.addEventListener("click", likeStatusSwitch);
    });

    //add listeners on comment inputs
    const commentInputs = document.querySelectorAll(".comment-input");
    console.log(commentInputs);
    commentInputs.forEach(input => {
    input.addEventListener("change", addComment);
    }) 

    //resetting label variable
    dataId=0;
}
