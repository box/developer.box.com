---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - collaboration
  - terms_of_service
alias_paths: []
---

# Find Terms for Collaboration

Information about the Terms of Service that is in effect for any
[Collaboration](r://collaboration) can be inspected by calling the
[`GET /collaborations/:id`](e://get-collaborations-id) API and passing the query
parameter `fields=acceptance_requirements_status`.

<Tabs>
  <Tab title='cURL'>

```curl
curl -X GET https://api.box.com/2.0/collaborations/2342342?fields=acceptance_requirements_status \
    -H "authorization: Bearer <ACCESS_TOKEN>"
```

  </Tab>
</Tabs>

The resulting response will include a new `acceptance_requirements` object that
includes a mini `terms_of_service` object.

```json
{
  "type": "collaboration",
  "id": 2342342>,
  "acceptance_requirements": {
    "terms_of_service": {
      "type": "terms_of_service",
      "id": 6766677
    }
  }
}
```

<Message>
  This information is only returned if the Terms of Service for external users is
  enabled for the enterprise, and the user making the request has the
  [permission][permissions] to see the Terms of Service. This holds true for
  both admin and end users, even though admins can generally view Terms of User
  information via the API even if the specific Terms of Service type is
  turned off.
</Message>

If the Terms of Service type is not enabled, the API will return an empty
result.

```json
{
  "type": "collaboration",
  "id": 2342342>,
  "acceptance_requirements": {
    "terms_of_service": null
  }
}
```

<Message>
  The `terms_of_service` information is returned within the
  `acceptance_requirements` even if they have already been accepted by the user.
</Message>

[permissions]: g://security/terms-of-service/permissions
