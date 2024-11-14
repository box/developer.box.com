---
rank: 3
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: authorization
subcategory_id: null
is_index: false
id: authorization/common-errors
type: guide
total_steps: 5
sibling_id: authorization
parent_id: authorization
next_page_id: authorization/custom-skill-approval
previous_page_id: authorization/limited-access-approval
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authorization/common-errors.md
---
# Common Errors

## Unable to retrieve service of enterprise app authorization

<ImageFrame border>

![Unable to retreive error](images/unable_to_retreive.png)

</ImageFrame>

<!--alex ignore invalid-->

This error indicates that the entered client ID entered is invalid.
To resolve this issue, please re-copy the Client ID from the Developer Console
and ensure you are not including any trailing characters.

## Something went wrong with adding the app authorization

This error indicates you are a Box co-admin granted privileges to view, but not
edit enterprise settings. You will need to have your Box Admin grant edit
privileges in order to successfully authorize an application.

<ImageFrame border>

![Something went wrong error](images/something_went_wrong.png)

</ImageFrame>

<!--alex ignore -->

## Disabled by Administrator
<!--alex enable-->

This error indicates that not all authorization requirements are satisfied.
Please review our [authorization guide][ag] to confirm the necessary steps for
a given application.

<ImageFrame border>

![Admin error](images/admin_error.png)

</ImageFrame>

[ag]: g://authorization