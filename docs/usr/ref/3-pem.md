---
displayed_sidebar: userDocs
---

# PEM Files

A **PEM** (Privacy Enhanced Mail) file is a container format often used to store cryptographic keys, certificates, and other data. It is a base64-encoded file that starts with a header and ends with a footer, e.g.:

```encoding
-----BEGIN CERTIFICATE-----
MIIH/TCCBeWgAwIBAgIQaBYE3/M08XHYCnNVmcFBcjANBgkqhkiG9w0BAQsFADBy
MQswCQYDVQQGEwJVUzEOMAwGA1UECAwFVGV4YXMxEDAOBgNVBAcMB0hvdXN0b24x
ETAPBgNVBAoMCFNTTCBDb3JwMS4wLAYDVQQDDCVTU0wuY29tIEVWIFNTTCBJbnRl
cm1lZGlhdGUgQ0EgUlNBIFIzMB4XDTIwMDQwMTAwNTgzM1oXDTIxMDcxNjAwNTgz
M1owgb0xCzAJBgNVBAYTAlVTMQ4wDAYDVQQIDAVUZXhhczEQMA4GA1UEBwwHSG91
...
-----END CERTIFICATE--
```

where `CERTIFICATE` can also be `PRIVATE KEY` or `RSA KEY`. These blocks communicate what is encoded in the file.

This is a text-based format, and the base64-encoded data can be uppercase and lowercase letters, digits, '+', and '/'.

A **PEM** file can contain multiple blocks of such data. These are generally used to encode for example **RSA** keys for **SSH** connections, certificates used for **SSL** encryption and the keys associated with them, etc.

A **PEM** file for certificates can specify

* the end-user certificate assigned to a domain name by a **CA** (Certificate Authority)
* up to 4 intermedidate certificates
* a root certificate self-signed by the **CA**

These are generally issued by the **SSL** provider to be used in a web service.

**PEM** files are also used for **SSH**. Typical use on the command line is:

```CLI-linux
ssh -i keyfile.pem root@host
```

where the `-i` parameter specifies the PEM file to use to create a secure **SSH** connection `host`.