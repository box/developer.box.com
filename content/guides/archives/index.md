---
rank: 1
related_endpoints:
  - post-archives
  - get-archives
  - delete-archives-id
  - put-files-id
  - put-folders-id
related_resources:
  - archive
related_guides:
  - archives/add-content
  - archives/restore-content
  - archives/supported-apis
required_guides: []
alias_paths: []
---

# Box Archive

<Message type='notice'>
Box Archive is available only for Enterprise Advanced accounts.
</Message>

Box Archive allows you to create and manage archives. An archive is a folder dedicated to
storing content that is redundant, outdated, or trivial. Content in an archive is owned by the enterprise,
it is not accessible to previous owner and collaborators.

## Archives are folders

Archives are a special type of folder. Box Archive APIs allow you to create, list and delete archives.
However, there are other APIs that also work with archives or with content within archives.
For a full list of supported APIs, see the [Supported APIs][Supported APIs] guide.

## Required scopes

Before using any of the Box Archive APIs, make sure you can access [Box Archive in Admin Console][Box Archive in Admin Console].
Your Box Platform app must have the `GCM` and `Read and write all files and folders` scopes enabled.
If you plan to only view archives and not modify them, you can use `Read all files and folders` instead of the `Read and write all files and folders` scope.
Please note that the `GCM` scope is not available in the Developer Console and needs to be enabled by contacting customer support.

[Supported APIs]: g://archives/supported-apis
[Box Archive in Admin Console]: https://support.box.com/hc/en-us/p/Product_Page_2023?section-id=40168863437843
