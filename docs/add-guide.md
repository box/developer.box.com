# Adding a guide

[**Previous:** The project structure and frontmatter](./structure.md) |
[**Next:** Add a page](./add-page.md)

---

## Scaffold a guide

The simplest way to create a new guide is with the `yarn new:guide` command.

```sh
yarn new:guide automation/webhook/create
```

This would create a new markdown file based on a template in
`content/guides/automation/webhook/create.md`, creating any folders if needed.

## Lint a new guide

Once created, lint the page using `yarn lint`. Any spelling mistakes or broken
links should pop up automatically.

---

[**Next:** Add a page](./add-page.md)
