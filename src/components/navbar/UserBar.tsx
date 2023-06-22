import { FC } from "react";
import Button from "../common/Button";
import "./UserBar.css";

const UserBar: FC = () => {
  return (
    <div className="userBar">
      <p className="userBar-lang">Русский</p>
      <Button color="gray" onClick={() => {}}>
        Войти
      </Button>
    </div>
  );
};

export default UserBar;
