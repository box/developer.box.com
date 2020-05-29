---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Limitations

A few limits apply to the the metadata query APIs.

## Files and folders

​A metadata query will only return items (files or folders) to which the
requesting user has at least `previewer` access.

## Enterprise vs Global templates

A metadata query only works with metadata templates that have been created by
that enterprise. A query will not return results based on the content of free
form key-value pairs stored in the `​global.properties` template.

## Indexes for large result sets

Due to scale considerations a metadata query might return a `HTTP 403` error
when the metadata template has been applied to more than 10,000 files or folders.

<CTA to='g://metadata/queries/indexes'>
  Learn about creating and using search indexes
</CTA>

## Recommended result set size

Where possible it is recommended to only send requests for which the result
set is less than 2,000 items.​ The ​result set​ is the entire collection of
files and folder that match the metadata query exclusively based on evaluating
the `​from​`, `​query​`, and `​query_params​` parameters - before the requesting
user’s permissions and the `​ancestor_folder​` scope are considered.

When sending a metadata query request for which the result set exceeds 2,000
items, the API can only guarantee that it returns all all matching results if
both the following conditions are met.

1. The requesting user has at least **​Previewer** ​permission to all items in
   the result set
2. The ancestor folder contains all of the files in the result set

When sending a metadata query request for which the result set exceeds 2,000
items and for which these conditions are not true, the API might return error
with a 4XX response code indicating that the query will need to be restricted to
return fewer results.

For example, consider the following simplified representation of a metadata
template called `catalogImages​` which has one string field called
`​photographer`.

```json
{
  "templateKey": "catalogImages",
  "fields": [
    {
      "type": "string",
      "key": "photographer"
    }
  ]
}
```

In this example, assume that there are 10 photographers, each of which have
captured the same number of images that have the ​`catalogImages​` template
applied.

Now consider assume that there are 4,000 files in your Box enterprise
which have the `catalogImages` template ​applied and which are split evenly
between the two folders,​ `Parts​` and `Products`, ​which are children of the
parent folder `​Catalog​` as shown below.

```sh
Catalog/
|
|- Parts/
   |
   |- file_0000.jpeg
   |- ...
   |- file_1999.jpeg
|- Products/
   |
   |- file_2000.jpeg
   |- ...
   |- file_3999.jpeg
```

The following table indicates the outcome of several possible queries. The query
is described in plain language for readability.

Remember that the ​result set ​is defined as a collection of items (files and
folders) which match the metadata query exclusively based on evaluating the
`​from​`, `​query​`, and `​query_params` parameters before the requesting user’s
permissions and the `​ancestor_folder​` scope are considered.

<!-- markdownlint-disable line-length -->

| Query                                                                                                      | Result Set  | Outcome  | Notes                                                                                                                         |
|------------------------------------------------------------------------------------------------------------|-------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| Select items with the `catalogImages` ​template where the ​photographer​ is `Mike`                            | 200 items   | Success  | By only selecting items for `Mike` the result set is constrained to only 400 files                                            |
| Select items with the `catalogImages` ​template                                                             | 4,000 items | May fail | The result set exceeds 2,000 items. If the user does not have access to all of the files in the result set the query may fail |
| Select items with the `catalogImages` ​template in the `Products​` folder                                    | 4,000 items | May fail | The result set exceeds 2,000 items and not all results are contained within the ancestor folder.                              |
| Select items with the `catalogImages` ​template in the `Products` folder where the photographer​ is `Mike`   | 200 items   | Success  | By only selecting items for `Mike` the result set is constrained to only 400 files                                            |
<!-- markdownlint-enable line-length -->
