---
slug: /
displayed_sidebar: adminDocs
sidebar_position: 1
---

# Overview

**VirtualMetric**'s **Generator** and **Director** are tools designed for creating and managing _pipelines_ to monitor telemetry data streams for various purposes.

The pipelines are created to route incoming data streams from _sources_ to _targeted_ outgoing streams or a final destination.

The sources can be devices, networks, or pipelines, and the targets can be the **CLI**, log files, or again other pipelines. Sources and targets can be connected to each other in _one-to-one_, _one-to-many_, _many-to-one_, and _many-to-many_ configurations.

Each incoming stream can be queried with criteria specific to the properties of the data, and each outgoing stream can be enriched with inferences made from the data for further processing on the target side.

In this administration guide, we will explain various processing features of these programs; the types of devices, pipelines, and data streams they can handle, and the enrichment capabilities they offer in detail.

---

## System Requirements

* Memory: **64MB**
* OS: All currently supported **Windows** and **Linux** versions

## Installation

The executables can be placed in any directory you wish.

## Release

The current release is **10.0.0**.
