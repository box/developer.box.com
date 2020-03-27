---
alias_paths:
  - /docs/tls-1
  - /docs/tls-11-deprecation
centered: true
rank: 2
category_id: changelog
subcategory_id: null
is_index: false
id: changelog/tls-1.1
type: page
total_steps: 3
sibling_id: changelog
parent_id: changelog
next_page_id: ''
previous_page_id: changelog/2018
source_url: >-
  https://github.com/box/developer.box.com/blob/master/content/pages/changelog/tls-1.1.md
---

# TLS 1.1 Deprecation Migration

## Overview

To keep your API communications with Box secure, Box will no longer provide
support for products and services that rely on the Transport Layer Security
(TLS) 1.1 encryption protocol as of March 31, 2020.

## General Testing Instructions

To confirm your application will work when we remove support for TLS 1.1, we
created a new base URL [`https://api-test.box.com/2.0/`][tls_test_url] that you
can test with any Box API endpoint to confirm your application supports TLS 1.2
or higher. This test endpoint will refuse any requests made with TLS 1.1.

If you make an API call to the test endpoint and get a connection refused
error, then your environment needs to be upgraded to support TLS 1.2 or higher.
If you make an API call to the test endpoint and you receive a successful
response, then your environment supports TLS 1.2 or higher and no action is
needed.

<Message type='warning'>

The only endpoint that will not work for testing with this test endpoint is
the upload endpoint.

</Message>

## Testing & Upgrade Instructions by Language

### .NET

#### Test (.Net)

Using the .NET SDK 3.8.0 or higher.

```csharp
BoxConfig config = new BoxConfig(/* config parameters */);
config.BoxApiUri = new System.Uri("https://api-test.box.com/2.0/");
```

#### Upgrade (.Net)

* Upgrade to version 4.6 of the .NET framework. Alternatively, upgrade to 4.5
of the .NET framework, and include the line below in your application.

```csharp
//Make sure this line is globally scoped in your application.
ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12
```

* If you are using the Box .NET or .NET Core SDK, upgrade to version 3.5.2 or
above.

### Java

#### Test (Java)

```java
BoxAPIConnection api = new BoxAPIConnection(/* connection parameters */);
api.setBaseURL("https://api-test.box.com/2.0/");
```

#### Upgrade (Java)

* Upgrade to version 1.8 or higher of the Java Runtime Environment.
* Upgrade to Box Java SDK version 2.14.1 or higher.

### Node

If you are using the official build of Node, you will not be affected.

#### Test (Node)

```js
var BoxSDK = require('box-node-sdk');
var sdk = new BoxSDK({
  /* Other configuration parameters */
  apiRootURL: 'https://api-test.box.com'
});
```

### Ruby

#### Upgrade (Ruby)

Upgrade to Ruby 2.0.0 or later and OpenSSL 1.0.1 or later.

### Python

#### Upgrade (Python)

* If you are using Python 2.7.9 and higher, it is compatible with TLS 1.2 or
higher by default.
* If you are using Python 2.7.8 and below, you will need to update to Python
version 2.7.9 or higher.

### Android

#### Upgrade (Android)

Upgrade to version 5.0 of the Android framework or higher (API level 20 or higher).

[tls_test_url]: https://api-test.box.com/2.0/
