---
rank: 1
related_guides:
  - embed/box-view/upload-file
required_guides: []
alias_paths:
  - /docs/getting-started-box-view
category_id: embed
subcategory_id: embed/box-view
is_index: false
id: embed/box-view/setup
type: guide
total_steps: 5
sibling_id: embed/box-view
parent_id: embed/box-view
next_page_id: embed/box-view/create-preview
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-view/setup.md
---
# Setup

Before uploading files to Box and previewing them using Box View, a Box
application must be created and an access token be generated for that
application.

## Create App Token App

Box View uses an authentication mechanism called **App Token Auth** to store
files directly within the account of the application as opposed to a specific
Box user. This permits the previewing of files without having to associate the
content with a user.

The first step is to create the application and authorize it through your admin
to begin making API requests to Box.

<CTA to='guide://authentication/app-token/app-token-setup'>

Setup and authorize App Token app

</CTA>

<Message type='warning'>

App Token apps need to be authorized by the Box admin, otherwise you will
receive permission errors when making API requests. To go through app
authorization, follow [this guide](guide://authorization/custom-app-approval).

</Message>

## Generate Access Token

With your application loaded, click on the **Configuration** option in the left
navigation menu. The configuration page for your application should look like
the following.

<ImageFrame border>

![Image](./images/app_token_config.png)

</ImageFrame>

Click on the **Generate Key** button within the **Primary Access Token**
section.

<ImageFrame border>

![Image](./images/app_token_generate_key.png)

</ImageFrame>

<Message type='notice'>

If you don't have 2FA setup for your developer account, you will be prompted
to set up 2FA before you can successfully generate App Tokens. Follow the
prompt to set up 2FA.

</Message>

Choose the expiration time for your token, either 30 days, 60 days, or set the
token to never expire.

<ImageFrame border width='600' shadow center>

![Image](./images/app_token_expiry.png)

</ImageFrame>

Once the app token is generated, copy and store it securely. It won’t be
displayed once the page is reloaded since Box stores a one-way hash of the
tokens instead of the actual token and cannot retrieve the original token again.