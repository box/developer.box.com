---
rank: 4
related_endpoints:
  - get_authorize
related_guides:
  - authentication/app-token/app-token-setup
required_guides: []
related_resources: []
alias_paths: []
---

# Supported Endpoints

App Token authentication currently only supports a handful of the BOX API.

| Endpoint                                     | Path                     |
| -------------------------------------------- | ------------------------ |
| [Create a folder](e://post-folders)          | `POST /folders`    |
| [Upload a file](e://post-files-content)      | `POST /files/content`    |
| [Download a file](e://get-files-id-content)  | `GET /files/:id/content` |
| [Delete a file](e://delete-files-id) | `DELETE /files/:id`      |
| [Get embed link](e://get-files-id)          | `GET /files/:id`         |
