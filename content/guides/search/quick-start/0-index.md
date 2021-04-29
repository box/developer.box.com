---
type: quick-start
hide_step_number: true
hide_in_page_nav: true
icon: FiSearch
---

# Search content using metadata

The Box Metadata Query API provides the ability to programmatically locate Box
content based strictly on applied custom metadata values. 

The structure of a metadata query is similar to that of a SQL query and allows
for Boolean operators, such as AND, OR, and NOT, as well as comparison or range
operators, such as equal to, greater-than, and less-than. 

Some benefits of the Metadata Query API include: 
* results immediately reflect metadata creations, updates, and deletions
* no indexing delay
<!--alex ignore queryable-->
* no limitation on the number of characters that are queryable

<ImageFrame center>
    ![Metadata](./images/metadata.png)
</ImageFrame>

## Overview 

This guide will take you through the following steps.

1. [Create a metadata template][stepone]
2. [Locate information about the metadata template][steptwo] via API
3. [Apply the metadata template][stepthree] to at least one file
4. [Construct a metadata query API call][stepfour] to obtain the content
 from step 3

<Next>
  I am ready to get started
</Next>

[stepone]: g://search/quick-start/create-metadata-template/
[steptwo]: g://search/quick-start/locate-template-info/
[stepthree]: g://search/quick-start/apply-template-to-file/
[stepfour]: g://search/quick-start/metadata-query-api/
