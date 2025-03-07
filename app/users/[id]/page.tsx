import React from "react";
import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}

const Profile = async ({ params }: Props) => {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return (
    <div className="w-[90%] mx-auto ">
      Hello,I&apos;m {user?.name} with user id{" "}
      <span className="text-[#ff4500]">{user?.id}</span> and you can reach out
      to me through this {user?.email} email address.{" "}
    </div>
  );
};

export default Profile;
