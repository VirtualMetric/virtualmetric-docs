# Next Steps

Your basic DataStream pipeline is successfully processing data! Here's how to expand and customize your deployment to meet growing requirements.

## Customize Your Pipeline

Your installed template provides excellent baseline functionality, but you can customize it for your specific needs:

### Access Pipeline Configuration
- **Navigate to**: **My Pipelines**
- **Find your pipeline**: Click on your installed Content Hub template
- **Edit configuration**: Switch to **Pipeline Overview** tab and click the edit (pencil) icon

### Common Customizations

**Add Field Mapping:**
```yaml
# Map custom fields to standard names
- rename:
    field: src_ip
    target_field: source.ip
- rename:
    field: dst_ip  
    target_field: destination.ip
```

**Include Data Filtering:**
```yaml
# Drop debugging messages
- drop:
    if: 'log.level == "debug"'

# Keep only security events
- drop:
    if: 'event.category != "security"'
```

**Add GeoIP Enrichment:**
```yaml
# Add geographic information for IP addresses
- geoip:
    field: source.ip
    target_field: source.geo
```

**Custom Field Parsing:**
```yaml
# Parse custom application logs
- grok:
    field: message
    patterns:
      - "User %{USERNAME:user.name} performed %{WORD:event.action} on %{DATA:file.path}"
```

### Create Child Pipelines

Break complex processing into modular components:

1. **Add Child Pipeline**:
   - Click **Add new child pipeline** in your main pipeline
   - Name it descriptively (e.g., "security-event-enrichment")

2. **Delegate Specific Tasks**:
   - Route certain log types to specialized processing
   - Handle different data formats with dedicated parsers
   - Separate enrichment logic from core parsing

3. **Chain Pipeline Processing**:
   ```yaml
   # In main pipeline, call child pipeline
   - pipeline:
       name: security-event-enrichment
       if: 'event.category == "security"'
   ```

**Learn More**: [Pipeline Configuration Guide](/configuration/pipelines/overview)

## Scale Your Data Collection

### Add More Devices

**Windows Event Logs:**
1. Go to **Fleet Management** → **Devices** → **Windows**
2. Deploy agents to Windows servers for security event collection
3. Configure log types: All, Common, Minimal, or Custom
4. Monitor authentication, process creation, and system events

**Network Security Devices:**
1. **Firewalls**: Configure Palo Alto, Cisco ASA, Fortinet devices to send syslogs
2. **IDS/IPS Systems**: Connect Snort, Suricata, or commercial detection systems
3. **Network Equipment**: Collect logs from switches, routers, load balancers

**Cloud Services Integration:**
1. **Azure Monitor**: Connect Azure Activity Logs and diagnostic data
2. **AWS CloudTrail**: Ingest AWS API and management events
3. **Microsoft 365**: Collect Office 365 audit and security logs

**Application Data:**
1. **HTTP Endpoints**: Accept webhook data from applications
2. **Database Logs**: Collect audit logs from SQL Server, Oracle, PostgreSQL
3. **Web Server Logs**: Process Apache, IIS, Nginx access and error logs

### Add More Targets

**Microsoft Sentinel Integration:**
- **Purpose**: Send security data to Microsoft's cloud SIEM
- **Configuration**: Azure subscription, Sentinel workspace, Data Collection Rules
- **Benefits**: Advanced analytics, threat detection, incident response

**Azure Blob Storage:**
- **Purpose**: Long-term archival and compliance storage
- **Features**: Automatic lifecycle management, cost-effective storage tiers
- **Use Cases**: Regulatory retention, historical analysis, data lake storage

**Azure Data Explorer:**
- **Purpose**: Real-time analytics and operational dashboards
- **Query Language**: Powerful KQL for interactive data exploration
- **Visualization**: Built-in charts, graphs, and dashboard creation

**Multiple Target Routing:**
```yaml
# Send different data types to different destinations
routes:
  - name: security-to-sentinel
    devices: [firewall-logs, ids-logs]  
    pipelines: [security-normalization]
    targets: [microsoft-sentinel]

  - name: operations-to-storage
    devices: [server-logs, app-logs]
    pipelines: [operational-parsing]  
    targets: [azure-blob-storage]
```

**Learn More**: 
- [Device Configuration Guide](/configuration/devices/overview)
- [Target Configuration Guide](/configuration/targets/overview)

