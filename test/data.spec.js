global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [
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

  describe('data', () => {
    it('debería ser un objeto', () => { //it= que quiero testiar de la funcion
      assert.equal(typeof data, 'object');
    });
    describe('data,filter', () => {
     it('debería ser una función', () => {
      assert.equal(typeof data.filter, 'function');
    });
      
      })
    })
