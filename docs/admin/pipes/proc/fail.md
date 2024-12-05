# Fail

:::info[synopsis]
Raises an exception. Can be used when a pipeline is expected to fail to send a specific message.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`message`|String|Y|N/A|Error message displayed|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|||
|`tag`|String|N|-|Identifier|

:::note[examples]
```json
{
   "fail": {
      "if" : "doc.tags.contains('relay')",
      "message": "Relay tag not present; available tags: {{{tags}}}"
   }
}
```
:::
