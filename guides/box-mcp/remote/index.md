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
# リモート型Box MCPサーバー

リモート型Box MCPサーバーを使用すると、サードパーティ製のAIシステムを安全にBoxに接続してコンテンツを操作することができます。

<Message type="notice">

Box MCPサーバーは、BoxのMain Beta Agreementに従い提供されるため、利用可能な機能はいつでも変更される可能性があります。Box MCPサーバーは、Enterprise PlusまたはEnterprise Advancedプランをご利用のお客様が利用できます。

</Message>

## あらかじめ定義されたBox MCPサーバーにアクセスして管理する

1. Box管理コンソールのサイドバーにある \[**統合**] をクリックします。 
2. \[統合] ウィンドウで \[**Box統合とクライアント**] をクリックします。
3. \[**統合の個別管理**] までスクロールします。
4. **Box MCP Server for Copilot Studio (ベータ)** または**Box MCP Server for Azure API Center (ベータ)** のセクションに移動します。 
5. 選択したMCPサーバーの状態アイコンをクリックした後、有効にする状態を選択します。
6. \[保存] をクリックします。

## リストに記載されていないBox MCPサーバーを作成する

リストに記載されていない新しいBox MCPサーバーを作成するには、以下の手順に従います。

1. Box管理コンソールのサイドバーにある \[統合] をクリックします。
2. \[Box統合とクライアント] タブで \[**統合の個別管理**] までスクロールします。
3. \[**Box MCP Server (Box MCPサーバー)**] を検索します。 
4. \[**Box MCP Server (Box MCPサーバー)**] アプリケーションにカーソルを合わせ、\[**構成**] をクリックします。
5. \[**追加の構成**] セクションで \[**+ 統合資格情報を追加**] をクリックします。
6. 生成されたクライアントIDとクライアントシークレットをコピーします。
7. 外部MCPクライアントから提供されたリダイレクトURIを入力します。
8. \[Scopes (スコープ)] で \[_AIを管理する_] が選択されていることを確認します。

## MCPクライアントにBox MCPサーバーを追加する

AIエージェントプラットフォームからBoxに接続するには、以下の操作を行う必要があります。

* エンドポイントURLを追加する: `https://mcp.box.com`
* MCP名を渡す: `box-remote-mcp`
* `authorization_token`を指定する

正確な手順はAIプラットフォームによって異なる場合があります。クライアント側での設定手順については、お使いのプラットフォームのドキュメントを参照してください。参考までに、次のサンプルコードを確認してください。

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

### AnthropicのMessages API

リモート型Box MCPサーバーをAnthropicのMessages API (ベータ版) と関連付けます。[こちらのサンプルチャットボットプロジェクト](https://github.com/box-community/remote-box-mcp-anthropic)を複製すると、すぐに作業を開始できます。これにより、Anthropicモデルとの会話が可能になり、Boxのリモート型MCPサーバーが提供するツールにアクセスできます。このチャットボットは、ターミナルで実行され、コンテキストに対応した応答の会話履歴を維持し、非同期操作には`asyncio`を使用します。

### Copilot Studio

MCPサーバーを追加するには、Copilot Studio側が提供する手順に従います。詳細な手順とガイダンスは、こちらのMicrosoftの公式ドキュメントで確認できます: [Copilot StudioでのMCPサーバーの追加](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp#add-tools-from-an-existing-mcp-connector-to-an-agent)

### Azure API Center

Azure API CenterのEnterprise RegistryにMCPサーバーを追加するには、Azureが提供する手順に従います。詳細な手順とガイダンスは、こちらのMicrosoftの公式ドキュメントで確認できます: [Azure API CenterのEnterprise RegistryへのMCPサーバーの追加](https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server)

### MCPサーバーでのBox AIの機能の使用

サードパーティ製アプリケーションでBox AIを使用すると、Box MCPサーバー経由でアプリケーションにアクセスするため、最適なエクスペリエンスと質の高い結果を得ることができます。これにより、すべての機能、パフォーマンスの向上、シームレスなユーザーエクスペリエンスが実現します。

## 利用可能なツール

リモート型Box MCPサーバーには、使用できるツールがいくつかあります。

| ツール                                               | 説明                                                                               |
| ------------------------------------------------- | -------------------------------------------------------------------------------- |
| `box-remote-mcp_who_am_i`                         | 現在認証されているBoxユーザーの詳細な情報を返します。                                                     |
| `box-remote-mcp_search_folders_by_name`           | キーワードの照合を使用して、名前でBox内のフォルダを検索します。                                                |
| `box-remote-mcp_list_folder_content_by_folder_id` | フォルダ内のファイル、フォルダ、ウェブリンクのリストを取得します。                                                |
| `box-remote-mcp_search_files_keyword`             | キーワードを使用してファイルを検索します。メタデータフィルタ、ファイル拡張子によるフィルタ処理、フィールドの選択がサポートされています。             |
| `box-remote-mcp_search_files_metadata`            | SQLに似たメタデータクエリを使用してファイルを検索します。パラメータを使用した複雑なフィルタ処理、フィールドの選択、フォルダの範囲指定がサポートされています。 |
| `box-remote-mcp_ai_qa_single_file`                | Box AIを使用して1つのファイルに質問します。                                                        |
| `box-remote-mcp_ai_qa_multi_file`                 | Box AIを使用して複数のファイルに質問します。                                                        |
| `box-remote-mcp_ai_qa_hub`                        | Box AIを使用してBox Hubに質問します。                                                        |
| `box-remote-mcp_ai_extract_freeform`              | Box AIを使用して、ファイルから自由形式でメタデータを抽出します。あらかじめ定義されたテンプレート構造は必要ありません。                   |
| `box-remote-mcp_ai_extract_structured`            | Box AIを使用して、ファイルから、カスタムフィールドの定義または既存のメタデータテンプレートに基づいて構造化メタデータを抽出します。             |
