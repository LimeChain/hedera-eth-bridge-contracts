<div align="center">

# Hedera <-> Ethereum Bridge Contracts

</div>

This repository contains the smart contracts for the Hedera <-> Ethereum bridge.
Contracts consist of `ERC20` representaitons of Hedera Assets and `Router` contract, responsible for the minting/burning of tokens.

## Contract Addresses & ABI

This is a WIP and the contracts have not been deployed yet.

## Development

`etherlime` - framework used for the development and testing of the contracts

### Compilation

Before you deploy the contracts, you will need to compile them using:

```
etherlime compile --solcVersion 0.6.0
```

### Scripts

#### Eth deployment - local

```
etherlime deploy
```

#### Eth deployment

```
etherlime deploy --network 'network' --secret '0x..'
```

### Deploy for testnet with three members

-   Deploys the ERC20 representation of HBAR Asset (WHBAR) and Router contract
-   Generates three member accounts and sends them 0.1 ethers

-   Sets the required validators to be members of the Router contract
-   Prints out WHBAR, Router, Alice, Bob and Carol Wallets

#### How to run:

```
etherlime compile --solcVersion 0.6.0
```

```
etherlime deploy ./deployment/setup-scripts/testnet-env-deployments.js --compile false --network /network name or id/ --secret /your private key/ --deployToken /hedera token id, optional for deploying custom token/ --membersCount /The count od the members set in the contract/
```

#### Deploy Token

```
etherlime deploy ./deployment/setup-scripts/deploy-token.js --compile false --network /network name or id/ --secret /your private key/ --controllerAddress=/The address of the deployed controller contract/
```

#### Update Token

```
node ./deployment/setup-scripts/update-token.js --network /network name or id/ --secret /your private key/ --routerAddress=/The address of the deployed router/ --tokenAddress=/The address of the deployed token/ --wrappedToken=/hedera token id/ --tokenStatus=/token status true or false/
```

#### UpdateMember

```
node ./deployment/setup-scripts/update-member.js --network /network name or id/ --secret /your private key/ --routerAddress /The address of the deployed router contract/ --memberAddress /The address of the member/ --memberStatus /Status of the member/
```

## Diagrams

UML diagram for the 2 major contracts are presented here.

### Bridge contract

<div align="center" style="width:50%">

![bridge](/img/bridge.png "Bridge contract")

</div>

### Governance contract

<div align="center" style="width:50%">

![governance](/img/gov.png "Governance contract")

</div>
