---
rank: 40
alias_paths:
  - /docs/box-skills
  - /page/box-skills-kit
  - /docs/getting-started-with-box-skills
  - /docs/box-skills-1
  - /skills
related_endpoints:
  - post_files_id_metadata_global_boxSkillsCards
category_id: applications
subcategory_id: applications/custom-skills
is_index: true
id: applications/custom-skills
type: guide
total_steps: 1
sibling_id: applications
parent_id: applications
next_page_id: ''
previous_page_id: applications/custom-skills/setup
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/custom-skills/index.md
---
# Custom Skills

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

<CTA to='g://skills'>

Start building a Custom Skill

</CTA>

## Authentication methods

Working with Custom Skills is simplified by the pre-authorized API credentials
that are provided with every Skill Event. For this reason though, Custom Skills
have limited API access. You do not need to select an authentication type to
work with this type of application.

## When to use

A Custom Skill is best used when the application:

- Wants to only add metadata to files uploaded to Box
- Does not want to upload new files or perform any other API calls
- Wants to have way to pass files to Machine Learning services without
  having to handle authentication

## Use cases

Example use cases for Custom Skills include:

- A process that automatically extracts license plate details from images and
  writes the details back to the file as keywords.

- A process that automatically detects faces in videos, and writes the timestamps
  at which these faces occur back to the file as a timeline.

## Approval

Before a Custom Skill can be used it needs to be assigned to a folder for which the
skill should trigger.

<CTA to='g://authorization/custom-skill-approval'>

Learn how to approve Custom Skills

</CTA>