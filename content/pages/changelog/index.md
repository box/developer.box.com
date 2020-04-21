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

## 2020-04-28 / New shield alert events

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

[box-shield]: https://www.box.com/shield
[postman-quick-start-guide]: g://tooling/postman/quick-start
[postman-collection]: g://tooling/postman/install
[legacy-postman-collection]: g://tooling/postman/legacy

[ui-elements-manual-install]: g://embed/ui-elements/installation/#manual-installation
[preview-2.34-release-notes]: https://github.com/box/box-content-preview/releases/tag/v2.34.0
[preview-2.33-release-notes]: https://github.com/box/box-content-preview/releases/tag/v2.33.1
