# Convert

:::info[synopsis]
Converts a field value to a different type. If the field contains an array, all values will be converted. Supported types: `boolean`, `float`, `double`, `ip`, `integer`, `long`, `string`, and `auto`.

If `boolean` is specified, the `field` is set to `true` provided that its string value (ignoring case) is a valid boolean constant. Eitherwise, an exception will be thrown.

If `ip` is specified, the target field is set to the value of `field` if its a valid **IPv4** or **IPv6** address assignable to an IP field type.

If `auto` is specified, an attempt will be made to convert the string value in the field to the closest matching non-string and non-IP type. **Note** `float` has a precedence over `double`.

If the value cannot be converted to a matching type, the process still completes successfully and the field value remains untouched. In that case, the `target_field` will be set to the unconverted `field` value.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`field`|String|Y|N/A|The field to be converted|
|`precision`|Numeric|Y|N/A|The precision to achieve if the field contains a real value|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`ignore_missing`|Logical|N|`false`|If set to `true` and `field` doesn't exists, exit quietly without modifying the document|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|-||
|`tag`|String|N|-|Identifier|
|`target_field`|String|N|`field`|The field to assign the converted value|
|`type`|Conversion|Y|-|The type to convert the `field` value to|

:::note[examples]
In **JSON**:

```json
PUT _ingest/pipeline/my-pipeline-id
{
   "processors": [
      {
         "convert": {
            "field": "id",
            "type": "integer"
         }
      }
   ]
}
```
:::
