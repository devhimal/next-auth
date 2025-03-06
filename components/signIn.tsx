"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export function Authentication() {
  const { data: session, status } = useSession();
  if (status == "loading") {
    return <>...Loading</>;
  }
  if (status == "authenticated") {
    return (
      <div>
        {session.user?.name}
        <button className="border px-4 py-1" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button className="border px-4 py-1" onClick={() => signIn()}>
      Sign In
    </button>
  );
}
