---
rank: 100
related_endpoints: []
related_guides: []
required_guides: []
---

# Versioning errors

Box provides versioning capabilities for selected API endpoints. The version control system guarantees seamless functioning of existing endpoint versions, even if Box introduces new ones.

API versioning empowers Box to continually enhance its platform, while also offering third-party developers a reliable avenue for feature updates and deprecations.

To stay informed about the API modifications, monitor the [Changelog](page://changelog) and maintain a current email address in the **App Info** section of the Developer Console.

## Error examples

When using versioned API calls, you can encounter versioning-related errors. This reference lists the most common cases when errors appear and provides you with examples of such errors.

## Calling with incorrect `box-version` header

If you call an API using an incorrect `box-version` header, the API will respond with an `HTTP error code 400 - Bad Request` error and provide the supported versions in the response message.

The response will include one of the following status messages in `message` field:

| Details                                                                                         | Message                                                                                       |
|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `box-version` value is an unsupported API version or was sent malformed.                        | `Invalid API version specified in 'box-version' header.`                                      |
| The request headers did not include `box-version` header when versioned only endpoint was called. | `Missing required box-version header.`                                                        |
| `box-version` is empty.                                                                         | `Invalid (empty) API version specified in 'box-version' header.`                              |
| `box-version` contained multiple version. It requires **only one** version per request.         | `The 'box-version' header supports only one header value per request, do not use comas.` |
| An unsupported API version is used for an existing endpoint.                        | `Unsupported API version specified in 'box-version' header.`                                   |

An example of a response with an incorrect `box-version` header:

```json
{
  "type": "error",
  "status": 400,
  "code": "invalid_api_version",
  "help_url": "https://developer.box.com/reference/error-codes/invalid-api-version",
  "message": "Invalid API version specified in 'box-version' header. Supported API versions: [2024.0].",
  "request_id": "abcdef123456"
}
```

## Calling an incorrect API version in the URL

Box documentation specifies API URLs. For instance, the Sign Requests endpoints are accessed via: `https://api.box.com/2.0/sign_requests/`. If you mistakenly make a call to an incorrect version, such as `https://api.box.com/3.0/sign_requests/`, the response returns an `HTTP error code 404 - Not Found` error.

## Calling a deprecated API

When you use an API version that Box has marked as deprecated, the API will respond as usual. Additionally, it will append a `Deprecation` header, stating the deprecation date. For example:

```sh
Deprecation: date="Fri, 11 Nov 2026 23:59:59 GMT"
Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated
```

You should monitor API responses to verify if the `Deprecation` header is present to accordingly plan the transition to a new API version.

## Calling a non-existent version

If you attempt to use an outdated API version, such as `2025.0` which has reached its end-of-life, the response will return an `HTTP error code 404 - Not Found`. See [Calling an incorrect API version in the URL](#calling-an-incorrect-api-version-in-the-url) for more information.