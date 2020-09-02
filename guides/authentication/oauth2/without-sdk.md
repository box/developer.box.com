---
rank: 2
related_endpoints:
  - get_authorize
related_guides:
  - applications/select
  - authentication/select
  - applications/custom-apps/oauth2-setup
required_guides:
  - authentication/select
  - applications/custom-apps/oauth2-setup
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/oauth2
is_index: false
id: authentication/oauth2/without-sdk
type: guide
total_steps: 3
sibling_id: authentication/oauth2
parent_id: authentication/oauth2
next_page_id: authentication/oauth2/as-user
previous_page_id: authentication/oauth2
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/authentication/oauth2/without-sdk.md
---
# SDKを使用しないOAuth 2.0

Box公式SDKのいずれも使用できるようになっていない場合や選択した言語のSDKがない場合は、SDKがなくてもBox APIを使用できます。

OAuth 2.0を使用してユーザーを認証するために、ユーザーはブラウザでBoxウェブアプリにリダイレクトされます。そこで、ユーザーはログインし、アプリケーションに対して自分のデータへのアクセス権限を付与すると、アプリケーションの`redirect_url`に再度リダイレクトされます。この最後の手順では、ユーザーがアクセス可能な場所にあるウェブサーバー上でアプリケーションが実行されている必要があります。

## 概要

OAuth 2.0フローを完了するには、以下の手順を完了する必要があります。

1. 承認URLを構成する
2. ユーザーをBoxウェブサイトにリダイレクトする
3. ユーザーがアプリケーションにアクセス権限を付与する
4. 承認コードをアクセストークンと交換する

このフローが終了すると、アプリケーションには、このユーザーの代わりにAPI呼び出しを実行するために使用できるアクセストークンが用意されます。

<Message notice>

OAuth 2.0を介して取得した操作トークンは、もともとアプリケーションを承認したユーザーに関連付けられています。このトークンを使用して実行されるAPI呼び出しはどれも、このアプリケーションから実行されているように見えるため、ユーザーには、アプリケーションがこのトークンを使用してアクセスしようとするファイルやフォルダへのアクセス権限が必要です。

`as-user`ヘッダーを使用して、[別のユーザーとして処理を実行](g://authentication/oauth2/as-user)できます。

</Message>

## 前提条件

続行する前に、以下の手順を完了しておく必要があります。

* OAuth 2.0認証方式を使用して、開発者コンソール内でBoxアプリケーションを作成する。
* `client_id`値と`client_secret`値をコピーし、手元に用意しておく。

## パラメータ

<!-- markdownlint-disable line-length -->

| パラメータ           | 説明                                                              |
| --------------- | --------------------------------------------------------------- |
| `CLIENT_ID`     | アプリケーションのクライアントIDまたはAPIキー                                       |
| `CLIENT_SECRET` | アプリケーションのクライアントシークレットまたはAPIシークレット                               |
| `REDIRECT_URI`  | ユーザーがアプリケーションを承認した後に送信されるアプリケーションのリダイレクトURL。これは開発者コンソールで構成できます。 |

<!-- markdownlint-enable line-length -->

## 1. 承認URLを構成する

最初の手順では、アプリケーションの承認URLを構成します。

<Tabs>

<Tab title=".Net">

<!-- markdownlint-disable line-length -->

```dotnet
var baseUrl = "https://account.box.com/api/oauth2/authorize";
var clientId = "[CLIENT_ID]";
var authorizationUrl = $"{baseUrl}?client_id={clientId}&response_type=code";
```

<!-- markdownlint-enable line-length -->

</Tab>

<Tab title="Java">

<!-- markdownlint-disable line-length -->

```java
String baseUrl = "https://account.box.com/api/oauth2/authorize";
String clientId = "[CLIENT_ID]";
String authorizationUrl = String.format("%s?client_id=%s&response_type=code", baseUrl, clientId);
```

<!-- markdownlint-enable line-length -->

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

## 2. ユーザーをリダイレクトする

次に、ユーザーを承認URLにリダイレクトします。ユーザーがURLにリダイレクトされる方法は、使用されるアプリケーションフレームワークによって異なります。このトピックの詳細については、ほとんどのフレームワークのドキュメントで説明されています。

<Tabs>

<Tab title=".NET">

```dotnet
var authorizationUrl = $"{baseUrl}?client_id={clientId}&response_type=code";
// redirectTo(authorizationUrl);
```

</Tab>

<Tab title="Java">

<!-- markdownlint-disable line-length -->

```java
String authorizationUrl = String.format("%s?client_id=%s&response_type=code", baseUrl, clientId);

// response.redirect(authorizationUrl);
```

<!-- markdownlint-enable line-length -->

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

<!-- markdownlint-enable line-length -->

<Message>

スコープを制限したり追加の状態を渡したりするためにユーザーをリダイレクトするときに、追加のクエリパラメータを渡すことができます。詳細については、[リファレンスドキュメント](endpoint://get-authorize)を参照してください。

</Message>

## 3. ユーザーがアプリケーションにアクセス権限を付与する

ユーザーはBoxウェブアプリにリダイレクトされると、ログインする必要があります。ログイン後、ユーザーにはアプリケーションを承認するための画面が表示されます。

<ImageFrame border center shadow width="400">

![OAuth 2.0承認画面の例](./oauth2-grant.png)

</ImageFrame>

ユーザーがこのリクエストを承認し、ボタンをクリックすると、ブラウザは、開発者コンソールで構成されたとおりにアプリケーションのリダイレクトURLにリダイレクトされます。

## 4. コードを交換する

ユーザーは、有効期間の短い承認コードを含むクエリパラメータが指定されたアプリケーションのリダイレクトURLにリダイレクトされます。

```curl
https://your.domain.com/path?code=1234567
```

このコードは[アクセストークン][tokens]ではなく、有効期間はほんの数秒です。SDKを使用すると、このコードを実際のアクセストークンと交換できます。

<Tabs>

<Tab title=".NET">

```dotnet
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
const authenticationUrl = 'https://api.box.com/oauth2/token';

let accessToken = await axios.post(
  authenticationUrl,
  querystring.stringify({
    grant_type: 'authorization_code',
    code: '[CODE]',
    client_id: '[CLIENT_ID]',
    client_secret: '[CLIENT_SECRET]'
  })
)
.then(response => response.data.access_token)
```

</Tab>

</Tabs>

## まとめ

以下の手順に従うことで、アプリケーションはSDKを使用せず、OAuth 2.0を使用したユーザーの承認を実行できるようになりました。

1. 承認URLを構成する
2. ユーザーをBoxウェブサイトにリダイレクトする
3. ユーザーがアプリケーションにアクセス権限を付与する
4. 承認コードをアクセストークンと交換する

このトークンの使用方法を確認するには、[API呼び出しの実行](g://api-calls)に関するガイドをご覧ください。

[tokens]: guide://authentication/access-tokens
