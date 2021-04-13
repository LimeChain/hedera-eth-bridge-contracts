const Router = require("../../build/Router.json");
const ethers = require("ethers");
const yargs = require("yargs");

const INFURA_PROVIDER = "14ac2dd6bdcb485bb22ed4aa76d681ae";

const argv = yargs.option("secret", {
    alias: "prk",
    description: "Wallet private key",
    type: "string",
}).option("network", {
    alias: "n",
    description: "Ethereum network",
    type: "string",
}).option("routerAddress", {
    alias: "r",
    description: "Deployed router token",
    type: "string",
}).option("memberAddress", {
    alias: "m",
    description: "Member address",
    type: "string",
}).option("memberStatus", {
    alias: "s",
    description: "The status of the member address",
    type: "boolean",
}).argv;

async function updateMember() {
    const provider = new ethers.providers.InfuraProvider(argv.network, INFURA_PROVIDER);
    const adminWallet = new ethers.Wallet(argv.secret, provider);
    const routerInstance = new ethers.Contract(argv.routerAddress, Router.abi, adminWallet);

    let transaction = await routerInstance.updateMember(argv.memberAddress, argv.memberStatus, {
        gasLimit: 3000000
    });
    console.log("Transaction hash:", transaction.hash);
};

updateMember();