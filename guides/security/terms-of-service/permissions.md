---
rank: 100
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - terms_of_service
  - terms_of_service_user_status
alias_paths: []
category_id: security
subcategory_id: security/terms-of-service
is_index: false
id: security/terms-of-service/permissions
type: guide
total_steps: 3
sibling_id: security/terms-of-service
parent_id: security/terms-of-service
next_page_id: ''
previous_page_id: security/terms-of-service/for-colaboration
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/security/terms-of-service/permissions.md
---
# Permissions

The following is a list of permissions users, admins, and co-admins need to have
when working with Terms of Services and Terms of Service Statuses.

## Terms of Service

An end user is considered subject to Terms of Service when:

* User belongs to or is collaborated into an enterprise that has a Terms of Service enabled
* The type of Terms of Service reflects the user's relationship to the Enterprise
    * A managed Terms of Service for a user that is part of the same enterprise
    * An external Terms of Service for users collaborating into the enterprise

Terms of Service settings can be viewed by an end user if:

* The user is subject to a  Terms of Service; and
* The Terms of Service Type is enabled on the enterprise

A Terms of Service's settings can be viewed by an enterprise admin or co-admin
if:

* They have **View settings for your company** permissions
* The application has the **Manage enterprise properties** scope enabled
* The Terms of Service belongs to their enterprise

Terms of Service settings can be edited by an enterprise admin or co-admin if:

* They have **'Edit settings for your company** permissions
* The application has the **Manage enterprise properties** scope enabled
* The Terms of Service belongs to their enterprise

Enterprise admins and co-admins can view, create, and edit Terms of Service
settings for both external and managed Terms of Service without having accepted
managed the managed Terms of Service for their own enterprise.

## Terms of Service User Status

Terms of Service User Status can be viewed and edited by an end user if:

* The User Status belongs to the end user
* The Terms of Service type is enabled on the enterprise
* The end user is subject to the Terms of Service

Terms of Service User Statuses belonging to other users can be viewed by
enterprise admins and co-admins if:

* They have **Manager users** permissions
* The application has the **Manage users** scope enabled
* The Terms of Service belongs to their enterprise
* They have accepted the managed Terms of Service for their own enterprise, if applicable

Terms of Service User Status belonging to other users can be edited by
enterprise admins and co-admins if:

* They have **Manager users** permissions
* The application has the **Manage users** scope enabled
* The end user is subject to the Terms of Service
* The end user is not an admin or co-admin
* The Terms of Service belongs to their enterprise
* They have accepted the managed Terms of Service for their own enterprise, if applicable

An end user cannot accept, reject, view external Terms of Service settings for
an enterprise they are collaborating into until the end user accepts the managed
Terms of service for their own enterprise, where applicable. Trying to do so
will result in a `TERMS_OF_SERVICE_REQUIRED` error.