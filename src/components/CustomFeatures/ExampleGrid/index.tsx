import React from "react";

interface ExampleGridProps {
  children: React.ReactNode;
}

export const ExampleGrid = ({ children }: ExampleGridProps) => {
  const pairs: { comment: React.ReactNode; code: React.ReactNode }[] = [];
  let node: React.ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === CommentCol) {
        if (node != null) {
          pairs.push({
            comment: node,
            code: null
          });
        }
        node = child.props.children;
      } else if (child.type === CodeCol) {
        pairs.push({
          comment: node,
          code: child.props.children
        });
        node = null;
      }
    }
  });

  if (node != null) {
    pairs.push({ comment: node, code: null });
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
            <td style={{ verticalAlign: "top", border: "none", width: "25%" }}>
              {pair.comment && <div>{pair.comment}</div>}
            </td>
            <td style={{ verticalAlign: "top", border: "none", width: "75%" }}>
              {pair.code && <div>{pair.code}</div>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const CommentCol = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const CodeCol = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default {
  ExampleGrid,
  CommentCol,
  CodeCol,
};
