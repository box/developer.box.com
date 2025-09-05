---
rank: 0
related_endpoints: []
related_guides: []
required_guides: []
---

# Remote Box MCP server

[Remote Box MCP server](https://modelcontextprotocol.io/introduction) is a standardized way for AI Agents to connect and interact with third-party applications like Box, enabling seamless access to content and AI capabilities across platforms. The Box MCP server acts as a bridge that allows leading AI Agent platforms — such as Copilot Studio, Claude Enterprise, Mistral Le Chat — to securely query and utilize Box data and AI-powered tools without exposing raw file content. Through OAuth authorization, users can grant AI Agents controlled access to their Box accounts, enabling intelligent document handling, advanced search, and multi-file AI queries directly within these external AI environments.

## Access and manage predefined Box MCP servers

1. Click **Integrations** in the sidebar of Box Admin Console. 
2. Use *Categories* filter and choose MCP or search for a predefined Box MCP server in the search field search at the top of the window.
3. Beside the selected MCP server, click the state, then select the state you want to enable.

<ImageFrame noborder center>
  ![MCP](./img/integrations-mcp.png)
</ImageFrame>

## Create an unlisted Box MCP server

1. Click Integrations in the sidebar of Box Admin Console.
2. Search for **Box MCP server** in the search field search at the top of the window.
4. Hover on the **Box MCP server** application, then click **Configure**.
5. In the **Additional Configuration** section, click on **+ Add Integration Credentials**.
6. Copy the generated Client ID and Client Secret. 
7. Enter the Redirect URI provided by the external MCP Client. 
8. Under Scopes, ensure that *Manage AI Requests* is selected.

## Add Box MCP server on the Client Side

To connect to Box from the AI Agent platform, you need to:

* Endpoint URL: `https://mcp.box.com`
* Client ID and Client Secret: Box generates these in the Integration Credentials section of your Admin Console when configuring the Box MCP server, above.
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

### Claude Desktop

To start using the remote Box MCP server in [Claude Desktop](https://claude.ai/download), go to Claude app settings and click *Connectors*. Within this view click *Browse connectors* and choose Box. Ensure to grant Claude access to Box.

See a demo video that showcases how to connect Box MCP with Mistral Claude desktop.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/OJVjXZkPd54?si=PSiV6aKkUnL7CXoG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Copilot Studio

To add the remote Box MCP server, follow the instructions provided by the Copilot Studio side. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp#add-tools-from-an-existing-mcp-connector-to-an-agent).

### Azure API Center

To add the remote Box MCP server in Azure API Center's Enterprise Registry, follow the instructions provided by Azure. Detailed steps and guidance are available in the official Microsoft documentation: [Add an MCP Server in Azure API Center's Enterprise Registry](https://learn.microsoft.com/en-us/azure/api-center/register-discover-mcp-server).

### Anthropic's Messages API

Connect the remote Box MCP server with [Anthropic's Messages API](https://docs.anthropic.com/en/api/messages). Clone [this sample chat bot project](https://github.com/box-community/mcp-client-remote-mcp-react) to get started quickly. It allows you to have a conversation with an Anthropic model, which has access to tools provided by the Box remote MCP server.

Watch a video that features a demo project, a React based chat bot that leverages remote Box MCP.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/Rcn8p-nLJtI?si=dWsMnE6reTE-aKQw" title="Box remote MCP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Mistral AI’s Le Chat

To enable Box MCP for [Mistral AI’s Le Chat](https://chat.mistral.ai/chat), visit [connectors page](https://chat.mistral.ai/connections), click *Connect* and grant access to Box. Alternatively, directly form the chat view, click *Tools* and choose Box.

<ImageFrame noborder center>
  ![MCP](./img/mistral.gif)
</ImageFrame>

### Using Box AI Features with the MCP Server

When you use Box AI in third-party applications, you can achieve the best experience and highest quality results by accessing the applications through the Box MCP server. This ensures full functionality, improved performance, and a seamless user experience.

## Available tools

Remote Box MCP server includes several tools you can use:

| Tool | Description|
|--------|--------|
| `who_am_i`| Returns detailed information about the currently authenticated Box user.|
| `get_file_content` | Returns content of a file stored in Box |
| `search_folders_by_name`| Searches for folders within Box by name using keyword matching.|
| `list_folder_content_by_folder_id`| Lists files, folders, and web links in a folder. |
| `search_files_keyword`| Searches for files using keywords. Supports metadata filters, file extension filtering, and field selection.|
| `search_files_metadata`| Searches for files using SQL-like metadata queries. Supports complex filtering with parameters, field selection, and folder scoping.|
| `ai_qa_single_file`| Asks a question to a single file using Box AI.|
| `ai_qa_multi_file`| Asks a question to multiple files using Box AI.|
| `ai_qa_hub`| Asks a question to a Box Hub using Box AI.|
| `ai_extract_freeform`| Extracts metadata from files using Box AI in freeform format without requiring predefined template structures.|
| `ai_extract_structured`| Extracts structured metadata from files using Box AI based on either custom fields definition or an existing metadata template.|
