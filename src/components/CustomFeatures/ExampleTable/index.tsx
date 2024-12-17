import React from "react";
// import styles from '../styles.module.css';

interface ExampleTableProps {
  children: React.ReactNode;
}

export const ExampleTable = ({ children }: ExampleTableProps) => {
  const pairs: { description: React.ReactNode; code: React.ReactNode }[] = [];
  let currentDescription: React.ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Description) {
        if (currentDescription) {
          pairs.push({ description: currentDescription, code: null });
        }
        currentDescription = child.props.children;
      } else if (child.type === SampleCode) {
        pairs.push({
          description: currentDescription,
          code: child.props.children,
        });
        currentDescription = null;
      }
    }
  });

  if (currentDescription != null) {
    pairs.push({ description: currentDescription, code: null });
  }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <tbody>
        {pairs.map((pair, index) => (
          <tr
            key={index}
            style={{
              border: "0px",
              background: "none",
              borderBottom: "1px solid var(--ifm-table-border-color)",
              width: "100%",
            }}
          >
            <td style={{ verticalAlign: "top", border: "none", width: "30%" }}>
              {pair.description && <div>{pair.description}</div>}
            </td>
            <td style={{ verticalAlign: "top", border: "none", width: "70%" }}>
              {pair.code && <div>{pair.code}</div>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Description = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const SampleCode = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default {
  ExampleTable,
  Description,
  SampleCode,
};
