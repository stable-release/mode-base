import { useEffect, useState } from "react";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { usePrepareContractWrite } from "wagmi";

const POOL_FACTORY_ABI = require("../../../../abi/AlgebraFactory.sol/AlgebraFactory.json");

export default function PoolForm() {
    const [formData, setFormData] = useState({
        tokenA: "0xcD13DDc7c658E1d0030456594924D3C34Bf227a8",
        tokenB: "0x6bbdfc0827d5641f046a6A88938AE7FBdE322C41",
    });
    const [submit, setSubmit] = useState(false);

    // wagmi config
    const { config } = usePrepareContractWrite({
        address: "0x33bd4defeCD3fF962C73e0FAE3831986B6b470Ba",
        abi: POOL_FACTORY_ABI.abi,
        functionName: "createPool",
        args: [formData.tokenA, formData.tokenB],
    });

    const { data, write } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.tokenA && formData.tokenB) {
            setSubmit(true);
            console.log("Create Pool & RPC Call");
        } else {
            setSubmit(false);
            console.log("Failed");
        }
    };

    useEffect(() => {
        async function CreatePool() {
            write();
        }

        if (submit) {
            CreatePool();
        }

        return () => {
            setSubmit(false);
        };
    }, [submit]);

    return (
        <form
            className="flex rounded px-8 pt-6 pb-2 mb-4 flex-col w-[100%] justify-center"
            onSubmit={handleSubmit}
        >
            <div className="mb-6">
                <label
                    className="block text-white font-bold mb-2"
                    htmlFor="tokenA"
                >
                    Token A
                </label>
                <input
                    id="tokenA"
                    name="tokenA"
                    type="tokenA"
                    autoComplete="tokenA"
                    required={true}
                    placeholder="0xAddress"
                    onChange={handleChange}
                    value={formData.tokenA}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-white font-bold mb-2"
                    htmlFor="tokenB"
                >
                    Token B
                </label>
                <input
                    id="tokenB"
                    name="tokenB"
                    type="tokenB"
                    autoComplete="tokenB"
                    required={true}
                    placeholder="0xAddress"
                    onChange={handleChange}
                    value={formData.tokenB}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            <div className="flex items-center">
                <button
                    className=" bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Create Pool
                </button>
            </div>
            {isSuccess && (
                <div>
                    <a
                        href={`https://sepolia.explorer.mode.network/tx/${data?.hash}`}
                    >
                        See Transaction
                    </a>
                </div>
            )}
        </form>
    );
}
