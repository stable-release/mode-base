import Link from "next/link";

import s from "./Navbar.module.css";

import { WalletSignerContext } from "../Context/Context";

export default function ApplicationButton({walletSigner}) {
    return (
        <WalletSignerContext.Provider value={walletSigner}>
            {walletSigner && (
                <Link href="/Application" className={s.link}>
                    Application
                </Link>
            )}
        </WalletSignerContext.Provider>
    );
}