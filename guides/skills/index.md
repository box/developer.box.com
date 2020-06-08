---
rank: 170
alias_paths:
  - /docs/configure-a-box-skill
category_id: skills
subcategory_id: null
is_index: true
id: skills
type: guide
total_steps: 3
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: skills/kit
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/skills/index.md
---
# Box Skills

Box Skills are designed to allow the coupling of custom processing services for
files uploaded in Box, with the intent of enhancing the underlying metadata of
the file. The benefit towards this system is that it permits the storage of
rich information about any files, which may then be used to automated tasks and
future processes.

In general the end-to-end process of a Skills application follows the following
flow:

<!-- markdownlint-disable line-length -->

| Step                                                  | Description                                                                                                                                                             |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [App Setup](guide://applications/custom-skills/setup) | A Custom Skills app is created to listen for upload events within the entire enterprise or one or more folders.                                                         |
| [Invocation URL Setup](guide://skills/invocation-url) | When the Custom Skills app is created an invocation URL is set, which Box will notify when a new file is uploaded.                                                      |
| [Parse Event](guide://skills/handle/payload)          | When a file is uploaded, copied, or moved into a folder an event payload is sent to your invocation URL. This provides tokens to access the uploaded file in Box and store metadata back onto the file. |
| [Send File for Processing](guide://skills/examples)   | The file content is sent to an external service for insight processing, such as a machine learning system.                                                              |
| [Store Metadata](guide://skills/handle/metadata)      | Once the processing system is complete, those insights are stored back on the uploaded file as metadata.                                                                |

<!-- markdownlint-enable line-length -->

<Message>

# Skills Kit

To simplify your integration with Box Skills, a [Skills
Kit](guide://skills/kit) has been made available to obfuscate many
complexities of the above steps. The Skills Kit is currently only available in
Node.

</Message>