---
rank: 4
related_guides:
  - embed/box-view/setup
  - embed/box-view/upload-file
  - embed/box-view/create-preview
required_guides: []
alias_paths: []
---

# Best Practices

## Rotate App Tokens

See our guide on [rotating App Tokens][rotate]. 

## Use Downscope Tokens

App Tokens are a set of two tokens (Primary and Secondary) that hold elevated
privileges over the content managed by your application. App Tokens can be used
by your application to upload, download, preview and modify any Box content.

We strongly recommend that you use a [downscoped][downscoped] version of the
original App Token if you need to make the token available on the client side
for any reason. This is because of the elevated privileges granted to these
tokens, if you need. An example of when this would be needed is if you are using
the Box Preview UI Element.

[rotate]: g://authentication/app-token/rollover
[downscoped]: g://authentication/tokens/downscope