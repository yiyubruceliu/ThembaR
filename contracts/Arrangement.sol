pragma solidity ^0.4.16;

contract OrganisationAgreements {
    
    struct Agreement {
        address  arranger;
        address arrangee;
        uint  direction;
        bool  signed;
        mapping(uint => uint) range;
    }
    Agreement[] agreements;
    //variables

    //functions
     function OrganisationAgreements (

    }

     function SignArrangement(address signer) public returns (bool) {
         //signed ==true
    }

     
}
