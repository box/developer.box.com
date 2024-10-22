---
centered: true
rank: 4
---

# Application Types

Box offers various application types to cater to different needs and use cases
in application development. Each provides different capabilities and
authentication method options.

## Custom App

[Custom Apps][custom_app] are versatile and can accommodate most use cases.
They allow developers to present Box functionalities within a custom interface.
Box
provides customizable UI Elements for tasks like browsing, searching, and
previewing content. These apps support OAuth 2.0, JWT, and Client Credentials
Grant for authentication. Custom Apps are ideal for applications that need to
access both their own and others' files, upload and download files, and
potentially be listed in the Box Integrations.

## Limited Access App

[Limited Access Apps][limited_app] are specifically designed for leveraging Box
View or
previewing Box content within another application. They have access to a
limited number of endpoints and only support App Token authentication. These
apps are suitable for use cases like showcasing a professional’s portfolio on a
website, providing user manuals on a support site, or creating a custom
document viewer for e-books or architectural plans.

## Box Skills

[Box Skills][skills], or Custom Skills, are applications that perform custom
processing
on files uploaded to Box. They use third-party Machine Learning services to
extract information from files and apply it as metadata. These skills are
enabled on a folder by a Box Admin, and the application server receives an
event every time a file is uploaded. Custom Skills are best used for adding
metadata to files and integrating with Machine Learning services without
handling authentication.

## Web App Integrations

[Web App Integrations][web_app] allow third-party applications to integrate
seamlessly
with the Box user experience. They enable users to edit, share, or modify
content stored in Box using a third-party application. Such integrations can
add new features to Box users and be added to Recommended Apps in Box Preview,
enhancing the user experience by integrating with various content types and
file extensions.

## Integrations Publication

The [Box Integrations][integrations] is a platform for Box users to discover
applications that
can be used in conjunction with Box. For developers, listing their application
in the Integrations is an effective way to reach new users, particularly for
applications suited for use by other enterprises. The process for Integrations
publication involves ensuring the app is production-ready, leverages OAuth 2.0
authentication, and submitting it for approval through the Developer Console.
Once approved, applications can be featured, most popular, or recently added
sections in the Integrations, and they can also be unpublished if necessary.

<Next>
  Next step
</Next>

[custom_app]: g://applications/app-types/custom-apps/
[limited_app]: g://applications/app-types/limited-access-apps/
[skills]: g://applications/app-types/custom-skills/
[web_app]: g://applications/web-app-integrations/
[integrations]: g://applications/integrations/