// components/WalletButton.tsx
"use client";
import { FC } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { useRouter } from "next/navigation";
import { connected } from "process";
import { Button } from "react-bootstrap";

const Connectwalletbutton: FC = () => {
  const router = useRouter();

  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();

  const handleConnectWallet = async () => {
    if (!isConnected) open();
    router.push("/auth");
  };

  const handleDisconnectWallet = () => {
    disconnect();
    router.push("/");
  };

  return (
    // <button onClick={address ? handleDisconnectWallet : handleConnectWallet}>
    //   {/* {address ? "Sign Out" : "Connect Wallet"} */}
    //   connect wallet
    // </button>

    <Button
      className="btn btn-style btn-primary active"
      onClick={address ? handleDisconnectWallet : handleConnectWallet}
    >
      Get Started
    </Button>
  );
};

export default Connectwalletbutton;
