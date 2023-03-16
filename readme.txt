quelques spec techniques :

* On design d'abord nos éléments en "mobile first" : largeur min 360px
On fera ensuite les media-queries pour la version tablette / desktop.

* la font-size du body (la référence pour tous les autres éléments) : 16px

* Les border-radius de nos bloc sont de 1.5rem 

* la typo utilisée est la "Cera" et est disponnible dans le dossier font. Innutile de l'installer, elle est appellée en haut du fichier css. 

- vous pouvez  utiliser les font-weight : 300, 500 ou 700 (ce qui correspond respectivement à regular, medium et bold)

-vous pouvez utiliser les font-style : normal ou italic 

* Les couleurs, le dégradé de fond, les box-shadow et les séparateurs sont paramétrés dans des variables, déclarées au début du css. Jetez-y un oeil (par exemple pour les séparateurs, ils sont déjà paramétrés pour faire 2px d'épaisseurs, solid, de couleur gris clair)

