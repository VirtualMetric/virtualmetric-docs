---
displayed_sidebar: commandLineDocs
sidebar_position: 32
---

# Read Device Data

In this tutorial, we will show you the basics of a simple telemetry data reading operation.

:::note
* Bu programın kaynak kodu hangi dosyada?
* Eren'in gösterdiği işlemi yapamadım. Nasıl yapılacak?
* `vmetric-generator`'ın çalışma tarzı:
  * Komut satırına en az hangi parametrelerin girilmesi gerekiyor?
  * Sonucu komut satırına print etmek için ne yapılacak?
  * Default parametreler hangi dosyalardan alınıyor?
* Örnek veriler?
:::

Open a terminal and navigate to the `config` directory under the root. If you list the directory contents, you will see three subdirectories: `devices`, `routes`, and `targets`.

```CLI
C:\>VirtualMetric\config\Get-ChildItem

    Directory: C:\VirtualMetric\config


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        19/11/2024     19:33                devices
d-----        19/11/2024     19:33                routes
d-----        20/11/2024     14:08                targets
```

For the data we will monitor, we first have to configure the _source_ of the data by pointing to a specific device. To do that, we have to configure a YAML file. Now, `cd` to the `devices` directory and list its contents:

```CLI
C:\>VirtualMetric\config\devices\Get-ChildItem

    Directory: C:\VirtualMetric\config\devices


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        19/11/2024     17:18            173 syslog.yaml
```

You can see a file named `syslog.yaml`. Open it with a text editor or print its contents to the terminal with `Get-Content`.

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

By default, the file comes with certain fields&mdash;see the [Syslog File](../../docu/tables/syslog-file.md) section for the data types and allowable values.

:::note
Multiple devices can be entered into the same YAML file, or multiple YAML files can be created to define device groups based on your choices.
:::

Here, we will monitor the local computer, so we assign the identifier `LAPTOP` to it using the `id` field. (Replace this with the name of your computer.)

```cli
.\vmetric-generator -now -count 10 -mode syslog -address 127.0.0.1:14514 -duration 1
```
