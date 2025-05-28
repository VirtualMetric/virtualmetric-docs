import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.vsDark;
const customTheme: PrismTheme = {
  ...baseTheme,
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: '#99FFFF',
        fontWeight: 'normal'
      },
    },
    {
      types: [
        'parameter', 'property', 'attr-key',
        'function', 'selector', 'variable', 'atrule',
      ],
      style: {
        color: '#66FFCC'
      },
    },
    {
      types: [
        'boolean', 'number', 'constant',
      ],
      style: {
        color: '#FFDD55',
      },
    },
    {
      types: [
        'tag', 'script', 'operator', 'unit', 'rule', 'keyword',
      ],
      style: {
        color: '#99FFFF',
      },
    },
    {
      types: [
        'front-matter', 'string', 'attr-value',
      ],
      style: {
        color: '#CCFFBB',
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
