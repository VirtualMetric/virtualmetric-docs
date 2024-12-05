# Encrypt

:::info[synopsis]
Applies an encryption algorithm to a field.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`algorithm`|String|Y|N/A|The algorithm to apply. Determines the number of characters to be used for the encryption key and the initialization vector|
|`encryption_key`|String|Y|N/A|The key to be used by the algorithm for the encryption|
|`field`|String|Y|N/A|The filed to be encrypted|
|`iv_field`|String|Y|N/A|The field used by the algorithm as the initialization key|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`ignore_missing`|Logical|N|`false`|If set to `true` and `field` does not exist or is `null`, exit quietly without modifying the document|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|||
|`tag`|String|N|-|Identifier|
|`with_compression`|Logical|N|||

:::note[examples]
The field

```json
{
   "foo": "bar"
}
```

when used with the `AES-256-CFB (key=32 characters, iv=16characters)` encryption algorithm and the `6B58703273357638792F423F4528482B` encryption key creates

```json
{
   "iv_field": "FmXUb0OPOWm1A2kw6diKYw==",
   "foo": "vFza"
}
```
:::
