import React from "react";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const Users = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-[90%] mx-auto">
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="flex px-4 py-4 rounded-md flex-col gap-4 border"
          >
            <h1 className="text-[#0000ff]">
              <Link href={`/users/${user.id}`}>userName: {user.name}</Link>
            </h1>
            <p>userId: {user.id}</p>
            <p>userEmail: {user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
