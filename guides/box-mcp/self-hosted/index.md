---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
category_id: box-mcp
subcategory_id: box-mcp/self-hosted
is_index: true
id: box-mcp/self-hosted
type: guide
total_steps: 0
sibling_id: box-mcp
parent_id: box-mcp
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-mcp/self-hosted/index.md
fullyTranslated: true
---
# セルフホストBox MCPサーバー

[セルフホストBox MCPサーバー](https://github.com/box-community/mcp-server-box.git)とは、さまざまな操作 (ファイル検索、テキスト抽出、AIベースのクエリ実行、データ抽出など) を行うためにBox APIと統合されているPythonプロジェクトです。Box Pythonの次世代SDKライブラリを利用し、Boxのファイルやフォルダを操作するための一連のツールを提供します。

## インストール

### 前提条件

* Python `3.13`以上
* Box Platformアプリの資格情報 (クライアントID、クライアントシークレット)

セルフホストBox MCPサーバーを設定するには、このセクションの手順に従います。

1. リポジトリを複製します。

```sh
git clone https://github.com/box-community/mcp-server-box.git
cd mcp-server-box

```

2. `uv`がマシンにインストールされていない場合はインストールします。

<Tabs>

<Tab title="macOS/Linux">

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh

```

</Tab>

<Tab title="Windows">

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

```

</Tab>

</Tabs>

その後ターミナルを再起動し、`uv`コマンドが取得されることを確認します。

3. プロジェクトを作成して設定します。

<Tabs>

<Tab title="macOS/Linux">

```sh
# Create virtual environment and activate it
uv venv
source .venv/bin/activate

# Lock the dependencies
uv lock

```

</Tab>

<Tab title="Windows">

```sh
# Create virtual environment and activate it
uv venv
.venv\Scripts\activate

# Lock the dependencies
uv lock

```

</Tab>

</Tabs>

4. ルートディレクトリに`.env`ファイルを作成し、Box Platformアプリの資格情報を入力します。

```.env
BOX_CLIENT_ID=your_client_id
BOX_CLIENT_SECRET=your_client_secret

```

動画によるチュートリアルを視聴して、Box MCPツールの使用例を確認することもできます。

<iframe width="100%" height="500" src="https://www.youtube.com/embed/h109CMywlVQ?si=0EIRYyczpxfuidVU" title="セルフホストBox MCPサーバー" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe>

## Box MCPサーバーのローカルでの実行

Box MCPサーバーを起動するには、次のコマンドを実行します。

```sh
uv --directory /Users/USER_NAME/PATH_TO_PROJECT/mcp-server-box run src/mcp_server_box.py

```

ローカルの設定が反映されるようにパスを更新します。

### CursorをBox MCPクライアントとして使用する

前提条件:

* [Cursorデスクトップアプリ](https://www.cursor.com/)をダウンロードする

CursorでBox MCPサーバーの使用を開始するには、以下の手順に従います。

1. Cursorアプリを開きます。
2. 歯車アイコンをクリックして設定を開きます。
3. \[Cursor Settings] タブで \[`MCP`] を選択します。
4. \[`Add new global MCP server`] ボタンをクリックします。これにより、`mcp.json`ファイルが開きます。
5. ローカルの設定を使用して値を更新し、次のJSONを貼り付けます。

```json
{
  "mcpServers": {
    "box": {
      "command": "uv",
      "args": [
        "--directory",
        "/Users/USER_NAME/PATH_TO_PROJECT/mcp-server-box",
        "run",
        "src/mcp_server_box.py"
      ]
    }
  }
}

```

6. `mcp.json`ファイルを保存して閉じます。
7. 必要に応じて、Cursorを再起動します。
8. `box_authorize_app_tool`ツールを使用して、Box MCPの使用を開始します。

### ClaudeをBox MCPクライアントとして使用する

前提条件:

* [Claude for Desktop](https://claude.ai/download)クライアントをダウンロードする
* 必要に応じて、VS Codeの[`code`](https://code.visualstudio.com/docs/setup/mac#_configure-the-path-with-vs-code)コマンドを設定する

Claude for DesktopでBox MCPを設定するには、以下の手順に従います。

1. `claude_desktop_config.json`を編集します。

ターミナルで次のコマンドを実行します。

```sh
code ~/Library/Application\ Support/Claude/claude_desktop_config.json

```

または、Claudeのメインのナビゲーションで \[`Settings`] を選択します。\[Developers] タブを選択し、\[`Edit Config`] をクリックします。これにより、`claude_desktop_config.json`を含むフォルダウィンドウが表示されます。

2. 構成を追加します。

```json
{
  "mcpServers": {
      "mcp-server-box": {
          "command": "uv",
          "args": [
              "--directory",
              "/Users/Users/USER_NAME/PATH_TO_PROJECT/mcp-server-box",
              "run",
              "src/mcp_server_box.py"
          ]
      }
  }
}

```

3. Claudeデスクトップアプリを再起動します。
4. `box_authorize_app_tool`を使用してBox MCPサーバーを認証します。

## 利用可能なツール

### 認証と承認

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`get_box_client`

</td>

<td>

コンテキストからBoxクライアントを取得するためのヘルパー関数

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。

</td>

<td>

Boxクライアントインスタンス

</td>

</tr>

<tr>

<td>

`box_who_am_i`

</td>

<td>

現在のユーザーの情報を取得します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。

</td>

<td>

ユーザー情報の文字列

</td>

</tr>

<tr>

<td>

`box_authorize_app_tool`

</td>

<td>

Boxアプリケーションを承認します

</td>

<td>

なし

</td>

<td>

承認ステータスメッセージ

</td>

</tr>

</tbody>

</table>

### 検索とナビゲーション

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_search_tool`

</td>

<td>

Box内のファイルを検索します

</td>

<td>

* `query (str)`: 検索クエリ。
* `file_extensions (List[str], optional)`: 拡張子によるフィルタ。
* `where_to_look_for_query (List[str], optional)`: 検索する場所。
* `ancestor_folder_ids (List[str], optional)`: 検索を制限するためのフォルダID。

</td>

<td>

改行で区切られた、ファイル名とIDのリスト

</td>

</tr>

<tr>

<td>

`box_search_folder_by_name`

</code>

</td>

<td>

名前でフォルダを検索します

</td>

<td>

`folder_name (str)`: フォルダの名前

</td>

<td>

フォルダIDと情報

</td>

</tr>

<tr>

<td>

`box_list_folder_content_by_folder_id`

</td>

<td>

フォルダコンテンツのリストを取得します

</td>

<td>

<ul>

<li>

`folder_id (str)`: フォルダのID。

</li>

<li>

`is_recursive (bool)`: 再帰的にリストを取得するかどうか。

</li>

</ul>

</td>

<td>

JSON形式のフォルダコンテンツ

</td>

</tr>

</tbody>

</table>

### ファイル操作

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_read_tool`

</td>

<td>

Boxファイルのテキストコンテンツを読み取ります

</td>

<td>

* `file_id (str)`: 読み取るファイルのID。

</td>

<td>

ファイルコンテンツ

</td>

</tr>

<tr>

<td>

`box_upload_file_from_path_tool`

</td>

<td>

ローカルパスからファイルをアップロードします

</td>

<td>

* `file_path (str)`: ローカルファイルパス。<br>

* `folder_id (str, optional)`: アップロード先フォルダID。<br>

* `new_file_name (str, optional)`: 新しいファイルの名前。

</td>

<td>

ファイルの詳細またはエラーメッセージ

</td>

</tr>

<tr>

<td>

`box_upload_file_from_content_tool`

</td>

<td>

コンテンツをファイルとしてアップロードします

</td>

<td>

* `content (str|bytes)`: アップロードするコンテンツ。<br>

* `file_name (str)`: ファイル名。<br>

* `folder_id (str, optional)`: アップロード先フォルダID。<br>

* `is_base64 (bool, optional)`: コンテンツがbase64でエンコードされているかどうか。

</td>

<td>

アップロードの成功を示すメッセージ

</td>

</tr>

<tr>

<td>

`box_download_file_tool`

</td>

<td>

Boxからファイルをダウンロードします

</td>

<td>

* `file_id (str)`: ファイルID。<br>

* `save_file (bool, optional)`: ローカルに保存するかどうか。<br>

* `save_path (str, optional)`: ローカルの保存パス。

</td>

<td>

ファイルコンテンツまたは保存の確認

</td>

</tr>

<tr>

<td>

`get_file_content`

</td>

<td>

ファイルからテキストコンテンツを抽出します

</td>

<td>

* `file_id (str)`: ファイルID。<br>

</td>

<td>

テキストのファイルコンテンツ

</td>

</tr>

</tbody>

</table>

### フォルダ管理

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr valign="top">

<td>

`box_manage_folder_tool`

</td>

<td>

フォルダを作成、更新、または削除します

</td>

<td style="white-space: pre-wrap;">

* `action (str)`: `create`、`delete`、または`update`。
* `folder_id (str, optional)`: フォルダID。
* `name (str, optional)`: フォルダ名。
* `parent_id (str, optional)`: 親フォルダID。
* `description (str, optional)`: フォルダの説明。
* `recursive (bool, optional)`: 再帰的な削除かどうか。

</td >

<td>

フォルダの詳細を含むステータスメッセージ

</td >

</tr >

</tbody >

</table>

### Box AI

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_ask_ai_tool`

</td>

<td>

ファイルについてBox AIに質問します

</td>

<td>

* `file_id (str)`: ファイルID。<br>

* `prompt (str)`: AIに対する質問。

</td>

<td>

AIの応答

</td>

</tr>

<tr>

<td>

`box_ask_ai_tool_multi_file`

</td>

<td>

複数のファイルを使用してBox AIにクエリを実行します

</td>

<td>

* `file_ids (List[str])`: ファイルIDのリスト。<br>

* `prompt (str)`: AIに対する指示。

</td>

<td>

AIが生成した回答

</td>

</tr>

<tr>

<td>

`box_hubs_ask_ai_tool`

</td>

<td>

HubについてBox AIに質問します

</td>

<td>

* `hubs_id (str)`: HubのID。<br>

* `prompt (str)`: AIに対する質問。

</td>

<td>

AIの応答

</td>

</tr>

<tr>

<td>

`box_ai_extract_data`

</td>

<td>

AIを使用してファイルからデータを抽出します

</td>

<td>

* `file_id (str)`: ファイルID。<br>

* `fields (str)`: 抽出するフィールド。

</td>

<td>

JSON形式で抽出されたデータ

</td>

</tr>

</tbody>

</table>

### コラボレーション

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_collaboration_list_by_file_tool`

</td>

<td>

特定のファイルのすべてのコラボレーションのリストを取得します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `file_id (str)`: BoxファイルのID。

</td>

<td>

コラボレーションのリスト (JSON形式)

</td>

</tr>

<tr>

<td>

`box_collaboration_list_by_folder_tool`

</td>

<td>

特定のフォルダのすべてのコラボレーションのリストを取得します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `folder_id (str)`: BoxフォルダのID。

</td>

<td>

コラボレーションのリスト (JSON形式)

</td>

</tr>

<tr>

<td>

`box_collaboration_delete_tool`

</td>

<td>

特定のコラボレーションを削除します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `collaboration_id (str)`: コラボレーションのID。

</td>

<td>

削除の確認

</td>

</tr>

<tr>

<td>

`box_collaboration_file_group_by_group_id_tool`

</td>

<td>

グループをコラボレータとしてファイルに追加します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `file_id (str)`: BoxファイルのID。<br>

* `group_id (str)`: グループのID。<br>

* `role (str, optional)`: コラボレーションロール (デフォルト: 「編集者」)。

</td>

<td>

作成されたコラボレーションの詳細

</td>

</tr>

</tbody>

</table>

### グループ

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_groups_search_tool`

</td>

<td>

名前でグループを検索します (部分一致)

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `query (str)`: 検索クエリ。

</td>

<td>

一致するグループのリスト (JSON形式)

</td>

</tr>

<tr>

<td>

`box_groups_list_members_tool`

</td>

<td>

特定のグループのすべてのメンバーのリストを取得します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `group_id (str)`: グループのID。

</td>

<td>

グループメンバーのリスト (JSON形式)

</td>

</tr>

<tr>

<td>

`box_groups_list_by_user_tool`

</td>

<td>

特定のユーザーが属しているすべてのグループを取得します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `user_id (str)`: ユーザーのID。

</td>

<td>

グループのリスト (JSON形式)

</td>

</tr>

</tbody>

</table>

### ユーザー

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_users_list_tool`

</td>

<td>

Boxアカウント内のすべてのユーザーのリストを取得します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。

</td>

<td>

ユーザーのリスト (JSON形式)

</td>

</tr>

<tr>

<td>

`box_users_locate_by_name_tool`

</td>

<td>

名前でユーザーを検索します (完全一致)

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `name (str)`: ユーザーの名前。

</td>

<td>

ユーザーの詳細 (JSON形式)

</td>

</tr>

<tr>

<td>

`box_users_locate_by_email_tool`

</td>

<td>

メールアドレスでユーザーを検索します (完全一致)

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `email (str)`: メールアドレス。

</td>

<td>

ユーザーの詳細 (JSON形式)

</td>

</tr>

<tr>

<td>

`box_users_search_by_name_or_email_tool`

</td>

<td>

名前またはメールアドレスでユーザーを検索します (部分一致)

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `query (str)`: 検索クエリ。

</td>

<td>

一致するユーザーのリスト (JSON形式)

</td>

</tr>

</tbody>

</table>

### Boxの共有リンク

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_shared_link_file_get_tool`

</td>

<td>

ファイルの共有リンクを取得します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `file_id (str)`: ファイルのID。

</td>

<td>

共有リンクの詳細 (JSON形式)

</td>

</tr>

<tr>

<td>

`box_shared_link_file_create_or_update_tool`

</td>

<td>

ファイルの共有リンクを作成または更新します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `file_id (str)`: ファイルのID。<br>

* `access (str, optional)`: アクセスレベル。<br>

* `can_download (bool, optional)`: ダウンロード可能かどうか。<br>

* `can_preview (bool, optional)`: プレビュー可能かどうか。<br>

* `can_edit (bool, optional)`: 編集可能かどうか。<br>

* `password (str, optional)`: パスワード。<br>

* `vanity_name (str, optional)`: バニティ名。<br>

* `unshared_at (str, optional)`: 有効期限。

</td>

<td>

作成/更新された共有リンクの詳細 (JSON形式)

</td>

</tr>

</tbody>

</table>

### Box Toolsのウェブリンク

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_web_link_create_tool`

</td>

<td>

Boxウェブリンクを作成します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `url (str)`: ウェブリンクのURL。<br>

* `parent_folder_id (str)`: 親フォルダID。<br>

* `name (str, optional)`: ウェブリンクの名前。<br>

* `description (str, optional)`: 説明。

</td>

<td>

作成されたウェブリンクの詳細 (JSON形式)

</td>

</tr>

<tr>

<td>

`box_web_link_get_by_id_tool`

</td>

<td>

IDを指定してBoxウェブリンクを取得します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `web_link_id (str)`: ウェブリンクのID。

</td>

<td>

ウェブリンクの詳細 (JSON形式)

</td>

</tr>

<tr>

<td>

`box_web_link_update_by_id_tool`

</td>

<td>

IDを指定してBoxウェブリンクを更新します

</td>

<td>

* `ctx (Context)`: リクエストのコンテキスト。<br>

* `web_link_id (str)`: ウェブリンクのID。<br>

* `url (str)`: 新しいURL。

</td>

<td>

更新されたウェブリンクの詳細 (JSON形式)

</td>

</tr>

</tbody>

</table>

### Box Doc Gen

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_docgen_create_batch_tool`

</td>

<td>

テンプレートを使用してドキュメントを生成します

</td>

<td>

* `file_id (str)`: テンプレートファイルID。
* `destination_folder_id (str)`: 出力フォルダID。
* `user_input_file_path (str)`: JSON入力データのパス。
* `output_type (str, optional)`: 出力形式。

</td>

<td>

一括生成の結果

</td>

</tr>

<tr>

<td>

`box_docgen_get_job_tool`

</td>

<td>

IDを指定してDoc Genジョブを取得します

</td>

<td>

`job_id (str)`: ジョブの識別子

</td>

<td>

JSON形式のジョブの詳細

</td>

</tr>

<tr>

<td>

`box_docgen_list_jobs_tool`

</td>

<td>

すべてのDoc Genジョブのリストを取得します

</td>

<td>

* `marker (str, optional)`: ページ割りのマーカー。
* `limit (int, optional)`: 返される最大ジョブ数。

</td>

<td>

JSON形式のジョブのリスト

</td>

</tr>

<tr>

<td>

`box_docgen_list_jobs_by_batch_tool`

</td>

<td>

特定のバッチ内にあるジョブのリストを取得します

</td>

<td>

* `batch_id (str)`: バッチの識別子。
* `marker (str, optional)`: ページ割りのマーカー。
* `limit (int, optional)`: 返される最大ジョブ数。

</td>

<td>

バッチジョブの詳細

</td>

</tr>

<tr>

<td>

`box_docgen_template_create_tool`

</td>

<td>

ファイルをテンプレートとして設定します

</td>

<td>

`file_id (str)`: 設定するファイルID

</td>

<td>

テープレートの詳細

</td>

</tr>

<tr>

<td>

`box_docgen_template_list_tool`

</td>

<td>

すべての使用可能なテンプレートのリストを取得します

</td>

<td>

* `marker (str, optional)`: ページ割りのマーカー。
* `limit (int, optional)`: リストに取得するテンプレートの最大数。

</td>

<td>

テンプレートのリスト

</td>

</tr>

<tr>

<td>

`box_docgen_template_delete_tool`

</td>

<td>

テンプレートの設定を削除します

</td>

<td>

`template_id (str)`: テンプレートの識別子

</td>

<td>

削除の確認

</td>

</tr>

<tr>

<td>

`box_docgen_template_get_by_id_tool`

</td>

<td>

テンプレートの詳細を取得します

</td>

<td>

`template_id (str)`: テンプレートの識別子

</td>

<td>

テープレートの詳細

</td>

</tr>

<tr>

<td>

`box_docgen_template_list_tags_tool`

</td>

<td>

テンプレートタグのリストを取得します

</td>

<td>

* `template_id (str)`: テンプレートID。
* `template_version_id (str, optional)`: バージョンID。
* `marker (str, optional)`: ページ割りのマーカー。
* `limit (int, optional)`: 返される最大タグ数。

</td>

<td>

タグのリスト

</td>

</tr>

<tr>

<td>

`box_docgen_template_list_jobs_tool`

</td>

<td>

テンプレートを使用してジョブのリストを取得します

</td>

<td>

* `template_id (str)`: テンプレートの識別子。
* `marker (str, optional)`: ページ割りのマーカー。
* `limit (int, optional)`: リストに取得する最大ジョブ数。

</td>

<td>

ジョブの詳細

</td>

</tr>

</tbody>

</table>

### Boxメタデータ

<table>

<thead>

<tr>

<th>

ツール

</th>

<th>

説明

</th>

<th>

パラメータ

</th>

<th>

戻り値

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_metadata_template_get_by_key_tool`

</td>

<td>

キーを指定してメタデータテンプレートを取得します。

</td>

<td>

`template_name (str)`: 取得するメタデータテンプレートのキー。

</td>

<td>

指定したキーに関連付けられているメタデータテンプレート。

</td>

</tr>

<tr>

<td>

`box_metadata_template_get_by_name_tool`

</td>

<td>

名前を指定してメタデータテンプレートを取得します。

</td>

<td>

`template_name (str)`: 取得するメタデータテンプレートの名前。

</td>

<td>

指定した名前に関連付けられているメタデータテンプレート。

</td>

</tr>

<tr>

<td>

`box_metadata_template_create_tool`

</td>

<td>

メタデータテンプレートを作成します。

</td>

<td>

* `ctx (Context)`: コンテキストオブジェクト
* `display_name (str)`: メタデータテンプレートの表示名
* `fields (List[Dict[str, Any]])`: フィールド定義のリスト (型、キー、表示名、説明、非表示、オプション (列挙/複数選択用) を含む)
* `template_key (Optional[str])`: メタデータテンプレートのキー (省略可)

</td>

<td>

作成されたメタデータテンプレート。

</td>

</tr>

<tr>

<td>

`box_metadata_set_instance_on_file_tool`

</td>

<td>

ファイルにメタデータインスタンスを設定します。

</td>

<td>

* `ctx (Context)`: コンテキストオブジェクト
* `template_key (str)`: メタデータテンプレートのキー
* `file_id (str)`: メタデータを設定するファイルのID
* `metadata (dict)`: 設定するメタデータ値

</td>

<td>

ファイルに関連付けられているメタデータインスタンス。

</td>

</tr>

<tr>

<td>

`box_metadata_update_instance_on_file_tool`

</td>

<td>

ファイルのメタデータインスタンスを更新します。

</td>

<td>

* `ctx (Context)`: コンテキストオブジェクト
* `file_id (str)`: メタデータを更新するファイルのID
* `template_key (str)`: メタデータテンプレートのキー
* `metadata (dict)`: 更新するメタデータ値
* `remove_non_included_data (bool)`: Trueの場合、メタデータに含まれていないフィールドを削除

</td>

<td>

メタデータ更新後のBox APIからのレスポンス。

</td>

</tr>

<tr>

<td>

`box_metadata_delete_instance_on_file_tool`

</td>

<td>

ファイルのメタデータインスタンスを削除します。

</td>

<td>

* `ctx (Context)`: コンテキストオブジェクト
* `file_id (str)`: メタデータを削除するファイルのID
* `template_key (str)`: メタデータテンプレートのキー

</td>

<td>

メタデータ削除後のBox APIからのレスポンス。

</td>

</tr>

</tbody>

</table>

## トラブルシューティング

Claude for DesktopでMCPサーバーを実行したときにmacOSで`Error: spawn uv ENOENT`が発生した場合は、以下を実行できます。

* Homebrewを使用して`uv`を削除し手再インストールする: `brew install uv`
* 構成内に`uv`実行可能ファイルのフルパスを指定する

```sh
/Users/USER_NAME/.local/bin/uv --directory /Users/USER_NAME/local/mcp-server-box run src/mcp_server_box.py

```

設定に関連するその他の問題が発生した場合は、Boxの[Developer Communityフォーラム](https://community.box.com/ai-developers-23)に質問を投稿してください (英語のみ)。
