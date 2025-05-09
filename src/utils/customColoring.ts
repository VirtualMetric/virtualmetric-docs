import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.vsDark;
const customTheme: PrismTheme = {
  ...baseTheme,
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: '#33FFFF',
        fontWeight: 'bold',
      },
    },
    {
      types: ['parameter'],
      style: {
        color: '#E4080A',
      },
    },
    {
      types: ['boolean', 'rule', 'color', 'number', 'constant', 'property'],
      style: {
        color: '#33FFFF',
      },
    },
    {
      types: ['atrule', 'tag'],
      style: {
        color: '#33FFFF',
      },
    },
    {
      types: ['script'],
      style: {
        color: '#33FFFF',
      },
    },
    {
      types: ['operator', 'unit', 'rule'],
      style: {
        color: '#33FFFF',
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
        color: '#33FFFF',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#33FFFF',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#33FFFF',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#33FFFF',
      },
    },
    {
      types: ['selector'],
      style: {
        color: '#33FFFF',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#33FFFF',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#33FFFF',
        fontStyle: 'normal'
      },
    },
  ],
};

export default customTheme;
