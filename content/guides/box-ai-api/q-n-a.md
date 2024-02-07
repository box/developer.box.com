---
# This is a Frontmatter header for Markdown files.
# Frontmatter starters with a tripple-dash and ends
# with another tripple dash.

# The content in here won't be rendered, and no data
# in here will be translated.

# TODO/CHANGE: Pages sort by rank, then alphabet
rank: 1
# TODO/CHANGE: Set to any number of endpoint IDs or []
# to be shown at the end of a Guide as being related.
#
# Endpoint IDs can be found in the OpenAPI spec
# as "operationId".
related_endpoints: []
# TODO/CHANGE: Set to any number of resource IDs or []
# to be shown at the end of a Guide as being related.
#
# Resource IDs can be found in the OpenAPI spec
# as the key of the resource in the components list
related_resources: []
# TODO/CHANGE: Set to any number of guides or []
# to be shown at the end of a Guide as being related.
#
# Guide IDs are the path of this file in this project,
# from the "guides" folder onward. The extension is
# omitted.
#
# For example, for the /content/guides/foo/bar/baz.md file,
# the ID would be foo/bar/baz.
related_guides: []
# TODO/CHANGE: Set to any number of guides or []
# to be shown at the end of a Guide as being related.
#
# Guide IDs are the path of this file in this project,
# from the "guides" folder onward. The extension is
# omitted.
#
# For example, for the /content/guides/foo/bar/baz.md file,
# the ID would be foo/bar/baz.
required_guides: []
# TODO/CHANGE: Set to any number of URLs or []
# to redirect from to this page.
#
# This is used to maintain backwards compatibility with
# older URLs, allowing us to change URLs and still maintain
# paths.
#
# This generally only works for the primary locale,
# in this case English. Translared guides wont redirect.
alias_paths: []
---

# Question and Answer

From here everything is Markdown.

The first title in the page will be used as the name of the guide everywhere in
the site.

Additionally, wee have extended the markdown with React components.