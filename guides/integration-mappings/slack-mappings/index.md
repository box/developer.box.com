---
rank: 1
related_endpoints:
  - delete_integration_mappings_slack_id
  - get_integration_mappings_slack
  - post_integration_mappings_slack
  - put_integration_mappings_slack_id
related_guides:
  - integration-mappings/slack-mappings/integration-mappings-sdk
  - integration-mappings/slack-mappings/create-mapping
  - integration-mappings/slack-mappings/update-mapping
  - integration-mappings/slack-mappings/delete-mapping
required_guides: []
related_resources: []
alias_paths: []
category_id: integration-mappings
subcategory_id: integration-mappings/slack-mappings
is_index: true
id: integration-mappings/slack-mappings
type: guide
total_steps: 7
sibling_id: integration-mappings
parent_id: integration-mappings
next_page_id: integration-mappings/slack-mappings/setup
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/integration-mappings/slack-mappings/index.md
---
# Integration Mappings (Slack)

When [Box as the Content Layer][1] is enabled, Box folder is created for
each channel, and all files sent in this channel are uploaded to
these folders.
The [Integration Mappings API][2] allows the Box Enterprise Admin (EA) to
customize the upload folder of the Slack channel to any folder within
the enterprise instead of relying on the default one.

[1]: https://support.box.com/hc/en-us/articles/4415585987859-Box-as-the-Content-Layer-for-Slack
[2]: r://integration-mapping