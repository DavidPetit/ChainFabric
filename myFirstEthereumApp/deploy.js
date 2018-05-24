const WalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const contract = require('./compile');
const fs = require('fs');
const mnemonic = fs.readFileSync('../mnemonic.txt', 'utf8');
const infuraUrl = fs.readFileSync('../infura.txt', 'utf8');

let web3 = new Web3();
let provider;
let accounts = [];

provider = new WalletProvider(
  mnemonic,
  infuraUrl
);
web3.setProvider(provider);

const deploy = async () => {
  try{
    accounts = await web3.eth.getAccounts();
    console.log("Get accounts. Accounts[0]: ",accounts[0]);
  } catch(err){
    console.log(err);
  }

  try{
    const result = await new web3.eth.Contract(JSON.parse(contract.interface))
    .deploy({ data: contract.bytecode, arguments: ['Hello!'] })
    .send({ gas: 1000000, from: accounts[0] });
    console.log("Contract deployed to: ", result.options.address);
  } catch(err){
    console.log(err);
  }
};

deploy();