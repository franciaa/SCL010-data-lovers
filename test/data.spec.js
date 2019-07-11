global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe(() => {
  
  it('debería ser una función', () => {
    assert.equal(typeof pok-filter, 'function');
  });

  it('debería retornar "example"', () => {
    assert.equal(example(), 'example');
  });
})

