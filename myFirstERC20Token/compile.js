const solc = require('solc');
const path = require('path');
const fs = require('fs');

const contractPath = path.resolve(__dirname, 'contracts','FixedSupplyToken.sol');
const source = fs.readFileSync(contractPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':FixedSupplyToken'];

//console.log(module.exports);