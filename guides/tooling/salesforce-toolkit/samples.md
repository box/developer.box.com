---
rank: 2
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/salesforce-toolkit
is_index: false
id: tooling/salesforce-toolkit/samples
type: guide
total_steps: 4
sibling_id: tooling/salesforce-toolkit
parent_id: tooling/salesforce-toolkit
next_page_id: tooling/salesforce-toolkit/flow-actions
previous_page_id: tooling/salesforce-toolkit
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/salesforce-toolkit/samples.md
fullyTranslated: true
---
# コードサンプル

## 汎用メソッド

以下のコードは、汎用Toolkitメソッドを使用してSalesforceのBoxフォルダにメタデータを作成します。

<Tabs>

<Tab title="Apex">

```java
// Instantiate the Toolkit object
box.Toolkit toolkit = new box.Toolkit();

// Get the Salesforce record id associated with a Box folder
String recordId = toolkit.getRecordIdByFolderId('{some folder id}');

// Construct an object containing all the metadata you want
Map<String, Object> metadata = new Map<String, Object>{
    'salesforce_id' => recordId,
    'salesforce_url' => System.URL.getSalesforceBaseUrl().toExternalForm() + '/' + recordId,
    'salesforce_user_name' => UserInfo.getName(),
    'salesforce_user_email' => UserInfo.getUserEmail()
};

// Specify the Box API endpoint to call
String endpoint = 'https://api.box.com/2.0/folders/' + '{some folder id}' + '/metadata/global/properties';

// Create a new HttpRequest object and set appropriate values
HttpRequest request = new HttpRequest();
request.setMethod('POST');
request.setEndpoint(endpoint);
request.setBody(JSON.serialize(metadata));
request.setHeader('content-type', 'application/json');

// Send the HttpRequest through the generic Toolkit method, which will handle the authentication details
HttpResponse response = toolkit.sendRequest(request);

```

</Tab>

</Tabs>

## 新しいフォルダの関連付け

以下のコードは、特定のSalesforceレコードID用のフォルダを作成します。

<Tabs>

<Tab title="Apex">

```java
// Instantiate the Toolkit object
box.Toolkit boxToolkit = new box.Toolkit();
// Create a folder and associate it with an account
Id accountId = '001j000000FBozw';
String accountFolderId = boxToolkit.createFolderForRecordId(accountId, null, true);
system.debug('new item folder id: ' + accountFolderId);

// If there was an error, accountFolderId will be null. mostRecentError will contain the error message
if(accountFolderId == null) {
system.debug('most recent error: ' + boxToolkit.mostRecentError);
}

// ALWAYS call this method when finished.Since salesforce doesn't allow http callouts after dml operations, we need to commit the pending database inserts/updates or we will lose the associations created
boxToolkit.commitChanges();

```

</Tab>

</Tabs>

## フォルダテンプレート

以下のコードは、レコード用のフォルダを作成し、サブフォルダ (フォルダテンプレート) を作成して現在のユーザーとコラボレーションします。

<Tabs>

<Tab title="Apex">

```java
// Instantiate the Toolkit object
box.Toolkit boxToolkit = new box.Toolkit();

// Create a folder and associate it with an account
Id accountId = '001j000000FBozz';
String accountFolderId = boxToolkit.createFolderForRecordId(accountId, null, true);
system.debug('new item folder id: ' + accountFolderId);

// Create two sub-folders in the newly created account folder
String legalFolderId = boxToolkit.createFolder('Legal Documents', accountFolderId, null);
system.debug('Legal Folder id: ' + legalFolderId);
String pictureFolderId = boxToolkit.createFolder('Pictures', accountFolderId, null);
system.debug('Picture Folder id: ' + pictureFolderId);

// Collaborate the current user on the account folder. Note that we're sending false for the optCreateFolder param that shouldn't actually matter since the folder(s) already exists
Id userId = UserInfo.getUserId();
box.Toolkit.CollaborationType collabType = box.Toolkit.CollaborationType.EDITOR;
String collabId = boxToolkit.createCollaborationOnRecord(userId, accountId, collabType, false);
system.debug('new collaboration id: ' + collabId);

// ALWAYS call this method when finished. Since salesforce doesn't allow http callouts after dml operations, we need to commit the pending database inserts/updates or we will lose the associations created
boxToolkit.commitChanges();

```

</Tab>

</Tabs>

## メタデータ

以下のコードでは、Boxフォルダのメタデータとカスケードポリシーを取得、追加、削除、更新します。

<Tabs>

<Tab title="Apex">

