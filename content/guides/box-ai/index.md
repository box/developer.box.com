---
# This is a Frontmatter header for Markdown files.
# Frontmatter starters with a tripple-dash and ends
# with another tripple dash.

# The content in here won't be rendered, and no data
# in here will be translated.

# TODO/CHANGE: Pages sort by rank, then alphabet
rank: 1
# TODO/CHANGE: Set to any number of endpoint IDs or []
# to be shown at the end of a Guide as being related.
#
# Endpoint IDs can be found in the OpenAPI spec
# as "operationId".
related_endpoints: []
# TODO/CHANGE: Set to any number of resource IDs or []
# to be shown at the end of a Guide as being related.
#
# Resource IDs can be found in the OpenAPI spec
# as the key of the resource in the components list
related_resources:
  - file
  - folder
  - web_link
# TODO/CHANGE: Set to any number of guides or []
# to be shown at the end of a Guide as being related.
#
# Guide IDs are the path of this file in this project,
# from the "guides" folder onward. The extension is
# omitted.
#
# For example, for the /content/guides/foo/bar/baz.md file,
# the ID would be foo/bar/baz.
related_guides:
  - box-platform-ai/q-n-a
  - box-platform-ai/text-gen
  - box-platform-ai/metadata-suggestions
# TODO/CHANGE: Set to any number of guides or []
# to be shown at the end of a Guide as being related.
#
# Guide IDs are the path of this file in this project,
# from the "guides" folder onward. The extension is
# omitted.
#
# For example, for the /content/guides/foo/bar/baz.md file,
# the ID would be foo/bar/baz.
required_guides: []
# TODO/CHANGE: Set to any number of URLs or []
# to redirect from to this page.
#
# This is used to maintain backwards compatibility with
# older URLs, allowing us to change URLs and still maintain
# paths.
#
# This generally only works for the primary locale,
# in this case English. Translared guides wont redirect.
alias_paths:
  -
---

# Box AI API

The Box AI API is a way to extend the power of Box AI to your custom
applications. Imagine the Box AI Q&A functionality built into your third party
integration, or the ability to generate content like you can in Notes, right in
your product’s content editor.

The API is built with ease of use in mind. Call the API, provide your
document(s) or content, and provide your prompt. 

## Capabilities

The API provides a number of capabilities designed to help you build LLM into
your customer applications work flows. You can build Q&A, generate text, and
even provide a Metadata template and ask Box AI to suggest values. All within
the Box Platform you are already using for your other content integrations.

### Q&A

Think of Q&A as a chatbot. Provide the Box file ID(s) of the content you want
to interact with, provide a prompt, and ask the Large Language Model (LLM). 

### Text Generation

Much like the functionality Box AI provides inside of Notes, generate text with
the power of LLM. You must still provide a Box file ID and a prompt.

### Metadata Suggestions

With Metadata suggestions, you must provide a Metadata template key and a Box
file ID and the LLM will evaluate your content against the template and make
suggestions as to the values to apply. You can then evaluate the suggestions
and use the Box Platform's Metadata API to apply if you so choose.