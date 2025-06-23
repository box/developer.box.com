---
rank: 0
related_endpoints: []
related_guides: []
required_guides: []
---

# Remote Box MCP Server

The Remote Box MCP Server allows third-party AI systems to securely connect and interact with your content in Box.

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

Remote Box MCP Server includes several tools your can use:

| Tool| Description|
|--------|--------|
| `box-remote-mcp_who_am_i`| Returns detailed information about the currently authenticated Box user.|
| `box-remote-mcp_search_folders_by_name`| Searches for folders by name within Box using keyword matching.|
| `box-remote-mcp_list_folder_content_by_folder_id`| Lists files, folders, and web links contained in a folder. |
| `box-remote-mcp_search_files_keyword`| Searches for files using keywords and supports metadata filters, file extension filtering, and field selection.|
| `box-remote-mcp_search_files_metadata`| Searches for files using SQL-like metadata queries. Supports complex filtering with parameters, field selection, and folder scoping.|
| `box-remote-mcp_ai_qa_single_file`| Ask a question to a single file using Box AI.|
| `box-remote-mcp_ai_qa_multi_file`| Ask a question to multiple files using Box AI.|
| `box-remote-mcp_ai_qa_hub`| Ask a question to a Box Hub using Box AI.|
| `box-remote-mcp_ai_extract_freeform`| Extracts metadata from files using Box AI in freeform format without requiring predefined template structures.|
| `box-remote-mcp_ai_extract_structured`| Extracts structured metadata from files using Box AI based on either custom fields definition or an existing metadata template.|
