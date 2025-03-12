import { PrivyClientConfig } from "@privy-io/react-auth";

export const privyConfig: PrivyClientConfig = {
  appearance: {
    theme: "light",
    accentColor: "#676FFF",
    logo: "https://your-logo-url",
  },
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
  },
  loginMethods: ["wallet", "google"],
};

