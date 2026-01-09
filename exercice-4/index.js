window.addEventListener("DOMContentLoaded", () => {
    let button1 = document.getElementById("tab-1");
    let button2 = document.getElementById("tab-2");
    let button3 = document.getElementById("tab-3");
    let p1 = document.getElementById("tab-1-content");
    let p2 = document.getElementById("tab-2-content");
    let p3 = document.getElementById("tab-3-content");
    
    button1.addEventListener("click", (event) => {
        p1.style.display = "block";
        if(p2.style.display === "block" || p3.style.display === "block") {
            p2.style.display = "none";
            p3.style.display = "none";
        }
    });
    button2.addEventListener("click", (event) => {
        p2.style.display = "block";
        if(p1.style.display === "block" || p3.style.display === "block") {
            p1.style.display = "none";
            p3.style.display = "none";
        }
    });
    button3.addEventListener("click", (event) => {
        p3.style.display = "block";
        if(p2.style.display === "block" || p1.style.display === "block") {
            p2.style.display = "none";
            p1.style.display = "none";
        }
    });
})

//SOLUTION OPTIMALE 

// window.addEventListener("DOMContentLoaded", () => {

//   // je selectionne tous les boutons
//   let buttons = document.querySelectorAll("button");

//   for(let button of buttons)
//   {
//     // j'écoute l'event clic de chaque bouton
//     button.addEventListener("click", (event) => {
//       let target = event.target;

//       // je récupère la p avec l'id correspondant
//       let tab = document.querySelector(p#${target.id}-content);

//       // je récupère les p qui n'ont pas cet id
//       let notTabs = document.querySelectorAll(p:not(#${target.id}-content));

//       // je cache les mauvais p
//       for(let notTab of notTabs)
//       {
//         notTab.style.display = "none";
//       }

//       // j'affiche le bon
//       tab.style.display = "block";

//     });
//   }
// });