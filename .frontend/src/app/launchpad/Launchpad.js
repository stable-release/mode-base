"use client";

import s from "./Launchpad.module.css";

import Link from "next/link";

export default function Launchpad() {
    return (
        <div className="flex">
            <Link href="/launchpad/tokens" className={s.link}>
                <div className="border border-white rounded p-1">TOKENS</div>
            </Link>
            <Link href="/launchpad/trade" className={s.link}>
                <div className="border border-white rounded p-1">TRADE</div>
            </Link>
            <Link href="/launchpad/pools" className={s.link}>
                <div className="border border-white rounded p-1">POOLS</div>
            </Link>
        </div>
    );
}
