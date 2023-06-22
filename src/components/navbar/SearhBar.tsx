import { FC } from "react";
import Button from "../common/Button";
import SearchInput from "./SearchInput";

const SearchBar: FC = () => {
  return (
    <div className="searchBar">
      <SearchInput />
      <Button onClick={() => {}} style="searchBar-btn">
        Укажите адрес доставки
      </Button>
    </div>
  );
};

export default SearchBar;
