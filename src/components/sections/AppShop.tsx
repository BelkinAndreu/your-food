import { FC } from "react";
import AppStore from "../../img/app-store.svg";
import PlayStore from "../../img/google-play.svg";

const AppShop: FC = () => {
  return (
    <section className="appShop">
      <p className="font-bold mb-2">В приложении еще удобнее</p>
      <div className="flex items-center gap-4">
        <img src={AppStore} alt="App Store" className="h-[2rem]" />
        <img src={PlayStore} alt="Google Play" className="h-[2.9rem]" />
      </div>
    </section>
  );
};

export default AppShop;
