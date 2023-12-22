"use client";

import Link from "next/link";

import ConnectButton from "./ConnectButton";

import s from "./Navbar.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ApplicationButton from "./ApplicationButton";
import LaunchpadButton from "./LaunchpadButton";

export default function NavElements() {
    const router = useRouter();
    const [walletSigner, setWalletSigner] = useState(null);
    return (
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
            <div className="flex items-center flex-1">
                <nav className="hidden ml-6 space-x-2 lg:block">
                    <Link href="/" className={s.link}>
                        Pipo Labs
                    </Link>
                    <LaunchpadButton walletSigner={walletSigner} />
                    <ApplicationButton walletSigner={walletSigner}/>
                </nav>
            </div>
            <div className="flex justify-end flex-1 space-x-8">
                <ConnectButton reloadRouter={router} walletSigner={walletSigner} setWalletSigner={setWalletSigner}/>
            </div>
        </div>
    );
}
