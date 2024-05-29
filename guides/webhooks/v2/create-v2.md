---
rank: 2
related_endpoints:
  - post_webhooks
related_guides:
  - webhooks/triggers
  - webhooks/v2
  - webhooks/v2/delete-v2
related_resources:
  - webhook
required_guides: []
alias_paths:
  - /webhooks/manage/for-file
  - /webhooks/manage/for-folder
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/create-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/update-v2
previous_page_id: webhooks/v2/list-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/create-v2.md
fullyTranslated: true
---
# Webhookの作成

V2 Webhookは、特定のファイルまたはフォルダを監視でき、[開発者コンソール][console]でもAPIでも作成できます。

## 開発者コンソール

<Message type="warning">

V2 Webhookを作成できるのは、\[**Webhookを管理する**] というスコープが選択され、アプリケーションが承認されている場合のみです。[アプリケーションスコープ][1]と[承認][2]の詳細を参照してください。

</Message>

Webhookを作成するには、以下の手順に従います。

1. [開発者コンソール][console]で、目的のアプリケーションに移動します。
2. \[**Webhook**] タブを選択します。
3. \[**Webhookを作成**] ボタンをクリックします。
4. ドロップダウンリストで \[**V2**] を選択します。
5. フォームに入力します。
6. \[**Webhookを作成**] ボタンをクリックして変更を保存します。

### 必須フィールド

| フィールド名   | 説明                                    | 必須 |
| -------- | ------------------------------------- | -- |
| URLアドレス  | Webhookによって通知されるURLアドレス。              | はい |
| コンテンツタイプ | Webhookが構成されているコンテンツのタイプ (ファイル/フォルダ)。 | はい |
| トリガー     | Webhookをアクティブ化するさまざまなトリガー。            | はい |

## API

<Message type="warning">

このAPIを使用するには、アプリケーションの \[**Webhookを管理する**] スコープが有効になっている必要があります。

</Message>

ファイルにWebhookを追加するには、`file`の種類、ファイルのID、Webhook通知の送信先URL、および[トリガー][4]のリストを指定して[Webhookを作成][3]エンドポイントを呼び出します。

<Samples id="post_webhooks">

</Samples>

フォルダにWebhookを追加するには、`folder`の種類、フォルダのID、Webhook通知の送信先URL、および[トリガー][4]のリストを指定して[Webhookを作成][3]エンドポイントを呼び出します。

<Samples id="post_webhooks" variant="for_folder">

</Samples>

<Message type="notice">

Webhookはカスケードで適用されるため、Webhookを親フォルダに設定すると、サブフォルダでも選択されたトリガーが監視されます。

</Message>

## 所有権

コンテンツにアクセスできなくなることでWebhookの配信に生じる可能性のある問題を回避するために、[サービスアカウント][sa] (つまり削除されることのないユーザー) を使用してWebhookを作成することを強くお勧めします。

ファイルやフォルダと同様、Webhookを所有するのはユーザーです。Webhookを所有するユーザーが削除されると、以前アクセスできていたすべてのファイルとフォルダにアクセスできなくなります。ユーザーのWebhookでは検証が失敗するようになりますが、Webhookサービスは引き続きイベントを送信し、再試行を要求します。

## Webhookアドレス

`address`パラメータで指定する通知URLは、Webhookの作成時に指定した有効なURLである必要があります。このURLは、いずれかのトリガーがアクティブになるたびに呼び出されます。

通知URLは標準ポート`443`を使用する必要があり、Webhookペイロードの受信から30秒以内に`200`～`299`の範囲のHTTPステータスを返す必要があります。

## Webhookトリガー

トリガーのリストでは、Webhookによって発生するイベントを表す文字列を指定します。たとえば、ユーザーがファイルをアップロードしたときにWebhookをトリガーするには`FILE.UPLOADED`を使用します。

使用可能なトリガーのリストは、[こちらのガイド][4]を参照してください。

[1]: g://applications

[2]: g://authorization

[3]: e://post_webhooks

[4]: g://webhooks/triggers

[sa]: page://platform/user-types/#service-account

[console]: https://app.box.com/developers/console
