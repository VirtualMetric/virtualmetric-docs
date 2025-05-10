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
      types: ['parameter'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['boolean', 'rule', 'color', 'number', 'constant', 'property'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['atrule', 'tag', 'script'],
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
      types: ['front-matter', 'string', 'attr-value'],
      style: {
        color: '#CAFDB5',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: ['selector'],
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
