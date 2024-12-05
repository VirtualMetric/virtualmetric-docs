# Decrypt

:::info[synopsis]
Decrypts a single encrypted string using a defined secret as well as a specified **Initialization Vector** field.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`algorithm`|String|Y|N/A|The algorithm used to encrypt the value in the field. Determinest the number of characters to use for the encryption key and the initialization vector|
|`encryption_key`|String|Y|N/A|The key used to encrypt the field|
|`field`|String|Y|N/A|The field to be decrypted|
|`iv_field`|String|Y|-|The value to be used by the algorithm as the initialization vector|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`ignore_missing`|Logical|N|`false`|If set to `true` and `field` does not exist or is `null`, exit quietly without modifying the document|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|-||
|`tag`|String|N|-|Identifier|
|`with_compression`|Logical|N|`false`|Flag to use compression|

The is encrypted field

:::note[examples]
```json
{
   "iv_field": "FmXUb0OPOWm1A2kw6diKYw==",
   "foo": "vFza"
}
```

when used with the `	AES-256-CFB (key=32 characters, iv=16characters)` decryption algorithm and the `6B58703273357638792F423F4528482B` decryption key yields

```json
{
   "foo": "bar"
}
```
:::
