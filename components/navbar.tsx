import { Authentication } from "./signIn";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-[90%] mx-auto h-[100px] flex justify-between items-center">
      <h1>Myspace</h1>
      <ul className="flex gap-4">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blogs"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <Authentication />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
