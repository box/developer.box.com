---
rank: 1
alias_paths: []
category_id: security
subcategory_id: security/terms-of-service
is_index: true
id: security/terms-of-service
type: guide
total_steps: 3
sibling_id: security
parent_id: security
next_page_id: security/terms-of-service/for-colaboration
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/security/terms-of-service/index.md
---
# Terms of Service

The Box API allows administrators to configure Terms of Services for working on
Box, and for users to accept & re-accept Terms of Services for custom
applications.

## Terminology

### Terms of Services

A Terms of Service is a enterprise-level record that represent the conditions
within which all users are allowed to work with an enterprise's data in Box.

There are currently two types of Terms of Service for any enterprise that can be
enabled independently. The **Managed Terms of Service** can be
enabled for the enterprise's own users, where the **External Terms of Service*
can be enabled for users from other enterprises that collaborated in on the
primary enterprise's data.

## Terms of Service User Statuses

A Terms of Service User Status represents the status of the Terms of Service
acceptance for a specific user. There is exactly one Terms of Service User
Status for any given combination of Terms of Service and a user.

There are multiple Terms of Service User Statuses for any Terms of Service,
specifically one for each each user.

There could be multiple Terms of Service User Statuses for a given user. The
user could accept or reject multiple External Terms of Services for different
enterprises they have been collaborated into, in addition to accepting or
rejecting their own enterprise’s Managed Terms of Service.

## APIs

Applications that are authenticated as a Box Admin that has the **Edit settings
for your company** permissions can view, create, and edit Terms of Services for
their enterprise via the API.

* [`GET /terms_of_services/:id`](e://get-terms-of-services-id): To get the information for a specific Terms of Service
* [`GET /terms_of_services`](e://get-terms-of-services): To get a list of all the Terms of Services used within an enterprise, either for managed or external users.
* [`POST /terms_of_services`](e://post-terms-of-services): To create Terms of Service settings for either an external or managed user.
* [`PUT /terms_of_services/:id`](e://put-terms-of-services-id):
  To update a specific Terms of Service setting

Additionally, application can view and accept Terms of Services for a regular
user via the API.

* [`GET /terms_of_service_user_statuses`][euserstatuses]: To get a list of all the Terms of Services for a user
* [`POST /terms_of_service_user_statuses`][euserstatuses_post]: To accept or reject a specific Terms of Service for the first time
* [`PUT /terms_of_service_user_statuses/:id`][euserstatuses_put]: To accept or reject a specific Terms of Service that had been previously accepted or rejected.

## Scopes

The following scopes should be granted to the application in order to take the
outlined actions.

* **Manage Enterprise Properties**: Required to enable or edit the enterprise's settings for Terms of Services as well as to view them for external users.
* **Manage Users**: Required to accept Terms of Services for other users.

[euserstatuses]: e://get-terms-of-service-user-statuses
[euserstatuses_put]: e://put-terms-of-service-user-statuses-id
[euserstatuses_post]: e://post-terms-of-service-user-statuses