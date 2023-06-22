import { FC } from "react";
import "./Navbar.css";

const Navbar: FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <p>Logo</p>
      <p>Inputs</p>
      <p>User-buttons</p>
    </header>
  );
};

export default Navbar;
