---
rank: 1
hide: true
---

# Documentation UI

<!-- does not need translation -->

The following is an overview of some custom React components that are supported
in these docs.

## Technical Implementation

Explain how this works

## Common Issues

1. React components can be self closing or have an open and close tag. We try to
   fix this for you on build time.
2. Nested React components work, but it is advised not to indent the body, as
   indented content is treated as a blockquote in Markdown.
3. React component names are not case sensitive. Feel free to use `message` or
   `Message`.

## Centered

By default all content on guides is centered, but for pages the content is not
centered by default. To center the content, use a `Centered` block.

```html
<Centered wide>

Your content here

</Centered>
```

We advise not to indent the content within this block, as it might mess with the
parsing of the markdown.

The `wide` attribute is optional and toggles the content between a `800px` and
`1200px` max width.
