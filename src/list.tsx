import React from "react";
import { Link, generatePath } from "react-router-dom";
import CompanySearch from "./components/CompanySearch/CompanySearch";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [company, setCompany] = React.useState<string>("lemoncode");

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${company}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, []);

  return (
    <>
      <CompanySearch
        setCompany={(value: string) => setCompany(value)}
        company={company}
      />
      {JSON.stringify(company)}
      <h2>Hello from List page</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr>
              <td>
                <img src={member.avatar_url} style={{ width: "5rem" }} />
              </td>
              <td>
                <span>{member.id}</span>
              </td>
              <td>
                <Link to={generatePath("/detail/:id", { id: member.login })}>
                  {member.login}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
