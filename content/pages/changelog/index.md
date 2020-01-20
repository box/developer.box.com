---
alias_paths:
  - /docs/api-changelog
centered: true
rank: 0
---

<!-- alex disable postman-postwoman -->

# Changelog

For historical changelog entries, please see
[2018 Release Notes](page://changelog/2018).

## 2019-01-20 / Refreshed Postman Collection & Quick Start

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

[postman-quick-start-guide]: g://tooling/postman/quick-start
[postman-collection]: g://tooling/postman/install
[legacy-postman-collection]: g://tooling/postman/legacy

## 2019-12-31 / EOL of Classic Relay API Endpoints

As [previously communicated][changelog-eol-relay-apis], Classic Relay API
endpoints are officially at an end of life state as of today.

The following endpoints are affected by this EOL and will now start responding
with error responses in applications making requests to them:

* Get list of published Relay Classic templates.
* Get list of Relay Classic workflows.
* Launch a Relay Classic workflow.

For any application encountering these error responses, please remove all calls
to the Relay Classic APIs listed above.

[changelog-eol-relay-apis]: #2019-10-18--relay-api-endpoints-will-eol-on-december-31st-2019

## 2019-12-05 / Marker-based Pagination Support for Users API

The [Users API](e://get_users) now supports [marker-based
pagination](g://api-calls/pagination/marker-based). Marker-based pagination is
an alternative to regular offset-based pagination and provides an alternative
way to get users for enterprises with a large volume of users.  

## 2019-12-03 / Preview SDK `v2.29.0` Released

Version `2.29.0` of the Preview SDK has been released. New JavaScript and CSS
Preview files have been made available. To adopt new changes, please see the
[UI Elements manual installation][ui-elements-manual-install] links for Content
Preview.

Please see the `v2.29.0` [release notes][preview-2.29-release-notes] for a list
of all feature changes.

## 2019-11-25 / Elements `v11.0` Released

Box UI Elements version 11.0 has been released. This update includes three
major new feature enhancements:

* Content Explorer Grid View.
* New Tasks Experience within the Preview Sidebar.
* Visual Versions for the Preview Sidebar.

Updated JavaScript and CSS files links for this release are available within
the [UI Elements manual installation instructions][ui-elements-manual-install].

For full information on changes in this release please see the following
resources:

* [Release notes][elements-11-release-notes]
* [Announcement blog post][elements-11-blog]

## 2019-11-20 / Preview SDK `v2.26.0` Released

Version `2.26.0` of the Preview SDK has been released. New JavaScript and CSS
Preview files have been made available. To adopt new changes, please see the
[UI Elements manual installation][ui-elements-manual-install] links for Content
Preview.

Please see the `v2.26.0` [release notes][preview-2.26-release-notes] for a list
of all feature changes.

## 2019-11-18 / New iOS SDK Now Available

A new major release of the iOS SDK has been released and is now generally
available. The new SDK includes a number of major revisions:

* Fully rebuilt using Swift.
* Support for Cocoapods, Carthage, and the Swift Package Manager.
* SDK now maintains full API feature parity.

See the [release blog post][ios-sdk-release-blog] for more information.

## 2019-10-25 / New fields for File Versions

New optional fields have been made available within the File Version object,
namely `trashed_by`, `restored_by` and `restored_at`.

The fields will be returned as part of the standard
[File Version object](endpoint://resources/file-version/).

The purpose of these fields is to have a better understanding of when file
versions have been moved in and out of the trash, and by whom.

## 2019-10-25 / New parameters for Search API

New optional query parameters have been made available for the
[Search API](e://get-search), namely `sort` and `direction`.

The purpose of these parameters is to allow applications to sort items by their
`modified_at` date in ascending or descending order.

## 2019-10-23 / New Shield Error Code

A new error code for [Box Shield][box-shield] has been released. The new
`403 - forbidden_by_policy` error code will be raised when the enterprise has
applied Shield access policies that prevent the action, such as downloading
items.

The resolution path is to contact your Box admin to adjust the Shield access
policies if the action is required.

See the
[error code documentation](guide://api-calls/permissions-and-errors/common-errors)
for more details and solution path.

## 2019-10-18 / Relay API Endpoints will EOL on December 31st, 2019

On December 31st, 2019, Box will end of life all Relay Classic API endpoints,
which includes the following functions:

* Get list of published Relay Classic templates.
* Get list of Relay Classic workflows.
* Launch a Relay Classic workflow.

To ensure that your application continues to function after December 31st
please remove all calls to the Relay Classic APIs listed above.

For more information please see our
[community thread](https://community.box.com/t5/Platform-and-Development-Forum/Relay-Classic-APIs-to-EOL-on-December-31st-2019/m-p/77729#M7276)
on the topic.

## 2019-09-18 / New security enhancements for token revocation

We have enhanced the capabilities of the [token
revocation](endpoint://post-oauth2-revoke/) endpoint to permit
[downscoped tokens](guides://authentication/access-tokens/downscope) to be
revoked prior to their expiration time. Previous to this update only fully
scoped access tokens could be revoked through the /revoke endpoint. With this
new enhancement downscoped tokens may now be revoked in addition to the fully
scoped access tokens.

More information is available [here][blog_token_revocation].

## 2019-09-11 / New `completion_rule` field for Tasks

A new optional field has been made available within the Task object,
`completion_rule`. This field may be set through the use of the the
[Create Task](endpoint://post-tasks) and [Update Task](endpoint://put-tasks-id)
endpoints, and will be returned as part of the standard
[Task object](endpoint://resources/task/).

The purpose of this field is to set the conditions under which a task is
completed, based on user involvement. When a task is created with a completion
rule of `all_assignees` (default), the task will only be considered completed
when all assignees have completed the task. When a task is created with a
completion rule of `any_assignee`, the task will be considered completed when
one assignee has completed the task.

## 2019-06-26 / New supported values in Tasks API

On June 26th, Box released support for a new task type, general tasks. When
creating or updating a task, the `action` field can either be `review` for
approval tasks or `complete` for the new general tasks.

This change also affects the accepted values when updating a task assignment.
If you want to update an approval/review task, the `resolution_state` can be
set to `incomplete`, `approved`, or `rejected`. A general/complete task can
have a `resolution_state` of `incomplete` or `completed`.

The Tasks API doesn't refer to tasks as "General" or "Approval" within the
response body. This is reflected only within Box's UI.

Docs can be found [here](endpoint://resources/task/).

## 2019-05-31 / Replaced Obsolete Field in Collaborations

In 2018 a new field, `acceptance_requirements_status` was added to the GET
collaborations/id API endpoint to support additional notification use cases.
This field includes terms of service, 2-factor auth, and strong password
requirements. The existing `acceptance_requirements` field, which only contains
Terms of Service requirements, have been replaced with the new
`acceptance_requirements_status`.

Previously a call to `GET
/collaboration/<collaboration_id>?fields=acceptance_requirements` would return
an object like the following:

```js
"acceptance_requirements": {
    "terms_of_service": {
        "type": "terms_of_service",
        "id": <tos_id>
    }
}
```

With the new field, the request `GET
/collaboration/<collaboration_id>?fields=acceptance_requirements_status` would
return the following:

```js
 "acceptance_requirements_status": {
    "terms_of_service_requirement": {
        "is_accepted": true,
        "terms_of_service": {
            "type": "terms_of_service",
            "id": <tos_id>
        }
    },
    "strong_password_requirement": {
        "enterprise_has_strong_password_required_for_external_users": true,
        "user_has_strong_password": false
    },
    "two_factor_authentication_requirement": {
        "enterprise_has_two_factor_auth_enabled": true,
        "user_has_two_factor_authentication_enabled" true
    }
}
```

## 2019-05-15 / TLS 1.0 deprecated complete

On May 13th, 2019, Box began the process of disabling TLS 1.0 requests to Box
APIs. As of today, all TLS 1.0 API requests will be returning a response
stating that a secure connection could not be established when making API calls.

Impacted developers will have been notified through multiple channels over the
last 6-12 months, but should your application be impacted you will need to
update your systems to again be able to make API requests to Box.

Please see our [TLS 1.0 deprecation guide](page://changelog/tls-1.1) to
upgrade your systems to TLS 1.2.

For any questions or for addition support, please
[file a support ticket][support_ticket].

## 2019-04-15 / Changes to Task (Assignment) API responses

We have released an update to the API responses of the
[Get Task](endpoint://get-tasks-id) and
[Get Task Assignment](endpoint://get-task-assignments-id) endpoints.

Prior to this change, if a call was made to get a task or task assignment with
a valid task ID, and that file was deleted or your permissions changed to
prevent viewing the file, you would receive a 404 error because the tasks would
be deleted with the file.

With this new change, the response returned will be the task object with a
`null` response where the item would be, rather than a 404 error response.

## 2019-03-29 / Box CLI 2.1.0 Released

A new version of the Box CLI has been released, taking the version from 2.0.0
to 2.1.0. This release includes a number of feature enhancements and bug fixes:

* Fixed paging for events commands ([link][github_cli_p126])
* Updated `lodash` version ([link][github_cli_p129])
* Send fields parameter to API when `--fields` flag is used ([link][github_cli_p113])
* Fix event-types flag ([link][github_cli_p120])
* Added build NPM script ([link][github_cli_commit])

## 2019-01-18 / New Sidebar UI Element & Open With Element GA

Two major releases have been made to the Box UI Elements:

1. New Sidebar Element: This new element provides capabilities for
incorporating the metadata sidebar for a file directly into your own
application or website. Documentation is available
[here](guides://embed/ui-elements).
2. GA of Open With Element: The Open With element has been moved from beta to
general availability. Open With delivers an individual button or an integration
into the existing Content Explorer element to launch file content with Adobe
Sign, G Suite, or Box Edit. Documentation is available
[here](guides://embed/ui-elements).

Full release announcement is available [here][blog_new_element].

[elements-11-release-notes]: https://github.com/box/box-ui-elements/releases/tag/v11.0.0
[elements-11-blog]: https://medium.com/box-developer-blog/announcing-elements-11-88ee900125fd
[ui-elements-manual-install]: g://embed/ui-elements/installation/#manual-installation
[preview-2.26-release-notes]: https://github.com/box/box-content-preview/releases/tag/v2.26.0
[preview-2.29-release-notes]: https://github.com/box/box-content-preview/releases/tag/v2.29.0
[ios-sdk-release-blog]: https://medium.com/box-developer-blog/the-new-box-ios-sdk-now-available-baf624b289b4
[box-shield]: https://www.box.com/shield
[support_ticket]: https://community.box.com/t5/custom/page/page-id/BoxSearchLithiumTKB
[blog_token_revocation]: https://medium.com/box-developer-blog/new-security-enhancements-for-revoking-access-tokens-79b9960a7ce2
[blog_new_element]: https://medium.com/box-developer-blog/new-sidebar-element-the-ga-of-open-with-935936a0628f
[github_cli_p126]: https://github.com/box/boxcli/pull/126
[github_cli_p129]: https://github.com/box/boxcli/pull/129
[github_cli_p113]: https://github.com/box/boxcli/pull/113
[github_cli_p120]: https://github.com/box/boxcli/pull/120
[github_cli_commit]: https://github.com/box/boxcli/commit/f0f88f66e3014afba616b5a2994157d435094b56
