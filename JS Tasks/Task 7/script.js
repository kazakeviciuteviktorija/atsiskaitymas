/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
'use strict'

const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};


// function showObjectKeys(objectKey) {
//   console.log(Object.keys(objectKey));
//   }
// showObjectKeys(audi);

function showObjectKeys(objectKey) {
  return Object.keys(objectKey);
  }
console.log(showObjectKeys(audi));
  

