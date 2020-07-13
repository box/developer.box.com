---
hide: true
---

<!-- does not need translation -->

# Message

A message is a way to show a user that something is worth noting.

## Message types

### Default message

The lowest level of message is default message. Either explicitly set the type, or
omit the type. Use this message type for messages that are not essential to be read.

```html
<Message>
  A default note
</Message>

<default type='default'>
  A default note
</Message>
```

<H>
  <Message>
    A default note
  </Message>
</H>

## Notice message

The next level is a tip. Use this message type for messages that are general
good tips and best practices.

```html
<Message type='tip'>
  A tip message
</Message>

<Message tip>
  A tip message
</Message>

```

<H>
  <Message tip>
    A tip message
  </Message>
</H>

## Notice message

The next level is a notice. Use this message type for messages that are notices
but would not break anything for the user if ignored.

```html
<Message type='notice'>
  A notice message
</Message>

<Message notice>
  A notice message
</Message>

```

<H>
  <Message Notice>
    A notice message
  </Message>
</H>

## Warning message

The next level of message is a warning. Use this message type for messages that
are notices that might cause an error or exception for the user if ignored, or
to point out that an error or exception might occur when they complete the
action previously described.

```html
<Message type='warning'>
  A warning note
</Message>

<Message warning>
  A warning note
</Message>
```

<H>
<Message warning>
  A warning note
</Message>
</H>

## Danger message

The final level of message is a danger warning. Use this message type for
messages that are notices that can be attached to actions that will likely cause
an error or exception for the user.

```html
<Message type='danger'>
  Danger zone!
</Message>

<Message danger>
  Danger zone!
</Message>
```

<H>
<Message danger>
  Danger zone!
</Message>
</H>

## Title

A message can have a title. Please only use `<h1>` titles.

```html
<Message>
  # A title

  A default note
</Message>
```

<H>
<Message>
  # A title

  A default note
</Message>
</H>

## Size

A message can be made smaller than the default.

```html
<Message size='small'>
  A small note
</Message>
```

<H>
<Message size='small'>
  A small note
</Message>
</H>
