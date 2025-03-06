import { Authentication } from "./signIn";
// import Signout from "./signOut";
const Navbar = () => {
  return (
    <div className="w-[90%] mx-auto h-[100px] flex justify-between items-center">
      <h1>Myspace</h1>
      <ul className="flex gap-4">
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>
          <Authentication />
        </li>
        <li>{/* <Signout /> */}</li>
      </ul>
    </div>
  );
};
export default Navbar;
