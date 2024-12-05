# Enrich

:::info[synopsis]
Enriches documents with data from another index.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`dataset_name`|Strings|Y|N/A||
|`lookup_table`|Strings|Y|N/A||
|`query`|String|Y|N/A||
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`ignore_missing`|Logical|N|`false`|If set to `true` and `field` does not exist or is `null`, exit quietly without modifying the document|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|||
|`override`|Logical|N|`true`|Update fields with pre-existing defined values. If set to `false`, such fields are not touched|
|`tag`|String|N|-|Identifier|
