var PeggleCoin = artifacts.require("./PeggleCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(PeggleCoin);
};
