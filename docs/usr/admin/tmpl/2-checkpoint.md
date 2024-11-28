# Checkpoint

> - **Device Type**: Firewall
> - **Device Vendor**: Checkpoint
> - **Device Family** (Optional): "&lt;_description text_&gt;"
> - **Description**: Pipeline for parsing Checkpoint firewall logs.
> - **Trigger**:
> ```REGEX
> r'(?i)(?:cp_[\w-]+|.checkpoint.|.\bproduct=(?:VPN-1|SmartDefense|FireWall-1|SmartCenter|VSX|Gateway)\b.|\[fw_name:.\]|\bfw=\".\"|\borigin=.\btime=.\baction=.\bservice=.)'
> ```
