import React, { ReactNode } from 'react';
import './style.module.css';

interface RowProps {
  children: ReactNode;
}

const CaseRow: React.FC<RowProps> = ({ children }) => (
  <tr>
    <td className="label"></td>
    <td className="content">{children}</td>
  </tr>
);

const InputRow: React.FC<RowProps> = ({ children }) => (
  <tr>
    <td style={{textAlign: "right", verticalAlign: "top"}}><b>Input</b></td>
    <td className="content">{children}</td>
  </tr>
);

const SpecRow: React.FC<RowProps> = ({ children }) => (
  <tr>
    <td style={{textAlign: "right", verticalAlign: "top"}}><b>Spec</b></td>
    <td className="content">{children}</td>
  </tr>
);

const OutputRow: React.FC<RowProps> = ({ children }) => (
  <tr>
    <td style={{textAlign: "right", verticalAlign: "top"}}><b>Output</b></td>
    <td className="content">{children}</td>
  </tr>
);

interface ExampleGridProps {
  children: ReactNode;
}

const ExampleGrid: React.FC<ExampleGridProps> = ({ children }) => {
  return (
    <table className="example-grid">
      <tbody>{children}</tbody>
    </table>
  );
};

export { ExampleGrid, CaseRow, InputRow, SpecRow, OutputRow };
