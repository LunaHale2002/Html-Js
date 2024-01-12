let prenomInput = document.getElementById("PrenomInput");
let para = document.querySelector("#thaïs");
let bouttonP = document.querySelector("#boutton")
let prenomvalue;

function prenom (){
    prenomvalue = prenomInput.value
    if (PrenomInput.value.length < 3 ){
        alert(
            "Veuillez saisir au moins trois caractères.",
        );
    } else {
        // para.textContent = "Bonjour " + prenomvalue;
        alert(
            "bonjour "+ prenomvalue)
    }
};

bouttonP.addEventListener("click", prenom)

let ageForm = document.querySelector("#age")
let ageInput = document.querySelector("#number")

ageForm.onsubmit = function (e) {
    e.preventDefault();
    let age = ageInput.value;
    if(age < 0){
        alert(`vous etes un poisson pané`)
    } else if(age > 150) {
        alert(`vous etes DCD`)
    } else {
        alert(`vous avez ${age} an${age == 1 ? "":"s"}`)
    }
};

// let coucouPara = document.querySelector("#coucou")

// document.querySelector("#coucou").textContent = "Hello";
// document.querySelector("#coucou").style.color = "red";
// document.querySelector("#coucou").style.padding.left = "20px";

// let couleurForm = document.querySelector ("#couleur")

// function changerCouleur(){
//     if(form.couleur.options[0].selected){
//         document.getElementById("couleurs").style.color = "#f00";
//     }

//     else if (form.couleur.options[1].selected){
//         document.getElementById("couleurs").style.color = "#0f0";
//     }

//     else if (form.couleur.options[2].selected){
//         document.getElementById("couleurs").style.color = "#00f";
//     }
//     else if (form.couleur.options[3].selected){
//         document.getElementById("couleurs").style.color = "#ff0";
//     }
// }

let villebtn = document.querySelector("#villebtn")
let villeInput = document.querySelector("#ville")
let text = document.querySelector("#text")

function showVille() {
  console.log(villeInput.value);
  text.textContent += villeInput.value;
}
villebtn.addEventListener("click", showVille)

let salaireInput = document.querySelector("#salaire")
let primeInput = document.querySelector("#pime")
let totalInput = document.querySelector("#total")


let colorSelect = document.querySelector("#colorSelect");
let changeColorBtn = document.querySelector("#changeColorBtn");
let coloredText = document.querySelector("#coloredText");

function changeColor(){
    console.log(colorSelect.value)
    coloredText.style.color = colorSelect.value
}

changeColorBtn.addEventListener('click', changeColor)

var body = document.body, 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    r_out = document.querySelector('#r_out'),
    g_out = document.querySelector('#g_out'),
    b_out = document.querySelector('#b_out'),
    hex_out = document.querySelector('#hex');

function setColor(){
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
  body.style.backgroundColor = hex; 
  hex_out.value = hex;
}

function pad(n){
  return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
  setColor();
  r_out.value = r.value;
}, false);

r.addEventListener('input', function() {
  setColor();
  r_out.value = r.value;
}, false);

g.addEventListener('change', function() {
  setColor();
  g_out.value = g.value;
}, false);

g.addEventListener('input', function() {
  setColor();
  g_out.value = g.value;
}, false);

b.addEventListener('change', function() {
  setColor();
  b_out.value = b.value;
}, false);

b.addEventListener('input', function() {
  setColor();
  b_out.value = b.value;
}, false);//

