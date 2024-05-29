---
rank: 7
related_endpoints:
  - delete_integration_mappings_slack_id
  - get_integration_mappings_slack
  - post_integration_mappings_slack
  - put_integration_mappings_slack_id
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: integration-mappings
subcategory_id: integration-mappings/slack-mappings
is_index: false
id: integration-mappings/slack-mappings/troubleshooting
type: guide
total_steps: 6
sibling_id: integration-mappings/slack-mappings
parent_id: integration-mappings/slack-mappings
next_page_id: ''
previous_page_id: integration-mappings/slack-mappings/delete-mapping
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/slack-mappings/troubleshooting.md
fullyTranslated: true
---
# Slack統合マッピングのトラブルシューティング

統合マッピングAPIはさまざまな種類の検証を実行するため、いくつかのエラーが発生する場合があります。このような一般的なエラーの説明と解決策については、以下を参照してください。

## サービスアカウントがフォルダの共同所有者ではない

[SlackのコンテンツレイヤーとしてBoxを使用する][1]サービスアカウントは、コラボレーションとアップロードを管理するためにフォルダの所有者または共同所有者として追加する必要があります。

```sh
Box as File Storage for Slack (user id: 123, user email:
user@example.com) must be a collaborator in role co-owner or owner
of the folder example123, before it can be mapped to the channel
example123. Please create a collaboration or ensure the ownership for
Box as File Storage for Slack and retry.`

```

このエラーを解決するには、レスポンスのデータを使用して、マッピングを実行するための必要なロールがサービスアカウントにあることを確認してください。

```json
"context_info": {
  "service_account_id": "12345678",
  "service_account_email": "AutomationUser_12345678_gdueygwe@boxdevedition.com",
}

```

以下の手順を実行します。

1. `context_info`から`service_account_email`をコピーします。
2. フォルダ設定で、`Invite People`オプションを使用して共同所有者としてサービスアカウントを招待します。

## チャンネルがすでにBoxのフォルダにマッピングされている

Boxフォルダがすでにマッピングされているチャンネルに対してマッピングを作成しようとすると、APIから次のエラーが返されます。

```sh
Channel: example123 is already mapped to a folder in Box.

```

新しいフォルダの使用を開始したい場合は、`GET`を使用してマッピングの`id`を取得した後、`UPDATE`メソッドを使用してターゲットのBoxフォルダを更新してください。

## チャンネルが見つからない

統合に関連付けられているSlackボットでチャンネルに関する情報を取得できない場合は、APIから次のエラーが返されます。

```sh
Channel: example123 was not found. If it is a private channel, ensure that Box has been added to the channel.

```

`partner_item`が正しいことを確認します。オーガナイゼーションでのインストールの場合は`slack_org_id`、ワークスペースでのインストールの場合は`slack_workspace_id`を指定していることを確認してください。チャンネルがプライベートの場合は、Slackボットがそのチャンネルに追加されていることを確認します。

## チャンネルがカスタムファイルストレージ (CFS) に適していない

```sh
Channel: example123 is not suitable for CFS. Slack Connect channels with
a pending Connect status can not be mapped to Box folders.

```

Slackコネクトチャンネル (企業間チャンネル) は、現在、SlackのコンテンツレイヤーとしてBoxを使用する場合にサポートされていません。

## Boxフォルダが外部で所有されている

マッピングに選択したBoxフォルダは、管理者が所属する企業で所有している必要があります。

```sh
Box folder: example123 cannot be mapped, because it is externally owned. Mapped folder must belong to the enterprise: example_enterprise.

```

## カスタムファイルストレージ (CFS) が無効になっている

Box for Slackがインストールされているものの、[SlackのコンテンツレイヤーとしてBox][1]が有効になっていない企業に対してマッピングを作成しようとすると、APIからこのエラーが返されます。

## Box Enterpriseの不一致

管理者のEnterpriseとBox for Slackの構成が一致しない場合、APIからこのエラーが返されます。Box for Slackを有効にする方法については、[Box for Slackのインストールと構成][2]を参照してください。

[1]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack

[2]: https://support.box.com/hc/en-us/articles/360044195313-Installing-and-Using-the-Box-for-Slack-Integration
