---
displayed_sidebar: userDocs
sidebar_position: 43
---

# PEM Files

A **PEM** (Privacy Enhanced Mail) file is a container format often used to store cryptographic keys, certificates, and other data. It is a Base64-encoded file that starts with a header and ends with a footer, e.g.:

```encoding
-----BEGIN <TYPE>-----
// Base64-encoded data
...
-----END <TYPE>--
```

etc. where `<TYPE>` can be, for instance, `CERTIFICATE`. These blocks communicate what is encoded in the file.

This is a text-based format, and the Base64-encoded data can be uppercase and lowercase letters, digits, '+', and '/'.

A **PEM** file can contain multiple blocks of such data. These are generally used to encode for example **RSA** keys for **SSH** connections, certificates used for **SSL** encryption and the keys associated with them, etc.

A **PEM** file for certificates can specify

* the end-user certificate assigned to a domain name by a **CA** (Certificate Authority)
* up to 4 intermedidate certificates
* a root certificate self-signed by the **CA**

These are generally issued by the **SSL** provider to be used in a web service.

**PEM** files are also used for **SSH**. A typical use on the command line with the server is:

```CLI-linux
ssh -i keyfile.pem root@host
```
