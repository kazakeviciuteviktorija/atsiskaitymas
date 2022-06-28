/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

'use strict'

document.getElementById("btn__element").addEventListener('click', clickCount);

let clickNumber = 0;

function clickCount() {
  clickNumber += 1;
  document.getElementById("btn__state").innerHTML = `${clickNumber}`; //template literal čia nėra būtinas
 }
