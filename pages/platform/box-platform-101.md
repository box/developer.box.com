---
centered: true
rank: 1
category_id: platform
subcategory_id: null
is_index: false
id: platform/box-platform-101
type: page
total_steps: 9
sibling_id: platform
parent_id: platform
next_page_id: platform/use-cases
previous_page_id: platform
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/platform/box-platform-101.md
---
# Box Platform 101

<!-- INSERT VIDEO HERE LATER -->

## What is Box

[Box][box] is a cloud-based content management
and file sharing platform that enables
individuals and businesses to store, access, and collaborate on documents and
files from anywhere. It offers features like secure file storage, real-time
collaboration, and integrations with various productivity tools, enhancing team
efficiency and data accessibility. Known for its focus on security and
user-friendly interface, Box is widely used for managing digital assets and
fostering collaboration within organizations.

## What is Box Platform

[Box Platform][platform] is a set of tools and APIs offered by Box that
allows developers to integrate and
customize the capabilities of the Box cloud content
management system into their own applications and services. It enables
businesses and developers to build
secure and scalable content-centric applications,
leveraging features like file storage, sharing, and collaboration while
maintaining control over data and access. With Box Platform, developers can
create tailored solutions that enhance productivity and streamline content
management workflows.

## How do I make applications

In order to use the [Box API][api], you first have to create an application in
Box. This application serves as the gateway for any API call made to the
platform. You can use two websites to accomplish this task: the Box Developer
Site and the Box Developer Console. Let's take a closer look at what those are.

### Box Developer Site

The Box Developer Site is this website you are reading right now. It is a
comprehensive resource for developers building solutions on top of Box, and
should be used alongside the developer console to create applications and make
API calls. You can
find a multitude of guides, the full OpenAPI spec, quick starts, sample code,
etc all within its pages.

<ImageFrame center>

![Box Developer Site](images/developer_site.png)

</ImageFrame>

The site is updated on a frequent basis with the
latest updates posted to the [changelog][change].

<ImageFrame center>

![Box Developer Changelog](images/changelog.png)

</ImageFrame>

### Box Developer Console

The [Box Developer Console][dc] is an interactive interface that provides
developers with tools and resources for managing their applications integrated
with Box. It allows for the creation, configuration, and monitoring of apps,
offering insights and control over how these apps interact with the Box
platform.

<ImageFrame center>

![Box Developer Console](images/developer_console.png)

</ImageFrame>

After you create an application in the console for the first time,
you will start seeing a button in the bottom left of the main Box web app. You
can use this button to access the console in the future.

<ImageFrame center>

![Box Developer Console button](images/developer_console_button.png)

</ImageFrame>

## Box Platform Concepts

In the following learn sections, we will go into more depth on various topics.
But at a high level, these are some terms and concepts to be familiar with.

### User Types

There are several [user types][ut] to keep in mind when developing on Box
Platform. These include users with admin privileges (such as Admin or Co-Admin
users) and those without admin privileges (Managed or External Users).
Additionally, there are platform-only users, which are categorized as Service
Accounts and App Users. Each user type has specific roles and access levels
within the Box environment, impacting how they interact with applications and
content. At the core, if a user can access a piece of content from the main Box
web app, they should be able to access it using the API.

### Application Type

There are three main types of applications that can be created in the developer
console. They include Custom App, Limited Access App, and Box Custom Skills. You
can also create third party and web app integrations.

<ImageFrame center>

![Application Types](images/app_type.png)

</ImageFrame>

### Authentication Method

Depending on the application type selected, there are one of five different
authentication methods that can be used to gain an [access token][at]. An
access token is the key to get through the gateway that is your application
to successfully make an API call to Box.

<ImageFrame center>

![Authentication Types](images/auth_type.png)

</ImageFrame>

<Next>

Next step

</Next>

[box]: https://www.box.com
[platform]: https://www.box.com/platform
[apptypes]: g://applications/app-types/select
[authmethods]: g://authentication/select
[api]: page://reference
[change]: page://changelog
[dc]: https://app.box.com/developers/console
[at]: g://authentication/tokens
<!-- i18n-enable localize-links -->

[ut]: https://support.box.com/hc/en-us/articles/4636533822483-Box-User-Types
<!-- i18n-disable localize-links -->