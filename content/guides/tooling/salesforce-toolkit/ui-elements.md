---
rank: 4
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
---

# UI Elements in Salesforce

The Box for Salesforce managed package offers the following
[UI Elements][1] as Lightning Components: [content picker][2],
[explorer][3], [preview][4], and [uploader][5]. You can use them on
Lightning Pages, or in Flows.

## Content picker

[Options][6] available in picker with Box for Salesforce are:

- `folderId` - if the lightning component is on a record page, it defaults to the record folder
- `chooseButtonLabel`
- `cancelButtonLabel`
- `canSetShareAccess`
- `canCreateNewFolder`
- `canUpload`
- `maxSelectable`

## Content explorer

[Options][7] available in explorer with Box for Salesforce are:

- `folderId` - if the lightning component is on a record page, it defaults to the record folder
- `canSetShareAccess`
- `canCreateNewFolder`
- `canUpload`
- `canPreview`
- `canDownload`
- `canDelete`
- `canRename`
- `canShare`

## Content preview

[Options][8] available in preview with Box for Salesforce are:

- `fileId` ([find your file ID][9])
- **File Id API Field Name** - Salesforce specific; on a record page, you can use an API field name that holds the file ID to be displayed

## Content uploader

[Options][10] available in uploader with Box for Salesforce are:

- `folderId` - if the lightning component is on a record page, it defaults to the record folder
- `fileLimit`

[1]: g://embed/ui-elements
[2]: g://embed/ui-elements/picker
[3]: g://embed/ui-elements/explorer
[4]: g://embed/ui-elements/preview
[5]: g://embed/ui-elements/uploader
[6]: g://embed/ui-elements/picker/#options
[7]: g://embed/ui-elements/explorer/#options
[8]: g://embed/ui-elements/preview/#options
[9]: g://files/get
[10]: g://embed/ui-elements/uploader/#options
