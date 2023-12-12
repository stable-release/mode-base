import Link from "next/link";

import ConnectButton from "./ConnectButton";

import s from "./Navbar.module.css";


export default async function Navbar() {
    return (
        <nav className={s.root}>
                <div className="max-w-6xl px-6 mx-auto">
                    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
                        <div className="flex items-center flex-1">
                            <nav className="hidden ml-6 space-x-2 lg:block">
                                <Link href="/" className={s.link}>
                                    ProtoPip
                                </Link>
                                {true && (
                                    <Link href="/account" className={s.link}>
                                        Account
                                    </Link>
                                )}
                            </nav>
                        </div>
                        <div className="flex justify-end flex-1 space-x-8">
                            <ConnectButton />
                        </div>
                    </div>
                </div>
        </nav>
    );
}
