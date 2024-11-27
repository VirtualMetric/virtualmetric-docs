---
displayed_sidebar: cmdlnDocs
sidebar_position: 21
---

# Generator

**Command**: `vmetric-generator <flags>`

Entering the command without any flags starts an infinite message stream with the default values in **50** seconds, e.g.

> CLI
> Netflow generator will start at 2024-11-27 13:10:00 +0300 +03.
> Waiting for 49.4803857 seconds..
>
> 1000 flows sent successfully in 29 ms with 0 error(s) at 2024-11-27 13:10:01.0404548 +0300 +03 m=+52.628205001
> 1000 flows sent successfully since 2024-11-27 13:10:00 +0300 +03
>
> 1000 flows sent successfully in 3 ms with 0 error(s) at 2024-11-27 13:10:02.0450593 +0300 +03 m=+53.632809501
> 2000 flows sent successfully since 2024-11-27 13:10:00 +0300 +03
>
> ...

The command line interface offers the following options:

|Flag|Data Type|Default|Description|
|---|---|---|---|
|`mode`|Enumerated|_N/A_|Selects a _mode_ (valid options are ...?)|
|`version`|Logical|**false**|Version of the program. If specified, exits after printing the version|
|`example`|Logical|**false**|Shows a configuration example. If specified, exits after printing the example|
|`address`|Numeric|127.0.0.1:514|Network address, including the port number|
|`severity`|Alphanumeric|Error|Severity (of what?)|
|`message`|Alphanumeric|&lt;_specified message_&gt;|Test nessage|
|`count`|Numeric|**1000**|Message count. Valid range is **1..?**|
|`interval`|Numeric|**1**|Interval (of what?) in seconds. Valid range is **1..?**|
|`duration`|Numeric|**300**|Total duration (of what?) in seconds|
|`now`|Logical|**false**|Calculate the duration starting from _now_|
|`path`|Alphanumeric||The path (of what?)|
