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
related_endpoints:
  - get_files_id
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
  - automation-and-events/webhooks/list-of-triggers
  - automation-and-events/webhooks/parse-a-webhook
  - automation-and-events/webhooks/delete-a-webhook
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
  - /old/path
  - /another/old/path
---

# Title

From here everything is Markdown.

The first title in the page will be used as the name of the guide everywhere in
the site.

Additionally, wee have extended the markdown with React components.

## Code Samples

Code samples allow you to bring in SDK, CLI, and cURL code samples. The ID
needs to be an endpoint ID.

<Samples id='get_files_id' />

Make sure to close the HTML tag, either directly or like this.

<Samples id='get_files_id'></Samples>

## Messages

Messages are used to mark a text visually as being notable, a warning, or a sign
of danger.

<Message type='notice'>
  A simple note
</Message>

<Message type='warning'>
  A warning note
</Message>

<Message type='danger'>
  A danger note
</Message>

Messages support a small size, and the content can include more Markdown text.

<Message size='small'>
  # A title

  A danger note with a markdown title and body.
</Message>

## Tabs

Not all code samples exist in the SDKs/CLI. You can add new code samples
for each language as follows.

<Tabs>
  <Tab title='Node'>

```js
console.log('!')
```

  </Tab>
  <Tab title='.NET'>

```csharp
// some .NET code
```

  </Tab>
</Tabs>

## Links

We recommend using referenced links.

This would [look like this][1].

At the end of the document, define the link.

[1]: https://box.com

We provide ways to link to guides, endpoints,
and resources without hard-coding the locale.

[Get a file by ID][endpoint://get-files-id]
[File resource][resource://file]
[Yet another guide][guide://automation/events/all-triggers]
