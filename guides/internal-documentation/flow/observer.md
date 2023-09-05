---
hide: true
rank: 2
category_id: internal-documentation
subcategory_id: internal-documentation/flow
is_index: false
id: internal-documentation/flow/observer
type: guide
total_steps: 6
sibling_id: internal-documentation/flow
parent_id: internal-documentation/flow
next_page_id: internal-documentation/flow/choices
previous_page_id: internal-documentation/flow
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/flow/observer.md
---
<!-- does not need translation -->

# Observe & Trigger

The `Observe` and `Trigger` elements can be used to observe changes in a page.

In this example, we wrap some download links in a Trigger, and show a message
when the download link has been clicked.

```html
<Trigger option="example.trigger" value="win32">
  [Download](https://dl.pstmn.io/download/latest/win32)
</Trigger>

<Observe option="example.trigger" value="win32">
  ...
</Observe>
```

<H>

<Trigger option='example.trigger' value='win32'>

[Download](https://dl.pstmn.io/download/latest/win32)

</Trigger>

<Observe option='example.trigger' value='win32'>

...

</Observe>

</H>

<Message notice>

Events are tracked across pages and persisted over time within local storage
using the key `com.box.developer.observable_events`. It is important to use
unique option names and values across guides.

</Message>

<Message warning>

The `Observe` object does not show or hide its child content automatically,
instead it adds a `[data-triggered=true]` attribute around its children that
can be used to apply nested styling.

To keep track of a user's choice, please use the `Choice` and `Choices`
elements instead.

</Message>

## Observe multiple values

The `Observe` element can listen to multiple values by using a comma-separated
list.

```html
<Trigger option="example.multiple" value="win32">
  [Download](https://dl.pstmn.io/download/latest/win32)
</Trigger>

<Trigger option="example.multiple" value="macos">
  [Download](https://dl.pstmn.io/download/latest/macos)
</Trigger>

<Observe option="example.multiple" value="win32,macos">
  ...
</Observe>
```

<H>

<Trigger option='example.multiple' value='win32'>

[Download](https://dl.pstmn.io/download/latest/win32)

</Trigger>

<Trigger option='example.multiple' value='macos'>

[Download](https://dl.pstmn.io/download/latest/macos)

</Trigger>

<Observe option='example.multiple' value='win32,macos'>

...

</Observe>

</H>

## Observe unset values

Sometimes you might want to do something when a value has not been set yet. In
this case, use the `unset` option to set an element to listen to the event
instead.

```html
<Observe option="example.unset" unset>
  ...
</Observe>
```

<H>

<Observe option='example.unset' unset>

...

</Observe>

</H>