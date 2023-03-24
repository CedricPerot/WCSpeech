//Function Text-area auto-resize
export function autoResizeArea() {
    document.querySelectorAll("[data-autoresize]").forEach(function (element) {
      let offset = element.offsetHeight - element.clientHeight; // calcule la hauteur des éventuels border et scroll bar
      element.addEventListener("input", function (e) {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + offset + "px"; // définit la hauteur de l'élément selon la hauteur du contenu (scrollHeight) + les éventuels border et nav bar calculés précédement
      });
    });
  }