---
type: quick-start
hide_in_page_nav: true
category_id: sso-identities-and-app-users
subcategory_id: sso-identities-and-app-users/connect-okta-to-app-users
is_index: false
id: >-
  sso-identities-and-app-users/connect-okta-to-app-users/find-or-create-box-users
rank: 5
total_steps: 6
sibling_id: sso-identities-and-app-users/connect-okta-to-app-users
parent_id: sso-identities-and-app-users/connect-okta-to-app-users
next_page_id: sso-identities-and-app-users/connect-okta-to-app-users/run-the-app
previous_page_id: sso-identities-and-app-users/connect-okta-to-app-users/logging-into-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/sso-identities-and-app-users/connect-okta-to-app-users/5-find-or-create-box-users.md
fullyTranslated: true
---
# Box App Userの検索または作成

この時点で、アプリケーションコードが作成されています。このコードでは、ユーザーアクセスからのトラフィックを処理し、これらをログインのためにOktaに転送して、Oktaのユーザー情報を提供した後、最終的にはBoxのハンドラ (現時点で未作成) に渡します。

このセクションでは、以下のようにBoxの最終的なコンポーネントを取り上げます。

* Oktaユーザーに、関連付けられたBox App Userアカウントがあるかどうかを検証します。
* (関連付けられているアカウントがない場合は) 関連付けられているOktaレコードに新しいアプリユーザーを作成します。
* Boxユーザーのトークンを取得してユーザー固有のAPIコールを実行します。

## 新しいアプリユーザーの作成

ユーザーを検証する前に、関連付けられたBoxユーザーアカウントがOktaユーザーにない場合のために、そのアカウントを作成する方法が必要です。

<Choice option="programming.platform" value="node" color="none">

ローカルアプリケーションディレクトリで、手順1で作成した`server.js`ファイルを読み込みます。

次の`box`オブジェクトをファイルに追加し、保存します。

```js
const box = (() => {
    const configJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, './config.json')));
    const sdk = boxSDK.getPreconfiguredInstance(configJSON);
    const client = sdk.getAppAuthClient('enterprise');

    let oktaRecord = {};
    let userId = '';
    let userClient;

    function validateUser(userInfo, res) {
        // TODO: VALIDATE USER
    }

    function createUser(res) {
        // TODO: CREATE USER
    }

    return {
        validateUser,
        createUser
    };
})();

```

このオブジェクトはいくつかの項目を定義します:

* 構成: Box Node SDKの新しいインスタンスがインスタンス化され、多数の変数と共にオブジェクト関数で使用可能になります。
* `validateUser`関数: 関連付けられたOktaユーザーにBoxユーザーが存在するかどうかを検証するためのコードを保持します。
* `createUser`関数: 関連付けられたOktaユーザーIDにバインドされる新しいBoxユーザーを作成します。

この構造を定義したら、`// TODO: CREATE USER`セクションを以下のコードに置き換えます。

```js
const spaceAmount = 1073741824;   // ~ 1gb

client.enterprise.addAppUser(
    this.oktaRecord.name,
    {
      space_amount: spaceAmount,
      external_app_user_id: this.oktaRecord.sub
    }
).then(appUser => {
    res.send(`New user created: ${appUser.name}`);
});

```

このコードにより、新しいBox App Userが作成され、ユーザーオブジェクトの`external_app_user_id`パラメータが一意のOktaユーザーIDに設定されます。これで、2つのユーザーレコード間のバインドが定義されます。

</Choice>

<Choice option="programming.platform" value="java" color="none">

ローカルアプリケーションディレクトリで、手順1で作成した`/src/main/java/com/box/sample/Application.java`ファイルを読み込みます。別のアプリケーション名を使用している場合は、同等のディレクトリを読み込みます。

`public class Application`の定義内に、以下のメソッドを追加します。

```java
static String validateUser(OidcUser user) throws IOException {
    // TODO: VALIDATE USER
}

static String createUser(OidcUser user) {
    // TODO: CREATE USER
}

```

これらのメソッドはBoxユーザーの検証と作成を処理します。各メソッドの詳細は以下のとおりです。

* `validateUser`: 関連付けられたOktaユーザーにBoxユーザーが存在するかどうかを検証するためのコードを保持します。
* `createUser`: 関連付けられたOktaユーザーIDにバインドされる新しいBoxユーザーを作成します。

これらのメソッドを定義したら、`# TODO: CREATE USER`を以下のコードに置き換えます。

