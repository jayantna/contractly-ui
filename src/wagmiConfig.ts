import {createConfig} from '@privy-io/wagmi';
import {monadTestnet} from 'viem/chains';
import {http} from 'wagmi';

// Replace this with your app's required chains
export const wagmiConfig = createConfig({
  chains: [monadTestnet], // Pass your required chains as an array
  transports: {
    [monadTestnet.id]: http('https://testnet-rpc.monad.xyz/'),
    // For each of your required chains, add an entry to `transports` with
    // a key of the chain's `id` and a value of `http()`
  },
});