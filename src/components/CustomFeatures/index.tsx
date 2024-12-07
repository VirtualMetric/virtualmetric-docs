import React from 'react';
import Highlight from 'react-highlight'; // Install with `npm install react-highlight`

interface ExampleProps {
  lang: string; // Language for syntax highlighting
  children: React.ReactNode;
}

export const Example = ({ lang, children }: ExampleProps) => {
  // Pair descriptions and code blocks
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
        pairs.push({ description: currentDescription, code: child.props.children });
        currentDescription = null;
      }
    }
  });

  // Push the last pair if unprocessed
  if (currentDescription) {
    pairs.push({ description: currentDescription, code: null });
  }

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        {pairs.map((pair, index) => (
          <tr key={index} style={{ border: '0px' }}>
            <td style={{ verticalAlign: 'top' }}>
              {pair.description && <div>{pair.description}</div>}
            </td>
            <td style={{ verticalAlign: 'top' }}>
              {pair.code && (
               //  <Highlight className={`language-${lang}`}>
                  <div>{pair.code}</div>
               //  </Highlight>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Description = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>; // Render plain Markdown content
};

export const SampleCode = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>; // Code will be highlighted in the parent component
};

export default { Example, Description, SampleCode };
