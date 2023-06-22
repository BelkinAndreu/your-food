import { FC } from "react";
import "./Navbar.css";
import Logo from "./Logo";
import SearchBar from "./SearhBar";

const Navbar: FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Logo />
      <SearchBar />
      <p>User-buttons</p>
    </header>
  );
};

export default Navbar;
