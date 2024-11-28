# Read Device Data

In this tutorial, we will show you the basics of a simple telemetry data reading operation.

On the terminal, navigate to `<vm_root>`, i.e. where you've place the **VirtualMetric** executables. Then, query for YAML files:

```CLI
<vm_root>\Get-ChildItem -File *.yaml


    Directory: C:\VirtualMetric


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        28/11/2024     13:14             76 vmetric.yaml
```

You will notice the `vmetric.yaml` file. If you print it to the terminal, you will see that the `console` entry has its `status` property set to `false`:

<details>
<summary>Contents of `vmetric.yaml`</summary>
```CLI
debug:
  log:
    status: true
  level: 5
  console:
    status: false
```
</details>

Open the file with a text editor, and set the property `console: status:` to `true`.

Now `cd` to the `config` directory under the root. If you list the directory contents, you will see three subdirectories: `devices`, `routes`, and `targets`.

```CLI
C:\>VirtualMetric\config\Get-ChildItem

    Directory: C:\VirtualMetric\config


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        19/11/2024     19:33                devices
d-----        19/11/2024     19:33                routes
d-----        20/11/2024     14:08                targets
```

To be able to monitor any data, we first have to configure its _source_ by pointing to a specific device. To do that, we have to configure another YAML file. Navigate to the `devices` directory and list its contents:

```CLI
C:\>VirtualMetric\config\devices\Get-ChildItem

    Directory: C:\VirtualMetric\config\devices


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        19/11/2024     17:18            173 syslog.yaml
```

You can see the `syslog.yaml` file listed. Print its contents to the terminal:

<details>
<summary>Contents of `syslog.yaml`</summary>
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

By default, the file comes with the fields enlisted here&mdash;see the [Syslog Files](../../usr/ref/2-syslog.md) section for the data types and allowable values.

:::note
Multiple devices can be entered into the same YAML file, or multiple YAML files can be created to define device groups based on your choices.
:::

In this tutorial, we will monitor our local computer&mdash;which is named `LAPTOP`&mdash;so we assign that identifier to the `device: id:` field. (Replace this with the name of your computer.)

Now open a separate terminal and, again, navigate to `<vm_root>`. On this terminal, enter the command `\vmetric-director` on the command line and press <kb-short>Enter</kb-short>. The command line will be suspended since **Director** has started listening.

Copy the following line to the previous terminal and press <kb-short>Enter</kb-short>:

```CLI
.\vmetric-generator -now -count 10 -mode syslog -address 127.0.0.1:14514 -duration 1
```
