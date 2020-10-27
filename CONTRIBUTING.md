# Contributing

All contributions are welcome to this project.

## Contributor License Agreement

Before a contribution can be merged into this project, please fill out the
Contributor License Agreement (CLA). Any new contributor will be prompted to
sign this agreement our CLA bot upon creating a pull request.

## Development

To contribute to this project we highly recommend reading our guides on
making contributions.

1. [Installation & setup](./docs/index.md)
1. [Notes for Box employees](./docs/boxers.md)
1. [The project structure and frontmatter](./docs/structure.md)
1. [Adding a new guide](./docs/add-guide.md)
1. [Adding a new page](./docs/add-page.md)
1. [Adding a new quick start guide](./docs/add-quick-start-guide.md)
2. [Adding microcopy](./docs/add-microcopy.md)
3. [Contributing a pull request](./docs/pull-request.md)
4. [Markdown styleguide](./docs/markdown.md)
5. [Updating dependencies](./docs/dependencies.md)

## Deployment

When pushing to the `main` or `staging` branch, GitHub actions will run the
linter and tests and will push the compiled OpenAPI spec to the `en` and
`en-staging` branches respectively.

The pushing of these compiled branches will kick-off a rebuild of the developer
sites, as well as the Postman collections.

## Translation

On a regular schedule a snapshot of the `en` branch is created on the
`en-snapshot` branch and imported into our in-house translation system
(`Moji`) and sent off for translation.

Once the translation is completed, the translated content is pushed to the `jp`
branch, which then triggers a rebuild of the Japanese developer documentation.
