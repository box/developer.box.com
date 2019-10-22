---
rank: 1
alias_paths: []
---

# Handle Skills Events

Once a Box Skill has been set up it will call your application at the application's
configured `invocation_url` every time a file is uploaded. It's up to your
application to parse the payload, pass the file to any other service, and write
back any metadata.
