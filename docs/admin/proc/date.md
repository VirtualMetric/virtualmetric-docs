# Date

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`field`|String|Y|N/A|The field containing the date|
|`formats`|Strings|Y|-|Expected date formats. Valid options: Java time pattern, ISO8601, UNIX, UNIX_MS, or TAI64N|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`locale`|String|N|`ENGLISH`|The locale to use in parsing. May impact month names and weekdays|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|||
|`output_format`|String|N|`yyyy-MM-dd'T'HH:mm:ss.SSSXXX`|The format to use when printing the date to a `target_field`. Must be valid Java time pattern|
|`tag`|String|N|-|Identifier|
|`target_field`|String|N|`@timestamp`|The field to assign the parsed date|
|`timezone`|String|N|`UTC`|The timezone to use in parsing|

:::note[examples]
Adding the parsed date to the `timestamp` field based on the `initial_date` field:

```json
{
   "processors": [
      {
         "date": {
            "field": "initial_date",
            "target_field": "timestamp",
            "formats": ["dd/MM/yyyy HH:mm:ss"],
            "timezone": "Europe/London"
         }
      }
   ]
}
```

TODO: Complete the examples

:::
