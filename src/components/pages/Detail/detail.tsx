import React from "react";
import { Link, useParams } from "react-router-dom";
import Title from "../../atoms/Title/Title";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <Title>Hello from Detail page</Title>
      <h3>User Id: {id}</h3>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
