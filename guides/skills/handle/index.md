---
rank: 1
related_guides:
  - skills/handle/payload
  - skills/handle/metadata
alias_paths: []
category_id: skills
subcategory_id: skills/handle
id: skills/handle
type: guide
is_index: true
total_steps: 2
sibling_id: skills
parent_id: skills
next_page_id: skills/handle/payload
previous_page_id: ''
---

# Handle Skills Events

Within the application or site that is set up as your
[invocation URL](guide://skills/invocation-url) you will generally need to
handle two payloads:

* [Event Payload](guide://skills/handle/payload): The Box Skills notification
when a new file is uploaded, copied, or moved to a folder that the Skill is set
up on.
* [Metadata Payload](guide://skills/handle/metadata): The metadata payload that
will need to be constructed and stored back on the original file in Box. The
data that this request is comprised of will come from the file processing
system, such as a machine learning system.
