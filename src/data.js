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
