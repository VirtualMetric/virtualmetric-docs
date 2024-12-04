# Flatten

:::info[synopsis]
Recursively reduces the level of objects, and appends the first level to their keys.
:::

:::note[examples]
The following field

```json
{
   "foo": {
      "bar": {
         "baz": 1,
         "qux": "qux"
      },
      "jaz": [
         1,
         2,
         3
      ]
   }
}
```

is flattened into

```json
{
   "foo_bar_baz": 1,
   "foo_bar_qux": "qux",
   "foo_jaz": [
      1,
      2,
      3
   ]
}
```
:::
