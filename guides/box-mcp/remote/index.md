---
rank: 0
related_endpoints: []
related_guides: []
required_guides: []
category_id: box-mcp
subcategory_id: box-mcp/remote
is_index: true
id: box-mcp/remote
type: guide
total_steps: 0
sibling_id: box-mcp
parent_id: box-mcp
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-mcp/remote/index.md
fullyTranslated: true
---
# リモートBox MCPサーバー

[リモートBox MCPサーバー](https://modelcontextprotocol.io/introduction)は、AIエージェントがBoxなどのサードパーティ製アプリケーションに接続して操作するための標準的な方法で、プラットフォーム間でのコンテンツやAI機能へのシームレスなアクセスを可能にします。Box MCPサーバーは、主要なAIエージェントプラットフォーム (Copilot Studio、Claude Enterprise、Mistral Le Chatなど) が未加工のファイルコンテンツを公開することなく、BoxのデータやAIを活用したツールを安全に照会および利用できるようにする橋渡しの役割を果たします。OAuth承認により、ユーザーは、自身のBoxアカウントへの制限付きアクセスをAIエージェントに許可することができるため、このような外部のAI環境内で直接、インテリジェントなドキュメント処理、高度な検索、複数ファイルのAIクエリが可能になります。

## あらかじめ定義されたBox MCPサーバーにアクセスして管理する

1. Box管理コンソールのサイドバーにある \[**統合**] をクリックします。 
2. \[_カテゴリ_] フィルタを使用して \[MCP] を選択するか、ウィンドウ上部にある検索フィールドであらかじめ定義されたBox MCPサーバーを検索します。
3. 選択したMCPサーバーの横にある状態をクリックし、有効にする状態を選択します。

<ImageFrame noborder center>

![MCP](./img/integrations-mcp.png)

</ImageFrame>

## リストに記載されていないBox MCPサーバーを作成する

1. Box管理コンソールのサイドバーにある \[**統合**] をクリックします。
2. ウィンドウ上部にある検索フィールドで**Box MCP Server**を検索します。
3. \[**Box MCP Server**] アプリケーションにカーソルを合わせ、\[**構成**] をクリックします。
4. \[**追加の構成**] セクションで \[**+ 統合資格情報を追加**] をクリックします。
5. 統合名を入力し、\[**保存**] をクリックします。
6. 新しく作成したエントリの詳細を展開します。
7. 生成された**クライアントID**と**クライアントシークレット**をコピーします。 
8. 外部MCPクライアントから提供された**リダイレクトURI**を入力します。 
9. \[**アクセススコープ**] で \[**コンテンツ操作**] を有効にします。

## クライアント側でBox MCPサーバーを追加する

Box MCPサーバーを追加するための正確な手順はAIプラットフォームによって異なる場合があります。クライアント側での設定手順については、お使いのプラットフォームのドキュメントを参照してください。参考までに、次のサンプルコードを確認してください。

AIエージェントプラットフォームからBoxに接続するには、以下の操作を行う必要があります。

* エンドポイントURLを追加する: `https://mcp.box.com`
* クライアントIDとクライアントシークレットを渡す。これらは、上記のBox MCPサーバーの構成時に管理コンソールの統合資格情報のセクションで生成されます。
* MCP名を渡す: `box-remote-mcp`
* `authorization_token`を指定する

```python
response = await client.beta.messages.create(
    model="claude-3-opus-20240229",  # Or your preferred model
    max_tokens=4096,
    messages=conversation_history,
    mcp_servers=[
        {
            "type": "url",
            "url": "https://mcp.box.com",
            "name": "box-remote-mcp",
            "authorization_token": BEARER_TOKEN,
        }
    ],
    betas=["mcp-client-2025-04-04"]
)

```

### Claude

[Claude](https://claude.ai/directory)でリモートBox MCPサーバーの使用を開始するには、Claudeアプリの設定に移動し、\[_Connectors (コネクタ)_] をクリックします。このビューで \[_Browse connectors (コネクタを参照)_] をクリックして \[Box] を選択し、ClaudeにBoxへのアクセスを許可します。

Box MCPをClaudeデスクトップアプリと関連付ける方法を紹介するデモ動画をご確認ください。

<iframe width="100%" height="500" src="https://www.youtube.com/embed/OJVjXZkPd54?si=PSiV6aKkUnL7CXoG" title="YouTube動画プレイヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe>

### Copilot Studio

リモートBox MCPサーバーを追加するには、Copilot Studio側が提供する手順に従います。詳細な手順とガイダンスは、こちらのMicrosoftの公式ドキュメントで確認できます: [Add an MCP Server in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp#add-tools-from-an-existing-mcp-connector-to-an-agent)

### Azure API Center

Azure API CenterのEnterprise RegistryにリモートBox MCPサーバーを追加するには、Azureが提供する手順に従います。詳細な手順とガイダンスは、こちらのMicrosoftの公式ドキュメントで確認できます: [Add an MCP Server in Azure API Center's Enterprise Registry](https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server)

### Amazon Quick Suite

Amazon Quick SuiteでリモートBox MCPサーバーを追加するには、以下の手順に従います。

1. Amazon Quick Suiteコンソールで、\[**Integrations (統合)**] を選択し、\[**Model Content Protocol**] を選択して新しい統合を作成します。
2. \[**Create integration (統合の作成)**] ページで、名前と説明を入力します。
3. MCPサーバーのエンドポイントを`https://mcp.box.com`に設定します。
4. 自動公開を選択して、個人利用向けに統合をすぐに提供します。
5. \[**Next (次へ)**] をクリックし、認証方法を選択して、必要な構成を指定します。

* OAuthの場合、Box MCPサーバーの構成時にBox開発者コンソールで作成したクライアント資格情報を使用します。
* トークンURLを追加します: `https://api.box.com/oauth2/token`。
* 承認URLを追加します: `https://account.box.com/api/oauth2/authorize`。
* Amazon Quick SuiteのリダイレクトURIがBox Platformアプリの設定で許可リストに登録されていることを確認します。

6. Boxへのアクセスを許可します。
7. \[**Create and continue (作成して続行)**] を選択し、統合を確認して、\[**Next (次へ)**] を選択します。必要に応じて、統合を他のユーザーと共有します。

詳細については、Amazon Quick Suiteドキュメントの[Model Context Protocol (MCP) integration](https://docs.aws.amazon.com/quicksuite/latest/userguide/mcp-integration.html) (英語) を参照してください。

<iframe width="100%" height="500" src="https://www.youtube.com/embed/S2kns2tYJjA?si=AWuXpvrjJY0J0qBb" title="Box remote MCP with Amazon Quick Suite" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe>

### AnthropicのMessages API

リモートBox MCPサーバーを[AnthropicのMessages API](https://docs.anthropic.com/en/api/messages)と関連付けます。[こちらのサンプルチャットボットプロジェクト](https://github.com/box-community/mcp-client-remote-mcp-react)を複製すると、すぐに作業を開始できます。これにより、Anthropicモデルとの会話が可能になり、BoxのリモートMCPサーバーが提供するツールにアクセスできます。

リモートBox MCPを利用しているReactベースのチャットボットのデモプロジェクトを紹介する動画をご覧ください。

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Rcn8p-nLJtI?si=dWsMnE6reTE-aKQw" title="BoxのリモートMCP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe>

### Mistral AIのLe Chat

[Mistral AIのLe Chat](https://chat.mistral.ai/chat)に対してBox MCPを有効にするには、[コネクタのページ](https://chat.mistral.ai/connections)にアクセスし、\[_Connect (接続)_] をクリックして、Boxへのアクセスを許可します。または、チャットビューから直接、\[_Tools (ツール)_] をクリックして \[Box] を選択します。

<ImageFrame noborder center>

![MCP](./img/mistral.gif)

</ImageFrame>

### GitHub Copilot

To set up the Box MCP server with GitHub Copilot, go to the [overview page](https://github.com/mcp/box/mcp-server-box-remote) and click _Install MCP server_. You'll be redirected to the VS Code editor. Click _Install_ and complete OAuth to grant access to Box.

You may need to manually enter your Client ID and Client Secret. When registering your OAuth application, make sure to include following redirect URIs:

```curl
http://127.0.0.1:33418
https://vscode.dev/redirect

```

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Y1a16jhCVPc?si=MOutZC3_tGtpcJ7c" title="Box remote MCP with Github Copilot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe>

### MCPサーバーでのBox AIの機能の使用

サードパーティ製アプリケーションでBox AIを使用すると、Box MCPサーバー経由でアプリケーションにアクセスするため、最適なエクスペリエンスと質の高い結果を得ることができます。これにより、すべての機能、パフォーマンスの向上、シームレスなユーザーエクスペリエンスが実現します。

## 利用可能なツール

The remote Box MCP server provides access to a comprehensive set of tools that enable AI agents to interact with Box content and features. These tools are organized by functional category to help you quickly identify the right capabilities for your use case.

### User and authentication

Manage user authentication and retrieve information about the authenticated user.

| ツール        | 説明                           |
| ---------- | ---------------------------- |
| `who_am_i` | 現在認証されているBoxユーザーの詳細な情報を返します。 |

### Content Management

Manage files and folders, perform searches, and handle content operations across your Box environment.

#### ファイル操作

| ツール                   | 説明                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| `get_file_content`    | Returns the content of a file stored in Box.                                                        |
| `get_file_details`    | Gets comprehensive file information from Box including metadata, permissions, and version details.  |
| `upload_file`         | Uploads a new file to Box.                                                                          |
| `upload_file_version` | Uploads a new file version by providing the entire file contents to update an existing file in Box. |

#### Folder operations

| ツール                                | 説明                                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `create_folder`                    | Creates a new folder in Box.                                                                            |
| `get_folder_details`               | Retrieves comprehensive folder information including metadata, permissions, and collaboration settings. |
| `list_folder_content_by_folder_id` | フォルダ内のファイル、フォルダ、ウェブリンクのリストを取得します。                                                                       |

#### 検索

| ツール                      | 説明                                                                   |
| ------------------------ | -------------------------------------------------------------------- |
| `search_files_keyword`   | キーワードを使用してファイルを検索します。メタデータフィルタ、ファイル拡張子によるフィルタ処理、フィールドの選択がサポートされています。 |
| `search_folders_by_name` | キーワードの照合を使用して、名前でBox内のフォルダを検索します。                                    |

### Box AI

Use AI-powered tools to ask questions, extract insights, and analyze content across files and hubs.

| ツール                     | 説明                                                                   |
| ----------------------- | -------------------------------------------------------------------- |
| `ai_qa_hub`             | Box AIを使用してBox Hubに質問します。                                            |
| `ai_qa_single_file`     | Box AIを使用して単一のファイルに質問します。                                            |
| `ai_qa_multi_file`      | Box AIを使用して複数のファイルに質問します。                                            |
| `ai_extract_freeform`   | Box AIを使用して、ファイルから自由形式でメタデータを抽出します。あらかじめ定義されたテンプレート構造は必要ありません。       |
| `ai_extract_structured` | Box AIを使用して、ファイルから、カスタムフィールドの定義または既存のメタデータテンプレートに基づいて構造化メタデータを抽出します。 |

### コラボレーション

Enable team collaboration through comments, shared links, and collaboration management tools.

| ツール          | 説明                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------ |
| `list_tasks` | Lists all tasks associated with a specific file, including status, message, and due dates. |

### Hub

Create and manage Box Hubs for organizing collaborative content and resources around specific topics or projects.

| ツール               | 説明                                                             |
| ----------------- | -------------------------------------------------------------- |
| `get_hub_details` | Retrieves detailed information about a specific hub.           |
| `get_hub_items`   | Gets items (files and folders) associated with a specific hub. |
| `list_hubs`       | Lists all hubs accessible to the authenticated user.           |
