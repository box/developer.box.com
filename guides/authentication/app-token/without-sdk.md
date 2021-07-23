---
rank: 2
related_endpoints:
  - get_authorize
related_guides:
  - authentication/access-tokens/downscope
required_guides:
  - authentication/select
  - applications/custom-apps/app-token-setup
related_resources: []
alias_paths: []
category_id: authentication
subcategory_id: authentication/app-token
is_index: false
id: authentication/app-token/without-sdk
type: guide
total_steps: 4
sibling_id: authentication/app-token
parent_id: authentication/app-token
next_page_id: authentication/app-token/endpoints
previous_page_id: authentication/app-token/with-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/app-token/without-sdk.md
fullyTranslated: true
---
# SDKを使用しないアプリトークン

Box公式SDKのいずれも使用できるようになっていない場合や選択した言語のSDKがない場合は、SDKがなくてもBox APIを使用できます。

アプリトークン認証は、Box APIを直接操作するよう設計されており、ユーザーがアプリケーションを承認するためにBoxを介してリダイレクトする必要はありません。ただし、この認証はアプリケーションのデータのみに制限されています。

<Message notice>

JWTを使用した認証方式は、もともとアプリケーションのサービスアカウントに関連付けられています。このトークンを使用して実行されるAPI呼び出しはどれも、このアプリケーションから実行されているように見えますが、明示的なアクセス権がなければ他のユーザーのファイルやフォルダにはアクセスできません。

</Message>

## 前提条件

開始する前に、以下の手順を完了しておく必要があります。

* 開発者コンソール内でBoxアプリケーションを作成する
* アプリケーションがアプリトークン認証を使用するよう構成されていることを確認する
* アプリケーションのプライマリアプリトークンとセカンダリアプリトークンを生成し、コード内のどこかにこれらのトークンを保存する

## API呼び出しの実行

アプリトークンを直接使用するには、任意のアクセストークンを使用する場合と同じように、アプリケーションでアプリトークンを使用できます。

```curl
curl https://api.box.com/2.0/users/me \
  -H "authorization: Bearer EGmDmRVfhfHsqesn5yVYHAqUkD0dyDfk"
```
