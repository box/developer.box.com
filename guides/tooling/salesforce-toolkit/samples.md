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
total_steps: 2
sibling_id: tooling/salesforce-toolkit
parent_id: tooling/salesforce-toolkit
next_page_id: ''
previous_page_id: tooling/salesforce-toolkit/methods
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/salesforce-toolkit/samples.md
---
# コードサンプル

## 汎用メソッド

以下のコードは、汎用Toolkitメソッドを使用してSalesforceのBoxフォルダにメタデータを作成します。

<!-- markdownlint-disable line-length -->

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

<!-- markdownlint-enable line-length -->

## 新しいフォルダの関連付け

以下のコードは、特定のSalesforceレコードID用のフォルダを作成します。

<!-- markdownlint-disable line-length -->

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

<!-- markdownlint-enable line-length -->

## フォルダテンプレート

以下のコードは、レコード用のフォルダを作成し、サブフォルダ(フォルダテンプレート)を作成して現在のユーザーとコラボレーションします。

<!-- markdownlint-disable line-length -->

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

<!-- markdownlint-enable line-length -->