## Implement Advanced Routing

Move beyond basic routes to sophisticated data flow management:

### Conditional Routing

**Route by Data Content:**
```yaml
# Advanced route with filtering
routes:
  - name: critical-alerts
    filter: 'log.level == "error" || event.severity == "high"'  
    devices: [all-devices]
    pipelines: [alert-enrichment]
    targets: [real-time-alerting]

  - name: normal-processing  
    filter: 'log.level != "error" && event.severity != "high"'
    devices: [all-devices]
    pipelines: [standard-processing]
    targets: [batch-storage]
```

**Route by Source System:**
```yaml
# Different processing for different device types
routes:
  - name: network-devices
    filter: 'host.type == "network"'
    pipelines: [network-log-parser]
    
  - name: security-devices  
    filter: 'host.type == "security"'
    pipelines: [security-log-parser]
```

### Multi-Target Routes

**Parallel Processing:**
```yaml
# Process once, send to multiple destinations
routes:
  - name: multi-destination
    devices: [syslog-collector]
    pipelines: [universal-parser]
    targets: 
      - microsoft-sentinel      # Security analysis
      - azure-blob-storage     # Long-term retention  
      - local-file-storage     # Local backup
```

**Conditional Target Selection:**
```yaml  
# Different targets based on data classification
routes:
  - name: classified-routing
    devices: [all-logs]
    pipelines: [data-classifier]
    targets:
      - name: sensitive-storage
        if: 'data.classification == "sensitive"'
      - name: standard-storage  
        if: 'data.classification != "sensitive"'
```

### Load Balancing

**Distribute Processing:**
- Deploy multiple Directors across different servers
- Use DNS round-robin or load balancers for device connections
- Route processing to least loaded Directors
- Implement failover for high availability

**Learn More**: [Advanced Routes Guide](/gui/routes/managing-advanced-routes)

## Deploy Self-Managed Directors

Ready for more control? Set up on-premises Directors:

### When to Use Self-Managed Directors

**Regulatory Requirements:**
- Data must remain in specific geographic regions
- Compliance mandates on-premises processing
- Industry regulations require data sovereignty

**Performance Needs:**
- High-volume processing requiring dedicated resources
- Low-latency requirements for real-time analytics
- Custom hardware optimization requirements

**Network Security:**
- Air-gapped environments with no cloud connectivity
- Complex firewall rules or network segmentation
- Zero-trust architecture implementations

### CLI Configuration Process

1. **Download Director Binary**
   
   **Linux:**
   ```bash
   curl -sL dl.vget.me | bash
   ```
   
   **Windows PowerShell:**
   ```powershell
   Invoke-WebRequest dl.vget.me | Invoke-Expression
   ```

2. **Create Configuration Structure**
   ```bash
   # Create directory structure
   mkdir -p /opt/datastream/{config/{devices,targets,routes,pipelines},storage,logs}
   ```

3. **Configure Components**

   **Device Configuration** (`config/devices/syslog.yml`):
   ```yaml
   devices:
     - name: production-syslog
       type: syslog  
       properties:
         protocol: udp
         address: 0.0.0.0
         port: 514
   ```

   **Target Configuration** (`config/targets/storage.yml`):
   ```yaml
   targets:
     - name: production-storage
       type: file
       properties:
         location: /var/log/datastream
         name: "logs-{{.Year}}_{{.Month}}_{{.Day}}.json"
   ```

   **Route Configuration** (`config/routes/main.yml`):
   ```yaml
   routes:
     - name: production-flow
       devices: [production-syslog]
       pipelines: [syslog-processing]
       targets: [production-storage]
   ```

4. **Deploy as Service**
   
   **Linux systemd:**
   ```bash
   sudo ./vmetric-director -service install
   sudo systemctl start vmetric-director
   sudo systemctl enable vmetric-director
   ```
   
   **Windows Service:**
   ```powershell
   .\vmetric-director.exe -service install
   .\vmetric-director.exe -service start
   ```

5. **Connect to Cloud Console**
   - Register self-managed Director with cloud platform
   - Monitor and manage through DataStream web interface
   - Maintain local control with cloud visibility

**Learn More**: [CLI Configuration Guide](/cli/director)

## Manage Your Organization

As your deployment grows, implement proper governance:

### User Management

