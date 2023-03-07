---
rank: 110
alias_paths: []
category_id: downloads
subcategory_id: null
is_index: true
id: downloads
type: guide
total_steps: 7
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: downloads/zip-archive
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/downloads/index.md
---
# Downloads

The Box API allows for downloading files to the application's server, or directly
by the end user in a browser.

## When not to download

Downloading a file is not always the desired solution, especially if the file is
only being downloaded for the user to preview, comment, or annotate. In those
cases we recommend using one of the ways to embed the Box experience straight
into your application.

<CTA to="g://embed/">

Learn more about embedding Box

</CTA>

## Access Errors

It is important to realize that the application needs to have access to the
file that is to be downloaded. When the application is a authenticated through
JWT or App Tokens, the user is authenticated as a Service Account. This service
account does not have access to files besides their own.

If this user does not have access to the file the application will receive a
`404 Not Found` error.

<CTA to="g://getting-started/user-types">

Learn more about different User Types

</CTA>