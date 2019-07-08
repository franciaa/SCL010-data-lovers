global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const Data = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "egg": "2 km",
    "type": [
      "Grass",
      "Poison"
    ]
  }, {
    "id": 46,
    "num": "046",
    "name": "Paras",
    "egg": "2 km",
    "type": [
      "Grass"
    ]
  }, {
    "id": 101,
    "num": "101",
    "name": "Electrode",
    "egg": "Not in Eggs",
    "type": [
      "Electric"
      
    ]
  }
]
  //hago mi test bàsico de que deberia ser una funciòn

  describe('Data.filter', () => {
  
    it('debería ser una función', () => {
      assert.equal(typeof window.Data.filter, 'function');
    });
    it('debería retornar el objeto Pikachu al filtrar por tipo Electric', () => {
      assert.deepEqual(window.Data.filter(Data, "Electric"), [{
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "egg": "2 km",
        "type": [
          "Electric"
        ]
      }]
      )}
      )})
