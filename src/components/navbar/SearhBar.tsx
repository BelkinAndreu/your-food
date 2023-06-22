import { FC } from "react";
import Button from "../common/Button";

const SearchBar: FC = () => {
  return (
    <div className="searchBar flex items-center gap-4">
      <div className="searchBar-input">Input</div>
      <Button onClick={() => {}}>Укажите адрес доставки</Button>
    </div>
  );
};

export default SearchBar;
