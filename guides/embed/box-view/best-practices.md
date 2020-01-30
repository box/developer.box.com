---
rank: 4
related_guides:
  - embed/box-view/setup
  - embed/box-view/upload-file
  - embed/box-view/create-preview
required_guides: []
alias_paths: []
category_id: embed
subcategory_id: embed/box-view
is_index: false
id: embed/box-view/best-practices
type: guide
total_steps: 5
sibling_id: embed/box-view
parent_id: embed/box-view
next_page_id: embed/box-view/faq
previous_page_id: embed/box-view/upload-file
---

# Best Practices

## Regenerate and Rollover App Tokens

The app token is a highly privileged token. To keep your application
functional, you may want to regenerate your app token (for example by revoking
an existing token and creating a new one) if it is about to expire. If you are
using non-expiring tokens, you may still want to rollover your App Token if it
gets compromised.

A secondary app token is provided on the application configuration page that
works exactly the same as the primary app token and can be used to rollover
your app token without incurring any application downtime through regenerating
the existing token.

We suggest the following workflow for rolling over your Primary App Token:

* Generate the Secondary App Token through the Developer Console UI.
* Replace the Secondary App Token in your application and roll out the change.
* Once your application starts using the secondary App Token, regenerate the
Primary App Token.

## Use Downscope Tokens

App Tokens are a set of two tokens (primary and secondary) that hold elevated
privileges over the content managed by your application. They are essentially
your application's gateway to using Box View services. App Tokens can be used
by your application to upload, download, preview and modify any content into
Box.

Due to the elevated privileges granted to the application tokens, if you need
to make the token available on the client side for any reason (for example if
you are using the Box Preview UI Element), we strongly recommend that you use a
downscoped version of the original app token.

See the [downscoping guide](guide://authentication/access-tokens/downscope) for
information on that process.
