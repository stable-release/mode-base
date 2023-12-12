import { useContext } from "react"
import { WalletSignerContext } from "../Context/Context"

export default function WalletValue() {
    let walletSigner = useContext(WalletSignerContext);
    
    return (
        <>
            {walletSigner ? walletSigner : "Connect"}
        </>
    )
}