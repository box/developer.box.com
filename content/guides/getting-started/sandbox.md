---
rank: 4
related_guides:
- authentication
- authorization
- api-calls
---

# Sandboxes in Box Platform

Developer sandboxes in Box provide a secure, controlled environment where developers can build, test, and collaborate on applications without affecting the actual data of your enterprise. They offer a safe space to experiment with Box APIs, try new integrations, and work alongside external partners.

## What is a developer sandbox?

A developer sandbox is an isolated environment that mimics your production (live) enterprise setup but keeps development activities separate from real business data.

## Why use a sandbox?

Using a sandbox allows you to:

* Safely build apps: develop securely within an enterprise-linked environment instead of a free standalone account.
* Collaborate securely: you can work with both internal teams and external collaborators. Contractors, partners, and other external users can join the sandbox without accessing live systems and compromising security.
* Test apps under realistic testing conditions: your sandbox setup closely matches your live production settings, as sandboxes inherit your enterprise’s plan and add-ons.
* Catch issues early: sync sandbox updates with any major changes in your
enterprise's production environment.

## Accessing your sandbox

<Message type='notice'>
Sandboxes in Box are created by the enterprise admins. See [this document][1] to learn how to create a sandbox.
</Message>

When you are assigned as a primary admin of a sandbox, you receive a log-in
email from Box with your sandbox user ID. 

Click the link in the email to access the [Dev Console][2] inside the sandbox environment and set up a password. You can also access your sandbox by logging in with your sandbox credentials on [developer.box.com][3]. 

As a primary sandbox admin, you can create individual sandbox user accounts to provide other developers access to it.

[1]: https://support.box.com/hc/en-us/articles/360043697274-Managing-developer-sandboxes-for-Box-admins
[2]: https://cloud.app.box.com/developers/console
[3]: https://developer.box.com
