// Création d'un élément carré
const carre = document.createElement("div");
carre.classList.add("carre");
const message = document.createElement("p");
message.classList.add("message");
const container = document.querySelector("#container");
const morpion = document.querySelector("#morpion");
container.appendChild(message);
let cases = [] //Tableau contenant nos div, 

for (let i = 1; i <= 9; i++) {
    let newCarre = carre.cloneNode();
    morpion.appendChild(newCarre);
    cases.push(newCarre);
    ;
}

let nbChecked = 1;

//On part du principie qu'une partie débute par X
message.innerHTML = "C'est au tour de X!";
let tour = 1; //défini si X ou O doit jouer
cases.forEach(newCarre => {
    newCarre.addEventListener("click", (e) => {

        //On vérifie que la l'élément newCarre n'appartient pas déja à une des 2 classes "clicked https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/"
        if (newCarre.classList.contains("x-clicked") || newCarre.classList.contains("o-clicked")) {
            alert("case déja jouée!");
        } else {
            console.log(nbChecked);
            nbChecked++;
            if (tour == 1) {
                newCarre.innerHTML = "X";
                newCarre.classList.add("x-clicked")
                message.innerHTML = "C'est au tour de O!"
                tour = -1;
                // e.removeEventListener("click"); solution alternative, il faudrait créer une fonction click pour pouvoir retirer l'event. https://stackoverflow.com/questions/4402287/javascript-remove-event-listener
            } else {
                newCarre.innerHTML = "O";
                newCarre.classList.add("o-clicked")
                message.innerHTML = "C'est au tour de X!"
                tour = 1;

            }
        }
        if (nbChecked > 9) {
            message.innerHTML = ("Partie terminée");
        }

    });
});
