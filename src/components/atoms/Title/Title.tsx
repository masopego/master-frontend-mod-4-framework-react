import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => <h2>{children}</h2>;

export default Title;
