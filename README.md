<div align="center">

# Hedera <-> Ethereum Bridge Contracts

</div>

This repository contains the smart contracts for the Hedera <-> Ethereum bridge.
Contracts consist of the ERC20 WHBAR and the Bridge contract responsible for the minting/burning of tokens.

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

-   Deploys the WHBAR token and Governance contracts
-   Generates three member accounts and send them 0.1 ethers

-   Sets the required validators to be members of the Governance contract
-   Prints out WHBAR, Bridge, Alice, Bob and Carol Wallets

#### How to run:

```
etherlime compile --solcVersion 0.6.0
```

```
etherlime deploy ./deployment/testnet-env-deployments.js --compile false --network /network name or id/ --secret /your private key/
```

#### Hedera deployment (3 accounts + topic)

```
OPERATOR_KEY=... OPERATOR_ID=... node ./scripts/hedera-deploy.js
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
