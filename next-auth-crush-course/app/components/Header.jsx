import { auth } from "@/auth";
import Image from "next/image";
import React from "react";

export default async function Header() {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1>Header </h1>
      {session?.user ? (
        <>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
        <Image src={session?.user?.image} alt={session?.user?.name} height={32} width={32} />
        </>
      ) : (
        <p>please logged first</p>
      )}
    </div>
  );
}
