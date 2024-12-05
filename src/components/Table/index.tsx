import React, { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <table>{children}</table>;
};

export default Table;
