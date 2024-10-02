---
rank: 9
related_endpoints: []
related_guides: []
required_guides: []
---

# API Versioning Strategy

Box provides versioning capabilities for selected API endpoints. The version control system guarantees seamless functioning of existing endpoint versions, even if Box introduces new ones.

API versioning empowers Box to continually enhance its platform, while also offering third-party developers a reliable avenue for feature updates and deprecations.

<Message type='tip'>

To stay informed about the forthcoming API modifications, monitor the [Changelog](https://developer.box.com/changelog/) and maintain a current email address in the Developer Console's App Info section.

</Message>

## How Box API versioning works

<Message type='notice'>

Box API supports versioning in URL `path` and `header`. To determine which version to use, look at the API reference and included sample requests.

</Message>

The default version of the API used in any requests is specified in the URL of the endpoint you call.
An example flow looks like this:

1. When calling the [upload](`https://upload.box.com/api/2.0/files/content`) endpoint without any version header specified, you hit the `2.0` version defined in the URL.

2. Box API processes the `box-version` header which should:

    - contain a valid version name, that is `box-version: 2025.0`
    - be directed at `https://api.box.com/2.0/files/:file_id/metadata`.

3. If the provided version is correct, a response is sent back to the client. The response also contains the `box-version` header if it was provided in the request. By default, this header is not present in the response. If the version is wrong, an error with the HTTP code `400` is returned to the client.

If there is a significant change to API behavior, the new endpoint will be exposed under the new URL.
For example, `https://upload.box.com/api/2.0/files/content` supports a multipart content type when uploading files to Box. If the new version of this API stops supporting this content type, it will be released under a new URL `https://upload.box.com/api/3.0/files/content`.

## Release schedule and naming convention

Box can introduce a new breaking change to certain endpoints **once per year**. An endpoint encompasses all supported HTTP methods within a specific API root. For example, the Sign Request endpoints include:

| Method | Request URL                                        | Description                              |
| ------ | -------------------------------------------------- | ---------------------------------------- |
| GET    | `https://api.box.com/2.0/sign_requests/:id`        | Retrieves specific sign request details. |
| GET    | `https://api.box.com/2.0/sign_requests/`           | Retrieves all sign requests.             |
| POST   | `https://api.box.com/2.0/sign_requests/`           | Creates new sign requests.               |
| POST   | `https://api.box.com/2.0/sign_requests/:id/resend` | Sends a specific sign request again.     |
| POST   | `https://api.box.com/2.0/sign_requests/:id/cancel` | Cancels a specific sign request.         |

Introducing a new version of the sign request endpoint means that all paths and HTTP methods listed above will support it. You can find comprehensive information about the endpoint version in the [Box API Reference](https://developer.box.com/reference/).

### Naming convention

New API versions are labeled according to the calendar year of their release.
For example, if a new version of the Sign Requests endpoint is released in 2025, it will be named `2025.0`.

Box can issue a new breaking change to API endpoints once per year, reserving the right to release an additional breaking change to address security or privacy concerns. In such cases, the new version will be incremented by one in the suffix.
For example, if security issues need addressing in the previously released version `2025.0` of Sign Requests, the new version will be labeled `2025.1`.

Each stable version is supported for a minimum of 12 months. This means that when a new version is released, the previous version becomes deprecated and will be available for use, but no new features will be added.
It also means, that a new version cannot be released sooner than every 12 months.

We strongly recommend updating your apps to make requests to the latest stable API version. However, if your app uses a stable version that is no longer supported, then you will get a response with an HTTP error code `400 - Bad Request`. For details, see [Versioning Errors](#versioning-errors).

If your request doesn't include a version, the API defaults to the initial Box API version—the version available before 
year-based versioning was introduced. However, relying on this behavior is not recommended when adopting deprecated 
changes. To ensure consistency, always specify the API version with each request. By making your application 
version-aware, you anchor it to a specific set of features, ensuring consistent behavior throughout the supported 
timeframe.

## Calling an API version

Box API versions are explicitly declared in the `box-version` header that your app makes requests to. For example:

```curl
curl --location 'https://api.box.com/2.0/sign_requests' \
    --header 'box-version: 2025.0' \
    --header 'Authorization: Bearer …
```

The client gets a list of all created sign requests and asks for version `2025.0`. There are several supported versions of the APIs available, and you specify the version that you want to use with the `box-version` header. There are three types of API versions: **stable**, **deprecated**, and **unstable**.

## Versioning errors

### Calling an incorrect API version in the header

If the API version provided in the `box-version` header is incorrect, the response will return an `HTTP 400 - Bad Request error`.
The error response will have the following structure:

```json
{
  "type": "error",
  "status": 400,
  "code": "invalid_api_version",
  "message":  "Some error message",
  "context_info": {
    "conflicts": [
      "box_version value must be in the format of YYYY.MM"
    ]
  },
  "help_url": "https://developer.box.com/guides/api-calls/permissions-and-errors/versioning-errors/"
}
```

The error message will contain information about the error and possible correct values for the `box-version` header. For example:

 - `The 'box-version' header supports only one header value per request, do not use comas.` - when the header contains multiple values separated by commas.
 - `Missing required box-version header.` - when the header is missing but required.
 - `Unsupported API version specified in 'box-version' header. Supported API versions: [LIST_OF_SUPPORTED_VERSIONS_COMA_SEPARATED]` - when the version specified is not supported by the API.

### Calling a deprecated API

When a customer uses an API version that Box has marked as deprecated, the API will respond as usual. However, it will append a `Deprecation` header, stating the deprecation date, for example:

```sh
Deprecation: date="Fri, 11 Nov 2023 23:59:59 GMT"
Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated
```

Customers should monitor API responses and take note when this header appears, signaling the need to plan for the transition to a new API version.

## How Box SDK versioning works

The versioning strategy is only applied to [next generation generated SDKs](https://developer.box.com/sdks-and-tools/#next-generation-sdks).
Box SDKs support the **All Versions In** SDK approach.
This means that every release of SDK provides access to all endpoints in any version which is currently live. All generated SDKs use manager's approach - they group all endpoints with the same domain in one manager. For example `FolderManager` contains methods to: `create_folder`, `get_folder_by_id`, `update_folder_by_id`, `delete_folder_by_id`, `get_folder_items` and `copy_folder`.This division is done based on the value of `x-box-tag` field, which is assigned to each method in Public API Service specification. It mostly corresponds to the root of the endpoint URL, but not necessarily. For example: `FolderManager` contains methods with `https://api.box.com/2.0/folders` root URL, but the same base URL is also used in some methods of `SharedLinkFoldersManager`.
References to all managers are stored under one Box Client object.

See an example of the endpoint's lifecycle:

1. Initial state (only one version is available).

    ```js
    class FilesManager {
        async updateFileById(
            fileId: string,
            requestBody: UpdateFileByIdRequestBody,
            queryParams: UpdateFileByIdQueryParams,
            headers: UpdateFileByIdHeaders
        ): Promise < FileFull > {}
    }
    ```

2. A new `v2025_0` version of the endpoint is introduced (previous version is deprecated).

    The SDK introduces a new method for each new version of an endpoint. These methods are stored in the same manager as the old ones, but their names and corresponding classes are suffixed with the version number. The old method is deprecated with a notice indicating the minimal maintenance date – this will be the date when the endpoint will be considered for end-of-life status.

    ```js
    class FilesManager {
        /**
         * @deprecated This endpoint will be EOL'ed after 05-2026.
            */
        async updateFileById(
            fileId: string,
            requestBody: UpdateFileByIdRequestBody,
            queryParams: UpdateFileByIdQueryParams,
            headers: UpdateFileByIdHeaders
        ): Promise<FileFull> {}

        async updateFileById_2025_0(
            fileId: string,
            requestBody: UpdateFileByIdRequestBody_2025_0,
            queryParams: UpdateFileByIdQueryParams_2025_0,
            headers: UpdateFileByIdHeaders_2025_0
        ): Promise<FileFull_2025_0> {}
    }
    ```

3. The API endpoint is marked as End-of-Life (EOL)

    The SDK releases a breaking change release with removed end-of-life (EOL) endpoints. Ideally, we should group the end-of-life dates for all endpoints into one date per quarter to avoid releasing numerous new major versions of SDKs.

    ```js
    class FilesManager {
        async updateFileById_2025_0(
            fileId: string,
            requestBody: UpdateFileByIdRequestBody_2025_0,
            queryParams: UpdateFileByIdQueryParams_2025_0,
            headers: UpdateFileByIdHeaders_2025_0
        ): Promise < FileFull_2025_0 > {}
    }
    ```

## Breaking vs non-breaking changes

Breaking changes in the Box API occur within versioned releases, typically accompanied by a new major API version. Minor adjustments, which do not disrupt existing functionality, can be integrated into an existing API version. The following table offers illustrations of both breaking and non-breaking changes.

| API Change                                               | Breaking change |
| -------------------------------------------------------- | --------------- |
| New endpoints                                            | No              |
| New [read-only](https://swagger.io/docs/specification/data-models/data-types/) or optional fields in request                 | No              |
| New required fields in request                           | Yes             |
| New string constant in request                           | Yes             |
| Deprecation                                              | No              |
| Retired / End-of-Life endpoints                          | Yes             |
| Rename/reshape of a field, data type, or string constant | Yes             |
| More restrictive change to field validations             | Yes             |
| Less restrictive change to field validations             | No              |
| Changing HTTP status code returned by an operation       | Yes             |
| Removing a declared property                             | Yes             |
| Removing or renaming APIs or API parameters              | Yes             |
| Adding a required request header                         | Yes             |
| Adding more error codes                                  | No              |
| Removing or modifying error codes                        | Yes             |
| Adding a member to an enumeration                        | Yes             |

<Message type='tip'>

We use [oasdiff](https://github.com/Tufin/oasdiff/blob/main/BREAKING-CHANGES-EXAMPLES.md) tool to detect most of the possible breaking changes.
</Message>

## Support policy and deprecation information

When new versions of the Box APIs and Box SDKs are released, earlier versions will be retired. Box marks a version as `deprecated` at least 24 months before retiring it. In other words, a deprecated version cannot become end-of-life
sooner than after 24 months.
Similarly, for individual APIs that are generally available (GA), Box declares an API as `deprecated` at least 24 months in advance of removing it from the GA version.

When we increment the major version of the API (for example, from `2024.0` to `2025.0`), we're announcing that the current version (in this example, `2024.0`) is immediately deprecated and we'll no longer support it 24 months after the announcement. We might make exceptions to this policy for service security or health reliability issues.

When an API is marked as deprecated, we strongly recommend that you migrate to the latest version as soon as possible. In some cases, we'll announce that new applications will have to start using the new APIs a short time after the original APIs are deprecated.

When customer calls deprecated API endpoint, the response will contain a header:

```sh
Deprecation: date="Fri, 11 Nov 2023 23:59:59 GMT"
Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated
```

The date tells clients when this version was marked as deprecated.

## Versioning considerations

When building your request, consider the following:

 - If you do not specify a version, the service will return the initial version—the version that existed before year-based versioning was introduced. If the initial version does not exist, the response will return an HTTP error code 400 - Bad Request.
 - If the version header is specified but the requested version is unavailable, the response will return an HTTP error code 400 - Bad Request.

You can check [Versioning Errors](#versioning-errors) for more information.

When Box deprecates a resource or a property of a resource in the API, the change is communicated in one or more of the following ways:

- Calls that include the deprecated behavior return the response header `Box-API-Deprecated-Reason` and a link to get more information:

    ```sh
    box-version: 2023.0
    Deprecation: version="version", date="date"
    Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated
    ```

- A notice about the deprecation is posted in the developer changelog.
- The API reference is updated to identify the affected resource and any action you need to take.
- If there is an imminent backwards-incompatible change that affects your app, then the contact email for your app might be contacted about the deprecation.

## Additional resources

- [API reference](https://developer.box.com/reference/)
