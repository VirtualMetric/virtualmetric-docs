# Drop

:::info[synopsis]
Drops the document without raising any exceptions. This prevents the indexing of the document based on some condition.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|||
|`tag`|String|N|-|Identifier|

:::note[examples]
```json
{
   "drop": {
      "if" : "doc.user_category == 'Guest'"
   }
}
```
:::
