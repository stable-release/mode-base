"use client";

import { createContext, useEffect, useState } from "react";

import { Wallet, ethers } from "ethers";

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
            {children}
        </WalletSignerContext.Provider>
    );
}
