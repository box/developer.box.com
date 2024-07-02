---
rank: 7
related_endpoints: []
related_guides: []
required_guides: []
alias_paths: []
---

# Suppress Notifications

For some API calls, email and webhook notifications can be prevented by
including a `box-notifications: off` header with the API call.

<Tabs>
  <Tab title='cURL'>

```curl
curl -X POST https://api.box.com/2.0/folders \
    -H "box-notifications: off" \
    -H "authorization: Bearer ACCESS_TOKEN" \
    -d '{
      "name": "New Folder",
      "parent": {
        "id": "0"
      }
    }'
```

  </Tab>
</Tabs>

As an example, this can be used for a virus-scanning tool to download copies
every user's files in an enterprise without every collaborator on the file
receiving an email informing them of the download.

All actions will still appear in users updates feed and the audit-logs.

<Message type='warning'>
# Scope requirement

Notification suppression is available for approved applications only. Contact
support to request the required scopes to be enabled for your application.

The following settings need to be configured for your application for this feature
to properly work.

* **Can suppress email notifications from API calls** - available on request via support
* **Manage Enterprise Properties** - available via the developer console
* Co-admin permissions of **Edit settings for your company**.
</Message>

<Message type='notice'>
Some notifications can not be suppressed, most notable the creation is users,
comments, collaborations, task assignments, and when changing a user's login.
</Message>
