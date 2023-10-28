import React from "react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

type WagmiProviderType = {
  children: React.ReactNode;
};

const chains = [polygonMumbai];
const projectId = 'c62373acd2d76e040a7257ce21504fdf';

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);
const WagmiProvider = ({ children }: WagmiProviderType) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default WagmiProvider;
