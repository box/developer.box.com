---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
category_id: box-mcp
subcategory_id: null
is_index: true
id: box-mcp
type: guide
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-mcp/index.md
fullyTranslated: true
---
# Box MCPサーバー

Model Context Protocol ([MCP](https://modelcontextprotocol.io/introduction)) は、アプリケーションがLLMにコンテキストを提供する方法を標準化するオープンプロトコルです。MCPサーバーにより、高度な統合をよりシンプルかつ時間をかけずに構築できるようになります。

Box MCPサーバーを使用すると、Copilot Studio、Cursor、Claude for Desktopなどのプラットフォームが提供するサードパーティ製AIエージェントは、Boxのコンテンツにシームレスにアクセスできるようになります。これは、Boxに保存されているコンテンツに関連した操作を実行できるようにすることで、エージェントの機能を拡張します。

Box MCPサーバーには2種類あります。

* リモートBox MCPサーバー: Box管理コンソールで作成または有効化でき、Boxで直接ホストされています。
  <!--alex ignore-->

* セルフホストBox MCPサーバー: このバージョンはオープンソースのBox Developer Communityプロジェクトであるため、ローカルマシンで複製してホストできます。
  <!--alex enable-->

実装されるツールのレベルが異なるため、2種類のBox MCPサーバーに関する詳細なガイドを参照し、Box MCPサーバーを有効化する方法を確認してください。

<TileGrid rows="2">

<Tile type="mcp" title="リモートBox MCPサーバー" href="/guides/box-mcp/remote">

管理コンソールでリモートBox MCPサーバーを有効にします。これはBoxで直接ホストされています。

</Tile>

<Tile type="mcp" title="セルフホストBox MCPサーバー" href="/guides/box-mcp/self-hosted">

オープンソースのBox Developer Communityプロジェクト。このBox MCPサーバーを複製し、ローカルマシンでホストすることができます。

<div>

<strong style="background-color: #e8e8e8">

オープンソース

</strong>

</div>

</Tile>

</TileGrid>

Box CTOのBen Kusとのインタビューを視聴し、MCPによってAIエージェントがどのようにプラットフォーム間で動的に動作し、開発の手間を軽減しているかをご覧ください。

<iframe width="100%" height="500" src="https://www.youtube.com/embed/u_y5_y9JGg4?si=PY2__LklwsGWwiAD" title="MCP: 企業のためにAIを実用化するためのAPI標準 | Box CTOのBen KusによるBox AI Explainer Series EP4" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe>
