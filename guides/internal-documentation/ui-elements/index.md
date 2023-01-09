---
rank: 1
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/ui-elements
is_index: true
id: internal-documentation/ui-elements
type: guide
total_steps: 8
sibling_id: internal-documentation
parent_id: internal-documentation
next_page_id: ''
previous_page_id: internal-documentation/ui-elements/cta
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/ui-elements/index.md
---
<!-- does not need translation -->

# Documentation UI

The following is an overview of some custom React components that are supported
in these docs.

## Technical Implementation

These custom UI elements all look like HTML but under the hood they are all
plain React components.

Within the Box Developer Documentation Framework a component is registered with
a name and a component, and when the markdown is parsed the content of these
components is passed to the React component. Only registered components are
recognized.

## Common Issues

There are a few known issues with the markdown parser. For example, the markdown
parser expects the components to have a closing tag (`<Foo></Foo>`) while
self-closing tags are not allowed (`<Foo />`). To make things easier for you,
the build system will try and covert any self closing tags to the right format.

Other issues are known and have been resolved during the build process. If you
come across any more rendering issues please solve them in the markdown
compiler, not within the React site.