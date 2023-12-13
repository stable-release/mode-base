"use client";

import { Wallet, ethers } from "ethers";

import s from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { WalletSignerContext } from "../Context/Context";
import WalletValue from "./WalletValue";

export default function ConnectButton({
    reloadRouter,
    walletSigner,
    setWalletSigner,
}) {
    const [connectAttempt, setConnectAttempt] = useState(false);

    useEffect(() => {
        const handleConnect = async () => {
            const provider = window.ethereum
                ? new ethers.BrowserProvider(window.ethereum)
                : ethers.getDefaultProvider();

            let signer = null;
            let walletAddress = null;
            try {
                signer = await provider.getSigner();
                const accounts = await provider.listAccounts();
                if (accounts[0]) {
                    walletAddress = accounts[0].address;
                }
                let date = new Date().toJSON();
                const signedMessage = await signer.signMessage(
                    `> ${date} > ${accounts[0].address} > ProtoPip > Make sure you are on the correct website`
                );
                // console.log(signedMessage);

                const signedAddress = await ethers.verifyMessage(
                    `> ${date} > ${accounts[0].address} > ProtoPip > Make sure you are on the correct website`,
                    signedMessage
                );
                // console.log(signedAddress);
                setConnectAttempt(false);
                setWalletSigner(walletAddress);
            } catch (error) {
                console.error(error);
                signer = null;
                setWalletSigner(signer);
                setConnectAttempt(false);
            }
        };
        if (connectAttempt) {
            handleConnect();
        }

        return () => {
            setConnectAttempt(false);
        };
    }, [connectAttempt]);

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
            <button className={s.link} onClick={() => setConnectAttempt(true)}>
                <WalletValue />
            </button>
        </WalletSignerContext.Provider>
    );
}
