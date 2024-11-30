# Write Data To A File

:::note
* Bu işlem için hangi ayarlar ve parametreler gerekiyor?
* Bunları bulabileceğim source dosya hangisi?
:::

In this tutorial, we will direct the stream that **Director** is ingesting from a device to an output file.

On your terminal, navigate to `<vm_root>`. As in the previous tutorial, we will not be modifying any of the values in `config\syslog.yaml`. But this time we will dump the output of **Director** to a file. To do this, we have to specify a filename. We will name our dump file as, you guessed it, `dump_data.txt`, and we will direct the output using standard syntax terminals use.

Copy the following line to your terminal and press <kb-short>Enter</kb-short>:

```PowerShell
<vm_root>\vmetric-director > dump_data.txt
```

As **Director** is sending all its messages to our dump file, we will get any feedback from the terminal. Again, you can interrupt the stream by pressing <kb-short>Ctrl+C</kb-short>. Since we did not specify any path for our file, it was created in the current directory. We can get its content through our terminal as:

```PowerShell
<vm_root>\Get-Content dump_data.txt
[2024-11-30 15:51:02] [Information] [vmetric-director] VirtualMetric Main Service {LAPTOP} is getting started... Process ID: 12296
[2024-11-30 15:51:02] [Information] [vmetric-director] System Date: 2024-11-30 15:51:02.9175064 +0300 +03 m=+0.525530701, Director Version: 10.0.0
[2024-11-30 15:51:02] [Information] [vmetric-director] Configuration changes have been published to the key-value store on vmetric-director.
[2024-11-30 15:51:04] [Information] [vmetric-director] [syslog-324235346] Collector for 127.0.0.1 is not running. Service will start a new collector.
[2024-11-30 15:51:04] [Information] [vmetric-director] Node LAPTOP became leader on vmetric-director.
...
```

We have recorded the device data in text format in a file.
