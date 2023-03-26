export function getTheDate(){
//récupération de la date du jour
let postDate = new Date();// recupère un timer depuis 1970
let postDay = postDate.getDate();
let postMonth = postDate.getMonth(); //renvoie de 0 à 11
const monthsInLetters = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
let postYear = postDate.getFullYear();
let postFullDate = `${postDay} ${monthsInLetters[postMonth]} ${postYear}`;
return postFullDate;

}