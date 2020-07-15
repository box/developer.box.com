---
rank: 1
related_endpoints:
  - post_files_id_metadata_global_boxSkillsCards
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/configure-a-box-skill
---

# Setup

Setting up a Custom Skill is a multi-step process.

## Prerequisites

To set up a Custom Skill you will need to pass the following requirements.

* You need to be a be able to access the [Developer Console][devconsole] for
  your enterprise, or sign up for a [developer account][devaccount].

## Create the app

### 1. Log in to the Developer Console

Head over to the [Developer Console][devconsole] and select **Create New App**.

### 2. Create a Custom Skill

Select the **Custom Skill** option from the list of application types and select
**Next**.

<ImageFrame border>

![Application selection screen](../images/app-types-skill.png)

</ImageFrame>

### 3. Provide a name

On the next screen, provide a unique name for your application. This name needs
to be unique across all applications on Box.

<ImageFrame border width="600" center>

![App name form](../images/app-name.png)

</ImageFrame>

## Approval

Before a Custom Skill can be used it needs to be assigned to a folder for which
the skill should trigger.

<CTA to='g://applications/custom-skills/approval'>
  Learn more about approving Custom Skills
</CTA>

## Basic configuration

Before a Custom Skill can be enabled enabled on a folder, some basic additional
configuration needs to be set up.

### Invocation URL

Custom Skills work by sending a payload for every file uploaded a remote URL.
This URL is called the invocation URL.

The Invocation URL can be any HTTP endpoint representing a server, development
machine, or serverless function. The only condition is that the URL is publicly
available and accessible by the Box servers. For this reason, `localhost` is not
a valid address.

To set up the Invocation URL, head over to the [Developer Console][devconsole],
select your application, and select on the "Configuration" panel on the left
hand side.

Scroll down to the "Invocation URL" section.

<ImageFrame border width="600" center>

![App name form](../images/app-invocation-url.png)

</ImageFrame>

Fill in a secure HTTPs address and save the form. The invocation URL has now
been configured.

### File Extensions

By default a Custom Skill will trigger for any file type in the folder. To
specify specific file extensions to trigger the Skill for, scroll down to the
"File Extensions" section of the "Configuration" panel of your application.

<ImageFrame border width="600" center>

![App name form](../images/app-file-extensions.png)

</ImageFrame>

[devconsole]: https://app.box.com/developers/console
[devaccount]: https://account.box.com/signup/n/developer
