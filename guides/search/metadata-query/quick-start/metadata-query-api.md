---
type: quick-start
hide_in_page_nav: true
category_id: search
subcategory_id: search/metadata-query
is_index: false
id: search/metadata-query/quick-start/metadata-query-api
rank: 4
total_steps: 4
sibling_id: search/metadata-query/quick-start
parent_id: search/metadata-query/quick-start
next_page_id: ''
previous_page_id: search/metadata-query/quick-start/locate-template-info
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/metadata-query/quick-start/4-metadata-query-api.md
---
# Use the Metadata Query API

Finally, you need to build a [metadata search API call][mq] using some of the
information provided in the response of step 3. Here is an example of what the
body of the API call looks like:

```json
{
   "from": "enterprise_22201764.contact_role",
   "query": "departments = :departments",
   "query_params": {"departments": "legal"},
   "ancestor_folder_id": "0",
   "fields":["id"]
}
```

This API call will return any file ID that meets the following criteria:

- Has the Contact Role template applied
- Has value of department is legal
- Is located anywhere under the root folder, since "0" is the
  `ancestor_folder_id`

As you can see below, this results in a successful call showing information
about the file we added the template to in step 2.

<ImageFrame center>

![Search Query Result](./images/query-result.png)

</ImageFrame>

<Next>

I found my file(s) using a search query

</Next>

[mq]: e://post-metadata-queries-execute-read/