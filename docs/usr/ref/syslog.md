---
sidebar_position: 42
displayed_sidebar: userDocs
---

# Syslog Files

:::note
* Tarifi?
* Kullanım şekli?
* Ayar olarak kullanıldığı source dosya hangisi?
:::

A **SYSLOG** (System Log) file is a **YAML** configuration file used to describe the _source_ and the _target_ of a pipeline, along with other parameters to be used while ingesting and routing the data. The file may contain the following fields:

|Field|Data Type|Required|Typical Use|
|---|---|---|---|
|`id`|alphanumeric|Y||
|`name`|alphanumeric|Y||
|`description`|alphanumeric|||
|`type`|alphanumeric|N||
|`status`|logical|Y||
