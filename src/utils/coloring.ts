import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.vsDark;
const customTheme: PrismTheme = {
  ...baseTheme,
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: '#99F5F9',
        fontWeight: 'bold',
      },
    },
    {
      // YAML keys
      types: ['parameter', 'property'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      // Field identifiers like some_name, some_identifier
      types: ['variable', 'attr-name'],
      style: {
        color: '#FFDE59',
      },
    },
    {
      // Numbers and booleans
      types: ['boolean', 'number', 'constant'],
      style: {
        color: '#FF0000',
      },
    },
    {
      // Other types to keep blue
      types: ['atrule', 'tag', 'script'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      // Other types to keep blue
      types: ['operator', 'unit', 'rule'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      // Strings and multi-line content
      types: ['front-matter', 'string', 'attr-value'],
      style: {
        color: '#CAFDB5',
      },
    },
    {
      // Other types to keep blue
      types: ['class-name'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      // Identifiers
      types: ['function', 'selector'],
      style: {
        color: '#FFDE59',
      },
    },
    {
      // The "component_type" token
      types: ['keyword'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#CECECE',
        fontStyle: 'normal'
      },
    },
  ],
};

export default customTheme;
