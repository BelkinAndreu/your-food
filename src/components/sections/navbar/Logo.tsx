import { FC } from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import Icon from "@mdi/react";
import { mdiShaker } from "@mdi/js";

const Logo: FC = () => {
  return (
    <Link to={"/menu"} className="logo">
      <div className="logo-icon">
        <Icon path={mdiShaker} size={"30px"} />
      </div>
      Твоя.Еда
    </Link>
  );
};

export default Logo;
