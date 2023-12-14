import { useContext } from "react"
import { WalletSignerContext } from "../Context/Context"

export default function WalletValue() {
    const walletSigner = useContext(WalletSignerContext);
    
    return (
        <>
            {walletSigner ? walletSigner : "Connect"}
        </>
    )
}