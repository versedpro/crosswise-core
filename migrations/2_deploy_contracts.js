const FoxchainFactory = artifacts.require("CrosswiseFactory");
// require('dotenv').config();

module.exports = function (deployer) {
  deployer.deploy(FoxchainFactory, '0xa3C4fFD5Fb5f9F4c1DA865EF2bD2B6EC65B6c235');
};
