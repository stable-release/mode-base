import { Chain } from 'wagmi'

export const mode = {
  id: 43_114,
  name: 'Mode',
  network: 'mode',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ["https://sepolia.mode.network/"] },
    default: { http: ["https://sepolia.mode.network/"] },
  },
  blockExplorers: {
    etherscan: { name: 'Blockscout', url: 'https://sepolia.explorer.mode.network/' },
    default: { name: 'Blockscout', url: 'https://sepolia.explorer.mode.network/' },
  },
  contracts: {
    tokenFactory: {
      address: '0xE3fA320de76Ad83e3a61f30176f622D3f06F8c2F',
      blockCreated: 76_81_256,
    },
  },
}
