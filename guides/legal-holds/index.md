---
rank: 160
alias_paths: []
category_id: legal-holds
subcategory_id: null
is_index: true
id: legal-holds
type: guide
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: legal-holds/get
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/legal-holds/index.md
---
# Legal Holds

A legal hold is a process that an enterprise can use to preserve all forms of
potentially relevant information when litigation is pending or reasonably
anticipated. Applying a hold to items prevents any user from deleting them from
Box.

Legal Holds can be managed and assigned to folders and files through the Box
APIs.

<Message>

Legal Holds are a feature of the [Box Governance][governance] package, which
can be added on to any Business Plus, Enterprise Advanced or Enterprise account.

</Message>

## Policies, Assignments, and Holds

Working with Legal Hold Policies requires a developer to work with three
distinct resources.

* **Policies:**  A [Legal Hold Policy][policy] describes the general behavior of the hold. It determines which files should be affected, based on the date and time the files were created or updated.
* **Assignments:** A [Legal Hold Policy Assignment][assignment] is a relation between a policy and custodian. In this case, as custodian can be a user, folder, file, or file version. Creating an assignment puts a hold on all the file versions that belong to the custodian. For example, if an assignment is created on a folder the policy is applied to all file versions within that folder.
* **Holds**: A [File Version Legal Hold][hold] represents all the policies that are assigned to a specific file version. Note that every file version can have a maximum of one file version legal hold and this hold contains a list of every assigned policy.

## Example Use Case

If an order of discovery is received or the customer is part of an ongoing
litigation, a legal hold policy can be created to keep track of everything that
needs to be held. The actual holding is done by assigning a policy to a specific
files or folder. When the holds are no longer needed, the policy can be released
by deleting the assignment.

## Required Scopes

Before using any of the Legal Hold APIs, an application must have the [GCM and
Manage Legal Hold scopes][scopes] enabled. These are not available in the
Developer Console and need to instead be enabled by contacting customer
support.

[scopes]: g://api-calls/permissions-and-errors/scopes
[policy]: r://legal_hold_policy
[assignment]: r://legal-hold-policy-assignment
[hold]: r://file_version_legal_hold
[governance]: https://www.box.com/security/governance-and-compliance