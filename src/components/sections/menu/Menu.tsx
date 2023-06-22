import { FC } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

const Menu: FC = () => {
  return (
    <section className="menu">
      <div className="menu-category">
        <p className="font-bold mb-4 px-4">Меню</p>
        <p className="menu-category-item menu-category-item_select">Акция</p>
        <p className="menu-category-item">Холодные закуски</p>
        <p className="menu-category-item">Горячие блюда</p>
        <p className="menu-category-item">Салаты</p>
        <p className="menu-category-item">Десерты</p>
        <p className="menu-category-item">Напитки</p>
      </div>
      <div className="menu-list">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default Menu;
