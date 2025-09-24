---
rank: 1
alias_paths:
  - /docs/box-ui-elements
  - /page/box-ui-element
  - /docs/ui-elements
  - /box-ui-kit
  - /docs/box-ui-kit
category_id: embed
subcategory_id: embed/ui-elements
is_index: true
id: embed/ui-elements
type: guide
total_steps: 19
sibling_id: embed
parent_id: embed
next_page_id: embed/ui-elements/browser
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/index.md
---
# UI Elements

Box UI Elements are pre-built UI components that allow developers to add
elements of the main Box web application into their own applications. They can
be used to navigate through, upload, preview, and select content stored on Box
and are available both as React components and framework-agnostic JavaScript
libraries.

## Available Elements

Box offers several UI Elements to create common user experiences with files and
folders in an application.

The available UI Elements are:

* [Content Explorer][explorer]- Allow users to search and browse through files and folders. It also has a metadata query based view [variant][explorer-metadata] that supports items sorting, filtering, custom columns, and more.
* [Content Open With][openwith] - Allow users to open content stored in box with a partner application using an embedded dropdown.

<Message type='warning'>

We no longer support the `OpenWith` UI element for any new customers as of December 21, 2021.

</Message>

* [Content Picker][picker] - Allow users to select files or folders from their Box account.
* [Content Preview][preview] - Display interactive viewers for documents, images, audio, video, and more.
* [Content Sidebar][sidebar] - Display a sidebar for file metadata and activity feed information.
* [Content Uploader][uploader] - Allow users to upload files by selecting or using drag-and-drop.

UI Elements can be used in isolation or joined together to construct common user
flows with content, such as uploading and then viewing a file.

[explorer]: g://embed/ui-elements/explorer
[openwith]: g://embed/ui-elements/open-with
[picker]: g://embed/ui-elements/picker
[preview]: g://embed/ui-elements/preview
[sidebar]: g://embed/ui-elements/sidebar
[uploader]: g://embed/ui-elements/uploader
[explorer-metadata]: g://embed/ui-elements/explorer-metadata-v2