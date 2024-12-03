# CSV

:::info[synopsis]
Extracts a CSV line embedded in a document, skipping empty fields.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`field`|String|Y|N/A||
|`target_fields`|Strings|Y|N/A||
|`description`|String|N|-||
|`empty_value`|String|N|-||
|`if`|String|N|-||
|`ignore_failure`|Logical|N|false||
|`ignore_missing`|Logical|N|false||
|`on_failure`|Processors|N|-||
|`on_success`|Processors|N|-||
|`quote`|String|N|"||
|`separator`|String|N|,||
|`tag`|String|N|-||
|`trim`|Logical|N|false||
