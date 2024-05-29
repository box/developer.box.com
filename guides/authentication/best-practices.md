---
rank: 7
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: null
is_index: false
id: authentication/best-practices
type: guide
total_steps: 3
sibling_id: authentication
parent_id: authentication
next_page_id: authentication/sso
previous_page_id: authentication/select
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/best-practices.md
fullyTranslated: true
---
# ベストプラクティス

## クライアントシークレットのセキュリティ

クライアントシークレットは機密情報であり、保護する必要があります。アクセストークンの取得時にBoxがアプリケーションのIDを安全に確認するために使用されるため、クライアントシークレットを自由に配布するべきではありません。配布方法には、メール、公開フォーラム、コードリポジトリ、分散されたネイティブアプリケーション、クライアント側のコードなどがあります。

## トークンのキャッシュ

新しいトークンの取得はコストが高いため、トークンのキャッシュを使用して、不要なリクエストが行われないようにすることをお勧めします。

トークンは、取得後、Memcachedなどのインメモリキャッシュ、または組み込みのASP.NETキャッシュサービスに保存してください。デフォルトでは、アクセストークンの有効期限は60分ですが、バッファーを確保するために50分程度に設定することをお勧めします。

トークンが必要になったら、まずキャッシュに有効なトークンがあるかどうかを確認します。トークンの有効期限が切れている場合は、新しいトークンを取得し、キャッシュに50分間保存します。

```ruby
def self.user_client(user_id)
    access_token=Rails.cache.fetch("box_tokens/user/#{user_id}", :expires_in => 50.minutes) do
        puts "getting new user token"
        response= Boxr::get_user_token(user_id, private_key: PRIVATE_KEY, private_key_password: ENV['JWT_PRIVATE_KEY_PASSWORD'])
        response.access_token
    end

    Boxr::Client.new(access_token)
end

```

<Message tip>

Box公式SDKでは、トークンのキャッシュが使用されています。

</Message>

## 有効期限が切れたトークン

有効期限が切れたトークンは、401: Unauthorizedエラーを返します。このエラーを処理して、トークンを更新する必要があります。

## トークンのダウンスコープ

アクセストークンについて考えるとき際は、最小権限の原則に従うことが重要です。そのためには、[ダウンスコープ][downscope]を行います。ダウンスコープでは、すべてのスコープが設定されたアクセストークンがより厳しく制限されたアクセストークンと交換され、そのトークンがクライアント側のコード、モバイル環境、またはUIツールに展開されます。

```java
//Define resource/scopes that downscoped token has access to
String resource = "https://api.box.com/2.0/files/RESOURCE_ID";
List<String> scopes = new ArrayList<String>();
scopes.add("base_preview");
scopes.add("item_download");

//Preform token exchange
ScopedToken downscopedToken =
    client.getLowerScopedToken(scopes,resource);

//Downscoped token available in downscopedToken.getAccessToken()

```

## トークンの取り消し

すべてのスコープが設定されたアクセストークンもダウンスコープされたトークンも、[取り消す][revoke]ことができます。そのため、トークンの寿命を管理して、ユーザーがログアウトしたとき、不審なアクティビティがあったとき、新しいセキュリティ強化を推進する必要があるときなどに、リスクを減らすことができます。

## 開発者トークン

開発者トークンは、開発またはテストのためだけに使用し、実稼働環境では使用しないでください。

[downscope]: g://authentication/tokens/downscope/

[revoke]: g://authentication/tokens/revoke/
