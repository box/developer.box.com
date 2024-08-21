---
rank: 4
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: api-calls/permissions-and-errors
is_index: false
id: api-calls/permissions-and-errors/expiration
type: guide
total_steps: 6
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: api-calls/permissions-and-errors/app-diagnostics-report
previous_page_id: api-calls/permissions-and-errors/scopes
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/permissions-and-errors/expiration.md
fullyTranslated: true
---
# トークンおよびURLの有効期限

Box APIには、自動的に有効期限が切れるトークン、コード、およびURLがいくつかあります。以下に、それぞれの有効期間の概要を示します。

|                              |                      |
| ---------------------------- | -------------------- |
| [承認コード][Authorization Codes] | 30秒後に有効期限切れ          |
| [アクセストークン][Access Tokens]    | 60分後に有効期限切れ          |
| [更新トークン][Refresh Tokens]     | 60日後または1回の使用後に有効期限切れ |
| [ダウンロードURL][Download URLs]   | 15分後に有効期限切れ          |

詳細については、それぞれのガイドを参照してください。

[Authorization Codes]: g://authentication/oauth2

[Access Tokens]: g://authentication/tokens

[Refresh Tokens]: g://authentication/tokens/refresh

[Download URLs]: g://downloads
