---
---

# Metadata cascade policies (Beta)

<Message warning>
  Metadata cascade policies are currently in Beta and the syntax might change in
  the future.
</Message>

A metadata cascade policy describes how [metadata
instances][instance] applied to a folder should be applied to any item
within that folder. For example, a user might assign the same `invoiceData`
metadata template to a project folder allowing it to automatically apply to all
the files and folders within that project folder.

Every policy specifies exactly one metadata template instance and one folder.

## Activation and permissions

To use metadata cascade policies, an enterprise admin needs to enable them for
the entire enterprise. In the **Admin Console**, select **Enterprise Settings**,
**Content & Sharing**, **Cascading Folder Level Metadata**. Click the **Edit
configuration** button and pick who can apply cascade policies to folders.

Any user with edit permissions on a folder and the ability to create cascade
policies can create metadata cascade policies for that given folder.

## Limitations

There is some delay from file upload to the metadata being applied. This very
much depends on the number of items in a folder. Metadata cascade operations
are performed asynchronously and there is currently no way to check when all
metadata has been cascaded to all files.

[instance]: g://metadata/instances
