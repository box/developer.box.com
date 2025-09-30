---
rank: 3
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/salesforce-toolkit
is_index: false
id: tooling/salesforce-toolkit/flow-actions
type: guide
total_steps: 5
sibling_id: tooling/salesforce-toolkit
parent_id: tooling/salesforce-toolkit
next_page_id: tooling/salesforce-toolkit/ui-elements
previous_page_id: tooling/salesforce-toolkit/samples
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/salesforce-toolkit/flow-actions.md
---
# Flow Actions

Salesforce toolkit includes wrappers that allow admins
to invoke the following [methods]. It allows Box for Salesforce
users to build automated solutions, such as folder structure,
using [Salesforce Flows].

## Methods in Salesforce Flows

The list below contains all methods that can be invoked in
[Salesforce Flows].

<!--alex ignore -->

### Box Sign

- Send Box Sign Request (`sendSignRequests`)

### Box Hubs

- Add Hub Item (`tkAddHubItem`)
- Copy Hub (`tkCopyHub`)
- Create Hub (`tkCreateHub`)
- Create Hub Collaboration (`tkCreateHubCollaboration`)
- Get All Hubs (`tkGetAllHubs`)
- Get Enterprise Hubs (`tkGetEnterpriseHubs`)
- Get Hub by ID (`tkGetHubById`)
- Get Hub Collaborations (`tkGetHubCollaborations`)
- Update Hub (`tkUpdateHub`)
- Update Hub Collaboration (`tkUpdateHubCollaboration`)

### Box AI

- Box AI Ask by Item Id (`askBoxAI`)
- Box AI Extract by Fields (`extractBoxAI`)
- Box AI Extract by Metadata Template (`extractBoxAI`)
- Box AI Extract by SObject Type (`extractBoxAI`)
- Box AI Generate Text by Item Id (`generateBoxAI`)

### Doc Gen

- Create Doc Gen Template (`createDocGenTemplate`)
- Generate Doc Gen For Record (`generateDocGenForRecord`)
- Submit Doc Gen Batch (`submitDocgenBatch`)
- Get Doc Gen Batch Status (`getDocgenBatch`)

### File Box Metadata and actions

- Create Box Metadata by File Id (`tkCreateBoxMetadataByFileId`)
- Delete Box Metadata by File Id (`tkDeleteBoxMetadataByFileId`)
- Get Box Metadata by File Id (`tkGetBoxMetadataByFileId`)
- Update Box Metadata by File Id (`tkUpdateBoxMetadataByFileId`)
- Move File (`tkMoveFile`)
- Get Last Item (`getLastItem`)
- Get Recent Items (`GetRecentItems`)

### Folder Box Metadata and actions

- Create Box Metadata by Folder Id (`tkCreateBoxMetadataByFolderId`)
- Delete Box Metadata by Folder Id (`tkDeleteBoxMetadataByFolderId`)
- Get Box Metadata by Folder Id (`tkGetBoxMetadataByFolderId`)
- Update Box Metadata by Folder Id (`tkUpdateBoxMetadataByFolderId`)

### Folder management

- Create Folder (`tkCreateFolder`)
- Create Folder Association (`tkCreateFolderAssociation`)
- Create Folder For Record ID (`tkCreateFolderForRecordId`)
- Create Folder For Record ID From Template (`tkCreateFolderForRecordIdFromTemplate`)
- Create Object Folder For Record ID (`tkCreateObjectFolderForRecordId`)
- Get Folder Associations By Salesforce Record ID (`tkGetFolderAssociationsByRecordId`)
- Get Folder ID By Record ID (`tkGetFolderIdByRecordId`)
- Get Folder URL (`tkGetFolderUrl`)
- Get Object Folder By Record ID (`tkGetObjectFolderByRecordId`)
- Get Record ID By Folder ID (`tkGetRecordIdByFolderId`)
- Get Root Folder ID (`tkGetRootFolderId`)
- Get URL For Folder (`tkGetUrlForFolder`)
- Move Folder (`tkMoveFolder`)
- Update Folder (`tkUpdateFolder`)
- Get Box Folder Contents by Folder Id (`tkGetFolderContents`)

### Cascade policies

- Create Metadata Cascade Policy (`tkCreateMetadataCascadePolicy`)
- Delete Metadata Cascade Policy (`tkDeleteBoxMetadataByFolderId`)
- Get Metadata Cascade Policies by Folder Id (`tkGetMetadataCascadePoliciesByFolderId`)
- Get Metadata Cascade Policy by Id (`tkGetMetadataCascadePolicyById`)

### Collaboration

- Create Collaboration (`tkCreateCollaboration`)
- Create Collaboration On Record (`tkCreateCollaborationOnRecord`)
- Delete Collaboration (`tkDeleteCollaboration`)
- Edit Collaboration (`tkEditCollaboration`)

### Slack integration

<!--alex ignore -->

- Create Slack Channel Mapping (`tkCreateSlackChannelMapping`)
- Set Slack Channel Access Management Disabled (`tkSetSlackChannelAccessManagementDisabled`)

<!--alex enable -->

### Other / utilities

- Create File From Attachment (`tkCreateFileFromAttachment`)
- Enable Integration Activity (`tkEnableAppActivity`)
- Search (`search`)

<!--alex enable -->

[methods]: g://tooling/salesforce-toolkit/methods
[Salesforce Flows]: https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5