export function likeStatusSwitch() {
  //I select all the 'like buttons' and the 'like texts' next to it.
  const likeTexts = document.querySelectorAll(".like-text");
  
    //Checking if the icon url contains the word 'off' in it
    if (this.src.match("off")) {
      //if yes, I change the url of the icon for the "clicked version"
      this.src = "./images/heart-logo.png";
      likeTexts[this.dataset.id].style.color = "rgb(255, 27, 82)";
     
      //if the icon url doesn't contains the word 'off'
    } else {
      // I change the icon url for the Unclicked one
      this.src = "./images/heart-logo-off.png";
      likeTexts[this.dataset.id].style.color = "rgba(173, 170, 189, 1)";
    }
  
}
