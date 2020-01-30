---
hide: true
rank: 3
---

<!-- does not need translation -->

# Choose & Choice

The `Choose` and `Choice` elements can be used to keep track specifically of
user choices. They provide a convenient abstraction around the `Observe` and
`Trigger` events.

```html
<Grid columns='2'>

  <Choose option='example.choose_a' value='1' color='blue'>
    # Option 1

    Explantion of option
  </Choose>

  <Choose option='example.choose_a' value='2' color='red'>
    # Option 2

    Explanation of option
  </Choose>

</Grid>

<Choice option='example.choose_a' value='1' color='blue'>
  You chose option 1
</Choice>

<Choice option='example.choose_a' value='2' color='red'>
  You chose option 2
</Choice>
```

<H>

<Grid columns='2'>

<Choose option='example.choose_a' value='1' color='blue'>
# Option 1

Explanation of option
</Choose>

<Choose option='example.choose_a' value='2' color='red'>
# Option 2

Explanation of option
</Choose>

</Grid>

<Choice option='example.choose_a' value='1' color='blue'>
You chose option 1
</Choice>

<Choice option='example.choose_a' value='2' color='red'>
You chose option 2
</Choice>

</H>

<Message notice>
  Choices are tracked across pages and persisted over time within local storage
  using the key `com.box.developer.observable_events`. It is important to use
  unique option names and values across guides.
</Message>

## Styling

There are 4 themes available for both elements: `null` (defaults to gray),
`green`, `red` and `blue`. Additionally the theme can be set to `none` to hide
the padding and background.

```html
<Choose option='example.choose_c' color='none'>
  # Option 1

  Explanation of option
</Choose>
```

## Observe unset choices

Sometimes you might want to show some text when a value has not been set yet. In
this case, use the `unset` option to set an element to listen to the event
instead.

```html
<Choose option='example.choose_b' value='1'>
  # Option 1

  Explanation of option
</Choose>

<Choice option='example.choose_b' unset>
  This should show by default and hide when the above choice is clicked.
</Choice>
```

<H>
<Choose option='example.choose_b' value='1'>
  # Option 1

  Explanation of option
</Choose>

<Choice option='example.choose_b' unset>
  This should show by default and hide when the above choice is clicked.
</Choice>
</H>

## Lazy loading

By default the content of an `Choice` element is loaded and then hidden. To
lazy load the element, pass in the `lazy` attribute.

```html
<Choice option='example.lazy' value='value'>
  The content of this element is rendered on page load
</Choice>

<Choice option='example.lazy' value='value' lazy>
  The content of this element is not rendered until the right event is triggered.
</Choice>
```
