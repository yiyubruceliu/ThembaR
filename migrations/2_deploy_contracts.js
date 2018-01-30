var MiniMeTokens = artifacts.require("./../node_modules/minimetoken/contracts/MiniMeToken.sol");
var Agreement = artifacts.require("./Agreement.sol");
var ThembaRFactory = artifacts.require("./ThembaRFactory.sol");
var ThembaR = artifacts.require("./ThembaR.sol");


module.exports = function(deployer) {
  deployer.deploy(MiniMeTokens);
  deployer.deploy(Agreement);
  deployer.deploy(ThembaRFactory);
  deployer.deploy(ThembaR);
};
