import { FC } from "react";
import Offers from "../components/sections/Offers";

const MenuPage: FC = () => {
  return (
    <main className="menu">
      <Offers />
      <section className="menu-list">Menu List</section>
      <section className="apps">Apps</section>
    </main>
  );
};

export default MenuPage;
