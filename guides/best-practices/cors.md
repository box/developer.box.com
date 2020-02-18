---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/branding-guidelines
category_id: best-practices
subcategory_id: null
is_index: false
id: best-practices/cors
type: guide
total_steps: 3
sibling_id: best-practices
parent_id: best-practices
next_page_id: best-practices
previous_page_id: best-practices/branding-guidelines
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/guides/best-practices/cors.md
---

# Cross-Origin Resource Sharing

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP
headers to tell browsers to give a web application running at one origin, access
to selected resources from a different origin. A web application performs a
cross-origin HTTP request when it requests a resource that has a different
origin (domain, protocol, or port) from its own.

In the case of Box, CORS comes into play when a web application tries to contact
the Box APIs from a browser environment. The Box API enforces CORS on an
app-by-app basis and by default does not send the right HTTP headers to allow
your browser to complete the request.

<Message warning>

Cross-Origin Resource Sharing, or CORS is only applicable to Box API requests
made by a web page using a browser, and it relies on the `HTTP Origin` header
being passed along by the browser.

</Message>

## Enabling CORS for your domain

To enable CORS for the domain your application runs on, head over to the
developer console, select your application, and scroll down to the bottom of the
"Configuration" panel to find the CORS Domains setting.

Add a comma separated list of all the origins that you expect your application
to be making Box API requests from. Domains require the schema (`http` or
`https`) and can include wildcards for subdomains, for example `*.example.com`.

## CORS-like Errors

Some browsers will return a CORS-like error, even when CORS is enabled for your
application.

In these scenarios, an HTTP response code will often be included (for example `400`
or `401`) which will provide further direction where you may want to
focus troubleshooting.
