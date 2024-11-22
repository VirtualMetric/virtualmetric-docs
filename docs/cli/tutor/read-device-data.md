---
displayed_sidebar: commandLine
sidebar_position: 2
---

# Read Device Data

In this tutorial, we will show you the basics of a simple routing configuration.

Open a terminal.

:::tip
On Windows, a **PowerShell** terminal is well-suited for our purposes.
:::


First, navigate to the root directory where **Director** was installed, and then to the `config` directory under the root. If you list the directory contents, you will see three subdirectories: `devices`, `routes`, and `targets`.

```CLI
C:\>vm-install\config\Get-ChildItem

    Directory: C:\vm-install\config


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        19/11/2024     19:33                devices
d-----        19/11/2024     19:33                routes
d-----        20/11/2024     14:08                targets
```

For the data we will monitor, we first have to configure the _source_ of the data by pointing to a specific device. To do that, we have to configure a YAML file. Now, `cd` to the `devices` directory and list its contents:

```CLI
C:\>vm-install\config\devices\Get-ChildItem

    Directory: C:\vm-install\config\devices


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        19/11/2024     17:18            173 syslog.yaml
```

You will notice a file named `syslog.yaml`. Open it with a text editor&mdash;_Windows Notepad_ will do.

By default, the file comes with a number of fields&mdash;see the [Syslog File](../../docu/charts/syslog-file.md) section for the data types and allowable values.

<details>
```Text
devices:
  - id: 324235346
    name: 127.0.0.1
    description: syslog
    type: syslog
    status: true
    properties:
      address: "0.0.0.0"
      port: 14514
```
</details>

:::note
Multiple devices can be entered into the same YAML file, or multiple YAML files can be created to define device groups based on your choices.
:::

Here, we will monitor a laptop, so we assign an identifier to it.
