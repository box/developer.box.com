---
related_endpoints:
  - get_metadata_templates_global
  - get_metadata_templates_enterprise
related_guides: []
related_resources:
  - metadata
  - metadata_template
required_guides: []
alias_paths: []
---

# Metadata template scopes

Metadata templates are grouped into two distinct groups, or **scopes**.

* **`global`**: a group of templates that is available to everyone using Box, regardless of the enterprise they are in. An example is the `global.properties` template that serves as a place to put free-form key/value `string` pairs without any additional schema associated with it.
* **`enterprise`** or **`enterprise_*`**: a group of templates defined by a user within an enterprise. These templates are either created by admin's in the web application, or by applications using the API. When accessing or creating templates within the authenticated user's enterprise a short-hand of `enterprise` can be used. When accessing templates that belong to another enterprise - for example when accessing metadata on files belonging to other enterprises - the scope `enterprise_*` is used where `*` is the ID of the enterprise the template belongs to.

<Message warning>
  # Permissions

  It is important to note that no metadata templates can be created within the
  `global` scope, and that metadata templates made within the user's enterprise
  can only be accessed by users with access to that enterprise.
</Message>
