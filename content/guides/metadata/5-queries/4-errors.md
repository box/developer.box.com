---
related_endpoints:
  - post_metadata_queries_execute_read
---

# Common errors

Metadata query API errors mostly are [similar to errors returned by other
APIs][errors], however at this time some incorrect client requests may result in
a server-side error with a HTTP status code in the `5XX` range rather than an
appropriate `400 Bad Request` error.

This is a known issue which will be addressed soon.

## Incorrect template key and scope

A common error is to use an incorrect value for the the `from` value in the
request, which can result in various errors in the `HTTP 4XX` range.

Without a correct `from` value the API does not know what template to search
for. The value in `from` must be formed as `scope.templateKey`.

In this case `scope` is your enterprise's template scope, which looks something
like `enterprise_123456`. The numeric value here is your enterprise's ID. Any
scope that does not match this format, including the `global` scope and the
`enterprise` shorthand scope, will return an error.

The `templateKey` is the unique key for the metadata template within your
enterprise. The API returns an error when a template with the given key does not
exist, or when the key is used within the wrong enterprise were the key does not
exist.

<Message notice>
 The [`GET /metadata_templates/enterprise`[get-templates]] API can be used to
 list all enterprises available in your enterprise, including their `scope` and
 `templateKey`.
</Message>

## Missing value in `query_param`

A common error is to forget to include a query argument in the `query_params`
object, which results in a `HTTP 400` error with a code of
`unexpected_json_type`.

Without all arguments present in the `query_params` the API can not compile your
request into a full query.

For example, assume your search `query` is as follows
`amount >= :value AND status = :status`. All of the arguments that start with a
colon `:` will need to be present in the `query_params`. In this case your query
parameters would have to look something like this. Missing out on any of these
values will result in an error.

```json
"query_params": {
  "value": 100,
  "status": "active"
}
```

<Message notice>
  The name of each argument can configured to your liking and does not need to
  match the field key. The only requirement is that it starts with a `:`.
</Message>

## Missing search index

Due to scale considerations a metadata query might return a `HTTP 403` error
when the metadata template has been applied to more than 10,000 files or folders.
A search index can be created to resolve this error for a specific search query.

If the number of metadata instances exceeds 10,000 then a metadata query request
which does not include a suitable **index** in the `​use_index​` parameter will
result in an error. The error will inform the caller to specify a suitable index
as the argument to the `​use_index​` parameter.

<CTA to='g://metadata/queries/indexes'>
  Learn more about creating and using indexes
</CTA>

## Missing `ancestor_folder_id`

A common error is to forget the `ancestor_folder_id` in the request, which
results in a `HTTP 400` error with a code of `bad_request`.

Without the `ancestor_folder_id` value the API does not know what folder to
search for results in. When in doubt a value of `0` can be used for the user's
root folder.

[errors]: g://api-calls/permissions-and-errors/common-errors
[get-templates]: r://get-metadata-templates-enterprise
