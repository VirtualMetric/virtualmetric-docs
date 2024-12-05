import React from "react";

interface TableHeaderProps {
  columnNames: Array<string>;
}

const TableHeader: React.FC<TableHeaderProps> = ({ columnNames }) => {
  return (
    <thead>
      <tr>
        {columnNames.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
