const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const contract = require('../compile');

let FixedSupplyToken;
const setSymbol = "DAV";
const setName = "DAV Token";
const setDecimals = 2;
const nbTokens = 500000000000;


beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  FixedSupplyToken = await new web3.eth.Contract(JSON.parse(contract.interface))
  .deploy({ data: contract.bytecode, arguments: [setSymbol, setName, setDecimals, nbTokens]})
  .send({ from: accounts[0], gas : 1000000});
});

describe('Tests for ERC20 token deployment', () => {
  it('deploys ERC20 token contract (has an address)', async () => {
    assert.ok(FixedSupplyToken.options.address);
    console.log(FixedSupplyToken.options.address);
    const symbol = await FixedSupplyToken.methods.symbol().call();
    console.log("symbol value is: ", symbol);
    const name = await FixedSupplyToken.methods.name().call();
    console.log("name value is: ", name);
    const decimals = await FixedSupplyToken.methods.decimals().call();
    console.log("decimals value is: ", decimals);
    const _totalSupply = await FixedSupplyToken.methods._totalSupply().call();
    console.log("_totalSupply value is: ", _totalSupply);
  });

  it('has symbol etc', async () => {
    console.log(FixedSupplyToken.options.address);
    const symbol = await FixedSupplyToken.methods.symbol().call();
    console.log("symbol value is: ", symbol);
    const name = await FixedSupplyToken.methods.name().call();
    console.log("name value is: ", name);
    const decimals = await FixedSupplyToken.methods.decimals().call();
    console.log("decimals value is: ", decimals);
    const _totalSupply = await FixedSupplyToken.methods._totalSupply().call();
    console.log("_totalSupply value is: ", _totalSupply);
  });

});

