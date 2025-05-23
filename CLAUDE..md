# Details to Always Keep In Mind When Generating Documents for DataStream

## Documentation Repo

- Our Dacusaurus documentation repo is [here(https://github.com/VirtualMetric/virtualmetric-docs. The documens you create go under (as I'm sure you know) the "docs" directory. Do **not** forget to check the latest versions of the previously-created documents before you embark on creating new ones since I proof and edit them. If you cannot access them, let me know so that I upload the relevant documents that I wont you to study before writing the currrent one I demand.

## Installation Directories

**VirtualMetric** installation directory contains the following folders, in addition to others.

```code
<vm_root>
├───storage
│   ├───logs
│   vmetric.yml
├───config
│   ├───devices
│   │       estreamer.yml
│   │       syslog.yml
│   │       tcp.yml
│   ├───routes
│   │       default.yml
│   └───targets
│           console.yml
│           file.yml
├───package
│   └───definitions
│       └───pipelines
│               checkpoint.yml
│               cisco.yml
│               normalize.yml
└───user
    └───definitions
        └───pipelines
                checkpoint.yml
                normalize.yml
```

- We place all our configuration (i.e. YAML) files under the `config` directory. They can be placed anywhere; it is not necessary, for example, to put a target configuration yaml file under `config/targets`. But they **must** be under `config`
- In order to generate logs about the execution of the program, the `vemtric.yml` file should contain the following settings:
  
  ```yaml
  debug:
    log:
      status: true
    level: 4
    console:
      status: true
  ```

- Logs are place under the `storage/logs` directory.

## Command Line Entries

- Use the document we have created for the CLI as reference in all your CLI code samples.

## Components

The component types DataStream/Director uses are:

- devices (**not** "inputs", "sources", etc.)
- targets (**not** "outputs", "destinations", "sinks", etc.)
- pipelines (**not** "queues", etc.)
- processors (**not** "transforms", "functions", etc.)
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

## YAML Configurations

- IMPORTANT: We do NOT place a "-" at the beginning of field names of procesors. Only the first entry under "processors" has one because it is followed by the name of the processor and a colon.

- IMPORTANT: Only devices have an "id" field. Other components (targets, pipelines, routes) **don't**.

## Deployment

- We do **not** have a Docker deployment. We only have Azure deployments.

## Role Models

- You can use Cribl, Tenzir, AutoMQ, and Vector as _role models_ for the pages you create. However, we should still strive to make our pages as original as we can.
