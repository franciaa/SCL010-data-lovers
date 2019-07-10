// const filterPoke= (myData, condition) => {
//   const resultFilterPoke = myData.filter(element =>{

//   })}

//recorrer data
window.onload=() =>{

 
  
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
     <img id="img-card" src="${element.img}" alt="Avatar">
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
const myData = POKEMON.pokemon; 

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
    </div>
  </div>
 </div>`  

  })


   })
   
//   showcards(POKEMON.pokemon)


//  function showcards(filterPoke){

  

//  document.getElementById('root').innerHTML='';

// document.getElementById('pokemon-list').innerHTML='';
// for(let i=0; i<filterPoke.length; i++){

//  document.getElementById('pokemon-list').innerHTML+=`

// <div class="col s6 m3 l3">

/*{ <div class="flip-card">
 <div class="flip-card-inner">

   <div class="flip-card-front">
     <img id="img-card" src="${filterPoke[i].img}" alt="Avatar">
    </div>

    <div class="flip-card-back">
      <p>${filterPoke[i].name}</p> 
      <p id="type-poke">Tipo:${filterPoke[i].type}</p> 
      <p"number-poke">${filterPoke[i].num}</p>
    //</div>
  //</div>
//  </div> }*/
//   </div>`

// }
/*{ <div class="img">
<img src="${element.img}">
</div>
<h3>${element.name}</h3>
<p>${element.type}</p>`
// } }*/





};
