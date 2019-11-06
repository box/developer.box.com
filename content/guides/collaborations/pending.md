---
rank: 4
related_endpoints:
- get_collaborations
related_guides:
- collaborations/share-folder
- collaborations/share-file
required_guides: []
related_resources:
  - collaboration
  - user
---

# Get Pending Collaborations

To get the pending collaborations for a user, call the `GET /collaborations` API
with a `status` of `pending`.

<Samples id='get_collaborations' />

<Message warning>
  This only returns the current list of pending collaborations for a user. This
  API does not allow for returning all collaborations for a user.
</Message>
