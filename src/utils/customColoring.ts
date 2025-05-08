/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {themes, type PrismTheme} from 'prism-react-renderer';

const baseTheme = themes.palenight;

export default {
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
        color: '#33FFFF',
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
      types: ['font-matter', 'string', 'attr-value'],
      style: {
        color: '#33FFFF',
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
      },
    },
  ],
} satisfies PrismTheme;
