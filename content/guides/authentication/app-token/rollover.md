---
rank: 5
related_endpoints: []
related_guides: []
required_guides:
  - authentication/app-token/app-token-setup
related_resources: []
alias_paths: []
---

# Rotating App Tokens

By updating one of the application's App Tokens at a time the application can
rotate the tokens without running into any conflicts.

## Why rotate tokens

There are a few reasons to rotate App Tokens on a fixed interval.

1. To replace tokens that have been configured to auto-expire
2. To limit the effects of any compromised tokens

In either case, Box supports having two active App Tokens at any time, allowing
for a seamless rotation from the old to the new tokens.

## Rotation steps

These instructions assume that you have already created a primary and secondary
App Token before and are ready to replace either of them.

By following these steps you can configure your application with two new tokens
without any issues.

1. Assuming your application is using the Primary App Token, go to [developer console][console] application. Head to the "Configuration" section of your application "Generate Key" button for the Secondary App Token.
2. Update your application with the Secondary Token. Ensure your application is configured with this new token completely before moving on to the next step.
3. Once you are confident that the Primary App token is no longer in use, head over to the  [developer console][console] and click the "Revoke" button for the Primary App Token.

<Message>
  Repeat the same process with the tokens switched to roll back from the
  Secondary App Token to the Primary App Token.
</Message>

[console]: https://app.box.com/developers/console
