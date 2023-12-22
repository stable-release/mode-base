import { useState } from "react";

export default function TokenForm() {
    const [formData, setFormData] = useState({
        name: "",
        ticker: "",
        supply: 1000000,
    });
    const [submit, setSubmit] = useState(false);

    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            formData.name && formData.ticker && formData.supply > 0
        ) {
            setSubmit(true);
            console.log("Token Creation RPC Call");
        } else {
            setSubmit(false);
            console.log("Failed")
        }
    };
    return (
        <form
            className="flex rounded px-8 pt-6 pb-2 mb-4 flex-col w-[100%] justify-center"
            onSubmit={handleSubmit}
        >
            <div className="mb-6">
                <label
                    className="block text-white font-bold mb-2"
                    htmlFor="name"
                >
                    Token Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required={true}
                    placeholder="My Token"
                    onChange={handleChange}
                    value={formData.name}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-white font-bold mb-2"
                    htmlFor="ticker"
                >
                    Token Ticker
                </label>
                <input
                    id="ticker"
                    name="ticker"
                    type="ticker"
                    autoComplete="ticker"
                    required={true}
                    placeholder="ETH"
                    onChange={handleChange}
                    value={formData.ticker}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            <div className="mb-6">
                <label
                    className="block text-white font-bold mb-2"
                    htmlFor="supply"
                >
                    Total Supply
                </label>
                <input
                    id="supply"
                    name="supply"
                    type="number"
                    autoComplete="supply"
                    required={true}
                    placeholder={1000000}
                    onChange={handleChange}
                    value={formData.supply}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight outline-none focus:border-indigo-500 focus:shadow-outline bg-slate-800"
                />
            </div>
            <div className="flex items-center">
                <button
                    className=" bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Create Token
                </button>
            </div>
        </form>
    );
}
