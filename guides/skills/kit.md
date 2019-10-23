---
rank: 3
related_endpoints: []
related_guides: []
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/build-a-box-skill
  - /page/box-skills-kit
cId: skills
scId: null
id: skills/kit
isIndex: false
---

# Box Skills Kit

The Box Skills Kit is a Node wrapper that is designed to abstract many of the
common complex operations required during the Box Skills development process.

These complex operation abstractions include:

* Interpreting and extracting relevant data from the notification payload sent
from Box.
* Making authenticated calls using the downscoped tokens in the
[Skills event payload](guide://skills/handle/payload) to download the file
stored in Box.
* Simplifying the operations around storing metadata back to the file stored in
Box.

For a complete overview of the Node Box Skills kit, see the
[Github documentation][github-skills-kit].

[github-skills-kit]: https://github.com/box/box-skills-kit-nodejs/tree/master/skills-kit-library
