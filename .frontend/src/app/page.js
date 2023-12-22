import Link from "next/link";

export default function index() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className=" text-3xl">
                &gt; Decentralized Financial AIO Launchpad
            </h1>
            <div className="text-2xl pt-3">&gt; What?</div>
            <div className="text-xl">&gt; No hidden fees</div>
            <div className="text-xl">&gt; Creators earn 100% SFS</div>
            <div className="text-xl">
                &gt; Owned by the community factory workers
            </div>
            <div className="text-2xl pt-3">&gt; Why?</div>
            <div className="text-xl">&gt; Because me poor D:</div>
            <h1 className=" text-3xl pt-3">&gt; How To Use</h1>
            <div className="text-xl">
                1. Create a{" "}
                <Link
                    href="/launchpad/tokens"
                    className="border border-white rounded"
                >
                    token
                </Link>
            </div>
            <div className="text-xl">
                2.{" "}
                <Link
                    href="/launchpad/pools"
                    className="border border-white rounded"
                >
                    Pool
                </Link>{" "}
                new liquidity
            </div>
            <div className="text-xl">
                3. Swap and{" "}
                <Link
                    href="/launchpad/trade"
                    className="border border-white rounded"
                >
                    Trade
                </Link>
            </div>
            <div className="text-xl">
                3. Earn{" "}
                <Link
                    href="/application"
                    className="border border-white rounded"
                >
                    fees
                </Link>{" "}
                and{" "}
                <a
                    className="border border-white rounded"
                    href="https://www.youtube.com/watch?v=_TWuH4mCFGo"
                >
                    be happy :D
                </a>
            </div>
        </div>
    );
}
