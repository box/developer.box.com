---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
---

# Box MCP Server

Model Context Protocol ([MCP](https://modelcontextprotocol.io/introduction)) is an open protocol that standardizes how applications provide context to LLMs.

Think of MCP as systems' plugin for apps like Cursor, Claude for Desktop, Copilot, and more. It allows you to extend the Agent’s capabilities by connecting it to various data sources and tools through standardized interfaces.

The Box MCP Server allows MCP clients to securely connect and perform actions related to content stored in Box.

There are two Box MCP Servers:

- The Box MCP Server can be enabled in Admin Console and is hosted directly in Box.
- Self-hosted Box MCP Server can be cloned and hosted on your local machine, as this version in an open source Box Developer community project. 

Check detailed guides on both Box MCP Servers, as currently the level of the implemented tools differ. Learn how to enable Box MPC Server:

<TileGrid rows="2">
  <Tile type="mcp" title="Box MCP server" href="/guides/mcp/box-mcp-server">
    The Box MCP Server can be enabled in Admin Console and is hosted directly in Box.
    <div>
    <strong style="background-color: #e1ffe7">Beta</strong>
    </div>
  </Tile>
  <Tile type="mcp" title="Self-hosted Box MCP server" href="/guides/mcp/self-hosted-box-mcp-server">
    An open source Box Developer community project. This Box MCP Sever can be cloned and hosted on your local machine.
    <div>
    <strong style="background-color: #e8e8e8">Open source</strong>
    </div>
  </Tile>
</TileGrid>