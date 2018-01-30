var Agreement = artifacts.require("./Agreement.sol");
import "./BasicToken.sol";
var ThembaR = artifacts.require("./ThembaR.sol");


module.exports = function(deployer) {
  deployer.deploy(StandardToken).then(() =>{
    return StandardToken.deployed()
      .then((result) => {
        return ThembaR.new()
          }).then((instance) => {
            token = instance.address
            return Agreement.new(token.address)
          })
       })

};
