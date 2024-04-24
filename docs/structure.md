# Project structure & frontmatter

[**Previous:** Notes for Box employees](./boxers.md) |
[**Next:** Adding a new guide](./add-guide.md)

---

This project contains markdown for guides, pages, and quick starts. Additionally
it contains Yaml files for the microcopy used across the site.

## Project structure

The following is the rough layout of this project.

- `content/` - The folder containing the actual content of the guides, pages,
  microcopy, etc. This is generally the folder you will want to edit.
    - `dictionaries/` - A folder containing the US English dictionary used to
      run the spell check. This dictionary is included here to ensure consistent
      spell checking across different operating systems, languages, and
      environments.
    - `guides/` - A list of guide pages used to render everything under
      `/guides` on `developer.box.com`. In general, the path of a guide maps to
      the path used, for example `guides/tasks/1-create.md` maps to
      `developer.box.com/guides/tasks/create`.
    - `microcopy/` - A folder containing all the microcopy and configuration
      used by the developer site. Microcopy contains the strings used in the web
      app on buttons, links, navigation, and more.
        - `index.yml` - This is the entry point for the microcopy. All the other
          files are (and need to be) linked in here using a `$ref` statement.
        - `*.yml` - An mapping of keys (and nested keys) to string values that
          can be used as microcopy. Each of these files is mapped to a `$ref` in
          the `index.yml`.
    - `pages/` - A list of non-guide pages used to render arbitrary pages under
      `/` on `developer.box.com`. In general, the path of a page maps to
      the path used, for example `pages/support/community-projects.md` maps to
      `developer.box.com/support/community-projects`.
    - `templates/` - A list of template files that can be used to create a page
      or guide.
- `compiled/` - This is where the transpiled markdown and microcopy is written
  to after running `yarn build`.
- `src/` - The code base that includes helpers for building and linting code.
- `tests/` - The actual tests used to verify that our building and linting code
  works as expected.
- `.spelling` - Contains additional words to add to the dictionary.

## Ranks and ordering

To order guides and pages within on the site we use the `rank` frontmatter.
The lower the rank value, the higher it's rendered in the sidebar and navigation
on the developer site.

```md
---
rank: 123
---

# Title

Content
```

Alternatively we support putting the rank in the filename, as this makes it
easier to see the order at a glance.

```bash
$ ls content/guides/metadata/5-queries

0-index.md
1-create.md
2-syntax.md
3-pagination.md
4-errors.md
5-limitations.md
6-indexes.md
7-comparison.md
```

When these files are transpiled the rank is removed from the file path and added
to the markdown frontmatter.

## Frontmatter

At the top of every Markdown file you will find a bit of extra metadata about
the content. This metadata is called **frontmatter** and the format is as `yaml`
between two lines containing triple dashes (`---`).

Frontmatter is used to provide extra details to the Box build system. We
currently support the following fields.


| Name                | Default      | Description                                                                                                                                                                                                                  |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alias_paths`       | `[]`         | A list (array) of paths that need to redirect to this page. This is used to redirect old, deperacted pages to new locations. For example, will begin with `/guides/...`.                                                     |
| `centered`          | `false`      | Centers the content of a page in the middle of the browser rather than use the whole width of the browser. Guides are automatically wrapped like this.                                                                       |
| `hide`              | `false`      | Hides a page or guide from end users and search enginers. Used to create oages that can only be found if you know the link.                                                                                                  |
| `hide_in_page_nav`  | `false`      | Hides the right-hand in-page navigation that shows the headers in a page. This is mostly needed on pages that have a lot of hidden elements, like quick-start guides.                                                        |
| `hide_step_number`  | `false`      | Hides the step number of a quick-start guide step in the left hand navigation. This is mostly used for the first and last page in a quick start guide.                                                                       |
| `hide_title`        | `false`      | Removes the title from the page.                                                                                                                                                                                             |
| `icon`              | `null`       | Specifies the icon to use to identify a quick-start guide. This icon needs to be a Feather Icon taken from the `react-icons` NPM package.                                                                                    |
| `notes`             | `""`         | A free-form field that can be used to store notes about the page. Ignored by all downstream dependencies.                                                                                                                    |
| `rank`              | `null`       | The numeric rank of a page, used to order a page or guide within its category. This overrides any rank in the filename (`1-test.md`).                                                                                        |
| `related_endpoints` | `[]`         | A list (array) of endpoint IDs that are related to this page. This is used to add links to that endpoint at the botton of the page, as well as add links to this page at the bottom of the endpoint.                         |
| `related_guides`    | `[]`         | A list (array) of guides (their paths) that are related to this page. This is used to add links to those guides at the botton of this page, as well as add links to this page at the bottom of those guides.                 |
| `related_pages`     | `[]`         | A list (array) of pages (their paths) that are related to this page. This is used to add links to those pages at the botton of this page, as well as add links to this page at the bottom of those pages.                    |
| `related_resources` | `[]`         | A list (array) of resource IDs that are related to this page. This is used to add links to that resource at the botton of the page, as well as add links to this page at the bottom of the resource.                         |
| `required_guides`   | `[]`         | A list (array) of guides (their paths) that are a prerequisite to this page. This is used to add links to those guides at the botton of this page, as well as add links to this page at the bottom of those guides.          |
| `type`              | `guide|page` | The type of the markdown file. This defaults to `page` for all markdown files in the `pages/` folder and `guide` for all markdown in the `guides/` folder. Additionally, guides can be marked as `quick-start` where needed. |


---

[**Next:** Adding a new guide](./add-guide.md)
