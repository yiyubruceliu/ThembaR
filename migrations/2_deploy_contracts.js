var Agreement = artifacts.require("./Agreement.sol");
var BasicToken = artifacts.require("./BasicToken.sol");
var ThembaR = artifacts.require("./ThembaR.sol");


module.exports = function(deployer) {
  deployer.deploy(ThembaR)

};
