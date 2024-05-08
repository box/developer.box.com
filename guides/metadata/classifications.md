---
rank: 7
related_endpoints:
  - post_metadata_templates_schema#classifications
  - >-
    put_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema#add
  - >-
    put_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema#update
  - >-
    put_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema#delete
  - post_files_id_metadata_enterprise_securityClassification-6VMVochwUWo
  - post_folders_id_metadata_enterprise_securityClassification-6VMVochwUWo
related_resources:
  - classification
category_id: metadata
subcategory_id: null
is_index: false
id: metadata/classifications
type: guide
total_steps: 2
sibling_id: metadata
parent_id: metadata
next_page_id: metadata
previous_page_id: metadata/scopes
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/classifications.md
---
# Classifications

Box enables users and applications to apply a security classification label
to files, and cascade a classification label to folders and their contents.
Classifications help protect shared sensitive content from negligent access
through Box's Governance and Shield products.

The Classification API can be used to create new classification labels
and to assign classifications to files and folders.

<ImageFrame border center>

![String field](./classification-example.png)

</ImageFrame>

Classifications use the [Metadata APIs](g://metadata) to create classification
labels, and to assign classifications to files and folders. For more details on
metadata templates and instances, please explore our guides
on [Metadata](g://metadata).

## Classifications & Metadata

Working with classifications requires a developer to work with metadata
templates and instances.

* **The Classification Template:**  to work with classifications, an enterprise needs to have a classification metadata template with at least one classification. This template needs to have a `scope`/`templateKey` of `enterprise.securityClassification-6VMVochwUWo`. This template will hold the possible classification levels, their label names, descriptions, and `colorID` values.
* **Template Instances**: to apply a classification to a file or folder, a developer applies an instance of the `enterprise.securityClassification-6VMVochwUWo` template to the item. When the template is applied, one of the classifications is selected from the list of classifications on the template.