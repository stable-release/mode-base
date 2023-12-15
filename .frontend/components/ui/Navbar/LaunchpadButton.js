import Link from "next/link";

import s from "./Navbar.module.css";

import { WalletSignerContext } from "../Context/Context";

export default function LaunchpadButton({walletSigner}) {
    return (
        <WalletSignerContext.Provider value={walletSigner}>
            {walletSigner && (
                <Link href="/launchpad" className={s.link}>
                    Launchpad
                </Link>
            )}
        </WalletSignerContext.Provider>
    );
}
