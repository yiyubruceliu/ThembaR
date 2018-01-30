var ThembaR = artifacts.require("./ThembaR.sol");


contract('ThembaR', function(accounts) {
    it("should put 0 ThembaR tokens in the first account", function() {
        return ThembaR.deployed().then(function(instance) {
          return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {

          assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
          // assert.equal(web3.sha3(balance), 0, "0 was in the first account");
        });
      });

      it("symbol should equal egt", function() {
        return ThembaR.deployed().then(function(instance) {
          instance = new ThembaR()
          return instance.symbol
        }).then(function(balance) {
          assert.equal(balance.valueOf(), ("EGT"),
              "the owner address was null");
        });
      });
    it("owner of the contract should not be null", function() {
      return ThembaR.deployed().then(function(instance) {
        return instance._owner
      }).then(function(balance) {
        assert.notEqual(balance.valueOf(), (null),
            "the owner address was null");
      });
    });
    it("should have {10000 * (10 ** decimals)} of initial supply", function() {
        return ThembaR.deployed().then(function(instance) {
          return instance.balanceOf(instance._owner);
        }).then(function(balance) {
          assert.equal(balance.toNumber(), (10000),
             "0 was in the first account");
        });
      });
});