**Add Team Members:**
1. Go to **Organization** → **Users**
2. Click **Add new user** 
3. Configure roles and permissions appropriately
4. Send invitation emails to new team members

**Role Assignment:**
- **Owner**: Full control, can transfer ownership
- **Admin**: Full access except ownership transfer  
- **Contributor**: Can edit configurations but not delete
- **User**: Read-only access to view configurations

### Access Control

**Permissions Matrix:**
- **Fleet Management**: Control who can modify devices, targets, directors
- **Pipeline Management**: Restrict who can edit processing logic
- **Route Configuration**: Control data flow management access
- **User Administration**: Limit who can add/remove team members

### Monitoring and Auditing

**Activity Tracking:**
1. Go to **Organization** → **Audit**  
2. Review user actions and configuration changes
3. Monitor login activities and access patterns
4. Export audit logs for compliance reporting

**Performance Dashboards:**
- Track data volumes and processing rates across all directors
- Monitor system health and resource utilization
- Set up alerting for critical processing failures
- Generate capacity planning reports

**Learn More**: [Organization Management Guide](/gui/organization/users/overview)

## Integration Scenarios

### Security Operations Center (SOC)

**Data Sources:**
- Firewalls, IDS/IPS, endpoint protection systems
- Domain controllers, authentication servers
- Network monitoring and threat detection platforms

**Processing:**
- Normalize to ASIM format for consistent analysis
- Enrich with threat intelligence and user context
- Correlate events across multiple security tools

**Outputs:**
- Microsoft Sentinel for advanced analytics and SOAR
- Azure Blob Storage for forensic analysis and retention
- Real-time alerting for critical security events

### IT Operations Management

**Data Sources:**
- Windows/Linux system logs from servers
- Application logs from business-critical services  
- Infrastructure monitoring and performance metrics

**Processing:**
- Parse error messages and performance indicators
- Extract operational KPIs and SLA metrics
- Filter noise and focus on actionable insights

**Outputs:**
- Azure Data Explorer for operational dashboards
- File storage for historical trend analysis  
- Integration with monitoring tools for alerting

### Compliance and Audit

**Data Sources:**
- Database audit logs and access records
- File access logs and configuration changes
- Privileged account usage and administrative actions

**Processing:**
- Enrich with user identity and risk context
- Classify data sensitivity and access patterns
- Generate compliance-ready audit trails

**Outputs:**
- Tamper-proof archival storage for regulatory retention
- Real-time alerting for high-risk activities
- Automated compliance reporting and dashboards

## Getting Help and Staying Updated

### Documentation Resources
- **Component Guides**: Use sidebar navigation for detailed configuration options
- **Search Function**: Find specific topics and troubleshooting information  
- **Example Configurations**: Real-world deployment patterns and templates

### Community and Support
- **Knowledge Base**: Common questions, best practices, and troubleshooting guides
- **Community Forum**: Connect with other DataStream users and share experiences
- **Professional Support**: Enterprise support options for critical deployments

### Product Updates
- **Release Notes**: New features, improvements, and bug fixes
- **Content Hub Updates**: New pipeline templates for additional device types and vendors
- **Best Practice Evolution**: Updated recommendations based on customer feedback

## Congratulations!

You've successfully built your first DataStream pipeline and learned the foundation for sophisticated data processing workflows. Your journey from raw logs to actionable insights is well underway.

### What You've Accomplished:
- ✅ Created your DataStream account and cloud presence
- ✅ Deployed and connected a cloud-managed Director
- ✅ Configured your first data source device
- ✅ Set up data output destination with proper formatting
- ✅ Installed professional-grade processing templates
- ✅ Connected components with functional data flow routes
- ✅ Verified end-to-end data processing and transformation
- ✅ Learned monitoring and troubleshooting techniques
- ✅ Explored scaling and customization options

### Your Next Adventure:

**Choose your path forward based on your needs:**

- **Security Focus**: Integrate with Microsoft Sentinel, add threat intelligence enrichment
- **Operations Focus**: Connect infrastructure monitoring, build operational dashboards  
- **Scale Focus**: Add more data sources, implement advanced routing, deploy self-managed Directors
- **Compliance Focus**: Implement audit trails, long-term retention, automated reporting

The powerful data processing infrastructure you need is now at your fingertips. Welcome to the DataStream community!