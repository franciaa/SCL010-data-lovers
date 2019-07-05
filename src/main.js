/* Manejo del DOM */

const myData = POKEMON.pokemon; //const para acceder a la data
const container = document.getElementById("root");

 for (let i = 0; i< myData.length; i++){
  
  let pokemonInfo = document.createElement("div");
 pokemonInfo.id = "pokeInfo";
 pokemonInfo.className = "pokeInfo";

 let pokemonName = document.createElement("p");
 pokemonName.textContent = myData[i].name;

 let pokemonImagen = document.createElement("img");
 pokemonImagen.src = myData[i].img;
 pokemonImagen.className = "pokeImagen";

 let pokemonId = document.createElement("p");
 pokemonId.textContent = myData[i].id;

 pokemonInfo.appendChild(pokemonName);
 pokemonInfo.appendChild(pokemonImagen);
 pokemonInfo.appendChild(pokemonId);
document.getElementById("container").appendChild(pokemonInfo).innerHTML;

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
  