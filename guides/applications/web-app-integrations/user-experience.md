---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: applications
subcategory_id: applications/web-app-integrations
is_index: false
id: applications/web-app-integrations/user-experience
type: guide
total_steps: 3
sibling_id: applications/web-app-integrations
parent_id: applications/web-app-integrations
next_page_id: applications/web-app-integrations/configure
previous_page_id: applications/web-app-integrations/types
source_url: >-
  https://github.com/box/developer.box.com/blob/master/./content/guides/applications/web-app-integrations/user-experience.md
---

# User Experience

The following explains what a Web App Integration looks like from the point of
view of a user.

1. Box users can discover applications in the Box App Gallery. They can visit
the gallery directly, or select the "Apps" menu from various places in the
Box Web App UI.
2. On the App Gallery, they select the application of choice to add. Every Box
application has a public profile page with detailed information about it,
including the integrations it provides.
3. They add the application to their account. Users can add an application's
integrations to their accounts by clicking the "Add" button in the App
Gallery. Once an  application is added to an account, all its integrations
become available to the user.
4. Select an integration from the "More Actions" dropdown. To see available
integrations, a user can right-click a file and select the "More Actions"
sub-menu. Selecting an item from this sub-menu performs the corresponding
feature feature provided by the integration.
5. Grant the integration access to the file. After selecting an integration from
the menu, Box will ask your permission to share the file or folder with the
application. Box displays a confirmation prompt that must accepted before the
integration can be performed.

After you accept the confirmation prompt Box runs the integration,
passing the data to the application. The application might display a popup
panel that enables you to complete the action, or it might run a
server-based process to complete it. The method of completion depends on the
type of integration.
