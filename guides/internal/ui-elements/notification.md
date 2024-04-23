---
hide: true
category_id: internal
subcategory_id: internal/ui-elements
is_index: false
id: internal/ui-elements/notification
rank: 0
type: guide
total_steps: 0
sibling_id: internal/ui-elements
parent_id: ''
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal/ui-elements/notification.md
---
<!-- does not need translation -->

# Notification

The Notification element is the orange bar located at the top of the site used
to provide visitors an important message or alert. Patterned after the orange
bar on `box.com`, it can be configured with a few pieces of information.

## Display

Display is a boolean that determines whether we show the bar. Our framework
does not recognize booleans in Microcopy, so you must provide the boolean in
all lowercase and wrapped in double quotes; `"true"` or `"false"`.

**Example**:

```yaml
display: "false"
```

## Message

The message is meant to be a short sentence that provides the information we
want a user to know. There is no maximum length, but bear in mind that the
longer the message, the more real estate it will take up on smaller modalities,
especially mobile phones.

Your best bet is to test locally and use the browser's responsive tester in the
Chrome Developer Tools to decide if the notification is too long or not.

**Example**:

```yaml
message: >
    Join the first BoxWorks Hackathon for Good - customers,
    partners, and the developer community are welcome to participate
    in the 48 hour Hack to benefit The Nature Conservancy.
```

## HREF

The href is the URL you want the user to visit when they click the CTA. This
can be any fully qualified URL, i.e. `https://box.com`, `https://developer.box.
com/guides`, or `https://github.com/box/sdks`.

**Example**:

```yaml
href: "https://box.com/hack4good"
```

## CTA

The CTA is a short slug that will link the the href above. It should be short
and designed to convince the user they really want to click it.

**Example**:

```yaml
cta: Learn more and register!
```

## TTL

The component gives you the ability to auto-hide the bar after a prescribed
number of seconds. Typically, we'll leave this set to 0 in order to leave it
there until someone clicks the close button. Our framework does not like
integers in microcopy, so you must wrap the integer in double quotes.

**Example**:

```yaml
ttl: "0"
```

## How to make changes

All settings are located in the `/content/microcopy/headers.yml` file in the
`developer.box.com` repository. Update the settings and follow best
practices to push your updates.

```yaml
notifications:
  // display: |-
    A boolean that determines whether to show the orange notification bar
    in the header. Must be "true" or "false"
  display: "false"

  // message: |-
    The content of the notification
  message: >
    Join the first BoxWorks Hackathon for Good - customers,
    partners, and the developer community are welcome to participate
    in the 48 hour Hack to benefit The Nature Conservancy.

  // href: |-
    The link to navigate to when the CTA is clicked
  href: "https://box.com/hack4good"

  // cta: |-
    The text of the CTA
  cta: Learn more and register!

  // ttl: |-
    The number of seconds to display the message. Should always
    be 0 unless you want to autohide.
  ttl: "0"
```