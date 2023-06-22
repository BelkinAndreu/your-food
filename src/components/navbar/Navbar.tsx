import { FC } from "react";
import "./Navbar.css";
import Logo from "./Logo";

const Navbar: FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Logo />
      <p>Inputs</p>
      <p>User-buttons</p>
    </header>
  );
};

export default Navbar;
