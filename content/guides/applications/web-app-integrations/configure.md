---
rank: 3
related_endpoints: []
related_guides:
  - authentication/oauth2/oauth2-setup
  - authentication/tokens
  - applications/app-gallery
required_guides: []
related_resources: []
alias_paths: []
notes: |-
  Needs a massive cleanup
---

# Create Web App Integration

This guide explains how to set up a Web App Integration with a Custom App.

## 1. Create an OAuth 2.0 Application

Navigate to the [Developer Console][devconsole] and create a [Custom App][ca]
that leverages [OAuth 2.0 authentication][custom-oauth2].

## 2. Create a New Integration

Then, navigate to the **Integrations** tab and click 
**Create a Web App Integration**.

<ImageFrame center shadow border width='200'>
  ![Integration Tab](../images/create_integration.png)
</ImageFrame>

## 3. Configure Integration

To configure the integration, follow the guidance below for each value.

### App Info

<!-- markdownlint-disable line-length -->

| Field                     | Description                                                                                                                                                                                                                      |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Integration name          | The name of your integration, which users see in the Box Web App when the ** More Options** > **Integrations** menu is selected on a file or folder.                                                                             |
| Description               | The description of the integration displayed in the Box App Gallery.                                                                                                                                                             |
| Supported file extensions | The integration will only appear as an option in the ** More Options** > **Integrations** menu for the selected file extensions.                                                                                                 |
| Display on shared pages   | Determines if an integration can be shown to external users on a shared page. If enabled, users who are not collaborating on the content will see the integration in the context-menu when browsing items through a shared link. |

<!-- markdownlint-enable line-length -->

### Callback Configuration

<!-- markdownlint-disable line-length -->

| Field                    | Description                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| User Experience          | Determines whether the integration is a [Popup][pu] or [Server-Side][ssi] Integration.                                                                                                                                                                                                                                                                                  |
| Preliminary Callback URL | The URL where callback parameters are sent when the user accepts the prompt. In most cases it should be a URL that performs an API call on the application server, but it can be any endpoint configured to accept HTTP requests.                                                                                                                                       |
| Client Callback URL      | Handles additional callback requests from Box after the primary request with Popup Integrations. If the application specifies a file parameter in the REST method, the preliminary callback URL cannot originate from the client. As a result, a second request must be made from the client to your server so the server can send the necessary interface to the user. |

<!-- markdownlint-enable line-length -->

### Integration Status

- **Development**: The integration is visible and available only to application
 collaborators listed under the **General Settings** tab. This option is best
 used when the application is still in development and undergoing testing.
- **Online**: The integration is visible and available to all Box users. This
  option is best used when development is complete and the application is
  ready to publish in the App Gallery.
- **Maintenance**: The integration is visible and available only to application
 collaborators listed under the **General Settings** tab. This option is best
 used after the integration is published in the App Gallery, but needs to
 perform maintenance updates or troubleshoot issues. Use this option to
 temporarily take the integration offline for everyone except the application's
 collaborators.

### Callback Parameters

The "Callback Parameters" section configures the parameters that Box sends to
the callback URL when a user accepts a confirmation prompt. If this setting is 
not configured, Box does not send any parameters to the callback URL.

The following parameters are available.

<!-- markdownlint-disable line-length -->

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `user_id`             | The Box [user ID][uid]. This information is used in Popup Integrations in which user authentication is required to complete an action. You can store the Box ID in your application to enable subsequent authentication requests from the integration.                                                                                                                                                                                                                                                                                                                   |
| `user_name`           | The full name or email address of the Box user. Not all Box users specify their names at all times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `file_id`             | The Box [file ID][fid]. You can use this ID to make Box API calls that affect the file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `file_name`           | The name of the file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `file_extension`      | The extension of the file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `auth_code`           | The OAuth 2.0 [authorization code][code], which is generated by Box upon successful authentication. Your application must then supply this authorization code to Box in exchange for an OAuth 2.0 Access Token. An authorization header containing a valid Access Token must be included in every Box API request.                                                                                                                                                                                                                                                       |
| `redirect_to_box_url` | In Popup Integrations, the URL to which requests are sent by the confirmation prompt. Use this URL to redirect users to the All Files page. This parameter closes the popup panel and refreshes the All Files page to reflect any changes performed by the integration. If you do not want to add this parameter to your application, you can specify the entire URL. **Success**: `#redirect_to_box_url#&status=success&message=Your%20action%20was%20successful%2E`. **Failure**: `#redirect_to_box_url#&status=failure&message=Your%20action%20was%20unsuccessful%2E` |

<!-- markdownlint-enable line-length -->

## Examples Uses of Box Integrations

When a user chooses a Popup Integration, Box sends a callback request to the
primary callback URL. It sends the callback parameters have been configured to
the server. In some cases, Box may make a second request if the
client cannot get all the data it needs from the first request.

The following example does not require a client callback URL:

- The Popup Integration performs a REST call using a `download_file_url`
  callback parameter.
- The user clicks **OK** in the confirmation prompt to accept the popup.
- Box sends a request to the following URL (the primary callback URL plus the
  callback parameter):
  `http://www.doceditor.com/service?apikey=abc&file=&redirect=`.
- The response from the callback URL displays a user interface to the user who
  made the request. The popup has all the information needed to continue the
  action and an additional client callback is not needed.

The following example requires a client callback URL:

- The Popup Integration performs a REST call using a file-callback parameter.
- The user clicks **OK** in the confirmation prompt to accept the popup.
- The popup displays a page where Box sends a POST request with the contents
  of a file, along with the callback parameters to the remote server.
- Box receives the response from the remote server and directs the client to
  POST the response to the client callback URL. The server identified by the URL
  interprets the response and redirects the user with the correct session ID.

## Client-callback URL Request Format

The POST request that Box sends to the client callback URL takes the response
from the primary callback URL and forwards it to the same URL along with the
same data as the original callback.

<!-- markdownlint-disable line-length -->

| Client Callback URL                                                                                                   | Example                                                  |
|-----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| Two GET parameters and one POST parameter: `http://your-client-callback-url.com/?get_param1=value1&get_param2=value2` | `POST data: post_param1=value1initial_callback_response` |

<!-- markdownlint-enable line-length -->

The response to the client-callback request is an HTTP status 302, redirecting
the user to the correct URL or to the HTML for a UI.

Most often the URL points to a separate API or custom script developed for Web
App Integrations, which parses the result of the primary callback URL. Also,
note that the URL must be publicly accessible on the internet.

## Making Integration Publicly Available

To make a Box integration publicly available it needs to be listed in the App
Gallery. Follow the [App Gallery][app-gallery] guide for more details.

[ca]: g://applications/custom-apps
[pu]: g://applications/web-app-integrations/types/#popup-integrations
[ssi]: g://applications/web-app-integrations/types/#server-side-integration
[uid]: g://getting-started/locating-values/#user-ids
[fid]: g://getting-started/locating-values/#content-ids
[code]: g://authentication/oauth2/without-sdk/#3-user-grants-application-access
[custom-oauth2]: g://authentication/oauth2/oauth2-setup
[devconsole]: https://app.box.com/developers/console
[devaccount]: https://account.box.com/signup/n/developer
[app-gallery]: g://applications/app-gallery
