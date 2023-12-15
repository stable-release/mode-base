"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavElements() {
    const router = useRouter();
    const [walletSigner, setWalletSigner] = useState(null);
    return (
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
            <div className="flex items-center flex-1">
                <nav className="hidden ml-6 space-x-2 lg:block">
                </nav>
            </div>
            <div className="flex justify-end flex-1 space-x-8">
                <ConnectButton reloadRouter={router} walletSigner={walletSigner} setWalletSigner={setWalletSigner}/>
            </div>
        </div>
    );
}