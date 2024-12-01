# Syslog

**SYSLOG** is a standard protocol used for system logging in computer networks. Using this protocol, devices and applications send log messages to central servers that store them for monitoring and analysis.

## Severity

**Syslog** has numeric severity levels, indicating their importance. The lower the value, the more critical the event. The levels are used for:

* _Prioritization_ of critical issues
* _Filtering_ of log messages
* _Automation_ of specific types of events
* _Compliance_ with regulatory standards

|Level|Severity|Description|
|---|---|---|
|0|Emergency|System unusable|
|1|Alert|Immediate action required|
|2|Critical|Condition critical|
|3|Error|Errors exist|
|4|Warning|Warnings exist|
|5|Notice|Significant condition|
|6|Info|Info messages|
|7|Debug|Debug messages|

## Syslog YAML

The YAML file for syslog that **Director** uses contains the following fields:

|Field|Data Type|Required|Use|
|---|---|---|---|
|`id`|Numeric|Y||
|`name`|Alphanumeric|Y||
|`description`|Alphanumeric|||
|`type`|Alphanumeric|N||
|`status`|Logical|Y||
