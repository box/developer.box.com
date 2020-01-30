---
hide: true
---

<!-- does not need translation -->

# Frontmatter

Frontmatter is the data at the top part of a markdown file that can be found
between two sets of dashes.

```md
---
id: 1
---

Markdown content
```

<!-- markdownlint-disable line-length -->

We support the following frontmatter in our documentation:

| Key                 | Description                                                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alias_paths`       | A list of paths to redirect from to this page. Used to smoothly redirect old URLs to new ones                                                                                                            |
| `centered`          | Wraps a page (not a guide) in a `<Centered>` element in order to center the content in the middle of the page.                                                                                           |
| `hide`              | Hides this page from search.                                                                                                                                                                             |
| `hide_in_page_nav`  | Hides the right-hand in-page navigation.                                                                                                                                                                 |
| `hide_step_number`  | Hides the step number in the left-hand sidebar for quick start guides.                                                                                                                                   |
| `hide_title`        | Hide the title of a page. Used on the homepage.                                                                                                                                                          |
| `rank`              | The rank of a page. This is used to sort pages in the sidebar and other lists of pages.                                                                                                                  |
| `related_endpoints` | A list of endpoint IDs (for example `get_files_id`) that are related to this guide/page. These are shown at the bottom of the page, after the markdown content.                                          |
| `related_guides`    | A list of guide IDs (for example `tooling/postman`) that are related to this guide/page. These are shown at the bottom of the page, after the markdown content.                                          |
| `related_pages`     | A list of page IDs (for example `sdks-and-tooling`) that are related to this guide/page. These are shown at the bottom of the page, after the markdown content.                                          |
| `related_resources` | A list of resource IDs (for example `file`) that are related to this guide/page. These are shown at the bottom of the page, after the markdown content.                                                  |
| `required_guides`   | A list of prerequisite guide IDs (for example `tooling/postman`) that are required reading for this guide/page. These are shown at the top of the page, after the title but before the markdown content. |
| `type`              | An optional type of guide / page that this represents. The only valid value for now is a `quick-start` guide.                                                                                            |

<!-- markdownlint-enable line-length -->
