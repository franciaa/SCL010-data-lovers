// const filterPoke= (myData, condition) => {
//   const resultFilterPoke = myData.filter(element =>{

//   })}

//recorrer data
window.onload=() =>{

  const sum = document.getElementById('calculation');
  
  //ordenar
const pokeOrder= document.getElementById("name");
pokeOrder.addEventListener('change', () => {
  let sortOrder = pokeOrder.value;
  let selectionOrder = sortPokes(myData,"name",sortOrder);
  container.innerHTML ="";    
  selectionOrder.forEach(element=> {
      container.innerHTML += `
      <div class="flip-card">
 <div class="flip-card-inner">

   <div class="flip-card-front">
     <img id="img-card" src=${element.img} alt="Avatar">
     <h4>${element.name}</h4> 
    </div>

    <div class="flip-card-back">
      
      <h4 id="type-poke">Tipo:${element.type}</h4> 
      <p"number-poke">${element.num}</p>
    </div>
  </div>
 </div>`  
 

  })
 })
  
//const para acceder a la data
const myData =window.POKEMON.pokemon; 

//DOM FUNCIÓN FILTRAR
const container = document.getElementById("root");

document.getElementById("pok-filter").addEventListener("change",() => {// esta imprimiendo el resultado solo en el select, juntar las cartas con el filtro//
   let tipoFilter = document.getElementById("pok-filter").value;
   let lastResult = window.filterPoke(myData,tipoFilter);
   container.innerHTML ="";
   lastResult.forEach(element => {
       container.innerHTML += `
   
    <div class="flip-card">
 <div class="flip-card-inner">

   <div class="flip-card-front">
     <img id="img-card" src="${element.img}" alt="Avatar">
     <h4>${element.name}</h4> 
    </div>

    <div class="flip-card-back">
    
      <h4 id="type-poke">Tipo:${element.type}</h4> 
      <p"number-poke">${element.num}</p>
      <p "weigh
    </div>
  </div>
 </div>`  

  })
   })
   
  //  Dentro de la funcion se pide que aparezca el del calculo
document.getElementById("pok-filter").addEventListener("change",() => {
 document.getElementById("calculation").style.display = "block";
 let type = document.getElementById("pok-filter").value;
 let calcResult = window.computeStats(myData,type);
 sum.innerHTML ="";
 sum.innerHTML +=  `
 <div>
 <h3> Del total de pokemones; ${calcResult} son de tipo </h3>
 </div>
 `
});
}