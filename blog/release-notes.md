---
authors: team
tags: [release]
pinned: true
---

# Release Notes for v1.3.0

This release introduces major enterprise-focused features, along with important improvements in content management. With Single Sign-On, RBAC, and the first phase of the MSSP module, our platform becomes more secure, flexible, and enterprise-ready than ever before. We’ve also added more vendors to the Content Hub and introduced Auto Syslog Discovery to simplify log management.

<!-- truncate --> 

## :rocket: New Features

**Single Sign-On (SSO) with Microsoft Azure** - Users can now log in directly with their Azure credentials, reducing password fatigue and improving security.

**Role-Based Access Control (RBAC)** - Introduced predefined roles (Admin, Contributor, User) and support for creating custom roles. This gives organizations fine-grained control over access and permissions.

**MSSP Module (Phase 1)** - Enterprise customers can now create and manage sub-tenants, switch between tenants, and define usage limits. This is the foundation for future phases, which will bring advanced capabilities like shared pipelines and global dashboards.

- **Single Sign-On (SSO)** - Authentication method allowing users to access multiple applications with one set of credentials, integrated with Microsoft Azure AD for enhanced security, reduced password fatigue, and centralized access management
- **Role-Based Access Control (RBAC)** - Fine-grained access management system with predefined roles (Admin, Contributor, User) and customizable roles for Enterprise plan users, providing structured access control and scalable permission management
- **MSSP Support (Phase 1)** - Managed Security Service Provider module enabling Enterprise-level customers to manage multiple tenants under a single account, offering centralized tenant management, quick switching between tenants, and enhanced operational efficiency with usage visibility and control

## :wrench: Improvements

### Content Hub

**More Vendors Added** - We expanded the list of supported vendors, giving customers access to a wider range of parser packs out of the box.

**Auto Syslog Discovery** - Automatically identifies the source behind each syslog message, ensuring clean and normalized logs without manual effort.

- Refactored Director component architecture and structure
- Added Active Directory checkbox functionality for agentless device access (Frontend)
- Implemented Active Directory field logic for check access requests (Backend)
- Completed refactoring of remaining target type implementations
- Refactored console component structure and organization
- Completed refactoring of remaining device type structures
- Refactored syslog component structure and implementation
- Fixed issue preventing removal of disabled devices and associated routes in Quick Routes
- Added Active Directory checkbox with conditional username/password fields for Windows Agentless Flow
- Made syslog forwarding addresses editable after creation in Device Syslog Design
- Added enable/disable functionality to Windows device detail pages
- Added filtering functionality for targets and vendors after device type selection
- Fixed default line delimiter for TCP/Syslog devices and file target location field
- Made Sentinel target rows editable after addition
- Fixed font sizes and overflow issues in pipeline and content hub displays
- Corrected font sizes and UI elements in Account Settings to match design specifications
- Added support for Barracuda, Infoblox, VirtualMetric vendors and Syslog target in Content Hub
- Fixed incorrect total count display in Content Hub
- Updated copyright text and password reset messages for Reset Password & Login
- Implemented role creation logic with basic/advanced functionality and API connections
- Implemented role creation forms with hook-form integration

## :bug: Bug Fixes

Fixed minor UI issues in the Settings pages. Resolved inconsistencies in pipeline latency reporting. Fixed login redirect issue affecting some SSO users

- Fixed Agent Connection Status showing "not-connected" even when running
- Fixed IP address not displaying in UI for agentless devices
- Fixed password reset flow redirect and display issues
- Fixed modal display bug when logging out during device/target creation
- Fixed text overflow issues in Content Hub display
- Updated logo structure and fixed text alignment issues in Content Hub
- Fixed error page redirect when clicking audit actions
