---
rank: 6
related_endpoints: []
related_guides:
  - webhooks/v2/create-v2
  - webhooks/v2/update-v2
required_guides: []
alias_paths:
  - /webhooks/limitations
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/limitations-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: ''
previous_page_id: webhooks/v2/signatures-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/limitations-v2.md
fullyTranslated: true
---
# 制限

## Webhookは1項目につき1つ

Webhookは、1人の認証済みユーザーの1つのアプリケーションで、1つの項目 (ファイルまたはフォルダ) につき1つだけという制限があります。

ある項目にWebhookを1つ追加した後は、たとえ別のトリガーイベントに応答するWebhookであっても、2つ目を追加することはできません。

たとえば、`CleanupApp`というアプリケーションに関する`Junk`というフォルダ内の`FILE.UPLOADED`イベントを監視するように、`John Doe`によってWebhookが1つ設定されているとします。その時点で、`FILE.DOWNLOADED`イベントに対してトリガーされるものであっても、`John Doe`によって`CleanupApp`が`Junk`フォルダに2つ目のWebhookを追加することはできません。

別のイベントをリッスンするには、既存のWebhookを[更新][update]するか、新しいアプリケーションを作成します。

## 1つのアプリケーション、1人のユーザーあたり1000個のWebhook

1つのアプリケーション、1人のユーザーあたりのWebhookの数は1,000個までという制限があります。

1人のユーザーにさらにWebhookを作成するには、別のアプリケーションを作成するか、フォルダツリーでより上位に適用するよう[既存のWebhookを更新][update]します。

## 通知URLに関する制約事項

Webhookの通知URL (`address`) は、有効なIPアドレスに解決される有効なHTTPS URLでなくてはなりません。さらに、Boxでは自己署名SSL証明書がサポートされていないため、信頼できる認証局によって署名された証明書が必要になります。

サーバーのIPアドレスは、インターネットからパブリックにアクセスできる必要があり、`(*.)box.com`アドレスにすることはできません。URLで使用されるポートは、標準HTTPSポート (`443`) でなければなりません。通知は他のポートには配信されません。

## Webhookはルートフォルダに追加不可

V2 Webhookをルートフォルダ (IDが`0`のフォルダ) に作成することはできません。代わりに[V1 Webhook][v1]を使用する必要があります。

<Message type="notice">

項目の権限が原因でアクションを実行できない場合、試行されたアクションについての通知は送信されません。

</Mesage>

[v1]: g://webhooks/v1

[update]: g://webhooks/v2/update-v2
