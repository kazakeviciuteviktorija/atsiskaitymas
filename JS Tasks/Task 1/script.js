/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

'use strict'

const forma = document.querySelector('form');


forma.addEventListener('submit', weightConvert);

function weightConvert(event) {
event.preventDefault();

const kg = document.querySelector("#search").value;
const lb = kg * 2.2046;
const g = kg / 0.0010000;
const oz = kg * 35.274;

const result = `
  <div>Svoris svarais: ${lb.toFixed(2)}lb</div>
  <div>Svoris gramais: ${g.toFixed(2)}g</div>
  <div>Svoris uncijomis: ${oz.toFixed(2)}oz</div>
  `;

document.getElementById("output").innerHTML = result;
document.getElementById("output").setAttribute(
    "style", "font-size: 20px; font-style: italic; color:#ff0000;");
}






