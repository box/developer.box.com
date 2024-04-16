---
rank: 7
related_endpoints: []
related_guides: []
required_guides: []
alias_paths:
  - /docs/api-language-codes
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/language-codes
type: guide
total_steps: 9
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls/api-versioning-strategy
previous_page_id: api-calls/suppress-notifications
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/language-codes.md
---
# Language Codes

The Box API uses a modified version of the ISO 639-1 Language Code to specify a
user's language.

The following is a list of language codes used when [creating][create_user] or [updating][update_user].

| Language                | Code |
|-------------------------|------|
| Bengali                 | `bn` |
| Danish                  | `da` |
| German                  | `de` |
| English (US)            | `en` |
| English (UK)            | `gb` |
| English (Canada)        | `e2` |
| English (Australia)     | `e3` |
| Spanish (Latin America) | `s2` |
| Spanish                 | `es` |
| Finnish                 | `fi` |
| French                  | `fr` |
| French (Canada)         | `f2` |
| Hindi                   | `hi` |
| Italian                 | `it` |
| Japanese                | `ja` |
| Korean                  | `ko` |
| Norwegian (Bokmal)      | `nb` |
| Dutch                   | `nl` |
| Polish                  | `pl` |
| Portuguese              | `pt` |
| Russian                 | `ru` |
| Swedish                 | `sv` |
| Turkish                 | `tr` |
| Chinese (Simplified)    | `zh` |
| Chinese (Traditional)   | `zt` |

[create_user]: e://post_users#param-language
[update_user]: e://put_users_id#param-language