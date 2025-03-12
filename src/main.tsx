import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";
import {WagmiProvider} from '@privy-io/wagmi';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {wagmiConfig} from './wagmiConfig.ts';
import {privyConfig} from './privyConfig.ts';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <PrivyProvider appId="cm7xoij97022n9v492g2w74sq" config={privyConfig}>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <App />
      </WagmiProvider>
    </QueryClientProvider>
  </PrivyProvider>
);
