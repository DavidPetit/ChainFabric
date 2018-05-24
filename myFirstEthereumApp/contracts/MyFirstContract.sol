pragma solidity ^0.4.23;

contract MyFirstContract{
    string public myvariable; 

    constructor(string initMyvariable) public{
     myvariable = initMyvariable;
    }

    function setVariable(string newMyvariable) public {
     myvariable = newMyvariable;
    }

    function getVariable() public view returns (string) {
     return myvariable;
    }
}
