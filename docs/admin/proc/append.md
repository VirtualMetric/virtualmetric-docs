# Append

:::info[synopsis]
Appends one or more values to an existing array if the field exists and is an array. If the field exists and is a scalar, converts it to an array and appends one or more values to it. If the field doesn't exist, creates an array containing the provided values.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`field`|Alphanumeric|Y|N/A||
|`value`|Any|Y|N/A||
|`allow_duplicates`|Logical|N|true||
|`description`|String|N|-||
|`if`|Alphanumeric|N|-||
|`ignore_failure`|Logical|N|false||
|`on_failure`|Logical|N|-||
|`on_success`|Logical|N|-||
|`tag`|Alphanumeric|N|-||
