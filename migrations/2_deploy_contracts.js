var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var MiniMeTokens = artifacts.require("./../node_modules/minimetoken/contracts/MiniMeToken.sol");
var ArrangementFactory = artifacts.require("./ArrangementFactory.sol");
var Arrangement = artifacts.require("./Arrangement.sol");
var ThembaRFactory = artifacts.require("./ThembaRFactory.sol");
var ThembaR = artifacts.require("./ThembaR.sol");


module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(MiniMeTokens);
  deployer.deploy(ArrangementFactory)
  deployer.deploy(Arrangement);
  deployer.deploy(ThembaRFactory);
  deployer.deploy(ThembaR);

};
