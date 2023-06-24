import { ChangeEvent, FC, useEffect, useState } from "react";
import Button from "../../common/Button";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { useAppSelector } from "../../../store/hooks";
import { IProduct } from "../../../store/data/productList";

const SearchInput: FC = () => {
  const [input, setInput] = useState<string>("");
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const items: IProduct[] = useAppSelector((state) => state.products.products);
  const getSearchItems = () => {
    return items.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));
  };
  const renderSearchItems = () => {
    if (!input) return;
    return getSearchItems().map((item) => (
      <p className="search-list-item" key={item.id}>
        {item.name}
      </p>
    ));
  };
  console.log(getSearchItems());
  return (
    <form className="searchBar-box">
      <div className="searchBar-input">
        <Icon path={mdiMagnify} size={"20px"} color={"#d9d9d9"} />
        <input type="text" placeholder="Найти блюдо..." value={input} onChange={changeHandler} />
        <div className="search-list">{renderSearchItems()}</div>
      </div>
      <Button onClick={() => {}}>Найти</Button>
    </form>
  );
};

export default SearchInput;
