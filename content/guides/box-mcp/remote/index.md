---
rank: 0
related_endpoints: []
related_guides: []
required_guides: []
---

# Box MCP Server

The Box MCP Server allows third-party AI systems to securely connect and interact with your content in Box. This allows third-party AI agents from platforms including Copilot Studio, Cursor, Anthropic's Claude, and OpenAI to access Box content seamlessly.

<Message type='notice'>
  Box MCP Server offered subject to Box’s Main Beta Agreement, meaning the available capabilities may change at any time. Box MCP Server is available for customers with Enterprise Plus or Enterprise Advanced plans.
</Message>

## Enable Box MCP Server in Box

Box MCP Servers are listed in the Box Admin Console within Integrations tab. Choose Box Integrations & Clients from top navigation and search for MCP in the Individual Integration Controls.

## Create unlisted Box MCP server

Instruction

## Add Box MCP Server to MPC clients

### Copilot Studio

Adding a Box MCP Server on Copilot Studio side
To add an MCP server, follow the instructions provided by Copilot Studio side. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp#add-tools-from-an-existing-mcp-connector-to-an-agent).

### Azure API Center

Adding a Box MCP Server on the Azure API Center's Enterprise Registry side
To add an MCP server in Azure API Center's Enterprise Registry, follow the instructions provided on by Azure’. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Azure API Center's Enterprise Registry](https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server).

## Available tools

Box MCP Server includes several tools your can use:

| Tool| Description|
|--------|--------|
| Who am I| Read data connected to user metadata |
| Folders| List folder content by ID|
| Box Search| Includes metadata based querying, extra fields requesting, searching folder by name |
| Box AI| Includes multi-file query, multi-file, Box Hubs query based on a default Box AI Agent. Supports also metadata extraction|
