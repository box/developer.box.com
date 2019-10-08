---
alias_paths: []
id: internal
isIndex: true
---

<Centered>

# Style Guide

The following is an overview of custom React components supported in these docs.

## General tips & tricks

Although we try to make sure all variations work, we've noticed a few issues
with embedded React in Markdown.

1. React components can be self closing or have an open and close tag. We try to
   fix this for you on build time.
2. Nested React components work, but it is advised not to indent the body, as
   indented content is treated as a blockquote in Markdown.
3. React component names are not case sensitive. Feel free to use `message` or
   `Message`.

## Messages

A message is an easy way to show a user that something is important.

### Notice messages

The lowest level of message is a notice. Either explicitly set the type, or
ommit the type.

```html
<Message>
  A simple note
</Message>

<Message type='notice'>
  A simple note
</Message>
```

<H>

  <Message>

  A simple note

</Message>

</H>

A message can have a title.

```html
<Message>
  # A title

  A simple note
</Message>
```

<H>

<Message>

  # A title

  A simple note

</Message>

</H>

Other variations are available for warnings and danger.

```html
<Message type='warning'>
  # Warning

  A warning message
</Message>
<Message type='warning'>
  # Danger

  A danger message
</Message>
```

<H>

<Message type='warning'>

  # Warning

  A warning message

</Message>

</H>

<H>

<Message type='danger'>

  # Danger

  A danger message

</Message>

</H>

## Samples

Samples represent a set of sample code blocks extracted from the CLI, SDK, and
cURL repos.

```html
<Samples id='get_files_id'></Samples>
```

<H>

<Samples id='get_files_id'/>

</H>

By default the `default` variant is chosen. For some samples different
variations exist.

```html
<Samples id='post_folders_id_copy' variant='with_name' ></Samples>
```

<H>

<Samples id='post_folders_id_copy' variant='with_name' />

</H>

## Code samples

Not all code samples exist in the SDKs/CLI. You can add new code samples
in basic backticks.

~~~sh
```js
console.log('Hello, World!')
```
~~~

<H>

```js
console.log('Hello, World!')
```

</H>

## Tabs

To add items to a tab, first create a `Tabs` object and then within that
multiple `Tab` items with titles.

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
supported languages and the user will automatically be presented with the sample
in their language of choice.

## Internal links

To link to internal guides, references, and endpoints, please use the following
syntax.

```json
[Get a file by ID](reference://get_files_id)
[A file](resource://file)
[Copy a file](guide://files/advanced/copy)
```

<H>

[Get a file by ID](reference://get_files_id)

[A file](resource://file)

[Copy a file](guide://files/advanced/copy)

</H>

Please try to use reference links where possible, moving the actual links to the
bottom of the page.

```md
# Title

Some text with a [link][link_name]. And some more content.

[link_name]: https;//box.com
```

## Calls to Action

Links can be wrapped in a Call to action to create visible buttons.

```html
<CTA to='guide://files/advanced/copy'>
  Learn more about copying files
</CTA>
```

<H>

<CTA to='guide://files/advanced/copy'>
  Learn more about copying files

</CTA>

</H>

## Table

## Image Frame

An image can be easily wrapped into a frame.

```html
<ImageFrame border center shadow width='200'>
  ![Image](./box.jpg)
</ImageFrame>
```

<H>

<ImageFrame border center shadow width='200'>

  ![Image](./box.jpg)

</ImageFrame>

</H>

Options include a border, wether to center the image, wether to add a shadow,
and a max-width of 200 or 400.

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

</Centered>
