import React from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

type CompanySearchProps = {
  company: string;
  setCompany: (value: string) => void;
  onHandleClick: (ev: any) => void;
};

const CompanySearch = ({
  company,
  setCompany,
  onHandleClick,
}: CompanySearchProps) => {
  return (
    <>
      <Input
        identifier="company"
        type="text"
        value={company}
        onChange={(value: string) => setCompany(value)}
      />
      <Button onClick={onHandleClick}>Buscar</Button>
    </>
  );
};

export default CompanySearch;
