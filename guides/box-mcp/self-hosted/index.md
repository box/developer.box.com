---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
category_id: box-mcp
subcategory_id: box-mcp/self-hosted
is_index: true
id: box-mcp/self-hosted
type: guide
total_steps: 0
sibling_id: box-mcp
parent_id: box-mcp
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-mcp/self-hosted/index.md
---
# Self-hosted Box MCP server

The [Self-hosted Box MCP server](https://github.com/box-community/mcp-server-box.git) is a Python project that integrates with the Box API to perform various operations such as file search, text extraction, AI-based querying, and data extraction. It leverages the Box Python Next Gen SDK library and provides a set of tools to interact with Box files and folders.

## Installation

### Prerequisites

- Python `3.13` or higher
- Box Platform app credentials (Client ID, Client Secret)

Follow the steps from this section to set up the self-hosted Box MCP server.

1. Clone the repository:

```sh
git clone https://github.com/box-community/mcp-server-box.git
cd mcp-server-box
```

2. Install `uv` if it's not installed on your machine:

<Tabs>

<Tab title='MacOS/Linux'>

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
```

</Tab>

<Tab title='Windows'>

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

</Tab>

</Tabs>

Restart your terminal afterwards to ensure that the `uv` command gets picked up.

3. Create and set up our project:

<Tabs>

<Tab title='MacOS/Linux'>

```sh
# Create virtual environment and activate it
uv venv
source .venv/bin/activate

# Lock the dependencies
uv lock
```

</Tab>

<Tab title='Windows'>

```sh
# Create virtual environment and activate it
uv venv
.venv\Scripts\activate

# Lock the dependencies
uv lock
```

</Tab>

</Tabs>

4. Create a `.env` file in the root directory and fill your Box Platform app credentials:

```.env
BOX_CLIENT_ID=your_client_id
BOX_CLIENT_SECRET=your_client_secret
```

You can also watch a video tutorial and see example usage of Box MCP tools.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/h109CMywlVQ?si=0EIRYyczpxfuidVU" title="Box self-hosted MCP Server" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

</iframe>

## Running Box MCP server locally

To start the Box MCP server, run the following command:

```sh
uv --directory /Users/USER_NAME/PATH_TO_PROJECT/mcp-server-box run src/mcp_server_box.py
```

Update the path so it reflects your local setup.

### Use Cursor as the Box MCP client

Prerequisites:

- Download [Cursor desktop app](https://www.cursor.com/)

Follow these instructions to start using Box MCP Sever with Cursor:

1. Open the Cursor app.
2. Click the cog icon to open settings.
3. Select `MCP` within the Cursor Settings tab.
4. Click the `Add new global MCP server` button. This opens the `mcp.json` file.
5. Update the values with your local setup and paste the following JSON:

```json
{
  "mcpServers": {
    "box": {
      "command": "uv",
      "args": [
        "--directory",
        "/Users/USER_NAME/PATH_TO_PROJECT/mcp-server-box",
        "run",
        "src/mcp_server_box.py"
      ]
    }
  }
}
```

6. Save and close the `mcp.json` file.
7. Restart Cursor if necessary.
8. Use the `box_authorize_app_tool` tool to start using Box MCP.

### Use Claude as the Box MCP client

Prerequisites:

- Download [Claude for Desktop](https://claude.ai/download) client
- Optionally, set up [`code`](https://code.visualstudio.com/docs/setup/mac#_configure-the-path-with-vs-code) command for VS Code

Follow these steps to set up Box MCP in Claude for Desktop:

1. Edit your `claude_desktop_config.json`.

You can run this command in your terminal:

```sh
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

Alternatively, in the main Claude navigation choose `Settings`. Select the Developers tab and click `Edit Config`. This opens a folder window containing `claude_desktop_config.json`.

2. Add the configuration:

```json
{
  "mcpServers": {
      "mcp-server-box": {
          "command": "uv",
          "args": [
              "--directory",
              "/Users/Users/USER_NAME/PATH_TO_PROJECT/mcp-server-box",
              "run",
              "src/mcp_server_box.py"
          ]
      }
  }
}
```

3. Restart Claude desktop app.
4. Authenticate the Box MCP server using `box_authorize_app_tool` tool.

## Available tools

### Authentication and Authorization

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`get_box_client`

</td>

<td>

Helper function to get Box client from context

</td>

<td>

- `ctx (Context)`: Request context.

</td>

<td>

Box client instance

</td>

</tr>

<tr>

<td>

`box_who_am_i`

</td>

<td>

Get the current user's information

</td>

<td>

- `ctx (Context)`: Request context.

</td>

<td>

User information string

</td>

</tr>

<tr>

<td>

`box_authorize_app_tool`

</td>

<td>

Authorize the Box application

</td>

<td>

None

</td>

<td>

Authorization status message

</td>

</tr>

</tbody>

</table>

### Search and Navigation

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_search_tool`

</td>

<td>

Search for files in Box

</td>

<td>

- `query (str)`: Search query.
- `file_extensions (List[str], optional)`: Filter by extensions.
- `where_to_look_for_query (List[str], optional)`: Locations to search.
- `ancestor_folder_ids (List[str], optional)`: Folder IDs to limit the search.

</td>

<td>

Newline-separated list of file names and IDs

</td>

</tr>

<tr>

<td>

`box_search_folder_by_name`

</code>

</td>

<td>

Locate a folder by name

</td>

<td>

`folder_name (str)`: Name of the folder

</td>

<td>

Folder ID and information

</td>

</tr>

<tr>

<td>

`box_list_folder_content_by_folder_id`

</td>

<td>

List folder contents

</td>

<td>

<ul>

<li>

`folder_id (str)`: ID of the folder.

</li>

<li>

`is_recursive (bool)`: Whether to list recursively.

</li>

</ul>

</td>

<td>

Folder content in JSON format

</td>

</tr>

</tbody>

</table>

### File Operations

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_read_tool`

</td>

<td>

Read the text content of a Box file

</td>

<td>

- `file_id (str)`: ID of the file to read.

</td>

<td>

File content

</td>

</tr>

<tr>

<td>

`box_upload_file_from_path_tool`

</td>

<td>

Upload a file from local path

</td>

<td>

- `file_path (str)`: Local file path.<br>

- `folder_id (str, optional)`: Destination folder ID.<br>

- `new_file_name (str, optional)`: New file name.

</td>

<td>

File details or error message

</td>

</tr>

<tr>

<td>

`box_upload_file_from_content_tool`

</td>

<td>

Upload content as a file

</td>

<td>

- `content (str|bytes)`: Content to upload.<br>

- `file_name (str)`: File name.<br>

- `folder_id (str, optional)`: Destination folder ID.<br>

- `is_base64 (bool, optional)`: If content is base64 encoded.

</td>

<td>

Upload success message

</td>

</tr>

<tr>

<td>

`box_download_file_tool`

</td>

<td>

Download a file from Box

</td>

<td>

- `file_id (str)`: File ID.<br>

- `save_file (bool, optional)`: Whether to save locally.<br>

- `save_path (str, optional)`: Local save path.

</td>

<td>

File content or save confirmation

</td>

</tr>

<tr>

<td>

`get_file_content`

</td>

<td>

Extract text content from a file

</td>

<td>

- `file_id (str)`: File ID.<br>

</td>

<td>

Text file content

</td>

</tr>

</tbody>

</table>

### Folder Management

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr valign="top">

<td>

`box_manage_folder_tool`

</td>

<td>

Create, update, or delete folders

</td>

<td style="white-space: pre-wrap;">

- `action (str)`: `create`, `delete`, or `update`.
- `folder_id (str, optional)`: Folder ID.
- `name (str, optional)`: Folder name.
- `parent_id (str, optional)`: Parent folder ID.
- `description (str, optional)`: Folder description.
- `recursive (bool, optional)`: For recursive delete.

</td >

<td>

Status message with folder details

</td >

</tr >

</tbody >

</table>

### Box AI

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_ask_ai_tool`

</td>

<td>

Ask Box AI about a file

</td>

<td>

- `file_id (str)`: File ID.<br>

- `prompt (str)`: Question for the AI.

</td>

<td>

AI response

</td>

</tr>

<tr>

<td>

`box_ask_ai_tool_multi_file`

</td>

<td>

Query Box AI using multiple files

</td>

<td>

- `file_ids (List[str])`: List of file IDs.<br>

- `prompt (str)`: Instruction for AI.

</td>

<td>

AI-generated answer

</td>

</tr>

<tr>

<td>

`box_hubs_ask_ai_tool`

</td>

<td>

Ask Box AI about a hub

</td>

<td>

- `hubs_id (str)`: ID of the hub.<br>

- `prompt (str)`: Question for the AI.

</td>

<td>

AI response

</td>

</tr>

<tr>

<td>

`box_ai_extract_data`

</td>

<td>

Extract data from a file using AI

</td>

<td>

- `file_id (str)`: File ID.<br>

- `fields (str)`: Fields to extract.

</td>

<td>

Extracted data in JSON format

</td>

</tr>

</tbody>

</table>

### Collaborations

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_collaboration_list_by_file_tool`

</td>

<td>

List all collaborations on a specific file

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `file_id (str)`: ID of the Box file.

</td>

<td>

List of collaborations in JSON format

</td>

</tr>

<tr>

<td>

`box_collaboration_list_by_folder_tool`

</td>

<td>

List all collaborations on a specific folder

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `folder_id (str)`: ID of the Box folder.

</td>

<td>

List of collaborations in JSON format

</td>

</tr>

<tr>

<td>

`box_collaboration_delete_tool`

</td>

<td>

Delete a specific collaboration

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `collaboration_id (str)`: ID of the collaboration.

</td>

<td>

Deletion confirmation

</td>

</tr>

<tr>

<td>

`box_collaboration_file_group_by_group_id_tool`

</td>

<td>

Add a group as a collaborator to a file

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `file_id (str)`: ID of the Box file.<br>

- `group_id (str)`: ID of the group.<br>

- `role (str, optional)`: Collaboration role (default: "editor").

</td>

<td>

Created collaboration details

</td>

</tr>

</tbody>

</table>

### Groups

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_groups_search_tool`

</td>

<td>

Search for groups by name (partial match)

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `query (str)`: Search query.

</td>

<td>

List of matching groups in JSON format

</td>

</tr>

<tr>

<td>

`box_groups_list_members_tool`

</td>

<td>

List all members of a specific group

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `group_id (str)`: ID of the group.

</td>

<td>

List of group members in JSON format

</td>

</tr>

<tr>

<td>

`box_groups_list_by_user_tool`

</td>

<td>

List all groups that a specific user belongs to

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `user_id (str)`: ID of the user.

</td>

<td>

List of groups in JSON format

</td>

</tr>

</tbody>

</table>

### Users

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_users_list_tool`

</td>

<td>

List all users in the Box account

</td>

<td>

- `ctx (Context)`: Request context.

</td>

<td>

List of users in JSON format

</td>

</tr>

<tr>

<td>

`box_users_locate_by_name_tool`

</td>

<td>

Locate a user by their name (exact match)

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `name (str)`: Name of the user.

</td>

<td>

User details in JSON format

</td>

</tr>

<tr>

<td>

`box_users_locate_by_email_tool`

</td>

<td>

Locate a user by their email address (exact match)

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `email (str)`: Email address.

</td>

<td>

User details in JSON format

</td>

</tr>

<tr>

<td>

`box_users_search_by_name_or_email_tool`

</td>

<td>

Search for users by name or email (partial match)

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `query (str)`: Search query.

</td>

<td>

List of matching users in JSON format

</td>

</tr>

</tbody>

</table>

### Box Shared Links

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_shared_link_file_get_tool`

</td>

<td>

Get a shared link for a file

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `file_id (str)`: ID of the file.

</td>

<td>

Shared link details in JSON format

</td>

</tr>

<tr>

<td>

`box_shared_link_file_create_or_update_tool`

</td>

<td>

Create or update a shared link for a file

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `file_id (str)`: ID of the file.<br>

- `access (str, optional)`: Access level.<br>

- `can_download (bool, optional)`: Can download.<br>

- `can_preview (bool, optional)`: Can preview.<br>

- `can_edit (bool, optional)`: Can edit.<br>

- `password (str, optional)`: Password.<br>

- `vanity_name (str, optional)`: Vanity name.<br>

- `unshared_at (str, optional)`: Expiration date.

</td>

<td>

Created/updated shared link details in JSON format

</td>

</tr>

</tbody>

</table>

### Box Tools Web Link

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_web_link_create_tool`

</td>

<td>

Create a Box web link

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `url (str)`: URL of the web link.<br>

- `parent_folder_id (str)`: Parent folder ID.<br>

- `name (str, optional)`: Name of the web link.<br>

- `description (str, optional)`: Description.

</td>

<td>

Created web link details in JSON format

</td>

</tr>

<tr>

<td>

`box_web_link_get_by_id_tool`

</td>

<td>

Get a Box web link by its ID

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `web_link_id (str)`: ID of the web link.

</td>

<td>

Web link details in JSON format

</td>

</tr>

<tr>

<td>

`box_web_link_update_by_id_tool`

</td>

<td>

Update a Box web link by its ID

</td>

<td>

- `ctx (Context)`: Request context.<br>

- `web_link_id (str)`: ID of the web link.<br>

- `url (str)`: New URL.

</td>

<td>

Updated web link details in JSON format

</td>

</tr>

</tbody>

</table>

### Box Doc Gen

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_docgen_create_batch_tool`

</td>

<td>

Generate documents using a template

</td>

<td>

- `file_id (str)`: Template file ID.
- `destination_folder_id (str)`: Output folder ID.
- `user_input_file_path (str)`: JSON input data path.
- `output_type (str, optional)`: Output format.

</td>

<td>

Batch generation result

</td>

</tr>

<tr>

<td>

`box_docgen_get_job_tool`

</td>

<td>

Fetch a Doc Gen job by ID

</td>

<td>

`job_id (str)`: Job identifier

</td>

<td>

Job details in JSON

</td>

</tr>

<tr>

<td>

`box_docgen_list_jobs_tool`

</td>

<td>

List all Doc Gen jobs

</td>

<td>

- `marker (str, optional)`: Pagination marker.
- `limit (int, optional)`: Max jobs to return.

</td>

<td>

List of jobs in JSON

</td>

</tr>

<tr>

<td>

`box_docgen_list_jobs_by_batch_tool`

</td>

<td>

List jobs in a specific batch

</td>

<td>

- `batch_id (str)`: Batch identifier.
- `marker (str, optional)`: Pagination marker.
- `limit (int, optional)`: Max jobs to return.

</td>

<td>

Batch jobs details

</td>

</tr>

<tr>

<td>

`box_docgen_template_create_tool`

</td>

<td>

Mark a file as a template

</td>

<td>

`file_id (str)`: File ID to mark

</td>

<td>

Template details

</td>

</tr>

<tr>

<td>

`box_docgen_template_list_tool`

</td>

<td>

List all available templates

</td>

<td>

- `marker (str, optional)`: Pagination marker.
- `limit (int, optional)`: Max templates to list.

</td>

<td>

List of templates

</td>

</tr>

<tr>

<td>

`box_docgen_template_delete_tool`

</td>

<td>

Remove template marking

</td>

<td>

`template_id (str)`: Template identifier

</td>

<td>

Deletion confirmation

</td>

</tr>

<tr>

<td>

`box_docgen_template_get_by_id_tool`

</td>

<td>

Get template details

</td>

<td>

`template_id (str)`: Template identifier

</td>

<td>

Template details

</td>

</tr>

<tr>

<td>

`box_docgen_template_list_tags_tool`

</td>

<td>

List template tags

</td>

<td>

- `template_id (str)`: Template ID.
- `template_version_id (str, optional)`: Version ID.
- `marker (str, optional)`: Pagination marker.
- `limit (int, optional)`: Max tags to return.

</td>

<td>

List of tags

</td>

</tr>

<tr>

<td>

`box_docgen_template_list_jobs_tool`

</td>

<td>

List jobs using a template

</td>

<td>

- `template_id (str)`: Template identifier.
- `marker (str, optional)`: Pagination marker.
- `limit (int, optional)`: Max jobs to list.

</td>

<td>

Job details

</td>

</tr>

</tbody>

</table>

### Box Metadata

<table>

<thead>

<tr>

<th>

Tool

</th>

<th>

Description

</th>

<th>

Parameters

</th>

<th>

Returns

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`box_metadata_template_get_by_key_tool`

</td>

<td>

Retrieves a metadata template by its key.

</td>

<td>

`template_name (str)`: The key of the metadata template to retrieve.

</td>

<td>

The metadata template associated with the provided key.

</td>

</tr>

<tr>

<td>

`box_metadata_template_get_by_name_tool`

</td>

<td>

Retrieve a metadata template by its name.

</td>

<td>

`template_name (str)`: The name of the metadata template to retrieve.

</td>

<td>

The metadata template associated with the provided name.

</td>

</tr>

<tr>

<td>

`box_metadata_template_create_tool`

</td>

<td>

Create a metadata template.

</td>

<td>

- `ctx (Context)`: The context object
- `display_name (str)`: The display name of the metadata template
- `fields (List[Dict[str, Any]])`: A list of field definitions with type, key, displayName, description, hidden, and options (for enum/multiSelect)
- `template_key (Optional[str])`: An optional key for the metadata template

</td>

<td>

The created metadata template.

</td>

</tr>

<tr>

<td>

`box_metadata_set_instance_on_file_tool`

</td>

<td>

Set a metadata instance on a file.

</td>

<td>

- `ctx (Context)`: The context object
- `template_key (str)`: The key of the metadata template
- `file_id (str)`: The ID of the file to set metadata on
- `metadata (dict)`: The metadata values to set

</td>

<td>

The metadata instance associated with the file.

</td>

</tr>

<tr>

<td>

`box_metadata_update_instance_on_file_tool`

</td>

<td>

Update a metadata instance on a file.

</td>

<td>

- `ctx (Context)`: The context object
- `file_id (str)`: The ID of the file to update metadata on
- `template_key (str)`: The key of the metadata template
- `metadata (dict)`: The metadata values to update
- `remove_non_included_data (bool)`: If True, removes fields not included in metadata

</td>

<td>

The response from the Box API after updating the metadata.

</td>

</tr>

<tr>

<td>

`box_metadata_delete_instance_on_file_tool`

</td>

<td>

Delete a metadata instance on a file.

</td>

<td>

- `ctx (Context)`: The context object
- `file_id (str)`: The ID of the file to delete metadata from
- `template_key (str)`: The key of the metadata template

</td>

<td>

The response from the Box API after deleting the metadata.

</td>

</tr>

</tbody>

</table>

## Troubleshooting

In case of an `Error: spawn uv ENOENT` on MacOS when running the MCP server with Claude Desktop, you can:

- Remove `uv` and reinstall it with Homebrew: `brew install uv`.
- Provide the full path to the `uv` executable in your configuration:
  
```sh
/Users/USER_NAME/.local/bin/uv --directory /Users/USER_NAME/local/mcp-server-box run src/mcp_server_box.py
```

In case of additional issues related to setup, post your question on our [Developer Community forum](https://community.box.com/ai-developers-23).