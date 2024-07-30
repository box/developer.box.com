---
rank: 2
related_endpoints:
  - get_search
  - put_files_content
related_guides:
  - api-calls/permissions-and-errors/common-errors
related_resources:
  - client_error
required_guides: []
alias_paths: []
category_id: api-calls
subcategory_id: api-calls/permissions-and-errors
is_index: false
id: api-calls/permissions-and-errors/rate-limits
type: guide
total_steps: 6
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: api-calls/permissions-and-errors/scopes
previous_page_id: api-calls/permissions-and-errors/common-errors
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/permissions-and-errors/rate-limits.md
---
# Rate Limits

There are three common types of API call rate limitations that Box may use at
its discretion to best protect network resources and preserve the quality of our
customer experience.

## User based

These rate limits protect our service from issues that may arise when a single
user generates too much traffic. The number of API calls that a user can make in
a minute is limited as described below. These limits apply to all Box user
accounts and are the most common. Generally, they are initiated when a
user exceeds approximately 1000 API calls/minute, but certain API endpoints may
have different rate limits.

## Quality of service

These rate limits are designed to protect the quality of service of our
infrastructure. If there is resource contention in the infrastructure, we
introduce automatic rate limits to prevent system degradation and outages.
For instance, if an application happens to be accessing the same physical
database server, such as the use of a file migration tool accessing related
resources that access the same underlying physical resources, Box may impose
temporary rate-limits when load spikes and adjust them as the system recovers.

## Licensing based

All Box Business Plans come with a licensed number of permitted API calls per
enterprise per month. These license based rate limits are designed to prevent
excessive overages and misuse of network resources. If Box's infrastructure
detects that a tool used by or on behalf of a customer has exceeded that
customer's API license allocation or is intending to circumvent network
controls, additional selective rate-limiting may be imposed. You can see the
default API allocations licensed with a particular account level at our
[pricing page][pricing], but note that some customers purchase Platform API
Pricing plans that increase their allocation.

## Per API rate limits

There are currently a few distinct rate limits in place within the Box API.

* General API calls
    * 1000 API requests per minute, per user
* Uploads
    * 240 file upload requests per minute, per user
* Search
    * 6 searches per second, per user, to the [search endpoint][search]
    * Two additional limits are applied on top of the basic rate limit
        * 60 searches per minute, per user
        * 12 searches per second, per enterprise
* Box Sign
    * Create and resend sign request: 100 requests per minute, per user
    * Get sign request: 1000 requests per minute, per user

## Rate limit error

When an application hits a rate limit, the API will return an API response with
a HTTP status code of `429 Too Many Requests`.

The response will include the following headers and JSON body.

```yaml
retry-after: 100
```

```json
{
  "type": "error",
  "status": 429,
  "code": "rate_limit_exceeded",
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/common-errors/",
  "message": "Request rate limit exceeded, please try again later",
  "request_id": "abcdef123456"
}
```

Please see the [Client Error resource](resource://client_error) for more details.

<Message type='notice'>

The `retry-after` header provides guidance on the number of seconds to wait
before the next API call can be retried. In general, we advise using an
exponential back-off strategy for retrying API calls.

</Message>

[search]: e://get_search
[pricing]: https://www.box.com/pricing