```java
String oktaName = (String) user.getAttributes().get("name");
Object oktaSub = user.getAttributes().get("sub");

CreateUserParams params = new CreateUserParams();
params.setExternalAppUserId((String) oktaSub);
BoxUser.Info createdUserInfo = BoxUser.createAppUser(api, oktaName, params);

return "New User Created: " + createdUserInfo.getName();

```

このコードにより、新しいBox App Userが作成され、ユーザーオブジェクトの`external_app_user_id`パラメータが一意のOktaユーザーIDに設定されます。これで、2つのユーザーレコード間のバインドが定義されます。

</Choice>

<Choice option="programming.platform" value="python" color="none">

ローカルアプリケーションディレクトリで、手順1で作成した`server.py`ファイルを読み込みます。

1.

既存のコードのルート定義の下に、以下の`Box`クラスオブジェクトを追加します。

```python
# Box user class
class Box(object):
    def __init__(self):
        # Instantiate Box Client instance
        auth = JWTAuth.from_settings_file('../config.json')
        self.box_client = Client(auth)

    # Validate if Box user exists
    def validateUser(self, g):
        # TODO: VALIDATE USER

    # Create new Box user
    def createUser(self, ouser):
        # TODO: CREATE USER

```

このクラスで定義する内容は以下のとおりです。

* `init`: 初期化時に、Box Python SDKの新しいインスタンスがインスタンス化され、オブジェクトのメソッドで使用可能になります。
* `validateUser`メソッド: ユーザーオブジェクトを入力として受け取り、関連付けられたOktaユーザーにBoxユーザーが存在するかどうかを検証するためのコードを保持します。
* `createUser`メソッド: ユーザーオブジェクトを入力として受け取り、関連付けられたOktaユーザーIDにバインドされる新しいBoxユーザーを作成します。

このクラスを定義したら、`# TODO: CREATE USER`セクションを以下のコードに置き換えます。

```python
user_name = f'{ouser.profile.firstName} {ouser.profile.lastName}'
uid = ouser.id
space = 1073741824

user = self.box_client.create_user(user_name, None, space_amount=space, external_app_user_id=uid)
return f'New user created: {user_name}'

```

このコードにより、新しいBox App Userが作成され、ユーザーオブジェクトの`external_app_user_id`パラメータが一意のOktaユーザーIDに設定されます。これで、2つのユーザーレコード間のバインドが定義されます。

</Choice>

<Choice option="programming.platform" value="cs" color="none">

`Controllers` > `AccountController.cs`ファイル内で、関連付けられた`AccountController`クラスの中に以下のメソッドを追加します。

```csharp
static async Task validateUser(string name, string sub)
{
    // Configure Box SDK instance
    var reader = new StreamReader("config.json");
    var json = reader.ReadToEnd();
    var config = BoxConfig.CreateFromJsonString(json);
    var sdk = new BoxJWTAuth(config);
    var token = sdk.AdminToken();
    BoxClient client = sdk.AdminClient(token);

    // Search for matching Box app user for Okta ID
    BoxCollection<BoxUser> users = await client.UsersManager.GetEnterpriseUsersAsync(externalAppUserId:sub);
    System.Diagnostics.Debug.WriteLine(users.TotalCount);

    if (users.TotalCount > 0)
    {
         // TODO: VALIDATE USER
    }
    else
    {
        // TODO: CREATE USER
    }
}

```

このコードブロック内では、手順2でダウンロードした`config.json`ファイルを使用して新しいBox .NET SDKクライアントが作成されます。このコードサンプルの場合、その`config.json`ファイルはローカルアプリケーションディレクトリのルートに格納されます。

その後、Oktaの一意のID `sub`が`externalAppUserId`検索パラメータとして渡され、クライアントを使用して、Boxに登録されている会社内のすべてのユーザーが検索されます。その後、返されるユーザーの数を確認すると、有効なユーザーが検出されたかどうかがわかります。

この構造を定義したら、// TODO: CREATE USERセクションを以下のコードに置き換えます。

```csharp
var userRequest = new BoxUserRequest()
{
    Name = name,
    ExternalAppUserId = sub,
    IsPlatformAccessOnly = true
};
var user = await client.UsersManager.CreateEnterpriseUserAsync(userRequest);
System.Diagnostics.Debug.WriteLine("New user created: " + user.Name);

```

このコードにより、新しいBox App Userが作成され、ユーザーオブジェクトの`external_app_user_id`パラメータが一意のOktaユーザーIDに設定されます。これで、2つのユーザーレコード間のバインドが定義されます。

その後、新しいユーザーが作成されたことを示す診断メッセージが書き戻されます。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## Oktaユーザーの検証

