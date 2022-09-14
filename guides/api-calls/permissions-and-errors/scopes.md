---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
alias_paths:
  - /docs/scopes
category_id: api-calls
subcategory_id: api-calls/permissions-and-errors
is_index: false
id: api-calls/permissions-and-errors/scopes
type: guide
total_steps: 5
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: api-calls/permissions-and-errors/expiration
previous_page_id: api-calls/permissions-and-errors
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/permissions-and-errors/scopes.md
fullyTranslated: true
---
#  スコープ 

開発者コンソールでアプリケーションが作成されると、ユーザーはアプリケーションのスコープを設定する必要があります。ユーザーにBox内のファイルやフォルダへのアクセス権限が付与されるしくみと同様、アプリケーションにも、BoxユーザーやBoxを使用する企業に代わって特定のアクションを実行するための独自の権限が付与されます。アプリケーションに対する権限セットの名前を「スコープ」と言います。つまり、アプリケーションのスコープにより、アプリケーションから呼び出すことのできる[エンドポイント][reference]が決まります。また、このスコープは、アプリケーションの[アクセストークン][at]が提供するアクセス権限に反映されます。

## ユーザー権限とスコープ

アクションを実行するための適切なスコープがアプリケーションに設定されている場合でも、アクセストークンと関連付けられた、呼び出しを実行するユーザーにはそのアクションを実行するための権限が必要であり、逆の場合も同様であることを理解することが重要です。

たとえば、ファイルを読み取るようにアプリケーションが設定されている場合、アクセスしようとするファイルの読み取り権限が認証済みユーザーにも必要です。

スコープ、トークンの権限、ユーザー権限がどのように連携しているかの詳細については、Boxの[セキュリティガイド][security]を参照してください。

## スコープとOAuth 2承認

アプリケーションを承認するためにクライアント側のOAuth 2フローを介してユーザーを送信する際は、承認URLに一連のスコープを追加してユーザーのアクセストークンをさらに制限できます。

たとえば、アプリケーションで`root_readonly`および`root_readwrite`スコープが有効になっている場合は、ユーザーのリダイレクト時にこのスコープを指定することで、ユーザーのアクセストークンを`root_readonly`に制限できます。

```js
GET https://account.box.com/api/oauth2/authorize?scope=root_readonly&client_id=....
```

スコープパラメータが省略されている場合、アプリケーションでは、そのアプリケーションの作成時に設定されたスコープが使用されます。

## セルフサービススコープ

これらのスコープは、アプリケーションの設定時に開発者コンソールから使用できます。\[**構成**] タブの \[**アプリケーションスコープ**] セクションに移動して、以下のスコープから1つ以上を選択します。

### すべてのファイルとフォルダの読み取り

|                  |                               |
| ---------------- | ----------------------------- |
| **OAuthスコープ**    | `root_readonly`               |
| **アプリケーションスコープ** | Boxに格納されているすべてのファイルとフォルダの読み取り |

アプリケーションで、認証済みユーザーはすべてのファイル/フォルダを読み取ることができるようになります。

これにより、アプリケーションにはファイルとフォルダに対する読み取り権限が付与されますが、API呼び出しを実行するユーザーには、アクセス対象の項目に対するアクセス権限が必要です。

つまり、[JWT][jwt]アプリケーションが[管理対象ユーザー][mu]の項目にアクセスする場合、サービスアカウントのトークンは、そのコンテンツにアクセスできるユーザーとして直接認証されるように、`as-user`[ヘッダー][au]を使用するか、[ユーザーアクセストークン][uat]を作成する必要があります。

### すべてのファイルとフォルダの読み取りと書き込み

|                  |                                    |
| ---------------- | ---------------------------------- |
| **OAuthスコープ**    | `root_readwrite`                   |
| **アプリケーションスコープ** | Boxに格納されているすべてのファイルとフォルダの読み取りと書き込み |

アプリケーションには、認証済みユーザーの書き込みアクセス権限が付与されます。これにより、アプリケーションでは、ファイルまたは新しいファイルバージョンのアップロード、コンテンツのダウンロード、新しいフォルダの作成、コラボレーションの更新または削除、コメントまたはタスクの作成などを実行できるようになります。

