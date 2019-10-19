---
rank: 2
related_endpoints: 
  - get_search
  - put_files_content
related_guides: 
  - api-calls/errors
related_resources: 
  - client_error
required_guides: []
alias_paths: []
---

# Rate Limits

Most of the Box APIs have rate limits in place in order to prevent abuse by
third-party services or users.

## Per API rate limits

There are currently a few distinct rate limits in place within the Box API.

* General API calls
  * 1000 API requests per minute, per user
* Uploads
  * 240 file upload requests per minute, per user
* Search
  * 360 search requests per minute, per user, to the
    [search endpoint](endpoint://get_search)
  * An additional limit of 60 searches per minute, per user
  * An additional 720 searches per minute, per enterprise

## Rate limit error

When an application hits a rate limit, the API will return an API response with
a HTTP status code of `429 Too Many Requests`.

The response will include the following headers and JSON body.

```yaml
Retry-After: 100
```

```json
{
  "type": "error",
  "status": 429,
  "code": "rate_limit_exceeded",
  "help_url": "http://developers.box.com/docs/#errors",
  "message": "Request rate limit exceeded, please try again later",
  "request_id": "abcdef123456"
}
```

Please see the [Client Error resource](resource://client_error) for more details.

<Message type='notice'>
  The `Retry-After` header provides guidance on when the API call can be
  retried. In general, we advise using an exponential back-off strategy for
  retrying API calls.
</Message>
