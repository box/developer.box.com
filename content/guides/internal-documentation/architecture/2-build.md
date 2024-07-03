---
hide: true
---

<!-- does not need translation -->

# Build Process

The build process pulls in all sources, processes and then compiles them into
static HTML, CSS, and JavaScript, using the Gatsby site generator.

When any of the sources changes, it triggers a new build of the site. As
the site should only be built when the OpenAPI and Microcopy are compiled,
a serverless Netlify function was created to accept GitHub webhooks and filter
out any webhooks coming from the `en` branch. Only pushes from the OpenAPI and
Microcopy repositories to the `en` branch are passed on to the Netlify server.

## Staging

The Netlify functions proxy out as multiple calls for the OpenAPI 3.0
specification and Microcopy to trigger a rebuild of the staging and main
branch respectively when needed. It can be expanded to support the
needed number of stage and source configurations.

## Building with Gatsby

[Gatsby] is a free, fast, open source, React-based framework that enables
developers to create websites and apps. It takes various sources, pulls them
into a GraphQL data source, and then gives access to this data in React
templates that are build out to static HTML, CSS, and JavaScript.

### Build phases

There are 3 phases of a Gatsby build:

1. The local and remote sources tare imported to GraphQL nodes.
2. Nodes are transformed to add further information, parse content (such as Markdown), and link nodes together.
3. Data is passed to the page template to compile the site to HTML, CSS and JS.

## Site compilation

When all the data is loaded, it's available as a GraphQL data source to
various pages, that can query the data and render it as a React site.
Pages in Gatsby are plain React components. Currently rendered pages
are available [here].

[Gatsby]: https://www.gatsbyjs.com/
[here]: https://github.com/box/developer.box.com-framework/tree/main/src/localized