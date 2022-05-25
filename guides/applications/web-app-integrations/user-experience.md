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
previous_page_id: applications/web-app-integrations
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/web-app-integrations/user-experience.md
---
# User Experience

The following explains what a Web App Integration looks like from a user's point
of view.

1. Box users can discover applications in the Box App Center. They can visit
the App Center directly, or select the **Apps** menu from the Box Web App UI.
2. In the App Center they select the application they would like to add. Every
published Box application has a public profile page, which provides details
including the integrations it provides.
3. They user adds the application to their account by clicking the **Add**
button in the App Center listing. Once an application is added to an
account, all its integrations become available to the user.
4. Select an integration from the **More Actions** menu on a file or folder.
5. Box will ask the user for permission to share the file or folder with the
application. The confirmation prompt must accepted before the integration can
be successfully used.
6. Upon granting access, Box passes the data to the application. Depending on
the type of integration, the application will then display a popup panel or
run a server-based process.