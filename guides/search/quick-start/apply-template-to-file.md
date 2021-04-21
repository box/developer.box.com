---
type: quick-start
hide_in_page_nav: true
category_id: search
subcategory_id: search/quick-start
is_index: false
id: search/quick-start/apply-template-to-file
rank: 2
total_steps: 5
sibling_id: search/quick-start
parent_id: search/quick-start
next_page_id: search/quick-start/locate-template-info
previous_page_id: search/quick-start/create-metadata-template
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/quick-start/2-apply-template-to-file.md
---
# Add Metadata Template to a File

In order to get at least one result when we search using metadata in step 4,
we need to ensure the metadata template is applied to at least one file. Again,
there are two ways to do this: via the UI or via the AP.

## UI

To apply metadata to a file using the UI, navigate to a file and open the
preview. Use the **Metadata** tab and click **Add**. Find the metadata template
created in step 1 and select a value. Ensure you click **Save**.

<ImageFrame center>

![Select a Metadata Template](./images/metadata-template-select.png)
![Select a Value](./images/select-template-value.png)

</ImageFrame>

## API

To add a metadata template to a file you will need to use the
[create metadata instance on a file endpoint][add-metadata].

NEED DETAILS HERE

<Next>

I applied my template to at least one file

</Next>

[add-metadata]: e://post-files-id-metadata-id-id/