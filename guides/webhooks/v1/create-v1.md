---
rank: 2
related_endpoints: []
related_guides:
  - webhooks/triggers
related_resources:
  - webhook
required_guides:
  - webhooks/triggers
alias_paths:
  - /webhooks/manage/manually
category_id: webhooks
subcategory_id: webhooks/v1
is_index: false
id: webhooks/v1/create-v1
type: guide
total_steps: 2
sibling_id: webhooks/v1
parent_id: webhooks/v1
next_page_id: webhooks/v1/delete-v1
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v1/create-v1.md
fullyTranslated: true
---
# Webhookの作成

V1 Webhookを作成するには、[開発者コンソール][devconsole]で以下の手順に従います。

1. [開発者コンソール][devconsole]で、目的のアプリケーションに移動します。
2. \[**Webhook**] タブを選択します。
3. \[**新規Webhookの作成**] ボタンをクリックします。
4. イベントトリガー、エンドポイントURL、1つ以上のコールバックパラメータなどをフォームに入力します。
5. \[**Webhookの保存**] をクリックします。

<Message type="warning">

# コールバックパラメータ

V2 Webhookとは異なり、これらの手動によるWebhookにはデータを構成する必要があります。このデータは、本文のクエリ文字列として、または`name=Contract.pdf&type=file`のようなクエリパラメータとして送信されます。

</Message>

## 開発者モード

デフォルトでは、V1 Webhookは、開発者コンソールの \[**一般設定**] タブにアプリケーションコラボレータとして表示されているユーザーに対してのみ機能します。Webhookをすべてのユーザーに対して有効にするには、[サポートにお問い合わせください][support]。

## Webhookの有効化

Webhookを作成した後、使用を開始するには、アプリケーションをユーザーのアカウントに追加する必要があります。

アプリを追加するためのURLを取得するには、OAuth 2.0認証アプリで以下の手順に従います。

1. [開発者コンソール][devconsole]で、アプリケーションの \[**App Center**] タブに移動します。
2. \[**アプリを送信**] をクリックします。心配しないでください。送信プロセスは完了しません。
3. ページ下部で \[**プレビュー**] をクリックします。
4. \[**追加**] をクリックします。

<Message type="warning">

その他すべての認証タイプの場合、このURLを取得するには、サポートに問い合わせる必要があります。

</Message>

これでWebhookは、ユーザーのアカウントで発生する構成済みのイベントに対してトリガーされるようになりました。

<!-- i18n-enable localize-links -->

[devconsole]: https://app.box.com/developers/console

[support]: https://support.box.com

<!-- i18n-disable localize-links -->
