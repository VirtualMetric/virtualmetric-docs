import React from "react";

interface TableCellProps {
  children: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <td>{children}</td>;
};

export default TableCell;
