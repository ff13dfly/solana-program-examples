
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import {FC,ReactNode,useMemo} from "react";

interface WalletConnectionProviderProps {
  children: ReactNode;
}

const WalletConnectionProvider:FC<WalletConnectionProviderProps> = ({children}) => {
    const endpoint = clusterApiUrl("devnet");
    
    const wallets = useMemo(() => [
      new UnsafeBurnerWalletAdapter(),
    ], []);
  
    return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    );
};
export default WalletConnectionProvider;