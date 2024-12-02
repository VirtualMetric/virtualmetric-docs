# Parquet Files

The parquet file was designed by Apache as a column-based format. Unlike row-based formats like **CSV**, it stores the records in columns.

**Row-based storage** First row contains field names:

```Text
id,name,last_name,age
1,John,Buck,35
2,Jane,Doe,27
3,Joe,Dane,42
```

**Column-based Storage** First column contains field names:

```Text
id:1,2,3
name:John,Jane,Joe
last_name:Buck,Doe,Dane
age:35, 27,42
```

Parquet files use _dictionary encoding_, compression and _bit packing_, and _run-length encoding_, features which make it more efficient compared to row-based formats.
