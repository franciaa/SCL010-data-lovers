/* Manejo del DOM */

const myData = POKEMON.pokemon; //const para acceder a la data
const container = document.getElementById("root");

 //DOM FUNCIÓN FILTRAR
 document.getElementById("pok-filter").addEventListener("change",() => {
  let tipoFilter = document.getElementById("pok-filter").value; 
  let lastResult = window.filterPoke(myData,tipoFilter); 
  container.innerHTML ="";
  lastResult.forEach(element => {
      container.innerHTML += `
      <div class="img">
      <img src="${element.img}">
      </div>
     <h3>${element.type}</h3>
      <p>${element.name}</p>`
    })
  })
//ordenar
const pokeOrder = document.getElementById("name");

pokeOrder.addEventListener('change', () => {
    let sortOrder = pokeOrder.value;
    let selectionOrder = sortPokes(myData,"name",sortOrder);
    container.innerHTML ="";

    selectionOrder.forEach(element=> {
        container.innerHTML += `
        <div class="img">
     <img src="${element.img}">
     </div>
     <h3>${element.name}</h3>
     <p>${element.type}</p>`
    })
   })