ここまで、ユーザーを作成する機能を定義してきました。次に定義するコードでは、Boxを使用する会社の全ユーザーを検索して関連付けられた`external_app_user_id`を探すことで、Oktaユーザーレコードに関連付けられたBoxユーザーレコードが存在するかどうかを検証します。

<Choice option="programming.platform" value="node" color="none">

`// TODO: VALIDATE USER`コメントを以下の内容に置き換えます。

```js
this.oktaRecord = userInfo

client.enterprise.getUsers({ "external_app_user_id": this.oktaRecord.sub })
    .then((result) => {
        if (result.total_count > 0) {
            // TODO: MAKE AUTHENTICATED USER CALL
        } else {
            // User not found - create user
            this.createUser();
        }
    });

```

Box Node SDKを使用した場合、`enterprise.getUsers`を呼び出して会社の全ユーザーを検索し、一意のOktaユーザーIDを`external_app_user_id`値として渡すことで、そのユーザーに特化した検索を行います。

見つかった場合 (つまり、レコードの数が1以上だった場合) は、そのユーザーレコードを使用して、Box APIに対して認証済みの呼び出しを実行できます。これは次のセクションで定義します。

見つからなかった場合は、1つ前のセクションで定義した`createUser`関数を呼び出して、その`external_app_user_id`と関連付けられた新しいBoxユーザーを作成します。

</Choice>

<Choice option="programming.platform" value="java" color="none">

`// TODO: VALIDATE USER`コメントを以下の内容に置き換えます。

```java
// Set up Box enterprise client
Reader reader = new FileReader("config.json");
BoxConfig config = BoxConfig.readFrom(reader);
api = BoxDeveloperEditionAPIConnection.getAppEnterpriseConnection(config);

// Get Okta user sub for unique ID attachment to Box user
Object oktaSub = user.getAttributes().get("sub");

// Check enterprise users for matching external_app_user_id against Okta sub
URL url = new URL("https://api.box.com/2.0/users?external_app_user_id=" + oktaSub);
BoxAPIRequest request = new BoxAPIRequest(api, url, "GET");
BoxJSONResponse jsonResponse = (BoxJSONResponse) request.send();
JsonObject jsonObj = jsonResponse.getJsonObject();
JsonValue totalCount = jsonObj.get("total_count");

// Set return string
String outputString = "";

if (totalCount.asInt() > 0) {
    // TODO: MAKE AUTHENTICATED USER CALL
} else {
    outputString = createUser(user);
}

return outputString;

```

Box Java SDKの汎用リクエストメソッドを使用した場合、`https://api.box.com/2.0/users`エンドポイントを直接呼び出して会社のユーザーを検索し、一意のOktaユーザーIDを`external_app_user_id`値として渡すことで、そのユーザーに特化した検索を行います。

見つかった場合 (つまり、レコードの数が1以上だった場合) は、そのユーザーレコードを使用して、Box APIに対して認証済みの呼び出しを実行できます。これは次のセクションで定義します。

見つからなかった場合は、1つ前のセクションで定義した`createUser`関数を呼び出して、その`external_app_user_id`と関連付けられた新しいBoxユーザーを作成します。

</Choice>

<Choice option="programming.platform" value="python" color="none">

`# TODO: VALIDATE USER`コメントを以下の内容に置き換えます。

```python
# Fetch Okta user ID
uid = g.user.id

# Validate is user exists
url = f'https://api.box.com/2.0/users?external_app_user_id={uid}'
response = self.box_client.make_request('GET', url)
user_info = response.json()

# If user not found, create user, otherwise fetch user token
if (user_info['total_count'] == 0):
    self.createUser(g.user)
else:
    # TODO: MAKE AUTHENTICATED USER CALL

```

Box Python SDKの汎用リクエストメソッドを使用した場合、`https://api.box.com/2.0/users`エンドポイントを直接呼び出して会社のユーザーを検索し、一意のOktaユーザーIDを`external_app_user_id`値として渡すことで、そのユーザーに特化した検索を行います。

見つかった場合 (つまり、レコードの数が1以上だった場合) は、そのユーザーレコードを使用して、Box APIに対して認証済みの呼び出しを実行できます。これは次のセクションで定義します。

見つからなかった場合は、1つ前のセクションで定義した`createUser`関数を呼び出して、その`external_app_user_id`と関連付けられた新しいBoxユーザーを作成します。

</Choice>

<Choice option="programming.platform" value="cs" color="none">

`// TODO: VALIDATE USER`コメントを以下の内容に置き換えます。

