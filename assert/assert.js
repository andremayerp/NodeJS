const assert = require('assert');
assert.equal(1,1);
assert.notEqual(1,2);
assert(50>49, 'Mensagem de erro');
assert.notEqual(1,2);

var x = { a : { n: 0 } };
var y = { a : { n: 0 } };
var z = { a : { n: 1 }, };
assert.deepEqual(x, y); //OK
assert.deepEqual(x, z); /*AssertionError: { a: { n: 0 } } deepEqual {a: { n: 1 } }*/
//deepEqual compara o objeto e seus atributos