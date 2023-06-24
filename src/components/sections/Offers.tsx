import { FC, useState } from "react";
import "./Offers.css";
import Icon from "@mdi/react";
import { mdiArrowLeftBoldCircle, mdiArrowRightBoldCircle } from "@mdi/js";
import { useAppSelector } from "../../store/hooks";
import { IProduct } from "../../store/data/productList";

const Offers: FC = () => {
  const [view, setView] = useState<number>(0);
  const items: IProduct[] = useAppSelector((state) => state.products.products).filter(
    (item) => item.promo === true
  );
  const renderItems = () => {
    return items
      .slice(view, view + 3)
      .map((item) => <div className="offers-content">{item.name}</div>);
  };
  if (items.length < 3) {
    return <section className="offers">{renderItems()}</section>;
  } else
    return (
      <section className="offers">
        <div className="offers-arrow" onClick={() => setView(view != 0 ? view - 1 : view)}>
          <Icon path={mdiArrowLeftBoldCircle} size={1} />
        </div>
        {renderItems()}
        <div
          className="offers-arrow"
          onClick={() => setView(view != items.length - 3 ? view + 1 : items.length - 3)}
        >
          <Icon path={mdiArrowRightBoldCircle} size={1} />
        </div>
      </section>
    );
};

export default Offers;
