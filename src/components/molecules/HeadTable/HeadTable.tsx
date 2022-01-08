import React from "react";

type HeadTableProps = {
  titles: string[];
};

const HeadTable = ({ titles }: HeadTableProps) => {
  return (
    <thead>
      <tr>
        {titles.map((title: string, index: number) => (
          <th key={`${title}-${index}`}>{title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default HeadTable;
