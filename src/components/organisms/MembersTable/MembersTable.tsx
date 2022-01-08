import React from "react";
import { Member } from "../../../types/member.types";
import BodyTable from "../../molecules/BodyTable/BodyTable";
import HeadTable from "../../molecules/HeadTable/HeadTable";

type MembersTableProps = {
  members: Member[];
};

const MembersTable = ({ members }: MembersTableProps) => {
  const titles = ["Avatar", "Id", "Name"];
  return (
    <table className="table">
      <HeadTable titles={titles} />
      <BodyTable members={members} />
    </table>
  );
};

export default MembersTable;
