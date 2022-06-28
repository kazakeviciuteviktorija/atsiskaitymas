/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

'use strict'

//čia nėra konstruktoriaus funkcija. function Calculator() {....} ir tada iškvietimas new Calculator...
var calculator = {
 read() {
      this.a = +prompt('skaičius A', 0);
      this.b = +prompt('skaičius B', 0);
    },
 sum() {
   return this.a + this.b
 },
 subtraction() {
    return this.a - this.b
  },
  multiplication() {
   return this.a * this.b
 },
 division() {
    return this.a / this.b
  },
};
calculator.read();
console.log(`suma: ${calculator.sum()}`);
console.log(`skirtumas: ${calculator.subtraction()}`);
console.log(`daugyba: ${calculator.multiplication()}`);
console.log(`dalyba: ${calculator.division()}`);
