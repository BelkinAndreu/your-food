import { FC } from "react";
import Offers from "../components/sections/Offers";
import AppShop from "../components/sections/AppShop";

const MenuPage: FC = () => {
  return (
    <main className="menu">
      <Offers />
      <section className="menu-list">Menu List</section>
      <AppShop />
    </main>
  );
};

export default MenuPage;
