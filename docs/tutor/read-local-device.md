# Read Local Device

In this tutorial, we will show you the basic device data reading operation.

## Configure Console

On the terminal, navigate to `<vm_root>`, i.e. where you have placed the **VirtualMetric** executables. Then, query for YAML files:

```PowerShell
<vm_root>\Get-ChildItem -File *.yaml


    Directory: C:\VirtualMetric


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        28/11/2024     13:14             76 vmetric.yaml
```

You will notice the `vmetric.yaml` file. If you print it to the terminal, you will see that the `console` entry has its `status` property set to `false`:

<details>
<summary>Contents of `vmetric.yaml`</summary>
```YAML
debug:
  log:
    status: true
  level: 5
  console:
    status: false
```
</details>

Open the file with a text editor, and set the property `console: status:` to `true`.

## Check Device Id

Now `cd` to the `config` directory under the root. If you query for the subdirectories, you will see that there are three.

```PowerShell
<vm_root>\config\Get-ChildItem -Attributes Directory

    Directory: C:\VirtualMetric\config


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        19/11/2024     19:33                devices
d-----        19/11/2024     19:33                routes
d-----        20/11/2024     14:08                targets
```

**Director** uses a basic **YAML** configuration file for devices. Navigate to the `devices` directory and list its contents:

```PowerShell
<vm_root>\config\devices\Get-ChildItem

    Directory: C:\VirtualMetric\config\devices


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        19/11/2024     17:18            173 syslog.yaml
```

You can see the `syslog.yaml` file listed. Print its contents to the terminal:

<details>
<summary>Contents of `syslog.yaml`</summary>
```YAML
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

By default, the file comes with the fields quoted above. For the data types and allowable values, see the [Syslog Files](../ref/syslog.md) section.

:::note
Multiple devices can be entered into the same YAML file, or multiple YAML files can be created to define device groups based on your requirements.
:::

Here, we will monitor our local computer&mdash;which is named `LAPTOP`&mdash;so we do not have to change any value.

:::info
If the default `id` value is not modified, **Director** assigns it to the local computer.
:::

## Run Director

Type the executable name of **Director** (i.e. `vmetric-director`) without specifying any parameters, and press <kb-short>Enter</kb-short>. After suspending for a few seconds, it will start sending a stream of messages to the console:

```PowerShell
<vm_root>\vmetric-director
[2024-11-30 13:19:49] [Information] [vmetric-director] VirtualMetric Main Service {LAPTOP} is getting started... Process ID: 19904
[2024-11-30 13:19:49] [Information] [vmetric-director] System Date: 2024-11-30 13:19:49.6392555 +0300 +03 m=+1.976707401, Director Version: 10.0.0
[2024-11-30 13:19:49] [Information] [vmetric-director] Configuration changes have been published to the key-value store on vmetric-director.
[2024-11-30 13:19:50] [Information] [vmetric-director] [syslog-324235346] Collector for 127.0.0.1 is not running. Service will start a new collector.
[2024-11-30 13:19:50] [Information] [vmetric-director] Node LAPTOP became leader on vmetric-director.
[2024-11-30 13:19:53] [Verbose] [vmetric-director] [syslog-324235346] The listener will be started with 1 workers.
[2024-11-30 13:19:53] [Verbose] [vmetric-director] [syslog-324235346] Acknowledging queue.syslog.324235346.0.0.vmfl in the queue because the file is too old.
...
```

As you can see from the first message, **Director** started listening to our local computer.

:::info
There will be a number of warning messages about certain _log_ files that have not yet been configured. We will see how these are handled in later tutorials, so you can safely disregard them here.
:::

You can interrupt the stream by pressing <kb-short>Crtl+C</kb-short>.
