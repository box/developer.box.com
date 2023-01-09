---
hide: true
rank: 5
---

<!-- does not need translation -->

# Store

A `Store` is an element that can be used to collect and display user provided
values.

By displaying a store a user is provided with a text field

```html
<Store placeholder='e.g. John' id='example.store_a'>
  Your name
</Store>
```

<H>
<Store placeholder='e.g. John' id='example.store_a'>
  Your name
</Store>
</H>

<Message>
  Text typed into a store is saved in the browser's local storage with the key
  `com.box.developer.$id` where `$id` is the ID provided with the store.
</Message>

## Setting a field

In some advanced cases you might want to set a field on an object stored in
local storage instead. For example, the local storage key
`com.box.developer.example.store_b` might contain an object `{}` and the store
should save the user's entry to the field `name` as follows.

```html
<Store placeholder='e.g. John' id='example.store_b' field='name'>
  Your name
</Store>
```

## Placeholder

A store supports a `placeholder` that is passed to the child `<input />` field.

## Validating a store

A store supports a `pattern` that is passed to the child `<input />` field and
us used to validate the field.

## Displaying a store

Sometimes you might want to display the value provided earlier back to a user.
In these cases you can create an in-line version of the store, disable editing,
and obscure any sensitive data as follows.

```html
<Store id='example.store_a' disabled inline obscured>
  Your name
</Store>
```

<H>
<Store id='example.store_a' disabled inline obscured>
  Your name
</Store>
</H>

## Resetting values

A reset button can be shown to allow a user to clear a value. It matches any key
in local storage that starts with `com.box.developer.$id` where `$id` is the ID
passed in.

```html
<ResetButton id='example'>
  Reset all IDs starting with example.
</ResetButton>
```

<H>
<ResetButton id='example'>
  Reset all IDs starting with example.
</ResetButton>
</H>

Multiple IDs can be passed in as a comma-separated list.

```html
<ResetButton id='example1,example2'>
  Reset all IDs starting with example1 or example2.
</ResetButton>
```
