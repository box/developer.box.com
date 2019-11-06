---
rank: 3
related_endpoints:
  - get_authorize
related_guides:
  - applications/app-token
required_guides: []
related_resources: []
alias_paths: []
---

# Supported Endpoints

App Token authentication currently only supports a handful of the BOX API.

| Endpoint                                     | Path                     |
| -------------------------------------------- | ------------------------ |
| [Upload a file](e://post-files-content)      | `POST /files/content`    |
| [Download a file](e://get-files-id-content)  | `GET /files/:id/content` |
| [Delete a file](e://delete-files-id-content) | `DELETE /files/:id`      |
| [Get embed link](e://get-files--id)          | `GET /files/:id`         |
