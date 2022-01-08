import React from "react";

export type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (ev: any) => void;
  type?: ButtonType;
};

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
