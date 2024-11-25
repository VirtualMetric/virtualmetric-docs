---
displayed_sidebar: cmdlnDocs
sidebar_position: 31
---

# Setup

The chapters of the tutorial require the following basic setup, tools, and sample data.

:::note
* Bu chapterlardaki işlemler için gereken en basit setup (yani ayarlar/parametreler) neler?
* Bu işlemler için downloadable örnek veriler koymamız doğru olmaz mı?
:::

:::info
We assume that the executables of **Director** and **Generator** are under the `C:\>VirtualMetric` directory which we will sometimes refer to as `<vm_root>`. Also, on **Windows** we assume you are using a **PowerShell** terminal.
:::

* Download the following sample data and place them in &lt;_some-directory_&gt;:
  * sample-data-1
  * sample-data-2
  * etc.

* Make sure that the `<vm_root>\package\definitions\pipelines\checkpoint.yaml` file contains the following entries:

```yaml
	entry 1
	entry 2
	...
	etc.
```
