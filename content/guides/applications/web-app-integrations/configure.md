---
rank: 3
related_endpoints: []
related_guides:
  - application/custom-apps/oauth2-setup
  - authentication/access-tokens
required_guides: []
related_resources: []
alias_paths: []
note: |-
  Needs a massive cleanup
---

# Create a Web App Integration

The following guide explains how to set up a Web App Integration for a Custom
App.

## Prerequisites

Before we can get started, we the following requirements need to be met.

- You need to be a be able to access the [Developer Console][devconsole] for
  your enterprise, or sign up for a [developer account][devaccount].
- You need to have created a Custom App with
  [OAuth 2.0 authentication][custom-oauth2] on the developer console.

## 1. Create a New Integration

Log in to developer console, find your application, and in the left-hand sidebar
find the "Integrations" panel. Click "Create a web app integration".

## 2. Configure Integration

Configure the integration to your liking. The following is some guidance for
each value.

### App Info

<!-- markdownlint-disable line-length -->

| Field                     | Description                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Integration name          | The name of your integration. Users see this name in web app's context menu when select a file.                             |
| Description               | The description of the integration displayed in the Box App Gallery.                                                        |
| Supported file extensions | The file types that this integration will be enabled for. This integration will only show up on files with these extensions |

<!-- markdownlint-enable line-length -->

### Callback Configuration

<!-- markdownlint-disable line-length -->

| Field                    | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Experience          | Whether the integration is Server-side or Popup integrations.                                                                                                                                                                                                                                                                                                                                   |
| Preliminary Callback URL | The URL to which the callback parameters are sent when the user accepts the prompt. In most cases it should be a URL that performs an API call on the application server, but it can be any endpoint configured to accept HTTP requests.                                                                                                                                                        |
| Client Callback URL      | In popup integrations, a callback URL that handles additional callback requests from Box after the primary request. If the application specifies a file parameter in the REST method, then the preliminary callback URL cannot originate from the client. As a result, a second request must be made from the client to your server so the server can send the necessary interface to the user. |

<!-- markdownlint-enable line-length -->

### Integration Status

The status of this integration.

- **Development**: The integration is visible and available only to developers
  assigned to the application. This option is best used when the application is
  still in development and the developer wants to test the integration.
- **Online**: The integration is visible and available to all Box users. This
  option is best used when development has completed and the application is
  ready to be publish in the App Gallery.
- **Maintenance**: The integration is visible and available only to developers
  assigned to the application. This option is best used after the integration
  has been publicly released yet needs to perform maintenance updates or
  troubleshoot problems. Use this option to temporarily take the integration
  offline for everyone except the integration's developers.

### Callback Parameters

The "Callback Parameters" section configures the parameters that Box sends to
the callback URL when a user accepts a confirmation prompt. If not configured,
Box does not send any parameters to the callback URL.

The following parameters are available.

<!-- markdownlint-disable line-length -->

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user_id`             | The Box ID of the user. This information is used in popup integrations in which user authentication is required to complete an action. You can store the Box ID in your application to enable your application to authenticate subsequent requests from the integration.                                                                                                                                                                                                                                                                                                                                                          |
| `user_name`           | The full name or email address of the Box user. Not all Box users specify their names at all times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `file_id`             | The Box ID of the file. You can use this ID to make Box API calls that affect the file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `file_name`           | The name of the file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `file_extension`      | The extension of the file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `auth_code`           | The OAuth 2 authorization code for the file, supplied by Box when an authentication succeeds. Your application must supply this authorization code to Box in exchange for an OAuth 2.0 access token and OAuth 2.0 refresh token in order to make API calls. An authorization header containing a valid access token must be included in every Box API request.                                                                                                                                                                                                                                                                          |
| `redirect_to_box_url` | In popup integrations, the URL to which requests are sent by the confirmation prompt. This parameter is applicable only to Popup integrations. Use this URL to redirect users to the All Files page. This parameter closes the popup panel and refreshes the All Files page to reflect any changes performed by the integration. If you do not want to add this parameter to your application, you can specify the entire URL. **Success**: `#redirect_to_box_url#&status=success&message=Your%20action%20was%20successful%2E`. **Failure**: `#redirect_to_box_url#&status=failure&message=Your%20action%20was%20unsuccessful%2E` |

<!-- markdownlint-enable line-length -->

## Examples Uses of Box Integrations

When a user chooses a popup integration, Box sends a callback request to the
primary callback URL. It sends the callback parameters have been configured to
the server. In some cases, Box may make a second request if the
client can't get all the data it needs from the first request.

The following example does not require a client callback URL:

- The popup integration executes a REST call using a `download_file_url`
  callback parameter.
- The user clicks OK in the confirmation prompt to accept the popup.
- Box sends a request to the following URL (the primary callback URL plus the
  callback parameter):
  `http://www.doceditor.com/service?apikey=abc&file=&redirect=`.
- The response from the callback URL displays a user interface to the user who
  made the request. The popup has all the information needed to continue the
  action and an additional client callback is not needed.

The following example requires a client callback URL:

- The popup integration executes a REST call using a file-callback parameter.
- The user clicks OK in the confirmation prompt to accept the popup.
- The popup displays a page in which Box sends a POST request with the contents
  of a file along with the callback parameters to the remote server.
- Box receives the response from the remote server and directs the client to
  POST the response to the client callback URL. The server identified by the URL
  interprets the response and redirects the user with the correct session ID.

## Client-callback URL Request Format

The POST request that Box sends to the client callback URL takes the response
from the primary callback URL and forwards it to the same URL along with the
same data as the original callback.

<!-- markdownlint-disable line-length -->

| Client Callback URL                                                                                                   | Example                                                  |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Two GET parameters and one POST parameter: `http://your-client-callback-url.com/?get_param1=value1&get_param2=value2` | `POST data: post_param1=value1initial_callback_response` |

<!-- markdownlint-enable line-length -->

The response to the client-callback request is an HTTP status 302, redirecting
the user to the correct URL or to the HTML for a user interface.

Most often the URL points to a separate API or custom script developed for web
app integrations, which parses the result of the primary callback URL. Also,
note that the URL has to be publicly accessible on the internet.

## Making Integration Public Available

To make a Box integration publicly available it needs to be listed in the App
Gallery. Follow the [App Gallery][app-gallery] guide for more details.

[custom-oauth2]: g://applications/custom-app/setup-oauth2
[devconsole]: https://app.box.com/developers/console
[devaccount]: https://account.box.com/signup/n/developer
[app-gallery]: g://applications/app-gallery
