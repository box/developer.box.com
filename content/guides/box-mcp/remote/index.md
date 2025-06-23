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

1. In the left sidebar of your Admin Console, click Integrations. 
2. At the top of the Integrations window, click Box Integrations & Clients.
3. Scroll down to Individual Integration Controls.
4. Go to the Box MCP Server for Copilot Studio (Beta), or Box MCP Server for Azure API Center (Beta) sections. 
5. Beside selected MCP server, click the state, then select the state you want to enable.
6. Click Save.

## Create an unlisted Box MCP Server

To create a new, unlisted Box MCP server:

1. In the left sidebar of your Admin Console, click Integrations.
2. In the Box Integrations & Clients tab, scroll down to Individual Integration Controls.
3. Search for “Box MCP Server”. 
4. Hover on the “Box MCP Server” application, then click Configure.
5. In the "Additional Configuration" section, click on "+ Add Integration Credentials".
6. Copy the generated Client ID and Client Secret.
7. Enter the Redirect URI provided by the external MCP Client.
8. Under Scopes, ensure that Manage AI is selected.
9. See this article and add Integration credentials for customer-instance integrations.

## Add Box MCP Server to MCP clients

To connect to Box from the AI Agent platform, you need:

* Endpoint URL: `https://mcp.box.com`
* Pass MCP name: `box-remote-mcp`
* Provide `authorization_token`

Exact steps may vary depending on the AI platform. Please refer to your platform’s documentation for client-side setup instructions. Check this sample code for reference:

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

Connect Remote Box MCP Server with Anthropic's Messages API (beta). Clone [this sample chat bot project](https://github.com/box-community/remote-box-mcp-anthropic) to get started quickly. It allows you to have a conversation with an Anthropic model, which has access to tools provided by the Box remote MCP server. The chatbot runs in a terminal, maintains conversation history for context-aware responses, and uses `asyncio` for asynchronous operation.

### Copilot Studio

Adding a Box MCP Server on Copilot Studio side
To add an MCP server, follow the instructions provided by the Copilot Studio side. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp#add-tools-from-an-existing-mcp-connector-to-an-agent).

### Azure API Center

Adding a Box MCP Server on the Azure API Center's Enterprise Registry side
To add an MCP server in Azure API Center's Enterprise Registry, follow the instructions provided by Azure’. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Azure API Center's Enterprise Registry](https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server).

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
