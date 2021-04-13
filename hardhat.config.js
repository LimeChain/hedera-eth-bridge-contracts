/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const INFURA_KEY = "14ac2dd6bdcb485bb22ed4aa76d681ae";
const DEPLOYER_PRIVATE_KEY = "c44377c50845ee070c98c4295bde42f2fbf5a91e81ce2d6d23683291f23dfe0a";

const lazyImport = async (module) => {
  const importedDefault = await import(module);
  return importedDefault.default;
};

task("deploy", "Deploys the hedera eth bridge")
  .setAction(async taskArgs => {
    const registryDeployer = await lazyImport('./deployment/deploy.js');

    await registryDeployer();
  });

module.exports = {
  solidity: {
    version: "0.6.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    local: {
      url: 'http://127.0.0.1:8545',
      accounts: [
        'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
        '59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
        '5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
      ]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: [
        DEPLOYER_PRIVATE_KEY
      ]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_KEY}`,
      accounts: [
        DEPLOYER_PRIVATE_KEY
      ]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: [
        DEPLOYER_PRIVATE_KEY
      ]
    }
  },
  mocha: {
    timeout: 20000
  }
};