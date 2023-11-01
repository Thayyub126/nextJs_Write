"use client";



import React from "react";
import { SiweMessage } from "siwe";
import { polygonMumbai } from "viem/chains";
import { useAccount, useSignMessage } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { getCsrfToken, signIn } from "next-auth/react";
import { Button, Container, Row, Col } from "react-bootstrap";





const AuthPage = () => {
  const [mounted, setMounted] = React.useState(false);
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const { signMessageAsync } = useSignMessage();
  const [hasSigned, setHasSigned] = React.useState(false);
  
  React.useEffect(() => setMounted(true), []);
  if(!mounted) return <></>

  const handleSign = async () => {
    if (!isConnected) open();
    try {
      const message = new SiweMessage({
        domain: window.location.host,
        uri: window.location.origin,
        version: "1",
        address: address as `0x${string}`,
        statement: process.env.NEXT_PUBLIC_SIGNIN_MESSAGE,
        nonce: await getCsrfToken(),
        chainId: polygonMumbai.id,
      });

      const signedMessage = await signMessageAsync({
        message: message.prepareMessage(),
      });

      setHasSigned(true);

      const response = await signIn("web3", {
        message: JSON.stringify(message),
        signedMessage,
        redirect: true,
        callbackUrl: '/stories'
      });
      if (response?.error) {
        console.log("Error occured:", response.error);
      }

    } catch (error) {
      console.log("Error Occured", error);
    }
  };
  
  return (
     
   

    <Container className="d-flex align-items-center justify-content-center mb-5" style={{ minHeight: "100vh" }}>
    <Row>
      <Col>
        {!isConnected && (
          <>
            <div className="login-btn">
                <button
                  className="connectwallet"
                  onClick={() => open()}
                >
                Connect Wallet
                </button>
              </div>
          </>
        )}
        {isConnected && !hasSigned && (
          <>
            <p className="h3">
              Welcome {address?.slice(0, 8)}...
            </p>
            <Button
              className="connectwallet mb-5"
              onClick={handleSign}
            >
              Sign Message to Login
            </Button>
            <Button
              className="connectwallet mx-3 mb-5"
              onClick={() => open()}
            >
              Disconnect Wallet
            </Button>
          </>
        )}
        {isConnected && hasSigned && (
          <p>You are being authenticated. Please wait...</p>
        )}
      </Col>
    </Row>
  </Container>
  
  );
};

export default AuthPage;
