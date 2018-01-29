pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "./../node_modules/minimetoken/contracts/MiniMeToken.sol";

contract TestDiscoveryToken {
    function createDiscoveryCloneToken() public {


        MiniMeToken dtokens = new MiniMeToken(
            0x00000000000000123, 
            0x00000000000000124, 
            0, 
            "Discovery Poes Tokens",
            0,
            "VP",
            true);

        uint expected = 0; //the balance should be 0 in init.

        
        Assert.equal(dtokens.balanceOf(tx.origin), expected,
         "Owner should have 0 tokens when created");

        Assert.equal(dtokens.generateTokens(tx.origin, 69), true,
        "Generation was successful");

        Assert.equal(dtokens.balanceOf(tx.origin), 69,
        "Generated balance reflected after generation");

        
    }
}
