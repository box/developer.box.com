---
---

# Metadata Template Scopes

Metadata templates are grouped into two distinct groups, or **scopes**.

* **`global`**: a group of templates that is available to everyone using Box,
  regardless of the enterprise they are in. An example is the
  `global.properties` template that serves as a place to put free-form key/value
  `string` pairs without any additional schema associated with it.
* **`enterprise_*`**: a group of templates defined by that specific enterprise.
  These templates are either created by admin's in the web application, or by
  applications using the API.

<Message warning>
  # Permissions 

  It is important to note that no metadata templates can be created within the
  `global` scope, and that metadata templates made within the user's enterprise
  can only be accessed by users with access to that enterprise.
</Message>