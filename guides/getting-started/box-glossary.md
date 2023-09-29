---
rank: 1
category_id: getting-started
subcategory_id: null
is_index: false
id: getting-started/box-glossary
type: guide
total_steps: 6
sibling_id: getting-started
parent_id: getting-started
next_page_id: getting-started/user-models
previous_page_id: getting-started
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/box-glossary.md
---
# Box platform glossary

This glossary includes terms and definitions used in Box Platform.

<!-- markdownlint-disable line-length -->

| Box Resource Type/Term | Also known as (AKA) | Description |
| --- | --- | --- |
| Admin | Superuser, administrator, supervisor | The main admin on an enterprise account. Admins can manage users and groups, view and edit all of their organization’s files and folders, log in to any user’s account within their organization, edit settings for their organization, and run or access reports. The Box Admin is the principal account administrator. |
| Admin Console | | The dashboard area for administering a particular enterprise. Accessible by the admin, group admins, and co-admins. |
| Anonymous User | | A user that is not logged in. |
| App User | | [App Users][app user] are only accessible with the API - they do not have login credentials. They can be created by a Service Account and are only applicable to applications leveraging server to server authentication. App Users are tied to the application used to create them, and the user itself cannot be moved under another application. They can however collaborate on content outside of the application. |
| Bookmark / Web Link | Symbolic Link, Symlink, Soft Link, Reference, Relationship | |
| Box App Center | App Store | The first place for Box users to find out about applications that they can use in combination with Box. |
| Box Command Line Interface | [Box CLI][CLI] | A user-friendly command line tool that allows both technical and non-technical users to leverage the Box API to perform routine or bulk actions. |
| Box Custom Skill | Custom Skill, Box Skill | An application that performs custom processing for files uploaded to Box. Skills are designed to make it possible to use third-party Machine Learning services to automatically extract information from files uploaded to Box. |
| [Box Embed][embed] | | An HTML-based framework that makes it possible to embed the Box Web App experience anywhere in the 3rd party applications. Box Embed provides the ability to upload, search, comment, share, tag, and edit files using Box Edit. |
| Box Platform | | An API-driven cloud content management and collaboration platform that provides developers with the tools and infrastructure to build custom applications, integrate workflows, and leverage powerful features for secure document storage, access control, versioning, metadata management, and real-time collaboration. |
| [Box Sample Code Catalog][code-catalog] | | Allows developers and admins to search through code repositories of tools, automation scripts, self paced workshops, and demo apps in multiple programming languages. The catalog contains more that eighty open source repositories and guides. |
| Box Shield | | A security solution offered by Box that helps protect sensitive data, prevent unauthorized access, and detect potential threats through automated classification and proactive monitoring. |
| Box Skills | | Box Skills are AI-powered capabilities that enhance the functionality of Box by automatically extracting insights and metadata from content. |
| [Box Relay][relay] | | Box Relay allows you to create and configure workflow automations to automate and accelerate business processes centered around content. |
| [Box Verified Enterprise][bve] | BVE | Box Verified Enterprise is a certification program that ensures the security and compliance of an organization's content management system. |
| [Box UI Elements][ui-elements] | | Pre-built UI components that allow developers to add elements of the main Box web application into their own applications. They can be used to navigate through, upload, preview, and select content stored on Box and are available both as React components and framework-agnostic JavaScript libraries. |
| [Cascade policy][cascade-policy] | | Box enables you to add metadata instances to a folder, and automatically cascade them to the folder's contents so you don't need to add the instances individually. Using cascading metadata, you can quickly add metadata to multiple files and sub-folders at one time. |
| Classification | | An instance of the classification metadata template, containing the classification applied to the file or folder. |
| Collaboration | | Working together on a file or folder. |
| [Collaborations][collaborations] | Permissions, Role-Based Access Control (RBAC), Access Control List (ACL), permission mapping | Collaborations define access permissions for users and groups to files and folders, similar to access control lists. A collaboration object grants a user or group access to a file or folder with permissions defined by a specific role. |
| Collaborator | | Someone who shares access to a file or folder. |
| Collaborated folder | Shared folder | A shared folder owned by someone within your enterprise. |
| Collaboration roles | Permission levels, access levels | The collaboration roles define the level of permissions a user has for a specific file or folder. The collaboration roles in Box are **Owner**, **Co-owner**, **Editor**, **Viewer Uploader**, **Previewer Uploader**, and **Viewer**. Collaboration levels in Box follow a "waterfall" design in which individuals have access only to the folder they are invited into and any sub-folders beneath it. You can also be invited to individual files. |
| Collection | | A collection of items, including files and folders. The contents of a collection can be explored in a similar way to which the contents of a folder is explored. |
| [Content Manager][content-manager] | | A feature in the Admin Console that allows you to: search for and download files and folders in your organization, browse by user to see the files and folders they can access, move files between folders, invite collaborators to folders, get shared links and modify access levels, and delete files and folders from any user’s Trash. |
| [Co-admin][co-admin] | | A user other than the main admin, who has a subset of administrative privileges. Co-admins can perform the same duties as the organization’s Admin, but they cannot make changes to the Admin’s permissions or other Co-admins' permissions. The default access levels for Co-admins include only the ability to manage users and groups, but they can be modified on a per-user basis. |
| Custom App | | A tailored application that extends the functionality of Box by integrating with other tools and systems. It's used to streamline workflows and enhance collaboration. It can be created in the Developer Console and has several authentication methods available. |
| Developer | Programmer | A skilled professional who designs, builds, and maintains software applications or systems and has access to the Developer Console. In Box, the developer can have an Admin role. |
| Developer Console | | A portal that allows developers to create, debug, test, and monitor their applications by providing real-time insights into code execution and system performance. |
| Enterprise | Repository, content store, file cabinet, Docbase, vault | |
| [Ethical walls][info-barriers] | Information barriers | A mechanism that prevents exchanges or communication that could lead to conflicts of interest and therefore result in business activities ethically or legally questionable. |
| [Event][event] | Result of an action taken by the user. See [Using the Enterprise Event Stream][event-stream]. |
| External collaborator | External user | A collaborator who is not part of an enterprise. |
| External collaborated folder | | A folder owned by someone outside your enterprise. |
| File | Document, unstructured data | |
| Folder | Directory, container | A directory containing files. |
| [Group admin][group-admin] | | Group Admins can add existing users to their groups, create new users that will be assigned to their groups, and assign folder access to their groups. They can also run reports for their groups. |
| Group | Team |  | Collaborative workspace where users can share files, collaborate on documents, and communicate with each other. |
| Item | Object, Box object, content | Can represent a file, a folder or a web link. |
| Limited access app | | Secure and restricted application created in the Developer Console that allows specific users to access and interact with designated content within the Box Platform. |
| [Managed user][managed-users] | | A user account that is centrally controlled and administered by an organization's admin. |
| Metadata template | Document Class, Document Type, Content Type, Indexes | A predefined structure that captures and organizes important information about a document or file. |
| Metadata attribute | Property, Field, Keyword, Index Value | A metadata attribute is a piece of information that provides descriptive details about data, such as its type, format, or source. |
| Personal folder | | A folder owned by an individual user. |
| [Report][report] | | A file containing a specific data set. You can use the **Admin Console Reports** tab to run a variety of account-wide reports: usage logs, file/user statistics, and security audits. |
| Sandbox | Testing environment | Managed, trackable, non-production, testing environment for developers. |
| [Service Account][service-account] | | A Service Account provides developers with a programmatic authentication mechanism for server-side integrations with Box. In other words, an application can authenticate to Box as the service, which is represented by a Service Account user. A Service Account can then be used to create other application specific users, called App Users. |
| [Shared Link][shared-link] | | A hyperlink to content stored in Box you can share with your coworkers and friends – both inside and outside of the company. Sending someone a shared link to a file or folder is a way to work together with that person around shared content. Customizable permission levels, expiration dates, and optional password-protection make Box shared links a secure, simple way to share important content. |
| Software Developer Tool | [SDK][sdk] | A collection of tools, libraries, and documentation that helps developers create software applications for specific platforms or frameworks. |
| Task | Action | A specific action or assignment that needs to be completed within the collaborative document creation editor. |
| User | Identity, person, authority | An individual who utilizes the collaborative document creation editor to create, edit, and share documents with others. |
| Unmanaged user | | A user account that is not centrally managed by an organization and has limited access and control over the content within Box. The unmanaged users may or may not also be external users. |
| Version control | | The management and tracking of different versions of a document, ensuring that everyone is working on the most up-to-date version. |
| Webhook | | A webhook is a way for an application to provide real-time data or notifications to another application by sending HTTP POST requests. |
| Workflow | | Workflows within Box are automated sequences of tasks that help streamline and track the progress of document-centric processes, ensuring efficient collaboration and timely completion. |

