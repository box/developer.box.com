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

* Python 3.13以上
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

### Claude for DesktopをBox MCPクライアントとして使用する

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

3. Claude for Desktopを再起動します。
4. `box_authorize_app_tool`を使用してBox MCPサーバーを認証します。

## 利用可能なツール

### 認証およびユーザーツール

| ツール                      | 説明                             | パラメータ | 戻り値           |
| ------------------------ | ------------------------------ | ----- | ------------- |
| `box_who_am_i`           | 現在のユーザーの情報を取得し、接続のステータスを確認します。 | なし    | ユーザー情報の文字列。   |
| `box_authorize_app_tool` | Boxアプリケーションの承認プロセスを開始します。      | なし    | 承認ステータスメッセージ。 |

### 検索およびナビゲーションツール

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

* `query (str):` 検索クエリ。
* `file_extensions (List[str], optional):` 拡張子によるフィルタ。
* `where_to_look_for_query (List[str], optional):` 検索する場所。
* `ancestor_folder_ids (List[str], optional):` 検索を制限するためのフォルダID。

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

`folder_name (str):` フォルダの名前

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

`folder_id (str):` フォルダのID。

</li>

<li>

`is_recursive (bool):` 再帰的にリストを取得するかどうか。

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

* `file_id (str):` 読み取るファイルのID。

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

* `file_path (str):` ローカルファイルパス。<br>

* `folder_id (str, optional):` アップロード先フォルダID。<br>

* `new_file_name (str, optional):` 新しいファイルの名前。

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

* `content (str|bytes):` アップロードするコンテンツ。<br>

* `file_name (str):` ファイル名。<br>

* `folder_id (str, optional):` アップロード先フォルダID。<br>

* `is_base64 (bool, optional):` コンテンツがbase64でエンコードされているかどうか。

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

* `file_id (str):` ファイルID。<br>

* `save_file (bool, optional):` ローカルに保存するかどうか。<br>

* `save_path (str, optional):` ローカルの保存パス。

</td>

<td>

ファイルコンテンツまたは保存の確認

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

* `action (str):` `create`, `delete`, or `update`.
* `folder_id (str, optional):` フォルダID。
* `name (str, optional):` フォルダ名。
* `parent_id (str, optional):` 親フォルダID。
* `description (str, optional):` フォルダの説明。
* `recursive (bool, optional):` 再帰的な削除かどうか。

</td >

<td>

フォルダの詳細を含むステータスメッセージ

</td >

</tr >

</tbody >

</table >

### Box AIのツール

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

* `file_id (str):` ファイルID。<br>

* `prompt (str):` AIに対する質問。

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

* `file_ids (List[str]):` ファイルIDのリスト。<br>

* `prompt (str):` AIに対する指示。

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

* `hubs_id (str):` HubのID。<br>

* `prompt (str):` AIに対する質問。

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

* `file_id (str):` ファイルID。<br>

* `fields (str):` 抽出するフィールド。

</td>

<td>

JSON形式で抽出されたデータ

</td>

</tr>

</tbody>

</table>

### Box Doc Genのツール

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

* `file_id` (str): テンプレートファイルID。
* `destination_folder_id` (str): 出力フォルダID。
* `user_input_file_path` (str): JSON入力データのパス。
* `output_type` (str, optional): 出力形式。

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

`job_id (str):` ジョブの識別子

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

* `marker (str, optional):` ページ割りのマーカー。
* `limit (int, optional):` 返される最大ジョブ数。

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

* `batch_id (str):` バッチの識別子。
* `marker (str, optional):` ページ割りのマーカー。
* `limit (int, optional):` 返される最大ジョブ数。

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

`file_id (str):` 設定するファイルID

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

* `marker` (str, optional): ページ割りのマーカー。
* `limit` (int, optional): リストに取得するテンプレートの最大数。

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

`template_id (str):` テンプレートの識別子

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

`template_id (str):` テンプレートの識別子

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

* `template_id` (str): テンプレートID。
* `template_version_id` (str, optional): バージョンID。
* `marker` (str, optional): ページ割りのマーカー。
* `limit` (int, optional): 返される最大タグ数。

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

* `template_id (str):` テンプレートの識別子。
* `marker (str, optional):` ページ割りのマーカー。
* `limit (int, optional):` リストに取得する最大ジョブ数。

</td>

<td>

ジョブの詳細

</td>

</tr>

</tbody>

</table>

### Boxメタデータのツール

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
