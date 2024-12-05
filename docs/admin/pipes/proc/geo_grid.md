# Geo Grid

:::info[synopsis]
Transforms geo-grid definitions of tiles or cells into standard bounding boxes or polygons that represent their shapes. This is particularly useful for enabling spatial indexing and operations on the tile shapes. For instance, a geotile field value like "4/8/3" could be stored as a string, but that format doesn't support spatial operations. Instead, converting it into a representation like "POLYGON ((0.0 40.979898069620134, 22.5 40.979898069620134, 22.5 55.77657301866769, 0.0 55.77657301866769, 0.0 40.979898069620134))" allows it to be indexed as a geo_shape field, making spatial interactions possible.

TODO: Rewrite
:::

|Field|Type|Required|Default|Description|
|---|---|---|---|---|
|`field`|String|Y|N/A|The field containing the geo-tile definition. The format is determined by `tile_type`|
|`tile_type`|String|Y|N/A|Valid formats: `geohash`, `geotile`, `geohex`|
|`children_field`|String|N|||
|`description`|String|N|||
|`if`|String|N|||
|`ignore_failure`|Logical|N|||
|`ignore_missing`|Logical|N|||
|`non_children_field`|String|N|||
|`on_failure`|Processors|N|||
|`on_success`|Processors|N|||
|`parent_field`|String|N|-|If a parent tile exists, save its address to this field|
|`precision_field`|String|N|||
|`tag`|String|N|||
|`target_field`|String|N|`field`|The field to assign the polygon shape to|
|`target_format`|String|N|||
