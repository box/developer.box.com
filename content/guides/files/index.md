---
rank: 60
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
---

# Files

Files, together with [Folders][folders], are at the core of the Box API. File
can be [uploaded][uploaded] and [downloaded][download], as well as hold
important metadata information about the content.

## Name restrictions

There are some restrictions to a file's name. Names containing non-printable
ASCII characters, forward and backward slashes (`/`, `\`), and protected names like
`.` and `..` are automatically sanitized by removing the non-allowed characters.
