/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict'
const ENDPOINT = 'cars.json';

    const fetchCars = async () => {
        try {  
        const result = await fetch (ENDPOINT);
        const data = await result.json();
    
        document.getElementById("output").innerHTML = "";
    
        data.map(arrangeData);
      }catch (error) {
        console.log(error);
        }};
    
        function arrangeData(item) {
            document.getElementById("output").innerHTML += `
            <br>    
            <p><b>Automobilių gamintojas:</b> ${item.brand}</p>
            <p><b>Modeliai:</b> ${item.models}</p>
            <br>` 
    };
          
        fetchCars();

//trūksta formatavimo
        


//     const ENDPOINT = 'cars.json';
    
//     const fetchCars = async () => {
//         try {  
//         const result = await fetch (ENDPOINT);
//         const data = await result.json();
//         document.getElementById("output").innerHTML = "";
//         data.map(arrangeData);
//       }catch (error) {
//         console.log(error);
//         }};
    

//         const tableBodyElement = document.querySelector("tbody");
        
        
//         let users = [];
      
                 
//         function arrangeData() {
//             let usersElements = '';

//             users.forEach((user) => {
                
//                   usersElements += `<tr>
//                   <td>${user.brand}</td>
//                   <td>${user.model}</td>
//                   <
//               </tr>`;
//                 });

//                 tableBodyElement.innerHTML = usersElements;
            
//             };
            

//          fetchCars();


    


        
        
    

    
  
