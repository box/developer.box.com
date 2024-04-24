# Adding a quick start guide

[**Previous:** Add a page](./add-page.md) |
[**Next:** Add microcopy](./add-microcopy.md)

---

## Scaffold a guide

The simplest way to create a new quick start guide is with the `yarn new:guide`
command.

```sh
yarn new:guide webhooks/quick-start/index
```

This would create a new markdown file based on a template in
`content/guides/webhooks/quick-start/index.md`, creating any folders if needed.

## Convert a guide to a quick-start guide

Next, take the new markdown file and copy it to create the pages needed. For
example this is a quick-start with 3 steps, an overview, and a next steps page.
The number in the path represents the order of the steps.
```
webhooks/quick-start/0-index.md
webhooks/quick-start/1-setup.md
webhooks/quick-start/2-handle.md
webhooks/quick-start/3-index.md
webhooks/quick-start/4-next-steps.md
```

Next, in each file update the frontmatter to set the type of these guides to
`quick-start` and configure what pages to show the index for.

```md
---
hide_in_page_nav: true
hide_step_number: true
icon: FiCpu
---

# Webhooks

...
```

Here are some of the frontmatter fields specifically relative to a quick start guide.


| Name                | Default      | Description                                                                                                                                                                                                                  |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hide_in_page_nav`  | `false`      | Hides the right-hand in-page navigation that shows the headers in a page. This is mostly needed on pages that have a lot of hidden elements, like quick-start guides.                                                        |
| `hide_step_number`  | `false`      | Hides the step number of a quick-start guide step in the left hand navigation. This is mostly used for the first and last page in a quick start guide.                                                                       |
| `icon`              | `null`       | Specifies the icon to use to identify a quick-start guide. This icon needs to be a Feather Icon taken from the `react-icons` NPM package.                                                                                    |
| `rank`              | `null`       | The numeric rank of a page, used to order a page or guide within its category. This overrides any rank in the filename (`1-test.md`).                                                                                        |
| `type`              | `guide|page` | The type of the markdown file. This defaults to `page` for all markdown files in the `pages/` folder and `guide` for all markdown in the `guides/` folder. Additionally, guides can be marked as `quick-start` where needed. |


## Lint a new quick start guide

Once created, lint the page using `yarn lint`. Any spelling mistakes or broken
links should pop up automatically.

---

[**Next:** Add microcopy](./add-microcopy.md)