これにより、アプリケーションには項目に対する読み取り/書き込みアクセス権限が付与されますが、API呼び出しを行うユーザーには、コンテンツに対するアクセス権限が必要です。

### ユーザーを管理

開発者コンソールにある「ユーザーを管理」スコープは、2つのOAuthスコープにマップされます。

|                  |                        |
| ---------------- | ---------------------- |
| **OAuthスコープ**    | `manage_managed_users` |
| **アプリケーションスコープ** | ユーザーを管理                |

アプリケーションには、[管理対象ユーザー][mu]を管理するための権限が付与されます。これにより、このアプリでは、ユーザーのプライマリログインの変更、ユーザーのパスワードのリセット、管理対象ユーザーのロールの変更を実行できます。

<Message type="notice">

これを使用すると、アプリケーションでユーザーを管理できますが、クライアント側アプリケーションの場合、使用されるアクセストークンを、適切な権限を持つ管理者または共同管理者に関連付ける必要があります。

さらに、JWTアプリケーションの場合は、[アプリケーションアクセス][appaccess]を \[**アプリアクセス + Enterpriseアクセス**] にしてアプリケーションを設定する必要があります。

</Message>

|                  |                    |
| ---------------- | ------------------ |
| **OAuthスコープ**    | `manage_app_users` |
| **アプリケーションスコープ** | ユーザーを管理            |

アプリケーションには、[App User][appu]を管理するための権限が付与されます。つまり、このスコープは、サーバー側で認証されている (JWT) アプリケーションのみに適用されます。

### グループを管理する

|                  |                 |
| ---------------- | --------------- |
| **OAuthスコープ**    | `manage_groups` |
| **アプリケーションスコープ** | グループを管理する       |

アプリケーションには、企業のグループを管理するための権限が付与されます。これにより、このアプリでは、グループの作成、更新、削除のほか、グループメンバーシップの管理を実行できます。

<Message type="notice">

これを使用すると、アプリケーションでグループを管理できますが、クライアント側アプリケーションの場合、使用されるアクセストークンを、適切な権限を持つ管理者または共同管理者に関連付ける必要があります。

さらに、JWTアプリケーションの場合は、[アプリケーションアクセス][appaccess]を \[**アプリアクセス + Enterpriseアクセス**] にしてアプリケーションを設定する必要があります。

</Message>

### Webhookを管理する

|                  |                  |
| ---------------- | ---------------- |
| **OAuthスコープ**    | `manage_webhook` |
| **アプリケーションスコープ** | Webhookを管理する     |

