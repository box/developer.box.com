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

## Access and manage predefined Box MCP Servers

Instruction

## Create a new, unlisted Box MCP Server

Instruction

## Add Box MCP Server to MPC clients

To connect to Box from the AI Agent platform, you need:

* Endpoint URL: `https://mcp.box.com`
* Client ID and Client Secret: Box generates these in the Integration Credentials section of Box Admin Console when configuring the Box MCP Server, above.

Exact steps may vary depending on the AI platform. Please refer to your platform’s documentation for client-side setup instructions.

### Copilot Studio

Adding a Box MCP Server on Copilot Studio side
To add an MCP server, follow the instructions provided by Copilot Studio side. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp#add-tools-from-an-existing-mcp-connector-to-an-agent).

### Azure API Center

Adding a Box MCP Server on the Azure API Center's Enterprise Registry side
To add an MCP server in Azure API Center's Enterprise Registry, follow the instructions provided on by Azure’. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Azure API Center's Enterprise Registry](https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server).

### Using Box AI Features with the MCP Server

When using Box AI in third party applications, the best experience and highest quality results are achieved by accessing the applications through the Box MCP Server. This ensures full functionality, improved performance, and a seamless user experience.

## Available tools

Box MCP Server includes several tools your can use:

| Tool| Description|
|--------|--------|
| Who am I| Read data connected to user metadata |
| Folders| List folder content by ID|
| Box Search| Includes metadata based querying, extra fields requesting, searching folder by name |
| Box AI| Includes multi-file query, multi-file, Box Hubs query based on a default Box AI Agent. Supports also metadata extraction|
