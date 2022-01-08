import React from "react";
import Input from "../Input/Input";

type CompanySearchProps = {
  setCompany: (value: string) => void;
  company: string;
};

const CompanySearch = ({ setCompany, company }: CompanySearchProps) => {
  return (
    <Input
      identifier="company"
      type="text"
      value={company}
      onChange={(value: string) => setCompany(value)}
    />
  );
};

export default CompanySearch;
