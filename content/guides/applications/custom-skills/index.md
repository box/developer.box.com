---
rank: 3
alias_paths:
  - /docs/box-skills
  - /page/box-skills-kit
  - /docs/getting-started-with-box-skills
  - /docs/box-skills-1 
  - /skills
related_endpoints:
  - post_files_id_metadata_global_boxSkillsCards
---

# Customs Skills

A Custom Skill, or Box Skill is a type of application that performs custom
processing for files uploaded to Box. Skills are designed to make it
straightforward to use third-party Machine Learning services to automatically
extract information from files uploaded to Box and apply the resulting data as
metadata on the file.

<ImageFrame shadow>

![Skills example](./images/skills-example.png)

</ImageFrame>

Custom Skills need to be enabled on a folder by a Box Admin. After this an event
is sent to the Skill's application server every time a file is uploaded to the
folder. This application can then download the file, inspect it or hand it off
to a machine learning service, and write powerful metadata to the file.

<CTA to='g://skills/'>
  Start building a Custom Skill
</CTA>

## Authentication method

Working with Custom Skills is simplified by the pre-authorized API credentials
that are provided with every Skill Event. For this reason though, Custom Skills
allow for limited API access, mainly to read the file and write Metadata to the
file.

## Approval

Before a Custom Skill can be used it needs to be assigned to a folder for which the
skill should trigger.

<CTA to='g://applications/custom-skills/approval'>
  Learn more about approving Custom Skills
</CTA>

## When to use Custom Skills

A Custom Skill is best used when the application:

- Wants to only add metadata to files uploaded to Box
- Does not want to upload new files or perform any other API calls
- Wants to have way to pass files to Machine Learning services without
  having to handle authentication
