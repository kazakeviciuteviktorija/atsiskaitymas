/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict'

const ENDPOINT = 'https://api.github.com/users';


    const fetchUser = async () => {
      try {  
      const result = await fetch (ENDPOINT);
      const data = await result.json();
  
      document.getElementById("output").innerHTML = "";
  
      data.map(X);
    }catch (error) {
      console.log(error);
      }};
  

      // X labai netinkamas pavadinimas funkcijai :) 

      function X(item) {
          document.getElementById("output").innerHTML += `<div>
          <span>${item.login}</span>
          <img src=${item.avatar_url}></img>
          </div>`;
        }
  
      document.getElementById("btn").addEventListener('click', fetchUser);
      document.getElementById("output").setAttribute(
        "style", "font-size: 30px; text-align: center; font-style: bold; color:'black'");
    
//failui trūksta formatavimo
//sumiksuotos viengubos ir dvigubos kabutės

      








    