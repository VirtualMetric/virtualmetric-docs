import React from "react";

interface TableRowProps {
  children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
