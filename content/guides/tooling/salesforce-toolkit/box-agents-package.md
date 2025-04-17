---
rank: 5
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
---
# Box Agents Package

The Box Agents Package is an extension of the Box for Salesforce managed
package. This extension provides reusable Agentforce [actions][actions] that
help automate workflows and enhance intelligent agent—based processes within
Salesforce.
It builds on the core features of the Box for Salesforce package and uses
global, invocable Apex methods to improve functionality. The Box Agents Package 
references the methods by using the Box name space in Agentforce Actions.

## Methods in Agentforce Flows

The list below contains example [methods][methods] that can be invoked in
Agentforce. 

### Folder & File Management

* Create Folder
* Create Folder Association
* Create Folder for Record ID
* Create Folder for Record ID from Template
* Get Folder Contents by Folder ID
* Get Folder ID by Record ID
* Get Folder URL
* Move Folder
* Get Object Folder by Record ID
* Get Record ID by Folder ID
* Get URL for Folder

### Metadata Management

* Create Box Metadata by File ID
* Create Box Metadata by Folder ID
* Delete Box Metadata by File ID
* Delete Box Metadata by Folder ID
* Update Box Metadata by Folder ID
* Get Box Metadata by File ID
* Get Box Metadata by Folder ID

### Collaboration

* Create Collaboration
* Create Collaboration on Record
* Edit Collaboration
* Delete Collaboration

### Additional Actions

<!--alex ignore -->
* Create File from Attachment
* Get DocGen Batch
* Get Folder Associations by Salesforce Record ID
* Get Metadata Cascade Policies by Folder ID
* Get Metadata Cascade Policy by ID
* Create Metadata Cascade Policy
* Delete Metadata Cascade Policy
* Create Slack Channel Mapping
* Set Slack Channel Access Management Disabled
<!--alex enable -->

[methods]: g://tooling/salesforce-toolkit/methods
[actions]: g://tooling/salesforce-toolkit/flow-actions
