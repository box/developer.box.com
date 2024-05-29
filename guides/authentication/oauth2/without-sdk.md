---
rank: 2
related_endpoints:
  - get_authorize
related_guides:
  - applications/app-types/select
  - authentication/select
  - authentication/oauth2/oauth2-setup
required_guides:
  - authentication/select
  - authentication/oauth2/oauth2-setup
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/oauth2
is_index: false
id: authentication/oauth2/without-sdk
type: guide
total_steps: 4
sibling_id: authentication/oauth2
parent_id: authentication/oauth2
next_page_id: authentication/oauth2/as-user
previous_page_id: authentication/oauth2/with-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/oauth2/without-sdk.md
fullyTranslated: true
---
# SDKを使用しないOAuth 2.0

## 概要

Box公式SDKを利用すると、一般的な認証のハードルはなくなりますが、Box APIは、Box公式SDKがなくても使用できます。このガイドでは、OAuth 2.0のフローを手動で完成させるための手順を説明します。

1. 承認URLを作成する
2. ユーザーを承認URLにリダイレクトする
3. ユーザーが自分の代わりにアクションを実行するためのアクセス権限をアプリケーションに付与する (成功した場合は承認コードが提供される)
4. ユーザーを再度アプリケーションにリダイレクトする
5. 承認コードをアクセストークンと交換する

このフローが終了すると、アプリケーションには[アクセストークン][tokens]が付与されます。これを使用すると、ユーザーの代わりにAPIコールを実行できます。

<Message notice>

OAuth 2.0フローを介して取得したアクセストークンは、もともとアプリケーションを承認したユーザーに関連付けられています。

