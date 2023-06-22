import { FC } from "react";
import "./MenuItem.css";
import Button from "../../common/Button";
import { IProduct } from "../../../store/features/productsSlice";

interface IMenuItemProps {
  item: IProduct;
}

const MenuItem: FC<IMenuItemProps> = ({ item }: IMenuItemProps) => {
  return (
    <div className="menu-item">
      <div className="menu-item-img"></div>
      <p className="menu-item-price">{item.price}₽</p>
      <p className="menu-item-title">{item.name}</p>
      <p className="menu-item-weight">330 г.</p>
      <Button color="lightGray" onClick={() => {}}>
        + Добавить
      </Button>
    </div>
  );
};

export default MenuItem;
