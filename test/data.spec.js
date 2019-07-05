global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filter', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filter, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})
