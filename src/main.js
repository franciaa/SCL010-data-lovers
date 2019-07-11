/* Manejo del DOM */

const myData = window.POKEMON.pokemon; //const para acceder a la data
const container = document.getElementById("root");
const sum = document.getElementById('calculation'); //div para mostrar calculo

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

  //CALCULO
//Dentro de la funcion se pide que aparezca el del calculo
document.getElementById("pok-filter").addEventListener("change",() => {
  document.getElementById("calculation").style.display = "block";
  let type = document.getElementById("pok-filter").value; 
  let calcResult = window.computeStats(myData,type);
  sum.innerHTML ="";
  sum.innerHTML +=  `
  <div>
  <p> Del total de pokemones; ${calcResult} son de tipo </p>
  </div> 
  `    
});

  


  