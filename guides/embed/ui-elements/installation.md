---
rank: 1
related_endpoints: []
related_guides:
  - authentication/select
  - best-practices/cors
required_guides: []
related_resources: []
alias_paths: []
cId: embed
scId: embed/ui-elements
id: embed/ui-elements/installation
isIndex: false
---

# Installation

UI Elements can be used either by downloading the Javascript libraries
directly or by pulling from our NPM packages. All UI Elements also
require their corresponding CSS stylesheet to render properly.

## Authentication

In order to initialize any of the UI Elements, an application will need to
provide a valid Access Token.

<CTA to='authentication/select'>Learn how to authenticate an application

</CTA>

It is also recommended to [downscope][downscope] an Access Token before passing
it into an insecure environment (the user's web browser).

UI Elements only expect any Access Token to be passed in for authentication, and
can therefore be used for any type of authentication available from Box
Platform.

For testing purposes, a [Developer Token][devtoken] can be used.

## CORS

To use UI elements an application needs to whitelist the domain the widget is
used on for Cross Origin Resource sharing. See the [CORS guide][cors] for more
details.

[cors]: guide//best-practices/cors
[downscope]: guide://authentication/access-tokens/downscope
[devtoken]: guide://authentication/access-tokens/developer-tokens
