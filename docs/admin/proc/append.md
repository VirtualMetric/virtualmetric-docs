# Append

:::info[synopsis]
Appends one or more values to an existing array if the field exists and is an array. If the field exists and is a scalar, converts it to an array and appends one or more values to it. If the field doesn't exist, creates an array containing the provided values.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`field`|Alphanumeric|Y|N/A|The field to append the value to|
|`value`|Any|Y|N/A|The value to be appended|
|`allow_duplicates`|Logical|N|true|If `false`, only distinct values are appended|
|`description`|String|N|-|Explanatory notes|
|`if`|Alphanumeric|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|false|See [Handling Failures](../misc/handling-failures.md)|
|`on_failure`|Logical|N|-|See [Handling Failures](../misc/handling-failures.md)|
|`on_success`|Logical|N|-|Notification text|
|`tag`|Alphanumeric|N|-|Identifier|

```json
{
	"append": {
		"field": "tickets",
		"value": ["support", "{{{ticket_id}}}"]
  	}
}
```
