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

 //const containerRoot = document.getElementById('root');
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
// const containerRoot = document.getElementById('root');
// const selectname = document.getElementById('num');let sortPokes = (myData,sortBy,sortOrder)=> {
//  let orderaPokes = myData;
//  if (sortOrder == "1-151"){
// orderaPokes.sort((a,b) => {
//  if (a[sortBy] < b[sortBy]) {return -1;}
//  if (a[sortBy] > b[sortBy]) {return  1;}
//  return 0;
// })
//
