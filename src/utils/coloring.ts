import { themes, type PrismTheme } from "prism-react-renderer";

const baseTheme = themes.vsDark;

const CustomTheme: PrismTheme = {
  ...baseTheme,
  styles: [
    ...baseTheme.styles,

    // Identifiers / functions / variables: muted teal
    {
      types: ["parameter", "property", "attr-key", "function", "selector", "variable"],
      style: { color: "#4EC9B0" },
    },

    // Keywords / control words / rules: muted blue-purple
    {
      types: ["keyword", "atrule", "rule", "tag", "script", "unit"],
      style: { color: "#569CD6" },
    },

    // Operators: closer to normal foreground (less “shouting”)
    {
      types: ["operator"],
      style: { color: "#D4D4D4" },
    },

    // Numbers / booleans / constants: muted amber
    {
      types: ["boolean", "number", "constant"],
      style: { color: "#D7BA7D" },
    },

    // Strings / attribute values: muted warm (very readable, not neon)
    {
      types: ["front-matter", "string", "attr-value"],
      style: { color: "#CE9178" },
    },

    // Comments: quieter gray + optional italics
    {
      types: ["comment"],
      style: { color: "#8A8A8A", fontStyle: "italic" },
    },
  ],
};

export default CustomTheme;
