pragma solidity ^0.4.16;

contract Arrangement {
    
     address private arranger;
     address private arrangee;
     uint private direction;
     bool private signed;
     mapping(uint => uint) private range;
    //variables

    //functions
     function Arrangement (address _arranger,address arrangee, uint _direction, mapping(uint => uint) _range) public {
        //initialize the arrangement of the two accounts
        //signed == false
    }

     function SignArrangement(address signer) public returns (bool) {
         //signed ==true
    }

     
}
