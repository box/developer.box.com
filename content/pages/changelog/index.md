---
alias_paths:
  - /docs/api-changelog
centered: true
rank: 0
---

<!-- alex disable postman-postwoman -->

# Changelog

For historical changelog entries, please see our
[2019](page://changelog/2019) and
[2018 release notes](page://changelog/2018).

## 2020-07-16 / Change to enterprise events for content access

Starting today, the [enterprise event stream](g://events/for-enterprise/) will
begin producing new content access events.

### New event

* A new `CONTENT_ACCESS` event is triggered when a file was accessed by an
 authorized user or programmatically by a Box application.

See the [enterprise events](g://events/for-enterprise/) documentation
for more information on other event types.

## 2020-07-15 / Changes to Metadata Query API syntax

The [Metadata Query API][g_mdq_api] has been updated to **require explicitly
defined response fields**.

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
      -H 'Authorization: Bearer <ACCESS_TOKEN>" '
      -H 'Content-Type: application/json'
      -d '{
        "from": "enterprise_123456.customerInfo",
        "query": "tav >= :value",
        "query_params": {
          "value": 200000
        },
        "fields": [
          "name",
          "metadata.enterprise_123456.customerInfo.tav"
       ],
        "ancestor_folder_id": "0"
      }'
```

Additionally, **the response format now returns a list of items** rather
than a list of query results. Any metadata is now nested within the item,
rather than listed side-by-side with the item. Only fields specified in the
`field` array - as well as any base fields - are returned in the response.

```json
{
  "entries": [{
    "id": "394384323",
    "type": "file",
    "etag": 1,
    "name": "Contract.pdf",
    "metadata": {
      "enterprise_123456": {
        "customerInfo": {
          "$parent": "folder_12345,",
          "$scope": "enterprise_123456",
          "$template": "customerInfo",
          "$version": 1,
          "tav": 1000000
        }
      }
    }
  }]
}
```

### Legacy syntax

For reference, the API would previously return all standard fields for an item
as well as the matched metadata. 

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
      -H 'Authorization: Bearer <ACCESS_TOKEN>" '
      -H 'Content-Type: application/json'
      -d '{
        "from": "enterprise_123456.customerInfo",
        "query": "tav >= :value",
        "query_params": {
          "value": 200000
        },
        "ancestor_folder_id": "0"
      }'
```

The response body previously returned the items as a list of entries, each
containing an `item` and a `metadata` instance.

```json
{
  "entries":[
    {
      "item":{
        "type":"file",
        "id":"394384323",
        "name": "Contract.pdf",
        "file_version":{
          "type":"file_version",
          "id":"33482348",
          "sha1":"69888bb1bff455d1b2f8afea75ed1ff0b4879bf6"
        },
        ...
      },
      "metadata":{
        "enterprise_123456":{
          "customerInfo":{
            "tav": 1000000,
            "$id": "01234500-12f1-1234-aa12-b1d234cb567e",
            "$parent": "folder_12345,",
            "$scope": "enterprise_123456",
            "$template": "customerInfo",
            "$type": "customerInfo-6bcba49f-ca6d-4d2a-a758-57fe6edf44d0",
            "$typeVersion": 2,
            "$version": 1,
            "$canEdit": true
          }
        }
      }
    },
    ...
  ],
  "limit": 20,
  "next_marker":"AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
}
```

This legacy syntax **will remain available for any existing Metadata Query API
users only**. The legacy syntax will be turned off When all existing customers
have been migrated over to the new syntax.

## 2020-06-11 / Change to enterprise events for tasks

Starting today, the [enterprise event stream](g://events/for-enterprise/) will
begin producing new task and task assignment events, and some existing task
events will return additional fields.

### New events

* A new `TASK_UPDATE` event is triggered when a task is updated
* A new `TASK_ASSIGNMENT_DELETE` event is triggered when a task is unassigned
  from a user

### Updated events

#### Changes to `TASK_CREATE`

When a task is created, the event now includes the task's ID (`task.id`), the ID
of the user who created the task (`task.created_by.id`), the task's description
(`task.message`), and the optional due date of the task  (`task.due_date`)
within the `additional_details` object.

```json
"additional_details": {
  "task": {
    "id": "1234567",
    "due_at": "2020-07-06T10:49:44-07:00",
    "message": "task description",
    "created_by": {
      "id": 123456,
      "login": "email@example.com"
    },
    ...
  }
}
```

#### Changes to `TASK_ASSIGNMENT_CREATE` and `TASK_ASSIGNMENT_UPDATE`

When a task assignment is created or updated, the event now includes the task's
ID (`task.id`), the ID of the assigned user (`task_assignment.assigned_to.id`)
and their login (`task_assignment.assigned_to.login`), the task's description
(`task.message`), and the optional due date of the task (`task.due_date`) within
the `additional_details` object.

```json
"additional_details": {
  "task": {
    "id": "1234567",
    "created_by": {
      "id": 12345,
      "login": "email@example.com"
    }
  },
  "task_assignment": {
    "assigned_to": {
      "id": 12346,
      "login": "email+2@example.com"
    },
    "status": "NOT_STARTED",
    "message": "assignee message"
  },
  ...
}
```

See the [enterprise events](g://events/for-enterprise/) documentation
for more information on other event types.

## 2020-05-12 / New shield alert events

As of today, [Box Shield][box-shield] will begin producing new security events
within the [enterprise event stream](g://events/for-enterprise/) for Shield
customers who are configured to listen for the new events. 

The possible incident events produced by Shield are:

* Suspicious locations
* Suspicious sessions
* Anomalous download
* Malicious content

See the [shield alert events](g://events/shield-alert-events/) documentation
for more information on the payloads produced within these events.

## 2020-04-23 / New `classification` field for Files

A new optional field has been made available within the `Field` object,
`classification`. This field represents the classification that is currently
applied to a file.

The classification can be requested via any endpoint that returns a file, like
the [Get file information](endpoint://get-files-id) and supports [requesting
additional `fields`](g://api-calls/request-extra-fields).

```js
{
  "id": "123456789",
  "type": "file",
  "etag": "1",
  "classification": {     
    "name": "Top Secret",     
    "definition": "Content that should not be shared outside the company.",
    "color": "#FF0000"
  },
  ...
}
```

The classification can be set through the API, Box Shield, or by a user using
the web application.

## 2020-04-23 / Add new `uploader_display_name` field to file and file versions

A new field, `uploader_display_name` has been added to both file and file
version resources. This field provides the name of the user at the time of
upload. 

```json
{
  ...
  "uploader_display_name": "Ellis Wiggins"
}
```

This field can be requested on any of the file and file
version endpoints by providing the `fields` query parameter, for example:

```bash
curl -X GET https://api.box.com/2.0/files/12345?fields=uploader_display_name \
     -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

When the file is uploaded by a logged out anonymous, the email of the
user is returned instead. If no email is available then the field will default
to the text `Someone`.

## 2020-04-21 / New Metadata Query APIs available

A new API is now available that allows developers to query files and folders
by the metadata attached to them. We've updated the reference documentation for
this [Metadata Query API][e_mdq_api], as well as released some brand new
[guides][g_mdq_api] and an update to the [metadata quick start guide][qs_mdq_api].

[e_mdq_api]: e://post_metadata_queries_execute_read
[g_mdq_api]: g://metadata/queries
[qs_mdq_api]: g://metadata/quick-start

## 2020-03-30 / Potential impactful changes to format of Metadata `date` fields

As part of ongoing improvements to our Metadata infrastructure we will be
rolling out three potential impactful changes to the format of `date` fields in
metadata templates. These changes make the format our API returns more
consistent between API calls.

The first change affects the usage of time zone offsets in dates. Previously,
the API would inconsistently return dates with and without timezone offsets if a
date was set to include one. From now on all dates are converted to UTC /
Zulu-time, removing the timezone offset.

For example:

* Assume a date was set to `2020-02-20T12:00:00.000-01:00`
* Previously the API would return `2020-02-20T12:00:00.000-01:00` (the original
  value) or `2020-02-20T13:00:00.000Z` (the UTC adjusted value)
* From now on it will always return `2020-02-20T13:00:00.000Z` (the UTC adjusted
  value)

The second change affects the sub-second precision of dates returned by the
metadata API. Previously, the API would return values with 0 to 3 digits of
sub-second precision. From now on Box will always return metadata date-time
values with millisecond precision.

For example:

* Previously the API might return `2020-02-20T12:00:00Z`,
  `2020-02-20T12:00:00.0Z`, `2020-02-20T12:00:00.00Z`or
  `2020-02-20T12:00:00.000Z`
* From now on it will always return `2020-02-20T12:00:00.000Z`

The final change affects the usage of the
[`test`](g/metadata/instances/update/#Test-a-value) operation when updating a
metadata instance. Previously the test would compare the date-time values using
the literal string value. After this update they are compared using their UNIX
timestamp in milliseconds.

For example:

* Previously `2020-01-21T19:20:00.123-08:00` would not be equivalent to
  `2020-01-22T03:20:00.123Z`
* From now on `2020-01-21T19:20:00.123-08:00` is equivalent to
  `2020-01-22T03:20:00.123Z`

### How this can affect an application

Any application that implements `RFC3339`-compliant date-time parsing will not
need to perform any action as these are all valid `RFC3339` values representing
the same dates. Any application that does not implement `RFC3339` compliant
date-time parsing should be updated to do so.

All official Box SDKs support `RFC3339`-compliant date-time parsing, so any
application using an up-to-date version of an official Box SDK would not require
any update.

### What do if this affected your application

Roll-out of this change will be performed gradually over the next few weeks.
Although the metadata team will be monitoring potential impact, please reach out
to your customer success manager or our support channels if you find yourself
impacted.

## 2020-03-30 / Change to metadata instance version

As part of ongoing improvements to our Metadata infrastructure we will be
rolling out a small change to the [`version`](r:/metadata/#param-$version) value
of a metadata Instance.

Previously, the version number associated with a metadata instance would be
incremented if a field on the associated metadata template was deleted, or if an
`enum` field's option was deleted on the associated metadata template.

Going forward, these changes will not increment the version number of a metadata
instance.

This behavior has always been implicit and we recognize that very little value
can be derived form to the metadata instance version. Therefore we do not expect
this change to have any impact on any of our customers. Regardless, please reach
out to your customer success manager or our support channels if you find
yourself impacted.

## 2020-02-03 / Preview SDK `v2.34.0` Released

Version `2.34.0` of the Preview SDK has been released. New JavaScript and CSS
Preview files have been made available. To adopt new changes, please see the
[UI Elements manual installation][ui-elements-manual-install] links for Content
Preview.

Please see the `v2.34.0` [release notes][preview-2.34-release-notes] for a list
of all feature changes.

## 2020-01-22 / Preview SDK `v2.33.1` Released

Version `2.33.1` of the Preview SDK has been released. New JavaScript and CSS
Preview files have been made available. To adopt new changes, please see the
[UI Elements manual installation][ui-elements-manual-install] links for Content
Preview.

Please see the `v2.33.1` [release notes][preview-2.33-release-notes] for a list
of all feature changes.

## 2020-01-20 / Refreshed Postman Collection & Quick Start

The Box Postman collection has been updated with new features and an integrated
quick-start guide. Key features include:

* An end-to-end [Postman quick-start guide][postman-quick-start-guide] that
  helps users to install Postman, set up a Box App, and load their API
  credentials into Postman.
* A [restructured Postman collection][postman-collection] for the Box APIs that
  automatically detects when API credentials have expired and offers integrated
  solutions for refreshing these credentials when needed.

The [legacy Postman collection][legacy-postman-collection] will remain available
for the foreseeable future.

[enterprise-events]: g:///events/for-enterprise
[box-shield]: https://www.box.com/shield
[postman-quick-start-guide]: g://tooling/postman/quick-start
[postman-collection]: g://tooling/postman/install
[legacy-postman-collection]: g://tooling/postman/legacy

[ui-elements-manual-install]: g://embed/ui-elements/installation/#manual-installation
[preview-2.34-release-notes]: https://github.com/box/box-content-preview/releases/tag/v2.34.0
[preview-2.33-release-notes]: https://github.com/box/box-content-preview/releases/tag/v2.33.1
