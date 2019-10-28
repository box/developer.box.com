---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
---

# Types & Formats

The following sections explain some basic concepts about the types and formats
that can be encountered within the Box APIs.

## Requests

The Box APIs use JSON in the requests bodies. There are a few notable exceptions
to this rule:

- The [`POST /oauth2/token`][post-oauth2-token] is used to request access tokens
  and as per the OAuth 2.0 specification it accepts the body to be sent
  with a content type of `application/x-www-form-urlencoded`.
- Most of the APIs that are used to upload binary data, like the
  [`POST /files/content`][post-files-content] endpoint, expect data to be sent
  as form data with a content type of `multipart/form-data`.

<Message type='notice'>
  Although not required, we highly recommend passing a header with each API
  request to define the content type of the data sent, for example
  `Content-Type: application/json`.
</Message>

### GZip compression

By default data sent from Box is not compressed. To improve bandwidth and
response times it's possible to compress the API responses by including
a `Accept-Encoding: gzip, deflate` request header.

### Date and times

The Box APIs support [RFC 3339][rfc3339] timestamps. The preferred way to format
a date in a request is to convert the time to UTC, for example `2013-04-17T09:12:36-00:00`.

In those cases where timestamps are rounded to a given day, the time component
can be omitted. In this case, `2013-04-17T13:35:01+00:00` would become
`2013-04-17`. In those cases where timestamps support millisecond precision the expected
request format should be as followed `2013-04-17T09:12:36.123-00:00`.

When making requests, when a timezone is omitted and a time has been provided
the Pacific timezone is assumed. In responses, the timezone is based on your
enterprise settings. It will be the default user settings set by your admin.
Please note that even if a managed user changes their timezone in their account
settings, this this will have no affect on the timezone returned by the API.

Timestamps are restricted to dates after the start of the Unix epoch, `00:00:00
UTC` on January 1, 1970.

## Responses

The Box APIs generally returns JSON in the response body. There are a few notable
exceptions to this rule as well.

- APIs that delete items return an empty body with a `204 No Content` HTTP
  status code.
- APIs used to request binary data either return a `200 OK` status code with the
  binary data attached, or a `202 Accepted`, or `302 Found` status code with no
  body and a `Location` header pointing to the actual binary file.

<Message type='notice'>
  The `Content-Type` response header can be used to understand the type of
  content returned in the API. Additionally, every API endpoint has it's
  response type documented in our API reference documentation.
</Message>

### Resources

Most standard API responses where only one resource is returned follow the
following format.

```json
{
  "id": "12345",
  "type": "folder",
  ...
}
```

Every one of these resources will always return an ID and the type of the resource.

### Collections

Where an API response returns multiple items a collection is returned. Although
the exact format of these collections can change from endpoint to endpoint they
generally are formatted as follows.

```json
{
  "total_count": 5000,
  "limit": 1000,
  "offset": 2000,
  "order": [
    {
      "by": "type",
      "direction": "ASC"
    }
  ],
  "entries": [
    {
      "id": 12345,
      "etag": 1,
      "type": "file",
      "sequence_id": 3,
      "name": "Contract.pdf"
    }
  ]
}
```

<!-- markdownlint-disable line-length -->

| Field         | Always present? |                                                                                                                          |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `entries`     | Yes             | A list of entries in the collection                                                                                      |
| `total_count` | No              | The total numbers in the collection that can be requested. This can be larger than this page of results                  |
| `limit`       | No              | For endpoints that support offset-based pagination, this specifies the limit to the number of results returned           |
| `offset`      | No              | For endpoints that support offset-based pagination, this specifies the offset of results returned                        |
| `order`       | No              | For endpoints that support sorting, this specifies the order the results are returned in                                 |
| `next_marker` | No              | For endpoints that support marker-based pagination, this specifies the marker for the next page that can be returned     |
| `prev_marker` | No              | For endpoints that support marker-based pagination, this specifies the marker for the previous page that can be returned |

<!-- markdownlint-enable line-length -->

### Request IDs

When your API call returns in an error, our API will return an error
object with a `request_id` field.

```json
{
  "type": "error",
  "status": 400,
  "code": "item_name_invalid",
  "help_url": "http://developers.box.com/docs/#errors",
  "message": "Method Not Allowed",
  "request_id": "abcdef123456"
}
```

When reaching out to support about specific error, please provide the full API
response including the `request_id` to help our support team to quickly find your
request.

<Message type='notice'>
  Most API calls also return a `BOX-REQUEST-ID` response header. The value of
  this header should not be confused with the `request_id` value in the body of
  an error response.
</Message>

### Large numbers

In some cases the API can return extremely large numbers for a field. For
example, a folder's size might have grown to many terabytes of data and
as a result the `size` field of the folder might have grown to a very large
number.

In these cases these numbers are returned in [IEEE754][numbers] format for
example `1.2318237429383e+31`.

[post-oauth2-token]: endpoint://post-oauth2-token
[post-files-content]: endpoint://post-files-content
[numbers]: https://en.wikipedia.org/wiki/IEEE_754
[rfc3339]: https://www.ietf.org/rfc/rfc3339.txt
