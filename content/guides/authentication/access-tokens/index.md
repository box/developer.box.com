---
rank: 4
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
---

# Access Tokens

Access Tokens are at the core of every Box API call. They represent an
authenticated user to the Box servers and determine what files and folders an
application has access to.

<CTA to="guide://authentication/select">
  Learn about the different ways an app can get authorized
</CTA>

## Application Types & Access Tokens

The following shows how each application type is expected to create an Access
Token.

| Box Application Type               | How to get Access Token              |
| ---------------------------------- | ------------------------------------ |
| Custom App + OAuth 2.0             | Explicit user grant                  |
| Custom App + JWT                   | Exchange a JWT assertion             |
| Custom App + App Token             | Configure token in developer console |
| Enterprise Integration + OAuth 2.0 | Explicit user grant                  |
| Enterprise Integration + JWT       | Exchange a JWT assertion             |
| Partner Integration + App Token    | Configure token in developer console |
| Custom Skill                       | Access Token in event payload        |
