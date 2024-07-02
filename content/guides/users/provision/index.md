---
rank: 1
alias_paths:
  - /docs/provision-user-accounts
---

# Provision Users

When setting up a brand new Box user account, a common need is to have that new
account be populated with standard folders, collaborations, and group
associations.

Typically there are some common questions that may be asked about the user
account to determine when standard setup may be needed for the account:

* Will the user need access to standard company files or folders immediately?
* Are collaborations associated individually or through groups? If through a group association, are there any standard groups that the user should be added to?
* Should the user be assigned any tasks to complete?
* Would any instructional comments on any files be helpful?

<Message danger>
  # New User Password Resets and Email Confirmation

  You may experience some errors when creating users and immediately trying to
  take actions with that user through the API. For example, a common error to
  receive is `user_email_confirmation_required` or `password_reset_required`.
  These kinds of errors may block some actions within the API, but you can
  still add the user as a collaborator on folders, add the user to groups, etc.
</Message>

## Sample Overview

In this scenario we'll focus on provisioning a new
[Box Managed User][managed], as there
are very different considerations when provisioning Box App User accounts.

We'll start with solving the most repeatable aspects of
provisioning a user's account, creating a general folder and file structure
that everyone will have on first login, using groups to control access to
shared files and folders for users.

[managed]:page://platform/user-types/#managed-users
