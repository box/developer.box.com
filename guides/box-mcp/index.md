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

Box MCP server allows third party AI agents from platforms like Anthropic's Claude, Microsoft Copilot Studio, and Mistral Le Chat to access Box content seamlessly. It extends the agent’s capabilities by allowing it to perform actions related to content stored in Box.

<ImageFrame noborder center>

![MCP](./img/mcp.png)

</ImageFrame>

There are two types of Box MCP servers:

* remote Box MCP server which you can create or enable in the Box Admin Console. It is hosted directly in Box.
  <!--alex ignore-->

* self-hosted Box MCP server which you can clone and host on your local machine, as this version in an open source Box Developer community project.
  <!--alex enable-->

Check the detailed guides on both types of Box MCP servers, as the level of the implemented tools differs. Learn how to enable Box MCP server:

<TileGrid rows="2">

<Tile type="mcp" title="Remote Box MCP server" href="/guides/box-mcp/remote">

Enable the remote Box MCP server in the Admin Console. It is hosted directly in Box.

<div>

<strong style="background-color: #e1ffe7">

新着

</strong>

</div>

</Tile>

<Tile type="mcp" title="Self-hosted Box MCP server" href="/guides/box-mcp/self-hosted">

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
