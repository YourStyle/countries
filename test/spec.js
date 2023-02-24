const utils = require('..');
const assert = require('assert')

assert.strictEqual(utils.checkAbbreviation('США'), true);

// console.log(`\u001B[32m✓\u001B[39m Tests passed`);

assert.strictEqual(utils.returnChangedCountry('Гана', 'genitive'), 'Ганы');
assert.strictEqual(utils.returnChangedCountry('Гана', 'accusative'), 'Гану');


console.log(`\u001B[32m✓\u001B[39m Tests passed`);
