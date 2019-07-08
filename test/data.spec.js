global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


const data = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ]
  }, {
    "id": 46,
    "num": "046",
    "name": "Paras",
    "type": [
      "Bug",
      "Grass"
    ]
  }, {
    "id": 101,
    "num": "101",
    "name": "Electrode",
    "type": [
      "Electric",
    
    ]
  }
]

describe('data.filterType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof window.data.filterType, 'function');
  });
})
