var Agreement = artifacts.require("./Agreement.sol");
var MiniMeFactory = artifacts.require("./MiniMeTokenFactory.sol");
var ThembaR = artifacts.require("./ThembaR.sol");


module.exports = function(deployer) {
  deployer.deploy(MiniMeFactory).then(() =>{
    return MiniMeFactory.deployed()
      .then((result) => {
        factory = result.address
        return ThembaR.new(factory.address)
          }).then((instance) => {
            token = instance.address
            return Agreement.new(token.address)
          })
       })

};
