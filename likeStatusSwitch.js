export function likeStatusSwitch() {
  //I select all the 'like buttons' and the 'like texts' next to it.
  const likeTexts = document.querySelectorAll(".like-text");
  
    console.log(this.dataset.id);
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
