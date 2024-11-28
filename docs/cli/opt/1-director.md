# Director

This component collects all the data, either directly or via **Agents**. It then processes and distributes the data to the respective destinations. It receives its configuration from the _SaaS_ tenant's **Fleet Management** service.

**Command**: `vmetric-director <flags>`

The command line interface offers the following options:

|Flas|Data Type|Default|Description|
|---|---|---|---|
|`mode`|Enumerated|_N/A_|Selects a _mode_ (valid options are ...?)|
|`version`|Logical|**false**|Shows the version|
|`path`|Alphanumeric||Sets the installation path (of what ...?)|
|`pfx2pem`|Alphanumeric||Converts the certificate PFX to [PEM](../../usr/ref/3-pem.md) files|
|`validate`|Logical|**false**|Validates the YAML configuration|
|`example`|Logical|**false**|Shows configuration examples|
|`compare-version`|Alphanumeric||Compares versions (of what?)|
|`supervisor`|Logical|**false**|Starts the _Supervisor_ (link to the chapter)|
|`update`|Logical|**false**|Starts the update (what update?)|
|`sentinel`|Logical|**false**|Starts the **Microsoft Sentinel** CLI|
|`snmpwalk`|Logical|**false**|Starts the **SNMPWalk** (explain or link to the chapter)|
|`console`|Logical|**false**|Starts the console (which console?)|
|`service`|Alphanumeric||Controls services (what services?)|
|`servicename`|Alphanumeric||Defines the service name|
|`agentless`|Logical|**false**|Starts in _Agentless Mode_ (link to the chapter)|
|`background`|Logical|**false**|Starts in the background|
|`info`|Logical|**false**|Shows information (what information?)|
|`vpc`|Logical|**false**|Shows _Product Code_|
|`director`|Logical|**false**|Starts _Director_ (Confusing. Aren't we already using the director?)|
