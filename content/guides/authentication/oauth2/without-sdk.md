---
rank: 2
related_endpoints: 
  - get_authorize
related_guides:
  - applications/select
  - authentication/select
  - applications/custom-apps/oauth2-setup
required_guides:
  - authentication/select
  - applications/custom-apps/oauth2-setup
related_resources: []
alias_paths: []
---

# OAuth 2.0 without SDKs

If you are not ready to use any of the official Box SDKs, or an SDK is not
available in your language of choice, it is totally possible to use the Box APIs
without them.

To authenticate a user using OAuth 2.0. the user is redirected to the Box web
app in a browser where they log in and grant the application access to their
data before they are redirected back to the applications `redirect_url`. This
last step requires the application to be running on a web server somewhere
accessible to the user.

## Overview

To complete an OAuth 2.0 flow the following steps need to be completed.

1. Configure the authorization URL
2. Redirect the user to the Box website
3. The user grants the application access
4. Exchange the authorization code for an access token

At the end of this flow, the application has an Access Token that can be used to
make API calls on behalf of this user.

<Message notice>
  The action token acquired through OAuth 2.0 is inherently tied to the user who
  authorized the application. Any API call made with this token will seem to
  come from this application, and the user needs to have access to any file or
  folder the application tries to access with this token.

  It is possible to [act as another user](g://authentication/oauth2/as-user)
  using the `as-user` header.
</Message>

## Prerequisites

Before continuing you will need to have completed the following steps.

* Create a Box Application within the developer console with the OAuth 2.0
  authentication method.
* Copy the `client_id` and `client_secret` values and keep them handy.

## Parameters

<!-- markdownlint-disable line-length -->

| Parameter       | Description                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLIENT_ID`     | The client ID or API key for the application                                                                                                                  |
| `CLIENT_SECRET` | The client secret or API secret for the application                                                                                                           |
| `REDIRECT_URI`  | The redirect URL for your application that a user will be sent to after they have authorized the application. This can be configured in the developer console |

<!-- markdownlint-enable line-length -->

## 1. Configure authorization URL

The first step is to configure the authorization URL of your application.

<Tabs>
  <Tab title='.Net'>

<!-- markdownlint-disable line-length -->

```dotnet
var baseUrl = "https://account.box.com/api/oauth2/authorize";
var clientId = "[CLIENT_ID]";
var authorizationUrl = $"{baseUrl}?client_id={clientId}&response_type=code";
```

<!-- markdownlint-enable line-length -->

  </Tab>
  <Tab title='Java'>

<!-- markdownlint-disable line-length -->

```java
String baseUrl = "https://account.box.com/api/oauth2/authorize";
String clientId = "[CLIENT_ID]";
String authorizationUrl = String.format("%s?client_id=%s&response_type=code", baseUrl, clientId);
```

<!-- markdownlint-enable line-length -->

  </Tab>
  <Tab title='Python'>

```python
base_url = 'https://account.box.com/api/oauth2/authorize'
client_id = '[CLIENT_ID]'
authorizationUrl = f'{base_url}?client_id=${client_id}&response_type=code'
```

  </Tab>
  <Tab title='Node'>

```js
var baseUrl = "https://account.box.com/api/oauth2/authorize";
var clientId = "[CLIENT_ID]";
var authorizationUrl = `${baseUrl}?client_id=${clientId}&response_type=code`;
```

  </Tab>

</Tabs>

<CTA to="e://get-authorize">
  Learn more about the authorization URL
</CTA>

## 2. Redirect user

Next, redirect the user to the authorization URL. The way in which a user is
redirected to a URL depends on the application framework used. Most framework
documentation provides extensive guidance on this topic.

<Tabs>
  <Tab title='.NET'>

```dotnet
var authorizationUrl = $"{baseUrl}?client_id={clientId}&response_type=code";
// redirectTo(authorizationUrl);
```

  </Tab>
  <Tab title='Java'>

<!-- markdownlint-disable line-length -->

```java
String authorizationUrl = String.format("%s?client_id=%s&response_type=code", baseUrl, clientId);

// response.redirect(authorizationUrl);
```

<!-- markdownlint-enable line-length -->

  </Tab>
  <Tab title='Python'>

```python
auth_url = f'{base_url}?client_id=${client_id}&response_type=code'
// redirect(auth_url, code=302)
```

  </Tab>
  <Tab title='Node'>

```js
var authorizationUrl = `${baseUrl}?client_id=${clientId}&response_type=code`;
// res.redirect(authorize_url)
```

  </Tab>
</Tabs>

<!-- markdownlint-enable line-length -->

<Message>
  Additional query parameters can be passed along when redirecting the user to
  limit down the scope, or pass along some extra state. See the [reference
  documentation](endpoint://get-authorize) for more information.
</Message>

## 3. User grants application access

Once the user is redirected to the Box web app they will have to log in. After
they logged in they are presented with a screen to approve your application.

<ImageFrame border center shadow width="400">
  ![Example OAuth 2.0 approval screen](./oauth2-grant.png)
</ImageFrame>

When the user accepts this requests and clicks the button, the browser will
redirect to your application's redirect URL as configured in the developer console.

## 4. Exchange code

The user is redirected to your application's redirect URL with a query parameter
containing a short-lived authorization code.

```curl
https://your.domain.com/path?code=1234567
```

This code is not an [Access Token][tokens] and is only valid for a few seconds.
The SDKs can be used to exchange the code for an actual Access Token.

<Tabs>
  <Tab title='.NET'>

```dotnet
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;

String authenticationUrl = "https://api.box.com/oauth2/token";
var client = new HttpClient();

var content = new FormUrlEncodedContent(new[]
{
  new KeyValuePair<string, string>("grant_type", "authorization_code"),
  new KeyValuePair<string, string>("code", "[CODE]"),
  new KeyValuePair<string, string>("client_id", "[CLIENT_ID]"),
  new KeyValuePair<string, string>("client_secret", "[CLIENT_SECRET]")
});

var response = client.PostAsync(authenticationUrl, content).Result;

class Token
{
  public string access_token { get; set; }
}

var data = response.Content.ReadAsStringAsync().Result;
var token = JsonConvert.DeserializeObject<Token>(data);
var accessToken = token.access_token;
```

  </Tab>
  <Tab title='Java'>

```java
String authenticationUrl = "https://api.box.com/oauth2/token";

List<NameValuePair> params = new ArrayList<NameValuePair>();

params.add(new BasicNameValuePair("grant_type", "authorization_code"));
params.add(new BasicNameValuePair("code", "[CODE]"));
params.add(new BasicNameValuePair("client_id", "[CLIENT_ID]"));
params.add(new BasicNameValuePair("client_secret", "[CLIENT_SECRET]"));

CloseableHttpClient httpClient = HttpClientBuilder.create().disableCookieManagement().build();

HttpPost request = new HttpPost(authenticationUrl);
request.setEntity(new UrlEncodedFormEntity(params));

CloseableHttpResponse httpResponse = httpClient.execute(request);
HttpEntity entity = httpResponse.getEntity();

String response = EntityUtils.toString(entity);
httpClient.close();

class Token {
  String access_token;
}

Token token = (Token) gson.fromJson(response, Token.class);
String accessToken = token.access_token;
```

  </Tab>
  <Tab title='Python'>

```python
authentication_url = "https://api.box.com/oauth2/token";

params = urlencode({
  'grant_type': 'authorization_code',
  'code': '[CODE]',
  'client_id': '[CLIENT_ID]',
  'client_secret': '[CLIENT_SECRET]'
}).encode()

request = Request(authentication_url, params)
response = urlopen(request).read()
access_token = json.loads(response)['access_token']
```

  </Tab>
  <Tab title='Node'>

```js
const authenticationUrl = 'https://api.box.com/oauth2/token';

let accessToken = await axios.post(
  authenticationUrl,
  querystring.stringify({
    grant_type: 'authorization_code',
    code: '[CODE]',
    client_id: '[CLIENT_ID]',
    client_secret: '[CLIENT_SECRET]'
  })
)
.then(response => response.data.access_token)
```

  </Tab>
</Tabs>

## Summary

By now the application should be able to authorize a user using OAuth 2.0 without
using any of the SDKs, by using the following steps.

1. Configure the authorization URL
2. Redirect the user to the Box website
3. The user grants the application access
4. Exchange the authorization code for an access token

To learn how to use this token head over to the guide on [Making API
calls](g://api-calls).

[tokens]: guide://authentication/access-tokens