`as-user`ヘッダーを使用して、[別のユーザーとして処理を実行](g://authentication/oauth2/as-user)できます。

</Message>

## 前提条件

続行する前に、以下の手順を完了しておく必要があります。

* Box開発者コンソールで、OAuth 2.0認証方法を利用するカスタムアプリを作成する。
* アプリケーションの \[構成] タブに移動して、`client_id`と`client_secret`の値をコピーする。
* アプリケーションの \[構成] タブで、少なくとも1つのリダイレクトURIが構成されていることを確認する。

## 1. 承認URLを作成する

[承認URL][auth]は、以下のパラメータで構成されています。

| パラメータ                 | ステータス | 説明                                                  |
| --------------------- | ----- | --------------------------------------------------- |
| [`CLIENT_ID`][ci]     | 必須    | 開発者コンソールの \[構成] タブから取得します。                          |
| [`REDIRECT_URI`][re]  | 省略可   | 開発者コンソールで構成します。アプリケーションにアクセスを許可すると、ユーザーがリダイレクトされます。 |
| [`RESPONSE_TYPE`][co] | 必須    | 常に`code`に設定します。                                     |
| [`STATE`][st]         | 推奨    | クロスサイトリクエスト偽造から保護します。                               |

<Message warning>

アプリケーション用にリダイレクトURIを複数設定した場合、承認URLには、開発者コンソールで設定したURIのいずれかと一致する`redirect_uri`パラメータを含める必要があります。このパラメータが指定されていない場合、ユーザーには`redirect_uri_missing`エラーが表示され、アプリにリダイレクトされません。

</Message>

少なくとも、このURLは常に次の形式を使用します。

`https://account.box.com/api/oauth2/authorize`?`client_id=CLIENTIDHERE`&`response_type=code`

<Tabs>

<Tab title=".Net">

```csharp
var baseUrl = "https://account.box.com/api/oauth2/authorize";
var clientId = "[CLIENT_ID]";
var authorizationUrl = $"{baseUrl}?client_id={clientId}&response_type=code";

```

</Tab>

<Tab title="Java">

```java
String baseUrl = "https://account.box.com/api/oauth2/authorize";
String clientId = "[CLIENT_ID]";
String authorizationUrl = String.format("%s?client_id=%s&response_type=code", baseUrl, clientId);

```

</Tab>

<Tab title="Python">

```python
base_url = 'https://account.box.com/api/oauth2/authorize'
client_id = '[CLIENT_ID]'
authorizationUrl = f'{base_url}?client_id=${client_id}&response_type=code'

```

</Tab>

<Tab title="Node">

```js
var baseUrl = "https://account.box.com/api/oauth2/authorize";
var clientId = "[CLIENT_ID]";
var authorizationUrl = `${baseUrl}?client_id=${clientId}&response_type=code`;

```

</Tab>

</Tabs>

<CTA to="e://get-authorize">

承認URLの詳細を確認する

</CTA>

<Message type="tip">

Boxインスタンスの[Box Verified Enterprise][1]が有効になっている場合、標準的な`account.box.com`というベースURLを使用する際に問題が発生することがあります。`account.box.com`の代わりに`ent.box.com`を使用してください。

</Message>

## 2. ユーザーをリダイレクトする

次に、ユーザーを承認URLにリダイレクトします。その方法は、アプリケーションフレームワークによって異なります。このトピックの詳細については、ほとんどのフレームワークのドキュメントで説明されています。

指定されたアプリに対して承認URLが無効な場合、ユーザーには、アクセスの許可画面ではなくエラーページが表示されます。たとえば、承認URLに含まれる`redirect_uri`パラメータが、アプリ用に構成されたURIのいずれとも一致しない場合、ユーザーには`redirect_uri_mismatch`エラーが表示されます。

<Tabs>

<Tab title=".NET">

```csharp
var authorizationUrl = $"{baseUrl}?client_id={clientId}&response_type=code";
// redirectTo(authorizationUrl);

```

</Tab>

<Tab title="Java">

```java
String authorizationUrl = String.format("%s?client_id=%s&response_type=code", baseUrl, clientId);

// response.redirect(authorizationUrl);

```

</Tab>

<Tab title="Python">

```python
auth_url = f'{base_url}?client_id=${client_id}&response_type=code'
// redirect(auth_url, code=302)

```

</Tab>

<Tab title="Node">

```js
var authorizationUrl = `${baseUrl}?client_id=${clientId}&response_type=code`;
// res.redirect(authorize_url)

```

</Tab>

</Tabs>

<Message>

スコープを制限したり追加の状態を渡したりするために、ユーザーをリダイレクトする際に追加のクエリパラメータを渡すことができます。詳細については、承認のリファレンスドキュメントを参照してください。

</Message>

## 3. ユーザーがアプリケーションにアクセス権限を付与する

ユーザーは、Box UIを使用して自分のアカウントにログインするために、ブラウザにリダイレクトされます。その後、リクエストされているスコープのリストと、ユーザーに代わって処理を行うアプリケーションを承認するためのオプションが表示されます。

<ImageFrame border center shadow width="400">

![OAuth 2.0承認画面の例](./oauth2-grant.png)

</ImageFrame>

ユーザーが \[**Boxへのアクセスを許可**] をクリックしてこのリクエストを承認すると、ブラウザは、クエリパラメータに有効期間の短い承認コードが指定されている構成済みのリダイレクトURLにリダイレクトされます。

<Message warning>

アプリケーション用にリダイレクトURIを複数設定した場合、承認URLには、開発者コンソールで設定したURIのいずれかと一致する`redirect_uri`パラメータを含める必要があります。このパラメータが指定されていない場合、ユーザーには`redirect_uri_missing`エラーが表示され、アプリにリダイレクトされません。

</Message>

```curl
https://your.domain.com/path?code=1234567

```

## 4. コードを交換する

提供される承認コードは、[有効期間が30秒][thirty]のため、有効期限が切れる前に[アクセストークン][at]に交換する必要があります。

<Tabs>

<Tab title=".NET">

```csharp
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;

String authenticationUrl = "https://api.box.com/oauth2/token";
var client = new HttpClient();

var content = new FormUrlEncodedContent(new[]
{
    new KeyValuePair<string, string>("grant_type", "authorization_code"),
    new KeyValuePair<string, string>("code", "[CODE]"),
    new KeyValuePair<string, string>("client_id", "[CLIENT_ID]"),
    new KeyValuePair<string, string>("client_secret", "[CLIENT_SECRET]")
});

var response = client.PostAsync(authenticationUrl, content).Result;

class Token
{
    public string access_token { get; set; }
}

var data = response.Content.ReadAsStringAsync().Result;
var token = JsonConvert.DeserializeObject<Token>(data);
var accessToken = token.access_token;

```

</Tab>

<Tab title="Java">

```java
String authenticationUrl = "https://api.box.com/oauth2/token";

List<NameValuePair> params = new ArrayList<NameValuePair>();

params.add(new BasicNameValuePair("grant_type", "authorization_code"));
params.add(new BasicNameValuePair("code", "[CODE]"));
params.add(new BasicNameValuePair("client_id", "[CLIENT_ID]"));
params.add(new BasicNameValuePair("client_secret", "[CLIENT_SECRET]"));

CloseableHttpClient httpClient = HttpClientBuilder.create().disableCookieManagement().build();

HttpPost request = new HttpPost(authenticationUrl);
request.setEntity(new UrlEncodedFormEntity(params));

CloseableHttpResponse httpResponse = httpClient.execute(request);
HttpEntity entity = httpResponse.getEntity();

String response = EntityUtils.toString(entity);
httpClient.close();

class Token {
    String access_token;
}

Token token = (Token) gson.fromJson(response, Token.class);
String accessToken = token.access_token;

```

</Tab>

<Tab title="Python">

```python
authentication_url = "https://api.box.com/oauth2/token";

params = urlencode({
    'grant_type': 'authorization_code',
    'code': '[CODE]',
    'client_id': '[CLIENT_ID]',
    'client_secret': '[CLIENT_SECRET]'
}).encode()

request = Request(authentication_url, params)
response = urlopen(request).read()
access_token = json.loads(response)['access_token']

```

</Tab>

<Tab title="Node">

```js
const authenticationUrl = "https://api.box.com/oauth2/token";

let accessToken = await axios
    .post(
        authenticationUrl,
        querystring.stringify({
            grant_type: "authorization_code",
            code: "[CODE]",
            client_id: "[CLIENT_ID]",
            client_secret: "[CLIENT_SECRET]",
        })
    )
    .then((response) => response.data.access_token);

```

</Tab>

</Tabs>

アクセストークンの使用方法を確認するには、[APIコールの実行][apic]に関するガイドを参照してください。

[tokens]: g://authentication/tokens/access-tokens

<!-- i18n-enable localize-links -->

[1]: https://support.box.com/hc/ja/articles/360043693554-Box-Verified-Enterpriseとサポート対象のアプリ

<!-- i18n-disable localize-links -->

[auth]: e://get-authorize/

[ci]: e://get-authorize/#param-client_id

[re]: e://get-authorize/#param-redirect_uri

[co]: e://get-authorize/#param-response_type

[st]: e://get-authorize/#param-state

[thirty]: g://api-calls/permissions-and-errors/expiration

[at]: e://post-oauth2-token/

[apic]: g://api-calls/
