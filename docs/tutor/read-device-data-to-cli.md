---
displayed_sidebar: tutorials
sidebar_position: 2
---

# Read Device Data To CLI

**VirtualMetric Director&trade;** offers the ability to define the _source_ and the _target_ of your data stream by using simple YAML files. In this tutorial, we will show you the basics of this configuration.

Open a terminal and first navigate to the root directory where **Director** was installed, and then to the `config` directory under the root. If you list the directory contents, you will see three subdirectories: `devices`, `routes`, and `targets`.

```CLI
C:\>vm-install\config\Get-ChildItem

    Directory: C:\vm-install\config


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        19/11/2024     19:33                devices
d-----        19/11/2024     19:33                routes
d-----        20/11/2024     14:08                targets
```

We first have to configure the _source_ of the data we will monitor by pointing to a specific device. To do that, configure a file. We first `cd` to the `devices` directory and list its contents:

```CLI
C:\>vm-install\config\devices\Get-ChildItem

    Directory: C:\vm-install\config\devices


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        19/11/2024     17:18            173 syslog.yaml
```

Note the file named `syslog.yaml`. Open it with the default text editor of Windows, i.e. _Notepad_.

By default, the file comes with the following configuration:

```Text
devices:
  - id: device
    name: 127.0.0.1
    description: syslog
    type: syslog
    status: true
    properties:
      address: "0.0.0.0"
      port: 14514
```

:::note
Some of the parameters here can be modified, some are **required**, some are **optional**. Check with the team for the specifics.
:::

For a chart enlisting the properties in the YAML file, see the [syslog file](../docu/tables/syslog-file.md) section.

:::tip
Multiple devices can be entered into the same YAML file, or multiple YAML files can be created to define device groups based on your needs.
:::
