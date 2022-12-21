---
rank: 3
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
---

# Flow Actions

Salesforce toolkit includes wrappers that allow admins
to invoke the following [methods]. It allows Box for Salesforce
users to build automated solutions, such as folder structure,
using [Salesforce Flows].

## Methods in Salesforce Flows

The list below contains all methods that can be invoked in
[Salesforce Flows].

- `createFileFromAttachment`
- `getObjectFolderByRecordId`
- `getRootFolderId`
- `createObjectFolderForRecordId`
- `createFolder`
- `createFolderForRecordId`
- `moveFolder`
- `getFolderAssociationsByRecordId`
- `getFolderIdByRecordId`
- `getRecordIdByFolderId`
- `createFolderAssociation`
- `createCollaboration`
- `createCollaborationOnRecord`
- `editCollaboration`
- `deleteCollaboration`
- `enableAppActivity`
- `getFolderUrl`
- `getUrlForFolder`

An example method:

<!-- markdownlint-disable line-length -->

```js
global with sharing class TKCreateFolder {
    @InvocableMethod(callout=true label='Create Folder' description='Description should come from https://developer.box.com/guides/tooling/salesforce-toolkit/methods/#deleteserviceuserassociation')
    global static List<String> createFolder(List<Request> requests) {
        Toolkit tk = new toolkit();
        List<String> folderIds = new List<String>();
        for(Request req : requests){
            folderIds.add(tk.createFolder(req.folderName, req.parentFolderId, null))
        }
      
        tk.commitChanges();
        return folderIds;
    }
  
  global class Request {
    @InvocableVariable
    global String folderName;
    @InvocableVariable
    global String parentFolderId;
    
    ...
      
  }

}
```

<!-- markdownlint-enable line-length -->

[methods]: g://tooling/salesforce-toolkit/methods.md
[Salesforce Flows]: https://help.salesforce.com/s/articleView?id=sf.flow.htm&type=5