<!-- markdownlint-enable line-length -->

[app user]: g://getting-started/user-types/service-account
[CLI]: https://www.box.com/platform
[collaborations]: g://collaborations
[embed]: g://embed/box-embed
[ui-elements]: g://embed/ui-elements/
[cascade-policy]: https://support.box.com/hc/en-us/articles/360044195873-Cascading-metadata-in-folders
[content-manager]: https://support.box.com/hc/en-us/articles/360043698294-Managing-Files-And-Folders-From-The-Admin-Console
[co-admin]: https://support.box.com/hc/en-us/articles/360043694174-Understanding-Administrator-and-Co-Administrator-Permissions
[info-barriers]: https://support.box.com/hc/en-us/articles/9920431507603-Understanding-Information-Barriers
[event]: r://event/
[event-stream]: https://support.box.com/hc/en-us/articles/8391393127955-Using-the-Enterprise-Event-Stream
[group-admin]: https://support.box.com/hc/en-us/articles/360043694174-Understanding-Administrator-and-Co-Administrator-Permissions
[managed-users]: https://support.box.com/hc/en-us/articles/360044194353-Understanding-User-Management
[service-account]: g://getting-started/user-types/service-account
[shared-link]: https://support.box.com/hc/en-us/articles/360043697094-Creating-Shared-Links
[sdk]: https://developer.box.com/sdks-and-tools/
[code-catalog]: https://developer.box.com/sample-code/
[relay]: https://support.box.com/hc/en-us/articles/360044196213
[bve]: https://support.box.com/hc/en-us/articles/4401823156883-Box-Verified-Enterprise
[report]: https://support.box.com/hc/en-us/articles/360043696534-Running-Reports