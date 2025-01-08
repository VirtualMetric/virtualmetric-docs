import React from "react";
import styles from './styles.module.css';

interface TermTableProps {
  children: React.ReactNode;
}

export const TermTable = ({ children }: TermTableProps) => {
  const pairs: { term: React.ReactNode; definition: React.ReactNode }[] = [];
  let node: React.ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === TermCol) {
        if (node != null) {
          pairs.push({ term: node, definition: null });
        }
        node = child.props.children;
      } else if (child.type === DefCol) {
        pairs.push({ term: node, definition: child.props.children });
        node = null;
      }
    }
  });

  if (node != null) {
    pairs.push({ term: node, definition: null });
  }

  return (
    <table className={styles.termTable}>
      <tbody>
        {pairs.map((pair, index) => (
          <tr key={index}>
            <td className={styles.termColumn}>
              {pair.term && <div>{pair.term}</div>}
            </td>
            <td className={styles.definitionColumn}>
              {pair.definition && <div>{pair.definition}</div>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const TermCol = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const DefCol = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default {
  TermTable,
  TermCol,
  DefCol,
};
