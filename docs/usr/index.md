---
slug: /
sidebar_position: 1
displayed_sidebar: userDocs
---

# Overview

This document describes the features and functionality of **VirtualMetric**'s **Generator** and **Director**.

## Introduction

 **Generator** and **Director** are tools designed for creating and managing _pipelines_ to monitor telemetry data streams for various purposes.

The pipelines are created to route incoming data streams from _sources_ to _targeted_ outgoing streams or a final destination.

The sources can be devices, networks, or pipelines, and the targets can be the **CLI**, log files, or again other pipelines. Sources and targets can be connected to each other in _one-to-one_, _one-to-many_, _many-to-one_, and _many-to-many_ configurations.

Each incoming stream can be queried with criteria specific to the properties of the data, and each outgoing stream can be enriched with inferences made from the data for further processing on the target side.

In this guide, we will explain various features: the types of devices, data files, and pipelines that can be specified; the types of data streams that can be handled; and the enrichment capabilities available in detail.

---

## System Requirements

* Memory: **64MB**
* OS: All currently supported **Windows** and **Linux** versions (specify?)
* Any other ?

---

## Installation

The executables can be placed in any directory you wish.

:::warning
Make sure you allow the program to run in **Windows Firewall**.
:::

---

## Version

The current release of both programs is **10.0.0**.

---

## Disclaimer

NO WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, IS MADE IN RELATION TO THE CONTENTS OF THIS DOCUMENT REGARDING ITS USE, INCLUDING BUT NOT LIMITED TO AVAILABILITY, ACCURACY, RELIABILITY, NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PURPOSE. IN NO EVENT SHALL **VirtualMetric B.V.** BE LIABLE FOR ANY DAMAGES, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, OR DUE TO BUSINESS INTERRUPTION, OR ANY LOSS OF PROFIT, REVENUE, BUSINESS OPPORTUNITY, OR DATA THAT MAY ARISE FROM THE USE OF THE INFORMATION HEREIN.

---

**VirtualMetic Generator** and **VirtualMetric Director** are registered trademarks of **VirtualMetric B.V.** Other products mentioned in this document may be trademarks of their respective owners.

This document is subject to change without prior notice.
