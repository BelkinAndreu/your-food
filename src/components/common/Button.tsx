import { FC } from "react";

interface IButtonProps {
  children: string;
  color?: "default" | "gray" | "lightGray";
  style?: string;
  onClick(): void;
}

const Button: FC<IButtonProps> = ({ children, color, style, onClick }: IButtonProps) => {
  const styleButton = ["btn", `btn_${color}`, style].join(" ");
  return <input type="button" value={children} className={styleButton} onClick={onClick} />;
};

export default Button;
