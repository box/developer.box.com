---
rank: 12
related_endpoints: []
related_guides:
  - authentication/oauth2
related_pages:
  - sdks-and-tools
required_guides:
  - authentication/oauth2/oauth2-setup
related_resources: []
category_id: cli
subcategory_id: cli/cli-docs
is_index: false
id: cli/cli-docs/bulk-commands
type: guide
total_steps: 2
sibling_id: cli/cli-docs
parent_id: cli/cli-docs
next_page_id: ''
previous_page_id: cli/cli-docs
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/cli-docs/bulk-commands.md
---
# CLI bulk commands

The Box CLI bulk commands help you to automate repetitive tasks. By adding a `--bulk-file-path` flag to your command, you are able to perform actions for many items at once.

For example, this command creates several folders using a CSV file specifying folder `Name`, `Description`, and the `ParentId` of the parent folder:

```bash
box folders:create --bulk-file-path <PATH_TO_CSV>/folders-create.csv
```

## CSV templates

Predefined CSV templates help you to structure the data you want to manage in bulk. Templates reside in the [`Bulk actions`][bulkactions] directory, grouped into folders. The table below lists the currently available templates.

| Templates      | Description   |
|----------------|---------------|
| box collaborations| Create, delete, and update collaborations. |
| box files| Download, update, and upload files.|
| box folders| Create and update folders, add metadata to folders. |
| box groups| Create groups and add memberships. |
| box metadata-templates| Create metadata templates and metadata cascade policies on folders. |
| box shared-links| Delete shared links.|
| box users| Create and update users, move one user's content to another user. |
| box webhooks| Delete webhooks. |

## Prerequisites

To use bulk commands, you will need a Box application
with OAuth 2.0 authentication. If you don't have one,
go to your [Developer Console][console], and follow the guide
[Setup with OAuth 2.0][auth].

## Set up and use bulk commands

1. Clone the `boxcli` GitHub repository or download the files from [`Bulk actions`][bulkactions] directory.

    ```bash
    git clone https://github.com/box/boxcli.git
    ```

2. Adjust the `.csv` template to your needs. For example, if you want to create several folders, you can use the [`folders-create.csv`][folderstemplate] template as your starting point.

3. Run the command.

    ```bash
    box users:create --bulk-file-path <PATH_TO_CSV>/folders-create.csv
    ```

[console]: https://app.box.com/developers/console
[auth]: g://authentication/oauth2/oauth2-setup
[bulkactions]: https://github.com/box/boxcli/tree/main/docs/Bulk%20actions
[folderstemplate]: https://github.com/box/boxcli/blob/main/docs/Bulk%20actions/folders/folders-create.csv