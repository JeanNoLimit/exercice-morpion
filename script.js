// Création d'un élément carré
const carre=document.createElement("div");
carre.classList.add("carre");
const message=document.createElement("p");
message.classList.add("message");
const container=document.querySelector("#container");
const morpion=document.querySelector("#morpion");
container.appendChild(message);
let cases=[] //Tableau contenant nos div, 
for(let i=1; i<=9; i++){

    let newCarre=carre.cloneNode();
    morpion.appendChild(newCarre); 
    cases.push(newCarre);
    
;}
// console.log(cases);


let nbChecked =0;
//On part du principie qu'une partie débute par X
message.innerHTML="C'est au tour de X!";
let tour = 1; //défini si X ou O doit jouer
    cases.forEach(newCarre => {
        newCarre.addEventListener("click", (e)=> {
        // newCarre.classList.add(".checked"); //Redemander à quoi correspond cette classe
            nbChecked++;
            if(tour==1){
                newCarre.innerHTML="X";
                newCarre.classList.add("x-clicked")
                message.innerHTML="C'est au tour de O!"
                tour=-1;
                // e.removeEventListener("click");
            
            }else {
                newCarre.innerHTML="O";
                newCarre.classList.add("o-clicked")
                message.innerHTML="C'est au tour de X!"
                tour=1;
            }

        });
    });

