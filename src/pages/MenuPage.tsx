import { FC } from "react";
import Offers from "../components/sections/Offers";
import AppShop from "../components/sections/AppShop";
import Menu from "../components/sections/menu/Menu";

const MenuPage: FC = () => {
  return (
    <main className="menuPage">
      <Offers />
      <Menu />
      <AppShop />
    </main>
  );
};

export default MenuPage;
