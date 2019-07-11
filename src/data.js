/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



const filterPoke = (myData,type) => {
  let result= myData.filter(element => {
  return element.type.includes(type);
 })
  return result
 }  
 window.filterPoke = filterPoke;

 const containerRoot = document.getElementById('root');
const selectname = document.getElementById('name');
let sortPokes = (myData,sortBy,sortOrder)=> {
 let orderaPokes = myData;
 if (sortOrder == "a-z"){
orderaPokes.sort((a,b)=> {
 if (a[sortBy] < b[sortBy]) {return -1;}
 if (a[sortBy] > b[sortBy]) {return  1;}
 return 0;
})
}
if (sortOrder == "z-a"){
  orderaPokes.sort((a,b)=> {
   if (a[sortBy] > b[sortBy]) {return -1;}
   if (a[sortBy] < b[sortBy]) {return  1;}
   return 0;
  })
}
return orderaPokes;
}

const computeStats = (myData,type) => {
  let calculateResult = filterPoke(myData,type).length;  
  return calculateResult;

 }
 //length: que mi funcion calculate me devuleva el numero de elmentos que contiene el filtro que eligió el usuario
 window.computeStats = computeStats;