```csharp
var userId = users.Entries[0].Id;
var userToken = sdk.UserToken(userId);
BoxClient userClient = sdk.UserClient(userToken, userId);

// TODO: MAKE AUTHENTICATED USER CALL

```

有効なユーザーが見つかった場合、Box IDが抽出されます。このIDは、アプリケーションではなく明確にそのユーザーのスコープに設定されたBox SDKクライアントの生成に使用されます。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## 認証済みのBoxユーザーの呼び出し

Oktaユーザーの関連付けられたBoxユーザーが検出されたら、明確に[そのユーザーのスコープに設定された](g://authentication/jwt/user-access-tokens/)アクセストークンを生成してBox APIコールを実行します。その後、現在のユーザーを取得するための呼び出しを実行して、すべてが機能していることと有効なユーザーアクセストークンがあることを確認します。

<Choice option="programming.platform" value="node" color="none">

1つ前のセクションの`// TODO: MAKE AUTHENTICATED USER CALL`を次の内容に置き換えます。

```js
this.userId = result.entries[0].id;
this.userClient = sdk.getAppAuthClient('user', this.userId);

this.userClient.users.get(this.userClient.CURRENT_USER_ID)
    .then(currentUser => {
        res.send(`Hello ${currentUser.name}`);
    });

```

見つかったユーザーのBoxユーザーIDをキャプチャし、そのユーザーのスコープに設定されたユーザークライアントオブジェクトを生成します。最後に、このユーザークライアントオブジェクトを使用して現在のユーザーを取得する呼び出しを実行すると、Oktaに関連付けられたBox App Userのユーザープロフィール情報が返されます。

</Choice>

<Choice option="programming.platform" value="java" color="none">

1つ前のセクションの`// TODO: MAKE AUTHENTICATED USER CALL`を次の内容に置き換えます。

```java
// User found, authenticate as user
// Fetch user ID
JsonArray entries = (JsonArray) jsonObj.get("entries");
JsonObject userRecord = (JsonObject) entries.get(0);
JsonValue userId = userRecord.get("id");

// Get user scoped access token and fetch current user with it
BoxDeveloperEditionAPIConnection userApi = BoxDeveloperEditionAPIConnection.getAppUserConnection(userId.asString(), config);
BoxUser currentUser = BoxUser.getCurrentUser(userApi);
BoxUser.Info currentUserInfo = currentUser.getInfo();

outputString = "Hello " + currentUserInfo.getName();

```

見つかったユーザーのBoxユーザーIDをキャプチャし、そのユーザーのスコープに設定されたユーザークライアントオブジェクトを生成します。最後に、このユーザークライアントオブジェクトを使用して現在のユーザーを取得する呼び出しを実行すると、Oktaに関連付けられたBox App Userのユーザープロフィール情報が返されます。

</Choice>

<Choice option="programming.platform" value="python" color="none">

1つ前のセクションの`# TODO: MAKE AUTHENTICATED USER CALL`を次の内容に置き換えます。

```python
# Create user client based on discovered user
user = user_info['entries'][0]
user_to_impersonate = self.box_client.user(user_id=user['id'])
user_client = self.box_client.as_user(user_to_impersonate)

# Get current user
current_user = user_client.user().get()
return f'Hello {current_user.name}'

```

見つかったユーザーのBoxユーザーIDをキャプチャし、そのユーザーのスコープに設定されたユーザークライアントオブジェクトを生成します。最後に、このユーザークライアントオブジェクトを使用して現在のユーザーを取得する呼び出しを実行すると、Oktaに関連付けられたBox App Userのユーザープロフィール情報が返されます。

</Choice>

<Choice option="programming.platform" value="cs" color="none">

1つ前のセクションの`// TODO: MAKE AUTHENTICATED USER CALL`を次の内容に置き換えます。

```csharp
BoxUser currentUser = await userClient.UsersManager.GetCurrentUserInformationAsync();
System.Diagnostics.Debug.WriteLine("Current user name: " + currentUser.Name);

```

このユーザーのスコープに設定されたクライアントを使用すると、Boxから現在のユーザーレコードが抽出され、現在のユーザー名を含む診断メッセージが書き戻されます。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## まとめ

* OktaユーザーがBoxユーザーとして存在するかどうかを検証しました。
* 存在しない場合は新しいアプリユーザーを作成しました。
* 既存のBoxユーザーに対してBox APIコールを実行しました。

<Observe option="box.app_type" value="use_own,create_new_">

<Next>

Boxユーザーの検証と作成を設定しました

</Next>

</Observe>
