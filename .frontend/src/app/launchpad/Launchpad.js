"use client";

import s from "./Launchpad.module.css";

import Link from "next/link";

export default function Launchpad() {
    return (
        <div className="flex flex-col">
            Launchpad - Create Tokens, LPs, and Anything to kickstart your DeFi
            project
            <Link href="/launchpad/tokens" className={s.link}>
                <div className="border border-white rounded">Tokens</div>
            </Link>
        </div>
    );
}
