---
rank: 13
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/special-scopes-for-box-ui-elements
---

# Dedicated Scopes

When working with Box UI Elements many developers have shown interest in being
able to implement their own permission model, different from [Access
Levels][acl] defined by Box.

[Downscoping][downscoping], also known as Token Exchange, is our mechanism by
which developers can restrict the permissions on the Access Token to a more
granular level, allowing them to build out their own permissions model on Box
Platform.

## Scopes & UI Elements

To facilitate this process we've created a new set of API scopes that allow
developers to control which UI controls are available to end
users in applications leveraging UI Element.

The Box UI Element has been designed to respect the permission enforced via
these scopes, so UI controls are turned on or off automatically depending on
whether or not the token allows the corresponding functionality or not.

Another advantage of these new scopes is that since the tokens are scoped to the
precise set of operations that the application wants the end user to have access
to, a savvy end user won't have any more access directly through the API using
the token. This allows you to make your application more secure.

## Scope principles

The new scopes have been designed keeping the following fundamentals in mind:

* **All scopes should be modular and strictly additive:** So a developer can combine multiple scopes in a token exchange request to generate a token with the desired set of functionality. Also to avoid confusion, two scopes should never have the same permission.
* **Scopes should directly map to a specific action in the UI Element:** So adding this scope to the token enables the specific action. Since some actions can only be performed by specific UI Elements, some scopes may only be meaningfully applicable to those UI Elements.
* **Scope should contain the minimum set of permissions required to perform the corresponding action:** So even if some end-user of your application uses the token directly against the API, they can't gain access beyond what you intended them to provide through the UI Element.
* **Every UI Element should have a "base scope" that encapsulates all required permissions for the UI Element to functionally work:** Any fewer permissions on the token and the basic set of operations on the UI Element won't work. This scope should always be included in the Token Exchange request.

With that said, for every UI Element, we are adding two types of scopes:

### Base Scope

Every UI Element has a "base scope", which provides the least
set of permissions that are necessary for the UI Element to functionally work.
For this reason, this "base scope" must always be present in the token exchange
request. Since the base set of permissions for every UI Element to functionally
work may not be the same (Content Uploader UI Element doesn't require preview
permissions, for example), UI Elements may have their own respective base
scopes.

### Feature Scopes

In addition to the base scope, we also introduced
feature-level scopes. Upon pairing with base scopes, feature scopes enable
additional capabilities within your UI Element, and provide the user with
permissions to perform the actions prescribed by the feature scope(s) added to
their down-scoped token. As with base scopes, feature scopes too are mostly
different for every UI Element. Since feature scopes are strictly additive, you
can assume (unless noted otherwise in the documentation) that providing a user
with access to a scope only gives them permission to perform the corresponding
action and nothing else.

Now that you understand what Base Scopes and Feature Scopes are, refer to the
documentation for each of the UI Elements to learn more about their dedicated
scopes.

<!-- i18n-enable localize-links -->
[acl]: https://support.box.com/hc/en-us/articles/360044196413-Understanding-Collaborator-Permission-Levels
<!-- i18n-disable localize-links -->
[downscoping]: g://authentication/tokens/downscope
