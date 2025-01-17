---
rank: 200
alias_paths: []
---

# Retention Policies

A retention policy blocks permanent deletion of content for a specified amount
of time. Admins can create retention policies and then assign them to
specific folders or their entire enterprise. Retention policies can be used to
keep data for as long as is needed, and then automatically delete the content
permanently when the data can no longer be legally held.

<Message>
  Retention Policies are a feature of the [Box Governance][governance] package,
  which can be added on to any Business Plus or Enterprise account.
</Message>

## Policies, Assignments, and Retentions

Working with Retention Policies requires a developer to work with three
distinct resources.

* **Policies:**  A [Retention Policy][policy] describes the general behavior of the retention policy. It determines how long a retention should stay in place, if it can be extended, and what happens when the retention policy ends.
* **Assignments:** A [Retention Policy Assignment][assignment] is a relation between a policy and folder or enterprise. Creating an assignment puts a retention on all the file versions that belong to that folder or enterprise. For example, if an assignment is created on a folder the policy is applied to all file versions within that folder.
* **Retentions**: A [File Version Retention][retention] represents all the policies that are assigned to a specific file version. Note that every file version can have a maximum of one file version retention and that this resource contains a list of every assigned policy.

<Message type='warning'>
  The [file version retention][retention] section of the Box API
  is now deprecated. Instead, you can use [files under retention][files-under] or
  [file versions under retention][file-versions-under] endpoints.
</Message>

## File Deletion with Retention Policies

Files under retention can be deleted from folders, but they will be retained in
the trash until the retention expires. When the retention expires,
you can choose to have the content automatically deleted or for the policy to be
removed.

## Extend Retention for a File

Files under retention can have their retention date extended by
[updating][extend-retention] the `disposition_at` field's value with a future
date. Once the date has been extended, it cannot be reverted or changed to be
prior to the new date.

## Required Scopes

Before using any of the Retention Policy APIs, an application must have the [GCM
and Manage Retention Policies scopes][scopes] enabled. These are not available
in the Developer Console and need to instead be enabled by contacting customer
support.

[scopes]: g://api-calls/permissions-and-errors/scopes
[policy]: r://retention_policy
[assignment]: r://retention_policy_assignment
[retention]: r://file_version_retention
[governance]: https://www.box.com/security/governance-and-compliance
[files-under]: e://get-retention-policy-assignments-id-files-under-retention
[file-versions-under]: e://get-retention-policy-assignments-id-file-versions-under-retention
[extend-retention]: e://put-files-id/#param-disposition_at
