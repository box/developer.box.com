---
rank: 1
related_endpoints:
  - delete_teams_integration_mappings_id
  - get_integration_mappings_teams
  - post_integration_mappings_teams
  - put_integration_mappings_teams_id
related_guides:
  - integration-mappings/teams-mappings/list-mappings
  - integration-mappings/teams-mappings/create-mappings
  - integration-mappings/teams-mappings/update-mappings
  - integration-mappings/teams-mappings/delete-mappings
required_guides: []
related_resources: []
alias_paths: []
category_id: integration-mappings
subcategory_id: integration-mappings/teams-mappings
is_index: true
id: integration-mappings/teams-mappings
type: guide
total_steps: 4
sibling_id: integration-mappings
parent_id: integration-mappings
next_page_id: integration-mappings/teams-mappings/list-mappings
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/teams-mappings/index.md
fullyTranslated: true
---
# Teams統合マッピング

[Teams][2]統合マッピングAPIの使用を開始する前に、以下の手順を実行してください。

## 前提条件

* 管理者または共同管理者のロール
* [Box for Microsoft Teams][1]統合がインストールされていること

## Boxアプリケーションの作成

1. [Box開発者コンソール][4]で、[OAuth認証を使用するPlatformアプリ][3]を作成します。
2. アプリケーションを開き、\[**構成**] > \[**必須のアクセススコープ**] で \[**Enterpriseのプロパティを管理する**] アプリケーションスコープを有効にします。

## 統合マッピングリクエストの承認

1. 前提条件の1つとして作成した[Platformアプリ][5]に移動します。
2. [開発者トークン][6]を生成し、次のように各リクエストのHTTPヘッダーに追加します。

```bash
Authorization: Bearer {developer_token}

```

<Message info>

開発者トークンの有効期限は60分です。その時間が経過した後は、再度生成する必要があります。

</Message>

[1]: https://support.box.com/hc/en-us/articles/360050737154-Assigning-a-Default-Box-Folder-to-a-Teams-Channel-or-Chat

[2]: https://support.box.com/hc/en-us/articles/360044667034-Introducing-Box-for-Microsoft-Teams

[3]: g://authentication/oauth2/oauth2-setup

[4]: https://app.box.com/developers/console

[5]: g://applications/app-types/platform-apps

[6]: g://authentication/tokens/developer-tokens
