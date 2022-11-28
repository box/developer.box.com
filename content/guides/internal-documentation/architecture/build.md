---
hide: true
---

<!-- does not need translation -->

# Build Process

The build process pulls in all sources, processes and then compiles them into
static HTML, CSS, and JavaScript, using the Gatsby site generator.

When any of the sources changes, it triggers a new build of the site. As
the site should only be built when the OpenAPI and Microcopy are compiled,
a serverless Netlify function is created to accept GitHub webhooks and filter
out any webhooks coming from the `en` branch. Only pushes from the OpenAPI and
microcopy repositories to the `en` branch are passed on to the Netlify server.
