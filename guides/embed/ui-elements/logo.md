---
rank: 10
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/specifying-a-logo-for-box-ui-elements
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/logo
type: guide
total_steps: 15
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/theming-styling
previous_page_id: embed/ui-elements/annotations
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/logo.md
---
# Customize Logo

Each of the Box UI Elements allow for specifying a custom logo to place in the
top-left corner of the embedded container.

<ImageFrame border>

![Custom logo](./images/elements-logo.png)

</ImageFrame>

By default, each of the UI Elements uses a generic placeholder as a logo. This
is meant to be replaced by either a Box logo or a custom logo, such as a
company's logo.

To add a logo to a UI Element, supply a URL for a logo as an option in in the
Javascript setup code. The following is an example of how to do this with the
Content Preview UI Element.

```js
var preview = new Box.Preview();
preview.show(fileId, accessToken, {
    container: '.preview-container',
    sharedLink: 'https://app.box.com/v/foo',
    sharedLinkPassword: 'bar',
    collection: [FILE_ID, '123', '234', ...],
    header: 'light',
    logoUrl: 'http://i.imgur.com/xh8j3E2.png',
    showAnnotations: true,
    showDownload: true
});
```

<Message>

# Box Logo

To present the Box logo in a UI Element, specify the string `box` as the
`logoURL` option.

</Message>

## Image size

Images files will be fitted to a maximum height of 32 pixels and a maximum width
of 80 pixels. Larger images will be shrunk to fit these dimensions.