import { FC } from "react";
import "./MenuItem.css";
import Button from "../../common/Button";

const MenuItem: FC = () => {
  return (
    <div className="menu-item">
      <div className="menu-item-img"></div>
      <p className="menu-item-price">570₽</p>
      <p className="menu-item-title">Сациви с судаком</p>
      <p className="menu-item-weight">330 г.</p>
      <Button color="lightGray" onClick={() => {}}>
        + Добавить
      </Button>
    </div>
  );
};

export default MenuItem;
