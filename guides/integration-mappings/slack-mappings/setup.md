---
rank: 2
related_endpoints:
  - delete_integration_mappings_slack_id
  - get_integration_mappings_slack
  - post_integration_mappings_slack
  - put_integration_mappings_slack_id
related_guides:
  - integration-mappings/slack-mappings/create-mapping
  - integration-mappings/slack-mappings/list-mappings
  - integration-mappings/slack-mappings/update-mapping
  - integration-mappings/slack-mappings/delete-mapping
required_guides: []
related_resources: []
alias_paths: []
category_id: integration-mappings
subcategory_id: integration-mappings/slack-mappings
is_index: false
id: integration-mappings/slack-mappings/setup
type: guide
total_steps: 6
sibling_id: integration-mappings/slack-mappings
parent_id: integration-mappings/slack-mappings
next_page_id: integration-mappings/slack-mappings/list-mappings
previous_page_id: integration-mappings/slack-mappings
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/slack-mappings/setup.md
fullyTranslated: true
---
# Slack統合マッピングの設定

統合マッピングAPIの使用を開始する前に、以下の手順を実行します。

## ロール

管理者または共同管理者のロールが割り当てられていることを確認します。

## Box for Slackのインストールと構成

1. 適切なSlackワークスペースまたはオーガナイゼーションに[Box for Slack][1]をインストールします。
2. [SlackのコンテンツレイヤーとしてのBoxの使用][2]を有効にします。
3. 使用しているサービスアカウントが、マッピングされるフォルダのコラボレータであることを確認します。そのためには、`Invite People`フォルダオプションを使用して、サービスアカウントをコラボレータとして招待します。

エラーが発生した場合は、[トラブルシューティングガイド][3]を参照してください。

## Boxアプリケーションの作成

1. [Box開発者コンソール][5]で、[OAuth認証を使用するカスタムアプリ][4]を作成します。
2. アプリケーションを開き、\[**構成**] > \[**アプリケーションスコープ**] で \[**Enterpriseのプロパティを管理する**] アプリケーションスコープを有効にします。

<Message info>

Slack側のチャンネル確認のために、[統合マッピングAPI][6]でSlack APIを呼び出します。

</Message>

## 承認

統合マッピングリクエストを承認するには、以下の手順を実行します。

1. 前提条件の1つとして作成した[カスタムアプリ][7]に移動します。
2. [開発者トークン][8]を生成し、次のように各リクエストのHTTPヘッダーに追加します。

```bash
Authorization: Bearer {developer_token}

```

<Message info>

開発者トークンの有効期限は60分です。その時間が経過した後は、再度生成する必要があります。

</Message>

[1]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration

[2]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack

[3]: g://integration-mappings/slack-mappings/troubleshooting

[4]: g://authentication/oauth2/oauth2-setup

[5]: https://app.box.com/developers/console

[6]: e://get-integration-mappings-slack

[7]: g://applications/app-types/custom-apps

[8]: g://authentication/tokens/developer-tokens
