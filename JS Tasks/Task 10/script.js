/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
'use strict'

import {one, two, three, four, five} from "./modules/numbers/numbers.js";

import {division} from "./modules/math/division.js";
import {substraction} from "./modules/math/subtraction.js";
import {multiplication} from "./modules/math/multiplication.js";
import {composition} from "./modules/math/composition.js";



let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//failai nėra sutvarkyti iki galo. Console išveda klaidas