"use client";
import React from "react";
import { signOut } from "next-auth/react";

const Signout = () => {
  return (
    <button className="border px-4 py-1" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export default Signout;
