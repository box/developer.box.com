---
rank: 12
related_endpoints: []
related_guides:
  - authentication/oauth2
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []
category_id: cli
subcategory_id: cli/cli-docs
is_index: false
id: cli/cli-docs/bulk-commands
type: guide
total_steps: 2
sibling_id: cli/cli-docs
parent_id: cli/cli-docs
next_page_id: ''
previous_page_id: cli/cli-docs
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/cli-docs/bulk-commands.md
fullyTranslated: true
---
# CLIの一括コマンド

Box CLIの一括コマンドを使用すると、反復タスクを自動化できます。コマンドに`--bulk-file-path`フラグを追加すると、多数の項目に対して操作を一度に実行できます。

たとえば、次のコマンドは、CSVファイルを使用してフォルダの名前 (`Name`)、説明 (`Description`)、親フォルダの`ParentId`を指定し、複数のフォルダを作成します。

```bash
box folders:create --bulk-file-path <PATH_TO_CSV>/folders-create.csv

```

## CSVテンプレート

あらかじめ定義されたCSVテンプレートを使用すると、一括で管理したいデータを構造化できます。テンプレートは[`Bulk actions`][bulkactions]ディレクトリにあり、複数のフォルダに分類されています。現在利用できるテンプレートは、以下の表に示すとおりです。

| テンプレート                 | 説明                                        |
| ---------------------- | ----------------------------------------- |
| box collaborations     | コラボレーションを作成、削除、更新します。                     |
| box files              | ファイルをダウンロード、更新、アップロードします。                 |
| box folders            | フォルダの作成と更新、フォルダへのメタデータの追加を行います。           |
| box groups             | グループの作成とメンバーシップの追加を行います。                  |
| box metadata-templates | メタデータテンプレートと、フォルダのメタデータカスケードポリシーを作成します。   |
| box shared-links       | 共有リンクを削除します。                              |
| box users              | ユーザーの作成と更新、あるユーザーから別のユーザーへのコンテンツの移動を行います。 |
| box webhooks           | Webhookを削除します。                            |

## 前提条件

一括コマンドを使用するには、OAuth 2.0認証を使用するBoxアプリケーションが必要です。該当するアプリケーションがない場合は、[開発者コンソール][console]に移動して、[OAuth 2.0を使用した設定][auth]ガイドに従ってください。

## 一括コマンドの設定と使用

1. `boxcli` GitHubリポジトリを複製するか、[`Bulk actions`][bulkactions]ディレクトリからファイルをダウンロードします。

```bash
    git clone https://github.com/box/boxcli.git

```

2. 必要に応じて`.csv`テンプレートを調整します。たとえば、複数のフォルダを作成する場合は、出発点として[`folders-create.csv`][folderstemplate]テンプレートを使用できます。

3. コマンドを実行します。

```bash
    box users:create --bulk-file-path <PATH_TO_CSV>/folders-create.csv

```

[console]: https://app.box.com/developers/console

[auth]: g://authentication/oauth2/oauth2-setup

[bulkactions]: https://github.com/box/boxcli/tree/main/docs/Bulk%20actions

[folderstemplate]: https://github.com/box/boxcli/blob/main/docs/Bulk%20actions/folders/folders-create.csv
