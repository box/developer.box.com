---
related_endpoints:
  - get-users
related_guides:
  - sso-identities-and-app-users/create-app-user
category_id: sso-identities-and-app-users
subcategory_id: null
is_index: false
id: sso-identities-and-app-users/find-app-user
rank: 3
type: guide
total_steps: 3
sibling_id: sso-identities-and-app-users
parent_id: sso-identities-and-app-users
next_page_id: sso-identities-and-app-users
previous_page_id: sso-identities-and-app-users/create-app-user
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/sso-identities-and-app-users/3-find-app-user.md
---
# SSO IDのApp Userの検索

ユーザーがSSOプロバイダを使用してBoxカスタムアプリケーションにログインする際、まず必要なのは、Boxユーザーレコードが作成された前回のログイン試行から、そのユーザーがすでに存在するかどうかを確認することです。

Boxユーザーが検出されたら、そのユーザーとしてBox APIにアクセスするために、[ユーザーアクセストークンを作成](guide://authentication/jwt/user-access-tokens/)するか[as-user呼び出し](guide://authentication/jwt/as-user/)を実行する必要があります。

Boxユーザーが検出されない場合は、そのSSOユーザーレコードに関連付けられた新しいユーザーを作成する必要があります。

既存のユーザーの検索には、[会社ユーザーのリストを取得](ref://get-users/)エンドポイントを使用できます。`external_app_user_id`と`login`のどちらのメソッドを使用しているかによって、クエリは若干異なります。

## `external_app_user_id`を使用したユーザーの検索

格納されている`external_app_user_id`値を使用して会社ユーザーを検索するには、SSOプロバイダーの次の情報が必要になります。

* UID (必須): SSOユーザーレコードの一意の識別子です。

取得したら、パラメータで`external_app_user_id`定義を指定して、会社ユーザーのリストを取得エンドポイントにリクエストを実行します。

<Tabs>

<Tab title="Node">

```js
const ssoUID = 'SSO User Unique ID';

// Check enterprise users for matching external_app_user_id against SSO UID
client.enterprise.getUsers({ "external_app_user_id": ssoUID })
.then((users) => {
  if (users.total_count > 0) {
    // User found, fetch user ID
    const userId = users.entries[0].id;
  } else {
    // User not found - create new user record
  }
});
```

</Tab>

<Tab title="Java">

```java
String ssoUID = "SSO User Unique ID";

// Check enterprise users for matching external_app_user_id against SSO UID
URL url = new URL("https://api.box.com/2.0/users?external_app_user_id=" + ssoUID);
BoxAPIRequest request = new BoxAPIRequest(client, url, "GET");
BoxJSONResponse jsonResponse = (BoxJSONResponse) request.send();
JsonObject jsonObj = jsonResponse.getJsonObject();
JsonValue totalCount = jsonObj.get("total_count");

if (totalCount.asInt() > 0) {
  // User found, fetch 
  // Fetch user ID
  JsonArray entries = (JsonArray) jsonObj.get("entries");
  JsonObject userRecord = (JsonObject) entries.get(0);
  JsonValue userId = userRecord.get("id");
} else {
  // User not found - create new user record
}
```

</Tab>

<Tab title="Python">

```python
sso_uid = 'SSO User Unique ID'

# Validate is user exists
url = f'https://api.box.com/2.0/users?external_app_user_id={sso_uid}'
headers = {'Authorization': 'Bearer ' + access_token}
response = requests.get(url, headers=headers)
user_info = response.json()

if (user_info['total_count'] == 0):
  # User not found - create new user record
else:
  # User found, fetch user ID
  user = user_info['entries'][0]
  user_id = user['id']
```

</Tab>

</Tabs>

## メールアドレスを使用したユーザーの検索

`login`のメールアドレスを使用して会社ユーザーを検索するには、SSOプロバイダーの次の情報が必要になります。

* メールアドレス(必須): SSOユーザーレコードの一意のメールアドレスです。

取得したら、`filter_term`としてメールアドレスを指定して、会社ユーザーのリストを取得エンドポイントにリクエストを実行します。これは、メールアドレスまたは名前を使用した検索に使用できるようになります。

<Tabs>

<Tab title="Node">

```js
const ssoEmail = 'ssouser@email.com';

client.enterprise.getUsers({filter_term: ssoEmail})
.then(users => {
  if (users.total_count > 0) {
    // User found, fetch user ID
    const userId = users.entries[0].id;
  } else {
    // User not found - create new user record
  }
});
```

</Tab>

<Tab title="Java">

```java
String ssoEmail = "ssouser@email.com";

Iterable<BoxUser.Info> users = BoxUser.getAllEnterpriseUsers(client, ssoEmail);
```

</Tab>

<Tab title="Python">

```python
sso_email = 'ssouser@email.com'

users = client.users(user_type='all', filter_term=ssoEmail)
if (users['total_count'] == 0):
  # User not found - create new user record
else:
  # User found, fetch user ID
  user = users['entries'][0]
  user_id = user['id']
```

</Tab>

</Tabs>
