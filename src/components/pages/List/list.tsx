import React, { useEffect, useState } from "react";
import { getCompanyMembers } from "../../../services/members.service";
import { Member } from "../../../types/member.types";
import Title from "../../atoms/Title/Title";
import CompanySearch from "../../molecules/CompanySearch/CompanySearch";
import MembersTable from "../../organisms/MembersTable/MembersTable";

export const ListPage: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [company, setCompany] = useState<string>("lemoncode");

  const queryCompanyMembers = () => getCompanyMembers(company).then(setMembers);

  const handleClick = () => queryCompanyMembers();

  useEffect(() => {
    queryCompanyMembers();
  }, []);

  return (
    <>
      <CompanySearch
        setCompany={setCompany}
        company={company}
        onHandleClick={handleClick}
      />
      <Title>Hello from List page</Title>
      <MembersTable members={members} />
    </>
  );
};
