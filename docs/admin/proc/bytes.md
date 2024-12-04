# Bytes

:::info[synopsis]
Converts a string expressing size written in byte units to its value in bytes, e.g. `1KB` to `1024`. If the field contains multiple values, all are converted. Allowed units are `B`, `KB`, `MB`, `GB`, `TB`, and `PB`, all case insensitive. If the string is not in one of the enumerated formats or exceeds $2^{64}-1$ in value, an error is raised.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`field`|String|Y|N/A|The filed containing the unit values|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_missing`|Logical|N|`false``|If set to `true` and `field` does not exist or contains no value, exit quietly without modifying the document|
|`ignore_failure`|Logical|N|-||
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|||
|`tag`|String|N|-|Identifier|
|`target_field`|String|N|-|The field to assign the converted value to, if distinct from `field`|

:::note[examples]
```json
{
   "bytes": {
	   "field": "file.size"
   }
}
```
:::