```java
// Get metadata & attributes types
Box.toolkit tk = new Box.Toolkit();
Box.MetadataTemplate mdt = tk.getMetadataTemplateByName('enterprise',
'testtemplate');
System.debug(mdt);
System.debug(mdt.getAttributeTypes()); //get Map<String, String> of values and types.

// Get Metadata
Box.Toolkit tk = new Box.Toolkit();
Box.FolderMetadata fmd = tk.getBoxMetadataByFolderId('193488737189', 'enterprise',
'testTemplate');
System.debug(tk.mostRecentError);
System.debug(fmd);

// Create Metadata
Box.KeyValuePair kvp = new Box.KeyValuePair();
kvp.key = 'recordName';
kvp.value = 'Account Test Name';
Box.KeyValuePair kvp2 = new Box.KeyValuePair();
kvp2.key = 'recordUrl';
kvp2.value = 'https://speed-nosoftware-3605-dev-
ed.scratch.lightning.force.com/lightning/r/Account/001DR00001PsY7YYAV/view';
List<Box.KeyValuePair> kvps = new List<Box.KeyValuePair>();
kvps.add(kvp);
kvps.add(kvp2);
Box.Toolkit tk = new Box.Toolkit();
Box.FolderMetadata newfmd = tk.createBoxMetadataByFolderId('193488737189', 'enterprise',
'testTemplate', kvps);
System.debug(tk.mostRecentError);
System.debug(newfmd);

// Update Metadata
List<Box.FolderMetadataUpdate> updates = new List<Box.FolderMetadataUpdate>();
Box.FolderMetadataUpdate up1 = new Box.FolderMetadataUpdate();
Box.FolderMetadataUpdate up2 = new Box.FolderMetadataUpdate();
up1.op = 'replace';
up1.path = '/recordName';
up1.value = 'Account Name Test 2';
updates.add(up1);
up2.op = 'replace';
up2.path = '/recordUrl';
up2.value = 'https://speed-nosoftware-2356-dev-
ed.scratch.lightning.force.com/lightning/r/Account/001DR00001PsY7YYAV/view';
updates.add(up2);
Box.Toolkit tk = new Box.Toolkit();
Box.FolderMetadata fmd = tk.UpdateBoxMetadataByFolderId('193488737189', 'global',
'lobSalesforceRecord', updates);
System.debug(fmd);

// Delete Metadata
Box.Toolkit tk = new Box.Toolkit();
Boolean fmd = tk.deleteBoxMetadataByFolderId('193488737189', 'global',
'lobSalesforceRecord');
System.debug(tk.mostRecentError);
System.debug(fmd);

// Get Cascade Policy List
Box.Toolkit tk = new Box.Toolkit();
List<Box.MetadataCascadePolicy> mcp =
tk.getMetadataCascadePoliciesByFolderId('193488737189', null, 0, null);
System.debug(mcp);
System.debug(tk.mostRecentError);

// Get Cascade Policy
Box.Toolkit tk = new Box.Toolkit();
Box.MetadataCascadePolicy mcp =
tk.getMetadataCascadePolicyById('MTkzNDg4NzM3MTg5I2cjbG9iU2FsZXNmb3JjZVJlY29yZC0wMTIwMTI0ZC03YWUxLTQzNjItYjdlMC05Y2RiYzhkMzIzZjM');
System.debug(mcp);
System.debug(tk.mostRecentError);

// Create Cascade Policy
Box.Toolkit tk = new Box.Toolkit();
Box.MetadataCascadePolicy mcp = tk.createMetadataCascadePolicy('193488737189', 'global',
'lobSalesforceRecord');
System.debug(mcp);
System.debug(tk.mostRecentError);

// Delete Cascade Policy
Box.Toolkit tk = new Box.Toolkit();
Boolean mcp =
tk.deleteMetadataCascadePolicyById('MTkzNDg4NzM3MTg5I2cjbG9iU2FsZXNmb3JjZVJlY29yZC0wMTIwMTI0ZC03YWUxLTQzNjItYjdlMC05Y2RiYzhkMzIzZjM');
System.debug(mcp);
System.debug(tk.mostRecentError);

```

</Tab>

</Tabs>

その他の例:

<Tabs>

<Tab title="Apex">

```java
// Get metadata example 1
Box.toolkit tk = new Box.Toolkit();
Box.FolderMetadata fmt = tk.getBoxMetadataByFolderId('205776356105', 'enterprise',
'testTemplate');
for(KeyValuePair kvp : fmt.keyValuePairs){
System.debug(kvp);
}
// Get metadata example 2
Box.toolkit tk = new Box.Toolkit();
System.debug(tk.getBoxMetadataByFolderId('205776356105', 'global',
'lobSalesforceRecord'));

```

</Tab>

</Tabs>

<Tabs>

<Tab title="Apex">

```java
// Create metadata
Box.toolkit tk = new Box.Toolkit();
List<Box.KeyValuePair> kvps = new List<Box.KeyValuePair>();
Box.KeyValuePair kvp1 = new Box.KeyValuePair();
kvp1.key = 'name';
kvp1.value = 'test';
kvps.add(kvp1);
Box.KeyValuePair kvp2 = new Box.KeyValuePair();
kvp2.key = 'revenue';
kvp2.value = '5000';
kvps.add(kvp2);
Box.KeyValuePair kvp3 = new Box.KeyValuePair();
kvp3.key = 'typeMulti';
kvp3.value = 'Customer;Other';
kvps.add(kvp3);
System.debug(tk.createBoxMetadataByFolderId('205776356105', 'enterprise',
'testtemplate', kvps));
System.debug(tk.mostRecentError);

```

</Tab>

</Tabs>

<Tabs>

<Tab title="Apex">

```java
// Update Metadata
Box.toolkit tk = new Box.Toolkit();
System.debug(tk.getBoxMetadataByFolderId('205776356105', 'enterprise',
'mitchtemplate'));
List<Box.FolderMetadataUpdate> fmus = new List<Box.FolderMetadataUpdate>();
Box.FolderMetadataUpdate fmu = new Box.FolderMetadataUpdate();
fmu.op = 'replace';
fmu.path = '/name';
fmu.value = 'Test 2';
fmus.add(fmu);
Box.FolderMetadataUpdate fmu2 = new Box.FolderMetadataUpdate();
fmu2.op = 'replace';
fmu2.path = '/revenue';
fmu2.value = '3000';
fmus.add(fmu2);
Box.FolderMetadataUpdate fmu3 = new Box.FolderMetadataUpdate();
fmu3.op = 'add';
fmu3.path = '/typeMulti';
fmu3.value = 'Customer';
fmus.add(fmu3);
System.debug(tk.updateBoxMetadataByFolderId('205776356105', 'enterprise',
'testTemplate', fmus));
System.debug(tk.mostRecentError);

```

</Tab>

</Tabs>
