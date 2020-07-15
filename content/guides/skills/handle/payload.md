---
rank: 2
related_endpoints: []
related_guides: []
related_pages: []
required_guides:
  - applications/custom-skills
related_resources:
  - skill_invocation
alias_paths: []
---

# Box Skills Payload

When a new file is uploaded, copied, or moved to a folder monitored by a Skills
app, the invocation URL that was specified during application setup and
authentication will receive an event payload from Box.

The event payload will contain all information needed to read in the content of
the uploaded file to send to a processing system, such as a machine learning
system, and to write metadata back to the file once the processing system has
completed.

<CTA to='r://skill_invocation'>
  Example payload and reference
</CTA>

## Access Tokens

Every Skills payload includes a set of Access Tokens that can be used to access
the file that triggered the event.

```json
{
  ...
  "token": {
    "write": {
      "access_token": "c3FIOG9vSGV4VHo4QzAyg5T1JvNnJoZ3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQ",
      "expires_in": 1540924150,
      "restricted_to": ...,
      "token_type": "bearer"
    },
    "read": {
      "access_token": "Z3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQc3FIOG9vSGV4VHo4QzAyg5T1JvNnJo",
      "expires_in": 1540924150,
      "restricted_to": ...,
      "token_type": "bearer"
    }
  },
  ...
}
```

The `token.write.access_token` can be used to write metadata to the file, while
the `token.read.access_token` can be only used to read the file content. The
read-only token is useful when creating a download URL for the file which can
then be shared with other services. 
 
## Downloadable file URL

Many machine learning services support directly passing a file URL to that
service for processing. To create a download URL for a Box file, you will need
to parse the `token.read.access_token` as well as the `source.id` from the event
payload.

```json
{
  ...
  "source": {
    "type": "file",
    "id": 12345,
  },
  "token": {
    ...
    "read": {
      "access_token": "Z3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQc3FIOG9vSGV4VHo4QzAyg5T1JvNnJo",
      "expires_in": 1540924150,
      "restricted_to": ...,
      "token_type": "bearer"
    }
  },
  ...
}
```

The download URL for a file can be constructed as follows.

```curl
https://api.box.com/2.0/files/{source.id}/content?access_token={token.read.access_token}
```

In our example, this URL would be as follows.

```curl
https://api.box.com/2.0/files/12345/content?access_token=Z3ExaVNyQWw6WjRsanRKZG5lQk9qUE1BVQc3FIOG9vSGV4VHo4QzAyg5T1JvNnJo
```
