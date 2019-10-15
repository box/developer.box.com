---
rank: 4
alias_paths: []
---

# Customs Skills

A Custom Skill, or Box Skill is a type of application that performs custom
processing for files uploaded to Box. Skills are designed to make it easy to use
third-party Machine Learning services to automatically extract information from
files uploaded to Box.

Box Skills need to be enabled on a folder by a Box Admin. After this an event is
sent to the Skill's application server every time a file is uploaded to the
folder. This application can then download the file, inspect it or hand it off
to a machine learning service, and write powerful metadata to the file.

## Authentication method

Working with Box Skills is simplified by the pre-authorized API credentials
that are provided with every Skill Event. For this reason though, Box Skills
allow for limited API access, mainly to read the file and write Metadata to the
file.

## When to use Custom Skills

A Custom Skill is best used when the application:

- Wants to only add metadata to files uploaded to Box
- Does not want to upload new files or perform any other API calls
- Wants to have a simple way to pass files to Machine Learning services without
  having to handle authentication
