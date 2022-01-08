import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Member } from "../../../types/member.types";

type BodyTableProps = {
  members: Member[];
};

const BodyTable = ({ members }: BodyTableProps) => {
  return (
    <tbody>
      {members.map((member: Member) => (
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
  );
};

export default BodyTable;
