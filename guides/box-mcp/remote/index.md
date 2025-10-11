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
5. Enter integration name and click **Save**.
6. Expand details of the newly created entry.
7. Copy the generated **Client ID** and **Client Secret**. 
8. Enter the **Redirect URI** provided by the external MCP client. 
9. Under **Access Scopes**, enable **Content Actions**.

## クライアント側でBox MCPサーバーを追加する

Exact steps for adding Box MCP server may vary depending on the AI platform. Refer to your platform’s documentation for client-side setup instructions. Check this sample code for reference:

AIエージェントプラットフォームからBoxに接続するには、以下の操作を行う必要があります。

* Add endpoint URL: `https://mcp.box.com`
* Pass client ID and client secret. Box generates these in the Integration Credentials section of your Admin Console when configuring the Box MCP server, above.
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

To add the remote Box MCP server in Amazon Quick Suite, follow these steps:

1. In the Amazon Quick Suite console, choose **Integrations** and create new integration by choosing **Model Content Protocol**.
2. Enter a name and a description in the **Create integration** page.
3. Set the MCP server endpoint to `https://mcp.box.com`.
4. Choose Auto-publishing to make the integration immediately available for personal use.
5. Click **Next**, select the authentication method, and provide the required configuration.

* For OAuth, use the client credentials you created in the Box Developer Console when configuring the Box MCP server.
* Add token URL: `https://api.box.com/oauth2/token`.
* Add authorization URL: `https://account.box.com/api/oauth2/authorize`.
* Ensure the Amazon Quick Suite redirect URI is allow‑listed in Box Platform App settings.

6. Grant access to Box.
7. Select **Create and continue**, review the integration, then **Next**. Optionally share the integration with other users.

For details, see Amazon Quick Suite documentation: [Model Context Protocol (MCP) integration](https://docs.aws.amazon.com/quicksuite/latest/userguide/mcp-integration.html).

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

### MCPサーバーでのBox AIの機能の使用

サードパーティ製アプリケーションでBox AIを使用すると、Box MCPサーバー経由でアプリケーションにアクセスするため、最適なエクスペリエンスと質の高い結果を得ることができます。これにより、すべての機能、パフォーマンスの向上、シームレスなユーザーエクスペリエンスが実現します。

## 利用可能なツール

リモートBox MCPサーバーには、使用できるツールがいくつかあります。

| ツール                                | 説明                                                                               |
| ---------------------------------- | -------------------------------------------------------------------------------- |
| `who_am_i`                         | 現在認証されているBoxユーザーの詳細な情報を返します。                                                     |
| `get_file_content`                 | Boxに保存されているファイルのコンテンツを返します。                                                      |
| `search_folders_by_name`           | キーワードの照合を使用して、名前でBox内のフォルダを検索します。                                                |
| `list_folder_content_by_folder_id` | フォルダ内のファイル、フォルダ、ウェブリンクのリストを取得します。                                                |
| `search_files_keyword`             | キーワードを使用してファイルを検索します。メタデータフィルタ、ファイル拡張子によるフィルタ処理、フィールドの選択がサポートされています。             |
| `search_files_metadata`            | SQLに似たメタデータクエリを使用してファイルを検索します。パラメータを使用した複雑なフィルタ処理、フィールドの選択、フォルダの範囲指定がサポートされています。 |
| `ai_qa_single_file`                | Box AIを使用して単一のファイルに質問します。                                                        |
| `ai_qa_multi_file`                 | Box AIを使用して複数のファイルに質問します。                                                        |
| `ai_qa_hub`                        | Box AIを使用してBox Hubに質問します。                                                        |
| `ai_extract_freeform`              | Box AIを使用して、ファイルから自由形式でメタデータを抽出します。あらかじめ定義されたテンプレート構造は必要ありません。                   |
| `ai_extract_structured`            | Box AIを使用して、ファイルから、カスタムフィールドの定義または既存のメタデータテンプレートに基づいて構造化メタデータを抽出します。             |
