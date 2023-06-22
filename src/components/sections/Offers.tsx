import { FC } from "react";
import "./Offers.css";
import Icon from "@mdi/react";
import { mdiArrowLeftBoldCircle, mdiArrowRightBoldCircle } from "@mdi/js";

const Offers: FC = () => {
  return (
    <section className="offers">
      <div className="offers-arrow">
        <Icon path={mdiArrowLeftBoldCircle} size={1} />
      </div>
      <div className="offers-content"></div>
      <div className="offers-content"></div>
      <div className="offers-content"></div>
      <div className="offers-arrow">
        <Icon path={mdiArrowRightBoldCircle} size={1} />
      </div>
    </section>
  );
};

export default Offers;
