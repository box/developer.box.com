# Notes for Box employees

[**Previous:** Contribution guidelines](./index.md) |
[**Next:** The project structure and frontmatter](./structure.md)

---

The following content is for Box employees only. If you are not a Box employee
you can skip this section.

## `Jira` & `Slack`

There are a few internal sources that are of interest to Box employees.

* **`Slack`** - When making changes to a guide, it would be good to clarify why
  you think this needs to be documented. Some Box features are not meant to be
  documented, are deprecated, or have been added by accident. Please check in
  with the team who owns the feature to make sure that the feature can be
  documented.
* **`Jira`** - When working on the microcopy and markdown, please open
  a **`DDOC`** `Jira` ticket. The developer relations team maintain our
  developer documentation. As our documentation is automatically build off these
  files they are often involved in approving these kind of changes.
  For developer documentation support you can therefore open a **`DDOC`**
  ticket to request their support.

## Branches & Pull Requests

When working on this project we recommend the following best practices:

* **Branches:** Please only work on a feature branch, as the `main` branch is
  protected. Please use a descriptive name for your branch that mentions both
  the `Jira` ticket this relates to, as well as a human description of the change.
  For example: `ddoc-123/add-ice-cream-guides`
* **Pull Requests:** When opening a Pull Request, please use the
  template to provide all the information needed.
  * Any **DDOC** or **APIWG** `Jira` tickets that this change is related to
  * An estimated date when this change is to go live, if known.
  * A description of the change made
* **Draft Pull Requests:** When working on a design change that has not yet been
  approved or isn't ready to be published, we high recommend creating a **draft
  Pull Request**, as it won't be accidentally merged before the change is ready.

---

[**Next:** The project structure and frontmatter](./structure.md)
