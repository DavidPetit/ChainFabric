const solc = require('solc');
const path = require('path');
const fs = require('fs');

const contractPath = path.resolve(__dirname, 'contracts','MyFirstContract.sol');
const source = fs.readFileSync(contractPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':MyFirstContract'];

//console.log(module.exports);