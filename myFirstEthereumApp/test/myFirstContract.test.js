const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const contract = require('../compile');

let accounts;
let myFirstContract;
const INIT_MESSAGE = "Hi there";

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  myFirstContract = await new web3.eth.Contract(JSON.parse(contract.interface))
  .deploy({ data: contract.bytecode, arguments: [INIT_MESSAGE]})
  .send({ from: accounts[0], gas : 1000000});
});

describe('Tests for my first contract deployment', () => {
  it('deploys my first contract (has an address)', () => {
    assert.ok(myFirstContract.options.address);
  });

  it('myvariable has a default message', async () => {
    const myvariable = await myFirstContract.methods.myvariable().call();
    console.log("myvariable value is: ", myvariable);
    assert.equal(myvariable,INIT_MESSAGE);
  });

  it('can set myvariable', async () => {
    await myFirstContract.methods.setVariable('It is me! Mario!').send({ from: accounts[0] });
    const myvariable = await myFirstContract.methods.myvariable().call();
    assert.equal(myvariable, 'It is me! Mario!');
  });

});

