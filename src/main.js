/* Manejo del DOM */

const myData = window.POKEMON.pokemon; //const para acceder a la data
const container = document.getElementById("root");

//DOM FUNCIÓN FILTRAR
 document.getElementById("pok-filter").addEventListener("change",() => {
  let tipoFilter = document.getElementById("pok-filter").value; 
  let lastResult = window.filterPoke(myData,tipoFilter);
  container.innerHTML ="";
  lastResult.forEach(element => {
      container.innerHTML += `
      <div class="flip-card">
  <div class="flip-card-inner">
  <div class="flip-card-front">
    <img id="img-card" src="${element.img}" alt="Avatar">
   </div>

   <div class="flip-card-back">
     <p>${element.name}</p>
     <p id="type-poke">Tipo:${element.type}</p>
     <p"number-poke">${element.num}</p>
   </div>
 </div>
</div>`
    })
  })
 
//ordenar

const pokeOrder = document.getElementById("name");
pokeOrder.addEventListener('change', () => {
    let sortOrder = pokeOrder.value;
    let selectionOrder = window.sortPokes(myData,"name",sortOrder);
    container.innerHTML ="";
    selectionOrder.forEach(element=> {
      container.innerHTML += `
      <div class="flip-card">
<div class="flip-card-inner">
  <div class="flip-card-front">
    <img id="img-card" src="${element.img}" alt="Avatar">
   </div>
   <div class="flip-card-back">
     <p>${element.name}</p>
     <p id="type-poke">Tipo:${element.type}</p>
     <p"number-poke">${element.num}</p>
   </div>
 </div>
</div>`
    })
  })