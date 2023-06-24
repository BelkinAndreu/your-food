import { FC } from "react";
import "./Navbar.css";
import Logo from "./Logo";
import SearchBar from "./SearhBar";
import UserBar from "./UserBar";

const Navbar: FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Logo />
      <SearchBar />
      <UserBar />
    </header>
  );
};

export default Navbar;
