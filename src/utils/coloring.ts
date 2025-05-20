import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.dracula;
const customTheme: PrismTheme = {
  plain: {
    color: '#A4D4D4',
    backgroundColor: '#303030'
  },
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
      types: ['parameter', 'property', 'symbol'],
      style: {
        color: '#FF0099',
      },
    },
    {
      types: ['attr-value', 'boolean', 'number', 'constant'],
      style: {
        color: '#FFDE55',
      },
    },
    {
      types: ['tag', 'script'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['operator', 'unit', 'rule'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['front-matter', 'string'],
      style: {
        color: '#CAFDB5',
      },
    },
    {
      types: ['function', 'selector', 'variable'],
      style: {
        color: '#FFDE55',
      },
    },
    {
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
