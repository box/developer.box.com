---
rank: 0
related_endpoints: []
related_guides: 
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-for-salesforce-developer-toolkit
---

# Salesforce Developer Toolkit

The Box for Salesforce Developer Toolkit allows customers to programmatically
customize the behavior of the Box for Salesforce integration. The Toolkit
consists of several global APEX methods that can be used to trigger and extend
the default behavior. The global methods can update the internal Salesforce
record to Box folder mapping and handle permission management.

<Message type='notice'>
  This functionality is part of the latest Box for
  [Salesforce package][sf-package].
</Message>

<Message type='warning'>
  # What the Toolkit does NOT provide

  The Toolkit is not a full-featured APEX wrapper for the BOX Content API. If
  this is what you are looking for, have a look at the
  [Box SDK for Salesforce][sf-sdk].
</Message>

## Authentication

A solution for simple Authentication is to allow API calls to use the service
account credentials.

This means that Salesforce Admins need to restrict access to the Toolkit global
APEX class. As these methods allow direct modification of Box content and
collaborations, Salesforce administrators should take appropriate precautions
by restricting access to the global Toolkit APEX class.

Toolkit methods that take `accessToken` as a parameter can use the service
account credentials by sending `null` for the `accessToken` value.

If a value is passed in `accessToken`, the API call to Box will be done with
the access token sent. It is up to the developer to ensure the token being
passed is valid and the user associated with the token has permissions to
execute the requested operation.

[sf-package]: https://community.box.com/t5/For-Admins/Box-For-Salesforce-Installation/ta-p/180
[sf-sdk]: https://github.com/box/box-salesforce-sdk
