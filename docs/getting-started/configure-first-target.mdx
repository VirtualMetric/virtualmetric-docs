# Configure Your First Target

## What is a Target?

A Target defines where your processed data goes after DataStream transforms it. Popular target types include:

- **Console** - Outputs data to the terminal for testing and debugging
- **File** - Saves data to JSON, CSV, XML, or other file formats
- **Microsoft Sentinel** - Sends security data to Microsoft's cloud SIEM platform
- **Azure Blob Storage** - Archives data for long-term retention and compliance
- **Azure Data Explorer** - Enables real-time analytics and dashboard creation

For this getting started guide, we'll create a **File Target** because it's simple to verify and understand.

## Create Your File Target

1. **Navigate to Targets**
   - From Home: **Fleet Management** → **Targets**
   - Click the **File** card

2. **Start Target Creation**
   - Click **Add new target**
   - You'll see the target creation form with multiple tabs

3. **Configure General Settings** (First Tab)
   - **Name**: "My First File Target"
   - **Description**: "Learning file output for getting started"
   - **Target Status**: Ensure toggle is **enabled** (blue)
   - **Post-processing pipeline**: Leave blank for now
   - Click **Next step**

4. **Configure File Properties** (Second Tab)
   - **Location**: Enter a directory path where you want files saved:
     - **Linux/macOS**: `/opt/datastream/output` or `/home/username/datastream`
     - **Windows**: `C:\DataStream\Output` or `D:\Logs\DataStream`
   - **File name**: `logs-{{.Year}}_{{.Month}}_{{.Day}}.json`
   - **Type**: JSON (default)
   - **Compression**: zstd (recommended for storage efficiency)
   - **Format**: Leave as default for now
   - Click **Add target**

:::caution Important
Ensure the directory you specify in **Location** exists and DataStream has write permissions. Create the directory beforehand if it doesn't exist.
:::

## Understanding File Naming

The file name template `logs-{{.Year}}_{{.Month}}_{{.Day}}.json` uses dynamic fields:
- `{{.Year}}` - Current year (e.g., 2024)
- `{{.Month}}` - Current month (e.g., 01, 02, 12)  
- `{{.Day}}` - Current day (e.g., 01, 15, 31)

This creates files like:
- `logs-2024_01_15.json`
- `logs-2024_01_16.json`
- `logs-2024_02_01.json`

This pattern automatically rotates files daily, making them easier to manage and archive.

## Verify Your Target

Your target should now appear in the File targets table with:
- **Status**: Enabled
- **Location**: Your specified directory path
- **Type**: JSON
- **Compression**: zstd

## Alternative Target Types

**Need different output destinations?**

### Microsoft Sentinel Integration
- **Purpose**: Send security data to Microsoft's cloud SIEM
- **Best for**: Security operations centers, compliance monitoring
- **Requires**: Azure subscription, Sentinel workspace, Data Collection Rules

### Azure Blob Storage  
- **Purpose**: Long-term archival and data lake storage
- **Best for**: Compliance retention, historical analysis, cost-effective storage
- **Supports**: Multiple file formats, automatic lifecycle management

### Azure Data Explorer
- **Purpose**: Real-time analytics and dashboards  
- **Best for**: Operational monitoring, performance metrics, interactive querying
- **Features**: Fast ingestion, powerful query language (KQL), visualization tools

### Console Target (for Testing)
- **Purpose**: Display processed data in terminal output
- **Best for**: Development, debugging, pipeline testing
- **Output**: Real-time data stream to console/logs

**Learn More**: For detailed configuration of all target types, see our [Target Configuration Guide](/configuration/targets/overview).

## File Format Options

Your File target supports multiple output formats:

- **JSON** - Easy to read, widely supported, good for APIs
- **CSV** - Spreadsheet compatible, good for analysis tools  
- **XML** - Structured markup, good for enterprise integrations
- **Avro** - Efficient binary format, good for big data processing
- **Parquet** - Columnar format, excellent for analytics and compression

## What's Next?

Your target is ready to receive processed data. Now we need to install processing logic that will transform your raw data into a useful format.

**Next:** [Install Content from Content Hub](install-content-hub) to add pre-built data processing pipelines.