// eslint-disable-next-line no-undef
const MyContract = artifacts.require("MyContract");

module.exports = function(deployer) {
    deployer.deploy(MyContract);
};
