# Details to Always Keep In Mind When Generating Documents for DataStream

## Components

Components are named as:

- devices (NOT "inputs", "sources", etc.)
- targets (NOT "outputs", "destinations", "sinks", etc.)
- pipelines (NOT "queues", etc.)
- processors (NOT "transforms", "functions", etc.)
- routes

Components are always entered as below:

### Devices

```yaml
devices:
  - id: <a-unique-number>
    name: <a-unique-idemtifier>
    type: <specific-device-type>
    ...
```

### Targets

```yaml
targets:
  - name: <a-unique-idemtifier>
    type: <specific-target-type>
    ...
```

### Pipelines

```yaml
pipelines:
  - name: <a-unique-idemtifier>
    processors:
      - <processor-name>:
        <other-procesor-fields>
    ...
```

### Routes

```yaml
routes:
  - name: <a-unique-idemtifier>
    devices:
      - <list-of-devices> (follows the rules above)
    targets:
      - <list-of-targets> (follows the rules above)
    pipelines:
      - <list-of-pipelines> (follows the rules above)
    ...
```

### Processors

```yaml
processors:
  - <processor-name>:
    <other-fields>
    ...
```

Note that we do NOT place a "-" at the beginning of field names of procesors. Only the first entry under "processors" has one because it is followed by the name of the processor and a colon.

---

> **NOTE**: Only devices have an "id" field. Other components (targets, pipelines, routes) don't.

---
