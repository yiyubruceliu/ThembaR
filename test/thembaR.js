var ThembaR = artifacts.require("./ThembaR.sol");

contract('ThembaR', function(accounts) {
    it("should put 0 ThembaR tokens in the first account", function() {
        return ThembaR.deployed().then(function(instance) {
          return instance.balanceOf.call({from: web3.eth.accounts[1], gas:3000000});
        }).then(function(balance) {
          assert.equal(balance.valueOf(), 0, "0 was in the first account");
        });
      });
      
});