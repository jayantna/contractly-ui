import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrivyProvider } from '@privy-io/react-auth';

createRoot(document.getElementById("root")!).render(
    <PrivyProvider
        appId="cm7xoij97022n9v492g2w74sq"
        config={{
            appearance: {
                theme: 'light',
                accentColor: '#676FFF',
                logo: 'https://your-logo-url',
            },
            embeddedWallets: {
                createOnLogin: 'users-without-wallets',
            },
            loginMethods: ['wallet', 'google']
        }}
    >
        <App />
    </PrivyProvider>
);