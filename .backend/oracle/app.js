require("dotenv").config();
const { ethers } = require("ethers");
const cron = require("node-cron");

const PRICEORACLE_ABI = require("../abi/PriceOracle.sol/PriceOracle.json");
const EACAGGREGATORPROXY_ABI = require("../abi/EACAggregatorProxy.sol/EACAggregatorProxy.json");

const MODE_RPC_PROVIDER = process.env.MODE_RPC_PROVIDER;
const ETH_RPC_PROVIDER = process.env.ETH_RPC_PROVIDER;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/**
 * Manages price oracle updates to chain
 */

const MODE_provider = new ethers.JsonRpcProvider(MODE_RPC_PROVIDER);
const MODE_signer = new ethers.Wallet(PRIVATE_KEY, MODE_provider);

async function updateOracle(contractAddress, token, price) {
    const PriceOracle_Contract = new ethers.Contract(
        contractAddress,
        PRICEORACLE_ABI.abi,
        MODE_signer
    );

    const transaction = await PriceOracle_Contract.updatePrices(token, price);
    console.log(transaction);
}

// updateOracle(process.env.ORACLE_ADDRESS, )

const ETH_provider = new ethers.JsonRpcProvider(ETH_RPC_PROVIDER);
const ETH_signer = new ethers.Wallet(PRIVATE_KEY, ETH_provider);

async function getPrice(contractAddress) {
    const EACAggregatorProxy_Contract = new ethers.Contract(
        contractAddress,
        EACAGGREGATORPROXY_ABI.abi,
        ETH_signer
    )

    const [roundId, answer, startedAt, updatedAt, answeredInRound] = await EACAggregatorProxy_Contract.latestRoundData();
    console.log(answer);
    console.log(typeof answer)
    return answer;
}

// getPrice(process.env.EAC_AGGREGATOR_PROXY_ADDRESS).then((price) => updateOracle(process.env.ORACLE_ADDRESS, process.env.WETH_ADDRESS, price));

cron.schedule('*/30 * * * *', async () => {
    try {
        const price = await getPrice(process.env.EAC_AGGREGATOR_PROXY_ADDRESS);
        const res = await updateOracle(process.env.ORACLE_ADDRESS, process.env.WETH_ADDRESS, price);
        console.log(res);
        console.log("Cycle completed")
    } catch (err) {
        console.log("error", err);
    }
})