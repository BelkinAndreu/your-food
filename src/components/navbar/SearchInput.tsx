import { FC } from "react";
import Button from "../common/Button";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchInput: FC = () => {
  return (
    <form className="searchBar-box">
      <div className="searchBar-input">
        <Icon path={mdiMagnify} size={"20px"} color={"#d9d9d9"} />
        <input type="text" placeholder="Найти блюдо..." />
      </div>
      <Button onClick={() => {}}>Найти</Button>
    </form>
  );
};

export default SearchInput;
