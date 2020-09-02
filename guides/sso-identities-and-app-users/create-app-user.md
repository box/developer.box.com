---
related_endpoints:
  - post_users
related_guides:
  - sso-identities-and-app-users/find-app-user
category_id: sso-identities-and-app-users
subcategory_id: null
is_index: false
id: sso-identities-and-app-users/create-app-user
rank: 2
type: guide
total_steps: 3
sibling_id: sso-identities-and-app-users
parent_id: sso-identities-and-app-users
next_page_id: sso-identities-and-app-users/find-app-user
previous_page_id: sso-identities-and-app-users/connect-identities
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/sso-identities-and-app-users/2-create-app-user.md
---
# SSO IDとApp Userの関連付け

ユーザーがSSOプロバイダの資格情報を使用してカスタムのBoxアプリケーションに初めてサインインするときに、新しいBoxユーザーを作成し、ユーザーのSSOユーザーレコードと関連付ける必要があります。その際、このSSOユーザーレコードの一意の情報の一部を使用します。通常、この2つのアカウントの関連付けに使用されるデータは、一意のIDとメールアドレスのいずれかです。

この関連付けを行うためにBoxアカウントを作成する方法がいくつかあります。

* Boxユーザーの`external_app_user_id`フィールドを使用して、SSOプロバイダの一意のIDを格納します。
* Boxユーザーの`login`フィールドを使用して、SSOプロバイダの一意のメールアドレスを格納します(管理対象ユーザーのみ)。

## `external_app_user_id`による関連付け

Boxユーザーレコードの`external_app_user_id`フィールドを使用する方法は、App Userと管理対象ユーザーの両方に使用可能なオプションで、SSOプロバイダのユーザーレコードをBoxユーザーアカウントに関連付ける際に推奨される方法です。

### App User

`external_app_user_id`によってSSOユーザーレコードに関連付けられた新しいBox App Userを作成するには、SSOプロバイダから以下の2つの情報が必要になります。

* UID (必須): SSOユーザーレコードの一意の識別子です。
* 名前(省略可): レコードの一貫性を保つために、Boxユーザーレコードと関連付けるSSOユーザー名を抽出します。

取得したら、ユーザーパラメータでオプションの`external_app_user_id`定義を指定して、新しいApp Userを作成するリクエストを実行します。

<Tabs>

<Tab title="Node">

```js
const ssoName = 'SSO User Name';
const ssoUID = 'SSO User Unique ID';
const spaceAmount = 1073741824;

// Create app user
client.enterprise.addAppUser(
  ssoName,
  {
    space_amount: spaceAmount,
    external_app_user_id: ssoUID
  }
).then(appUser => {
  console.log(`New user created: ${appUser.name}`);
});
```

</Tab>

<Tab title="Java">

```java
String ssoName = "SSO User Name";
String ssoUID = "SSO User Unique ID";

// Create app user
CreateUserParams params = new CreateUserParams();
params.setExternalAppUserId(ssoUID);
BoxUser.Info createdUserInfo = BoxUser.createAppUser(client, ssoName, params);

outputString = "New user created: " + createdUserInfo.getName();
```

</Tab>

<Tab title="Python">

```python
sso_name = 'SSO User Name'
sso_uid = 'SSO User Unique ID'
space = 1073741824

# Create app user
user = box_client.create_user(sso_name, None, space_amount=space, external_app_user_id=sso_uid)
print('New user created: {name}')
```

</Tab>

</Tabs>

### 管理対象ユーザー

`external_app_user_id`によってSSOユーザーレコードに関連付けられた新しい管理対象ユーザーを作成するには、SSOプロバイダから以下の2つの情報が必要になります。

* メールアドレス(必須): SSOユーザーレコードの一意のメールアドレスです。
* 名前(省略可): レコードの一貫性を保つために、Boxユーザーレコードと関連付けるSSOユーザー名を抽出します。

取得したら、ログイン用のSSOユーザーレコードのメールアドレスを指定して、新しい管理対象ユーザーを作成するリクエストを実行します。

<Tabs>

<Tab title="Node">

```js
const ssoName = 'SSO User Name';
const ssoEmail = 'ssouser@email.com';
const spaceAmount = 1073741824;

// Create app user
client.enterprise.addUser(
  ssoEmail,
  ssoName,
  {
    space_amount: spaceAmount
  }
).then(managedUser => {
  console.log(`New user created: ${managedUser.name}`);
});
```

</Tab>

<Tab title="Java">

```java
String ssoName = "SSO User Name";
String ssoEmail = "ssouser@email.com";

// Create managed user
BoxUser.Info createdUserInfo = 
  BoxUser.createEnterpriseUser(client, ssoEmail, ssoName);

outputString = "New user created: " + createdUserInfo.getName();
```

</Tab>

<Tab title="Python">

```python
sso_name = 'SSO User Name'
sso_email = 'ssouser@email.com'
space = 1073741824

# Create managed user
user = box_client.create_user(sso_name, sso_email, space_amount=space)
print('New user created: {name}')
```

</Tab>

</Tabs>

## メールアドレスによる関連付け

SSOユーザーのメールアドレスによって関連付けられている新しい[管理対象ユーザー](guide://authentication/user-types/managed-users/)の作成は、標準的な管理対象ユーザーの作成プロセスと同じです。

ユーザーは、SSOプロバイダを介してログインした後、まだBoxユーザーとして存在しない場合に、SSOユーザーレコードからメールアドレスを抽出して、新しいBox管理対象ユーザーを作成するリクエストを実行します。

<Samples id="post_users">

</Samples>
