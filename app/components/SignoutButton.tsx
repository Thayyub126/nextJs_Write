"use client";
import { useDisconnect } from "wagmi";
import { signOut } from "next-auth/react";
import React from "react";


const SignoutButton = () => {
  const { disconnectAsync } = useDisconnect();
  
  const handleSignout = async () => {
    disconnectAsync();
    signOut({ callbackUrl: "/" });
  };
  return (
    <button color="red" onClick={handleSignout}>
      Sign Out
    </button>
  );
};

export default SignoutButton;
