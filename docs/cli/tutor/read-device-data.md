---
displayed_sidebar: commandLine
sidebar_position: 2
---

# Read Device Data

In this tutorial, we will show you the basics of a simple routing configuration.

Open a terminal.

:::tip
For Windows, a **PowerShell** terminal is well-suited for this.
:::


First, navigate to the root directory where **Director** was installed, and then to the `config` directory under that root. If you list the directory contents, you will see three subdirectories: `devices`, `routes`, and `targets`.

```CLI
C:\>vm-install\config\Get-ChildItem

    Directory: C:\vm-install\config


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        19/11/2024     19:33                devices
d-----        19/11/2024     19:33                routes
d-----        20/11/2024     14:08                targets
```

We first have to configure the _source_ of the data we will monitor by pointing to a specific device. To do that, we have to configure a YAML file. We `cd` to the `devices` directory and list its contents:

```CLI
C:\>vm-install\config\devices\Get-ChildItem

    Directory: C:\vm-install\config\devices


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        19/11/2024     17:18            173 syslog.yaml
```

Note the file named `syslog.yaml`. Open it with the default text editor of Windows, i.e. _Notepad_.

:::note
Multiple devices can be entered into the same YAML file, or multiple YAML files can be created to define device groups based on your needs.
:::

By default, the file comes with the following fields:

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

For the details of these fields, see the [syslog file](../../docu/tables/syslog-file.md) section.
