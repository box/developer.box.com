---
rank: 300
---

# Sign Request

The sign request API endpoints enable you to get, create, cancel, and resend
e-signatures.  

## Enablement

Box Sign must be enabled by an Admin in the Admin Console before its API 
endpoints can successfully be used.

If Sign is conditionally enabled for specific users, an Access Token for a user
with Sign permissions must be used in order for Sign endpoint API calls to be
successful. 

## Required Scopes

The following scopes must be enabled for an application before using any of the
Sign Request endpoints. 

- Read all files and folders stored in Box
- Write all files and folders stored in Box
- Manage signature requests

<Message type='warning'>
  Depending on the selected authentication method, your application may require
  Admin re-authorization before successful use of any newly selected scopes.
</Message>