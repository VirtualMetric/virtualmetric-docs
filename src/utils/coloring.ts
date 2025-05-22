import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.vsDark;
const customTheme: PrismTheme = {
  ...baseTheme,
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: '#FFFFFF',
        fontWeight: 'normal'
      },
    },
    {
      types: [
        'parameter', 'property', 'attr-key',
        'function', 'selector', 'variable', 'atrule',
      ],
      style: {
        color: '#64FFC8'
      },
    },
    {
      types: [
        'boolean', 'number', 'constant',
      ],
      style: {
        color: '#FFDD77',
      },
    },
    {
      types: [
        'tag', 'script', 'operator', 'unit', 'rule', 'keyword',
      ],
      style: {
        color: '#99F5F9',
      },
    },
    {
      types: [
        'front-matter', 'string', 'attr-value',
      ],
      style: {
        color: '#CAFDB5',
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
