import { FC, useState } from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";
import { useAppSelector } from "../../../store/hooks";
import { ICategoryProducts, categoryMenu } from "../../../store/data/productList";

const Menu: FC = () => {
  const [list, setList] = useState<ICategoryProducts>("promo");
  const productsList = () => {
    const allProducts = useAppSelector((state) => state.products.products);
    if (list === "promo") return allProducts.filter((item) => item.promo === true);
    else return allProducts.filter((item) => item.category === list);
  };
  const renderMenu = () => {
    return categoryMenu.map((item, key) => {
      const style = [`menu-category-item`];
      if (list === item.category) style.push("menu-category-item_select");
      return (
        <p className={style.join(" ")} key={key} onClick={() => setList(item.category)}>
          {item.name}
        </p>
      );
    });
  };
  const renderList = () => productsList().map((item) => <MenuItem item={item} key={item.id} />);

  return (
    <section className="menu">
      <div className="menu-category">
        <p className="font-bold mb-4 px-4">Меню</p>
        {renderMenu()}
      </div>
      <div className="menu-list">
        {productsList().length === 0 ? <p>Блюда из этой категории отсутствуют!</p> : ""}
        {renderList()}
      </div>
    </section>
  );
};

export default Menu;
