---
type: quick-start
hide_in_page_nav: true
category_id: mobile
subcategory_id: mobile/ios
is_index: false
id: mobile/ios/quick-start/configure-box-app
rank: 3
total_steps: 5
sibling_id: mobile/ios/quick-start
parent_id: mobile/ios/quick-start
next_page_id: mobile/ios/quick-start/make-api-call
previous_page_id: mobile/ios/quick-start/install-ios-sdk
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/mobile/ios/quick-start/3-configure-box-app.md
---
# Configure a Box App

To start making authenticated API calls to the Box API with the **Box iOS
SDK**, an **Access Token** will be needed. The simplest way to generate a valid
token is to generate a new **Box App** and manually generate a short lived
developer token.

The developer token is generated through the developer console UI and will be
valid for one hour before having to be manually refreshed.

## Set up a Box app

<Grid columns='2'>

<Choose option='ios.app_type' value='create_new' color='blue'>

# Create a new Box app

Create and configure a new Box JWT application from which a developer
token may be generated.

</Choose>

<Choose option='ios.app_type' value='use_own' color='red'>

# Use an existing app

Use one of your existing Box JWT applications from the Box developer
console.

</Choose>

</Grid>

<Choice option='ios.app_type' value='create_new' color='blue'>

# Create a new Box app

To create a new Box application that may be used to generate a developer
token, use the following steps.

1. Go to the [Developer Console][devconsole]
2. Select **Create New App**
3. Select **Custom App** as the type of application to create, and click **Next**
4. Select **OAuth 2.0 with JWT** as the authentication method, and click **Next**
5. Give your Box app a unique name and click **Create App**
6. Go to the app's configuration by clicking **View Your App**.
7. Optionally, scroll to the **Application Scopes** section of the same screen and select any additional permissions you want to enable for this application.
8. At the top of the page click the button to **Save Changes**

</Choice>

<Choice option='ios.app_type' value='use_own' color='blue'>

# Use an Existing JWT Box application

If you have an existing JWT based Box application in your
[developer console][devconsole] that you
would like to use, skip to the next step.

</Choice>

## Generate a developer token

Now that an application is available, we need to create a developer token that
may be used to authenticate the Box iOS SDK to start making calls to the Box
APIs.

1. Go to the [Developer Console][devconsole]
2. Load the application that you would like to use
3. In the left navigation menu, click on **Configuration**
4. Under **Developer Token**, click the **Generate Developer Token** button
5. Copy the token for the next step to make an API call

## Summary

* You created a new, or are using an existing, Box app
* You have generated and copied the developer token

<Observe option='ios.app_type' value='use_own,create_new_'>

<Next>

I have a developer token

</Next>

</Observe>

[devconsole]: https://cloud.app.box.com/developers/console