アプリケーションには、ユーザーのWebhookを作成するための権限が付与されます。Webhookの[制限](g://webhooks/v2/limitations-v2)を確認してください。注目すべきは、1ユーザーにつき1つのアプリケーションあたりWebhookは1,000個までという制限があることです。

### Enterpriseのプロパティを管理する

|                  |                                |
| ---------------- | ------------------------------ |
| **OAuthスコープ**    | `manage_enterprise_properties` |
| **アプリケーションスコープ** | Enterpriseのプロパティを管理する          |

アプリケーションには、Enterprise Event Streamを表示するための権限に加え、Enterpriseの属性とレポートを表示および編集するための権限が付与されます。さらに、アプリケーションでは、デバイスピンの編集と削除も実行できます。

<Message type="notice">

これを使用すると、アプリケーションで企業のプロパティを管理できますが、クライアント側アプリケーションの場合、使用されるアクセストークンを、適切な権限を持つ管理者または共同管理者に関連付ける必要があります。

</Message>

### リテンションポリシーを管理する

|                  |                          |
| ---------------- | ------------------------ |
| **OAuthスコープ**    | `manage_data_retention`  |
| **アプリケーションスコープ** | リテンションポリシーを管理する          |
| **依存先**          | `enterprise_content`スコープ |

アプリケーションには、Box Governanceでリテンションポリシーを表示および作成するための権限が付与されます。そのため、企業では[Box Governance][governance]を購入しておく必要があります。

<Message type="warning">

このスコープを使用するには、`enterprise_content`スコープも適切に機能する必要があります。これらのスコープをリクエストするには、当社のサポートチャネルでチケットを作成します。

</Message>

### 署名リクエストを管理する

|                  |                           |
| ---------------- | ------------------------- |
| **OAuthスコープ**    | `sign_requests.readwrite` |
| **アプリケーションスコープ** | 署名リクエストを管理する              |

アプリケーションには、署名リクエストを取得、作成、キャンセル、および再送信するための権限が付与されます。

このスコープでは、アプリケーションに読み取り/書き込みスコープも設定する必要があります。これらのスコープは、有効にしたときに自動的に選択されます。さらに、企業ではSignが有効になっている必要があります。

### Box Relayを管理する

|                  |                   |
| ---------------- | ----------------- |
| **OAuthスコープ**    | `manage_triggers` |
| **アプリケーションスコープ** | Box Relayを管理する    |

アプリケーションには、ワークフローを取得し、`WORKFLOW_MANUAL_START`タイプのフローを開始するための権限が付与されます。

このスコープでは、アプリケーションに読み取り/書き込みスコープも設定する必要があります。

## リクエストに応じて使用可能

リクエスト時にのみ使用できる追加のスコープがいくつかあります。これを使用するには、Boxの[サポートチーム](page://support)にチケットを送信してください。サポートチームは、個別にリクエストを確認し、ユースケースにスコープが必要な場合にのみ承認を行います。

<Message type="notice">

無料トライアルのアカウントでは、スコープを追加でリクエストすることはできません。以下に示すスコープの有効化についてサポートリクエストを申請する前に、有料のEnterpriseアカウントにログインするか、[無料のDeveloperアカウントをEnterpriseアカウントプランにアップグレード][pricing]してください。

</Message>

### リーガルホールドを管理する

|                  |                          |
| ---------------- | ------------------------ |
| **OAuthスコープ**    | `manage_legal_holds`     |
| **アプリケーションスコープ** | リテンションポリシーを管理する          |
| **依存先**          | `enterprise_content`スコープ |

アプリケーションには、Box Governanceでリテンションポリシーを表示および作成するための権限が付与されます。そのため、会社ではBox Governanceを購入しておく必要があります。

<Message type="notice">

このスコープが適切に機能するには、`enterprise_content`スコープを必要とします。このスコープは、当社のサポートチャネルでチケットを作成してリクエストできます。

</Message>

### メール通知を抑制する

|                  |                     |
| ---------------- | ------------------- |
| **アプリケーションスコープ** | API呼び出しからメール通知を抑制する |

API呼び出しが行われるときに、一部の種類の[メール通知][suppress]を抑制できます。

### グローバルコンテンツマネージャ (GCM)

|                  |                      |
| ---------------- | -------------------- |
| **OAuthスコープ**    | `enterprise_content` |
| **アプリケーションスコープ** | グローバルコンテンツマネージャ      |

管理者と[サービスアカウント][sa]は、明示的な所有権やコラボレーション権限がなくても、社内のすべてのコンテンツを取得できます。このスコープは、リテンションポリシーとリーガルホールドを管理する場合にも必要です。

<Message type="danger">

# 副次的影響

アプリケーションに対してこのスコープを有効にすると、一部のAPI呼び出しの動作が変更されます。その最も顕著な例として、`as-user`ヘッダーを使用してユーザーとして明示的に認証しないとコンテンツを書き込めなくなることが挙げられます。また、このスコープを有効にすると、別の企業のユーザーが所有するコンテンツにはアクセスできなくなります。

そのため、やむを得ない場合を除き、このスコープはプロビジョニングされません。

</Message>

## ダウンスコープ用のスコープ

特にトークンをクライアント側 (ブラウザなどの公開された環境) に公開する必要がある場合など、アクセストークンをより厳格な権限レベルに[ダウンスコープ][ds]しなければならないことがあります。その主な例として、ユーザーのブラウザでアクセストークンが必要となる[Box UI Elements][ui-elements]を使用する場合が挙げられます。

既存のアクセストークンをダウンスコープするために[`POST /oauth2/token`](endpoint://post-oauth2-token)エンドポイントで使用できる**追加**のスコープのリストを以下に示します。

<!-- markdownlint-disable line-length -->

| OAuthスコープ              | 影響を受けるUI Element | 説明                                                   |
| ---------------------- | ---------------- | ---------------------------------------------------- |
| `annotation_edit`      | Preview          | 注釈の編集と削除をユーザーに許可します。                                 |
| `annotation_view_all`  | Preview          | すべてのユーザーによる注釈の表示をユーザーに許可します。                         |
| `annotation_view_self` | Preview          | ユーザーに自分の注釈のみの表示を許可します。                               |
| `base_explorer`        | Explorer         | ユーザー/ファイル/トークンの権限に基づいて、フォルダツリー内のコンテンツへのアクセスを許可します。   |
| `base_picker`          | Picker           | ユーザー/ファイル/トークンの権限に基づいて、フォルダツリー内のコンテンツへのアクセスを許可します。   |
| `base_preview`         | Preview          | ファイルのプレビューのみをユーザーに許可します。                             |
| `base_sidebar`         | Sidebar          | サイドバーUI Elementに必要なファイルの基本情報の取得をユーザーに許可します。          |
| `base_upload`          | Uploader         | トークンのダウンスコープ時に、`resource`の下で指定されたフォルダへのアップロードを許可します。 |
| `item_delete`          | Explorer         | ファイルとフォルダの削除を許可します。                                  |
| `item_download`        | Explorer、Preview | ファイルまたはフォルダのコンテンツのダウンロードを許可します。                      |
| `item_preview`         | Explorer         | ファイルのプレビューを有効にします。                                   |
| `item_rename`          | Explorer         | ファイルとフォルダの名前変更を許可します。                                |
| `item_share`           | Explorer、Picker  | トークン交換の`resource`で指定された項目の共有を許可します。                  |
| `item_upload`          | Picker           | Content Pickerでのアップロードを許可します。                        |

<!-- markdownlint-enable line-length -->

また、ダウンスコープ時には標準OAuthスコープもサポートされます。

<!-- markdownlint-disable line-length -->

| OAuthスコープ                      | 説明                                 |
| ------------------------------ | ---------------------------------- |
| `root_readonly`                | Boxに格納されているすべてのファイルとフォルダの読み取り      |
| `root_readwrite`               | Boxに格納されているすべてのファイルとフォルダの読み取りと書き込み |
| `manage_managed_users`         | 管理対象ユーザーを管理する                      |
| `manage_app_users`             | App Userを管理                        |
| `manage_groups`                | グループを管理する                          |
| `manage_webhook`               | Webhookを管理する                       |
| `manage_enterprise_properties` | Enterpriseのプロパティを管理する              |
| `manage_data_retention`        | リテンションポリシーを管理する                    |
| `sign_requests.readwrite`      | 署名リクエストを管理する                       |

<!-- markdownlint-enable line-length -->

<!-- i18n-enable localize-links -->

[console]: https://app.box.com/developers/console

[ui-elements]: https://github.com/box/box-ui-elements

[pricing]: https://www.box.com/ja-jp/pricing

[reference]: https://ja.developer.box.com/reference

<!-- i18n-disable localize-links -->

[at]: g://authentication/tokens

[security]: g://security

[jwt]: g://authentication/jwt

[mu]: g://getting-started/user-types/managed-users

[au]: g://authentication/jwt/as-user

[uat]: g://authentication/jwt/user-access-tokens

[appaccess]: g://authentication/jwt/jwt-setup/#application-access

[appu]: g://getting-started/user-types/app-users

<!-- i18n-enable localize-links -->

[governance]: https://www.box.com/ja-jp/security/governance-and-compliance

<!-- i18n-disable localize-links -->

[suppress]: g://api-calls/suppress-notifications

[ds]: g://authentication/tokens/downscope

[sa]: g://getting-started/user-types/service-account