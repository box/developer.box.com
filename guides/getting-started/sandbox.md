---
rank: 4
related_guides:
  - authentication
  - authorization
  - api-calls
category_id: getting-started
subcategory_id: null
is_index: false
id: getting-started/sandbox
type: guide
total_steps: 4
sibling_id: getting-started
parent_id: getting-started
next_page_id: ''
previous_page_id: getting-started/publish-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/sandbox.md
---
# Sandboxes in Box Platform

Developer sandboxes in Box provide a secure, controlled environment where developers can build, test, and collaborate on applications without affecting the actual data of your enterprise. They offer a safe space to experiment with Box APIs, test settings, try new integrations, and work alongside external partners.

## What is a developer sandbox

A developer sandbox is an environment isolated from your production (live) enterprise setup that keeps development activities separate from real business data.

## Why use a sandbox

Using a sandbox allows you to:

* Safely build apps within an enterprise-linked environment instead of a free standalone account.
* Collaborate securely with both internal teams and external collaborators. Contractors, partners, and other external users can join the sandbox without accessing live systems and compromising security.
* Test apps under realistic testing conditions, as sandboxes inherit your enterprise's plan and add-ons at creation time. If there are any changes to the plan or add-ons, they can be [manually synced][4] by an enterprise admin.

## Accessing your sandbox

Sandboxes in Box are created by enterprise admins. See [this document][1] to learn how to create a sandbox.
When you are assigned as a primary admin of a sandbox, you receive a log-in email from Box with your sandbox user ID.

To access the [Dev Console][2] inside the sandbox environment and set up a password, click the link in the email. You can also access your sandbox by logging in with your sandbox credentials on [developer.box.com][3].

The sandbox's primary admin can create individual sandbox accounts, giving developers access to a new Box environment that matches the plan of their parent Box enterprise.

### Accessing multiple sandboxes

As a primary admin, you can log into multiple sandboxes. If you want to use this functionality for existing sandboxes, you can remove the unique email address and get a system generated email.

[1]: https://support.box.com/hc/en-us/articles/360043697274-Managing-developer-sandboxes-for-Box-admins
[2]: https://cloud.app.box.com/developers/console
[3]: https://developer.box.com
[4]: https://support.box.com/hc/en-us/articles/360043697274-Managing-developer-sandboxes-for-Box-admins#:~:text=in%20a%20sandbox.-,Synchronizing,-sandbox%20with%20production