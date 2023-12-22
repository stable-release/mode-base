import { useContext } from "react"
import { WalletSignerContext } from "../Context/Context"

export default function WalletValue() {
    const walletSigner = useContext(WalletSignerContext);
    
    return (
        <>
            {walletSigner ? `${walletSigner.slice(0,8) + "..." + walletSigner.slice(-4)}` : "Connect"}
        </>
    )
}