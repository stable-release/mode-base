"use client";

import { createContext, useEffect, useState } from "react";

import { ethers } from "ethers";
import {
    configureChains,
    WagmiConfig,
    createConfig,
} from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { modeTestnet } from "viem/chains";

const { publicClient } = configureChains(
    [modeTestnet],
    [
        jsonRpcProvider({
            rpc: (chain) => ({
                http: "https://sepolia.mode.network/",
            }),
        }),
    ]
);

const config = createConfig({
    autoConnect: true,
    publicClient,
});

export const WalletSignerContext = createContext(null);

export default function Context({ children }) {
    const [walletSigner, setWalletSigner] = useState(null);

    useEffect(() => {
        const provider = window.ethereum
            ? new ethers.BrowserProvider(window.ethereum)
            : ethers.getDefaultProvider();

        const connectedAccounts = async () => {
            const accounts = await provider.listAccounts();
            if (accounts[0]) {
                setWalletSigner(accounts[0].address);
            }
        };

        connectedAccounts();
    }, []);
    return (
        <WalletSignerContext.Provider value={walletSigner}>
            <WagmiConfig config={config}>{children}</WagmiConfig>
        </WalletSignerContext.Provider>
    );
}
