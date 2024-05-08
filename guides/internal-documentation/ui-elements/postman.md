---
hide: true
category_id: internal-documentation
subcategory_id: internal-documentation/ui-elements
is_index: false
id: internal-documentation/ui-elements/postman
rank: 0
type: guide
total_steps: 9
sibling_id: internal-documentation/ui-elements
parent_id: internal-documentation/ui-elements
next_page_id: internal-documentation/ui-elements
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal-documentation/ui-elements/postman.md
---
<!-- does not need translation -->

# Postman

The Postman element can be used to show a **Load in Postman** button.

```html
<Postman id='abc123' ></Postman>
```

<H>

<Postman id='abc123' />

</H>

## Credentials

By default the button will try to share an `access_token`, `refresh_token`,
`expires_at`, `client_id`, and `client_secret` as a Postman environment. The
values for these variables are loaded from local storage in the browser, and
default to the following keys.

* `com.box.developer.credentials` for the `access_token`, `refresh_token`, and `expires_at` values.
* `com.box.developer.credentials.client_id` for the `client_id`
* `com.box.developer.credentials.client_secret` for the `client_secret`

To configure a different set of values to use, specify a `env` option.

```html
<Postman id='abc123' env='example_name' />
```

In this case the values will be read from the following keys in local storage.

* `com.box.developer.example_name` for the `access_token`, `refresh_token`, and `expires_at` values.
* `com.box.developer.example_name.client_id` for the `client_id`
* `com.box.developer.example_name.client_secret` for the `client_secret`

## Postman Environment Name

By default the credentials are exported into Postman with the name `Box`. To
change this, provide a `envtitle` attribute to the element.

```html
<Postman id='abc123' envtitle='Box.com' />
```