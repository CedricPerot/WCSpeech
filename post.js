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

window.addEventListener("load", autoResizeArea());
