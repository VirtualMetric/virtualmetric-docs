# Compact

:::info[synopsis]
Removes all nested fields containing empty arrays or objects from a specified field recursively.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|-||
|`tag`|String|N|-|Identifier|

:::note[examples]
The following field

```json
{
   "foo": "bar",
   "bar": [],
   "baz": {
      "this": {},
      "that": 1
   },
   "qux": {}
}
```

is compacted as

```json
{
   "foo": "bar",
   "baz": {
      "that": 1
   },
}
```
:::
