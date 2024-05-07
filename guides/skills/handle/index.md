---
rank: 1
related_guides:
  - skills/handle/payload
  - skills/handle/metadata
alias_paths: []
category_id: skills
subcategory_id: skills/handle
is_index: true
id: skills/handle
type: guide
total_steps: 3
sibling_id: skills
parent_id: skills
next_page_id: skills/handle/payload
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/skills/handle/index.md
---
# Handle Skills Payloads

Within the application or site that is set up as your
[invocation URL](guide://skills/invocation-url) you will generally need to
perform two tasks.

* [Handle the Skill payload](guide://skills/handle/payload) - Every time a Box Skills detects a new file is uploaded, copied, or moved to a folder it sends a JSON notification to the invocation URL. This URL needs to be parsed.
* [Apply a Skill Card to a file](guide://skills/handle/metadata) - The metadata returned from the processing service will need to be stored back as metadata on the file that triggered the event.