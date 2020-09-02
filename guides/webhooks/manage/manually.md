---
rank: 7
related_endpoints: []
related_guides:
  - webhooks/manage/for-file
  - webhooks/manage/list-all
required_guides: []
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/manage
is_index: false
id: webhooks/manage/manually
type: guide
total_steps: 7
sibling_id: webhooks/manage
parent_id: webhooks/manage
next_page_id: ''
previous_page_id: webhooks/manage/delete
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/manage/manually.md
---
# 手動によるWebhookの作成

Box APIを介してWebhookを作成する方法に加えて、開発者コンソールから手動でWebhookを作成することもできます。このプロセスは、多くの場合Webhook V1と呼ばれます。

## 制約事項

開発者コンソールを使用して作成されたWebhookは、ユーザーのアカウント内のすべてのファイルとフォルダに対する変更を監視します。このようなWebhookを作成する際は、Webhookをバインドする特定のオブジェクトを指定することはできません。

単一のファイルまたはフォルダにWebhookを作成するには、[WebhookのAPI][create_webhook]を使用してください。

<Message type="warning">

このプロセスで作成されたWebhookは、ユーザーの[すべてのWebhook][list_webhooks]のリストを作成しても表示されません。

</Message>

## V1 Webhookの作成

[開発者コンソール][devconsole]を使用して新しいWebhookを作成するには、以下の手順に従います。

1. [開発者コンソール][devconsole]に移動し、Webhookを追加するアプリを選択します。
2. サイドバーから\[Webhook]を選択します。
3. \[新規Webhookの作成]ボタンをクリックします。
4. フォームに入力してWebhookを作成し、フォームを保存します。Webhookが呼び出すエンドポイントURLを必ず入力します。また、1つ以上のコールバックパラメータとWebhookに追加するデータも必ず選択します。
5. アプリのインストールURL `https://[enterprise_name].app.box.com/services/[service_short_name]`にアクセスします。ここで、`enterprise_name`は会社のサブドメインであり、Boxウェブアプリにアクセスして、ブラウザがリダイレクトされるドメインを調べることで確認できます。`service_short_name`は、アプリケーションの名前をすべて小文字にし、英数字以外の文字をアンダースコアに置き換えたものです。たとえば、`Your App Name [Dev]`は`your_app_name_dev`になります。

<Message type="warning">

# コールバックパラメータ

V2 Webhookとは異なり、これらの手動によるWebhookは、送信するデータを設定する必要があります。このデータは、本文のクエリ文字列として、または`name=Contract.pdf&type=file`のようなクエリパラメータとして送信されます。

</Message>

これで、ユーザーのアカウント内のオブジェクトで発生したイベントに対してWebhookがトリガーされるようになりました。

<Message type="error">

# 開発者モード

デフォルトでは、V1 Webhookは、アプリケーションの開発者であり、開発者コンソールでアプリにアクセスできるユーザーに対してのみ機能します。これらのWebhookをすべてのユーザーに対して有効にするには、サポートにお問い合わせください。

</Message>

[devconsole]: https://app.box.com/developers/console

[list_webhooks]: guide://webhooks/manage/list-all

[create_webhook]: guide://webhooks/manage/for-file
