---
related_endpoints:
  - delete_metadata_templates_id_id_schema
related_guides: []
related_resources:
  - metadata_template
required_guides: []
alias_paths: []
---

# Delete a metadata template

Deleting a metadata template can be achieved by calling the [`DELETE
/metadata_templates/enterprise/:templateKey/schema`][endpoint] API. 

<Samples id="delete_metadata_templates_id_id_schema" />

This API returns a `204 No Content` API response with no response body when
the template has been successfully deleted. This API also removes all the
template instances from any files and folders.

Only templates created within the `enterprise` scope can be deleted.

<Message warning>
  # Admin permissions required

  Deleting metadata templates is restricted to users with admin permission. This
  means that only admins, or co-admins who have been granted rights to **Create
  and edit metadata templates for your company** by the admin can use the web
  app or the API to manage templates.
</Message>

[endpoint]: e://delete_metadata_templates_id_id_schema
