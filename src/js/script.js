// TODO

//changer la couleur du texte 

const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")

aMettreEnRouge.style.color = "red"

//Réagir a un click 

const EnRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")

EnRougeSuiteAClick.addEventListener("click", (evt) =>{
    EnRougeSuiteAClick.style.color = "red" });

//Collections D'éléments 

const collH2 = document.querySelectorAll ("h2")

collH2.forEach((elm)=>{ elm.addEventListener("click",(evt) =>{ evt.target.style.color = "red" ; 
    }); 
});

//Finis 