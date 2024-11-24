---
displayed_sidebar: adminDocs
sidebar_position: 42
---

# Syslog

:::note
* Bu formatın tarifi?
* Kullanım şekli?
* Bu dosyanın parametrelerini hangi source dosyaya bakarak açıklayabilirim?
:::

A **SYSLOG** (System Logging) file is a **YAML** configuration file used to describe the _source_ and the _target_ of a pipeline, along with other parameters to be used while routing the data. The file may contain the following fields:

|Field|Data Type|Required|Typical Use|
|---|---|---|---|
|`id`|alphanumeric|Y||
|`name`|alphanumeric|Y||
|`description`|alphanumeric|||
|`type`|alphanumeric|N||
|`status`|logical|Y||
