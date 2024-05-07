---
hide: true
---

<!-- does not need translation -->

# Tabs

To add items to a tab, first create a `Tabs` object and then within that
multiple `Tab` items with titles. If those tabs are meant to display code
samples, you will need to refer to the [markdown code block][code_block_guide]
guide as well.

```html
<Tabs>
  <Tab title='Node'>
    Node
  </Tab>
  <Tab title='.NET'>
    .NET
  </Tab>
</Tabs>
```

<H>

<Tabs>

<Tab title='Node'>
  Node
</Tab>

<Tab title='.NET'>
  .NET
</Tab>

</Tabs>

</H>

Tabs use cookies to try and remember the user's choice. Please use the standard
title `cURL`, `Java`, `.NET`, `Python` and `Node` to refer to our currently
supported languages and the user will automatically be presented with the
sample in their language of choice.

[code_block_guide]: guides://internal-documentation/markdown/code-blocks
