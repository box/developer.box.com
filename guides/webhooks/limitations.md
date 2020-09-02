---
rank: 1
related_endpoints: []
related_guides:
  - webhooks/manage/for-file
  - webhooks/manage/update
required_guides: []
alias_paths: []
category_id: webhooks
subcategory_id: null
is_index: false
id: webhooks/limitations
type: guide
total_steps: 1
sibling_id: webhooks
parent_id: webhooks
next_page_id: webhooks
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/limitations.md
---
# 制限

次に、BoxのWebhookに適用される制限をいくつか説明します。

## Webhookは1項目につき1つ

Webhookは、1人の認証済みユーザーの1つのアプリケーションで、1つの項目(ファイルまたはフォルダ)につき1つだけという制限があります。

ある項目にWebhookを1つ追加した後は、たとえ別のトリガーイベントに応答するWebhookであっても、2つ目を追加することはできません。

たとえば、ユーザー`John Doe`のアプリケーション`MyGreatApp`で、`Junk`というフォルダ内の`FILE.UPLOADED`イベントを監視するWebhookが1つ設定されているとします。このとき、`FILE.DOWNLOADED`イベントでトリガーするWebhookであったとしても、同じユーザーの同じアプリケーションの同じフォルダに2つ目のWebhookを追加することはできません。

別のイベントをリッスンするには、既存のWebhookを更新するか、新しいアプリケーションを作成します。または、Webhookペイロードが配信された時点でアプリケーション内のさまざまなイベントを解析するのが理想的です。

## 1つのアプリケーション、1人のユーザーあたり1000個のWebhook

1つのアプリケーション、1人のユーザーあたりのWebhookの数は1,000個までという制限があります。

つまり、1人のユーザーの1つのアプリケーションで最大1000個のWebhookを作成でき、それ以上は作成できません。1人のユーザーでそれ以上の数のWebhookを作成するには、別のアプリケーションを作成するか、Webhookをフォルダ構造内のより上位の項目に適用します。

## 通知URLに関する制約事項

Webhookの通知URL (`address`)は、有効なIPアドレスに解決される有効なHTTPS URLであることが求められ、信頼できる認証局によって署名された証明書が必要です。Boxは、自己署名SSL証明書をサポートしていません。

サーバーのIPアドレスは、インターネットからパブリックにアクセスできる必要があり、`(*.)box.com`アドレスであってはなりません。URLで使用されるポートは、標準HTTPSポート(`443`)でなければなりません。通知は他のポートには配信されません。

## ルートフォルダにはWebhookを追加できない

Webhookをユーザーのルートフォルダ(IDが`0`のフォルダ)に作成することはできません。
