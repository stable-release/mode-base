# PIPO STATION

### A DeFi Launchpad

[DEMO](https://mode-frontend.onrender.com/ "PIPO Station")

#### Create tokens, Swap LP, Earn positions, Generate Fees

#### Powered by PIPO Station's Algorithmic Stablecoin

## Documentation

Project is set up as a monorepo.

Dev and build commands should be run within corresponding paths.


ie. `npm run build` in `./.frontend/`


Should be deployed in order:
- .backend/api
- scripts/**.s.sol
- .backend/abi
- .frontend/


## Testnet Contract Addresses

Smart Contract | Sepolia Address
-------------- | ---------------
Price Feed | `0xF81Fa4a8261ee839dDb79F2e131114c9F93D8656`
WETH | `0x4162b604dAC2d93087EFaF5D4A840014252670dB`
Algebra Factory | `0x33bd4defeCD3fF962C73e0FAE3831986B6b470Ba`
Algebra Pool Deployer | `0x3D1A4a339F11E49AbB39B8d1A7A84eAb493495E5`
Base Plugin Factory | `0x2d1688300112bCF6e6CDc082aE7F59e5F1b9C9B5`
Core Coin (Test Token) | `0x3b2B00C184C492E2f203fC470142C9BF05012515`
Token Factory | `0xf438098deb442d0b954e06dc31d1f19148d2fc31`

## On-Chain Price Oracles

### Updated straight from [Chainlink](https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1 "Chainlink Price Feeds") using "trust me bro" security with node-cron

## Contracts

### Contracts are all untested. Currently recommended do not use for production. Might not even work.

## NextJS Deploy

```
.frontend
```
Fill in `.env`

Start: `npm run dev` 

Build: `npm i -y; npm run build`

Deploy: `npm run start`

## API Deploy

```
.backend
```

Fill in `.env`

*Note: Database should be PostgreSQL:url

Start: `npm run dev`

Deploy: `npm run start`

## Price Oracle Scheduler Deploy

```
.backend
```

Fill in `.env`

Start: `node ./oracle/app.js`

## Smart Contracts Deploy

```
script
```

Deploy scripts are in `./script`.

Replace `${MNEMONIC}` with deployer mnemonic.

Run in WSL on Windows or in Terminal:

`RUST_BACKTRACE=1 forge script script/${PATH_TO_SCRIPT}.s.sol:DeployScript  --rpc-url modesepo --broadcast --verify -vvvv`