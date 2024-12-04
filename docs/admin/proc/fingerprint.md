# Fingerprint

:::info[synopsis]
Computes a hash of the document which can be used for content fingerprinting.
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`fields`|Strings|Y|N/A|Fields to include in the fingerprint. For fields containing objects, both keys and values are hashed. For other fields, only the values are hashed|
|`description`|String|N|-|Explanatory note|
|`if`|String|N|-|Condition to be met to execute the processor|
|`ignore_failure`|Logical|N|`false`|See [Handling Failures](../pipes/handling-failures.md)|
|`ignore_missing`|Logical|N|`false`|If set to `true` and `field` does not exist or is `null`, exit quietly without modifying the document|
|`method`|String|N|`SHA-1`|Hash method used. Valid options: `MD5, `SHA-1, `SHA-256, `SHA-512, or `MurmurHash3`|
|`on_failure`|Processors|N|-|See [Handling Failures](../pipes/handling-failures.md)|
|`on_success`|Processors|N|||
|`salt`|String|N|-|Salt value for the hash|
|`tag`|String|N|-|Identifier|
|`target_field`|String|N|`fingerprint`|Field to write the hash|

:::note[examples]
**Input**:

```json
{
   "user": {
      "first_name": "Jane",
      "last_name": "Doe",
      "date_of_birth": "1965-05-15",
   }
}
```

**Spec**:

```json
{
   "fingerprint": {
      "fields": ["user"],
      "method": "SHA-1"
   }
}
```

**Output**:

```json
{
   "fingerprint" : "63c7d2a8f2d8765f245b898e8260f97eafe662e3",
   "user": {
      "first_name": "Jane",
      "last_name": "Doe",
      "date_of_birth": "1965-05-15",
   }
}
```
:::
