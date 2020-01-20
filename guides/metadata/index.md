---
rank: 160
alias_paths:
  - /docs/work-with-metadata
category_id: metadata
subcategory_id: null
id: metadata
type: guide
is_index: true
total_steps: 0
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: ''
---

# Metadata

Metadata allows users and applications to define and store custom data
associated with their files and folders.

Metadata consists of key/value pairs that belong to a file or folder folders.
For example, an important contract may have key/value pairs of
`clientNumber: 820183` and `clientName: bioMedicalCorp`.

## Templates, Instances, and Cascades

Working with Metadata requires a developer to work with three
distinct types of resources.

* **Templates:**  A [Metadata Template][template] describes a set of key/value
  pairs that can be assigned to a file. For example, an `invoiceData` template
  might hold data about an invoice, having a field for the invoice ID as well as
  the purchase order ID.
* **Instances:** A [Metadata Instance][instance] describes the relation between
  a template and a file or folder, including the metadata values. For example, a
  user might have assigned an `invoiceData` metadata template to a file and
  provided 2 values, one for the invoice ID and one for the purchase order ID.
* **Cascades**: A [Metadata Cascade Policy][cascade] describes automatic
  cascading behavior for a metadata template on a folder. For example, a user
  might assign the same `invoiceData` metadata template to a project folder
  (including the 2 values), allowing them to automatically apply to all the
  files and folders within that folder.

## Reasons to use metadata

Metadata can be used for many purposes. Enterprises may want to have a better
way to organize their digital assets for their marketing teams, or developers may
want to provide advanced content functionality such as facilitating workflows or
approvals.

For example, a `marketingCollateral` template may define where and when specific
marketing content should be used. Users can see a representation of the
template in the Box web application while navigating to a file preview.

To learn more, please visit [Box community articles][community].

[community]: https://community.box.com/t5/Organizing-and-Tracking-Content/Using-Metadata/ta-p/30765
[template]: g://metadata/templates
[instance]: g://metadata/instances
[cascade]: g://metadata/cascades
