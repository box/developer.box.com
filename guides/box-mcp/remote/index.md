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
---
# Remote Box MCP Server

The remote Box MCP Server allows third party AI systems to securely connect and interact with your content in Box.

<Message type='notice'>

Box MCP Server offered subject to Box’s Main Beta Agreement, meaning the available capabilities may change at any time. Box MCP Server is available for customers with Enterprise Plus or Enterprise Advanced plans.

</Message>

## Access and manage predefined Box MCP Servers

1. Click **Integrations** in the sidebar of Box Admin Console. 
2. Click **Box Integrations & Clients** in the Integrations window.
3. Scroll down to **Individual Integration Controls**.
4. Search for predefined Box MCP Server, for example the **Box MCP Server for Copilot Studio (Beta)**. 
5. Hover on the chosen integration, then click **Configure**.
6. Click Save.

## Create an unlisted Box MCP Server

To create a new, unlisted Box MCP Server:

1. Click Integrations in the sidebar of Box Admin Console.
2. Scroll down to **Individual Integration Controls** in the Box Integrations & Clients tab.
3. Search for **Box MCP Server**. 
4. Hover on the **Box MCP Server** application, then click **Configure**.
5. In the **Additional Configuration** section, click on **+ Add Integration Credentials**.
6. Enter the Redirect URI provided by the external MCP Client. 
7. Copy the generated Client ID and Client Secret.
8. Under Scopes, ensure that *Manage AI Requests* is selected.

## Add Box MCP Server to MCP clients

To connect to Box from the AI Agent platform, you need to:

* Add an endpoint URL: `https://mcp.box.com`
* Pass an MCP name: `box-remote-mcp`
* Provide an `authorization_token`

Exact steps may vary depending on the AI platform. Refer to your platform’s documentation for client-side setup instructions. Check this sample code for reference:

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

### Anthropic's Messages API

Connect the remote Box MCP Server with Anthropic's Messages API (beta). Clone [this sample chat bot project](https://github.com/box-community/remote-box-mcp-anthropic) to get started quickly. It allows you to have a conversation with an Anthropic model, which has access to tools provided by the Box remote MCP server. The chatbot runs in a terminal, maintains conversation history for context-aware responses, and uses `asyncio` for asynchronous operation.

### Copilot Studio

To add an MCP server, follow the instructions provided by the Copilot Studio side. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp#add-tools-from-an-existing-mcp-connector-to-an-agent).

### Azure API Center

To add an MCP server in Azure API Center's Enterprise Registry, follow the instructions provided by Azure. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Azure API Center's Enterprise Registry](https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server).

### Using Box AI Features with the MCP Server

When you use Box AI in third party applications, you can achieve the best experience and highest quality results by accessing the applications through the Box MCP Server. This ensures full functionality, improved performance, and a seamless user experience.

## Available tools

Remote Box MCP Server includes several tools you can use:

| Tool| Description|
|--------|--------|
| `box-remote-mcp_who_am_i`| Returns detailed information about the currently authenticated Box user.|
| `box-remote-mcp_search_folders_by_name`| Searches for folders within Box by name using keyword matching.|
| `box-remote-mcp_list_folder_content_by_folder_id`| Lists files, folders, and web links in a folder. |
| `box-remote-mcp_search_files_keyword`| Searches for files using keywords. Supports metadata filters, file extension filtering, and field selection.|
| `box-remote-mcp_search_files_metadata`| Searches for files using SQL-like metadata queries. Supports complex filtering with parameters, field selection, and folder scoping.|
| `box-remote-mcp_ai_qa_single_file`| Asks a question to a single file using Box AI.|
| `box-remote-mcp_ai_qa_multi_file`| Asks a question to multiple files using Box AI.|
| `box-remote-mcp_ai_qa_hub`| Asks a question to a Box Hub using Box AI.|
| `box-remote-mcp_ai_extract_freeform`| Extracts metadata from files using Box AI in freeform format without requiring predefined template structures.|
| `box-remote-mcp_ai_extract_structured`| Extracts structured metadata from files using Box AI based on either custom fields definition or an existing metadata template.|