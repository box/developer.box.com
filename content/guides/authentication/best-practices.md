---
rank: 7
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
---

# Best Practices

## Client secret security

Your client secret is confidential and needs to be protected. Because this is
how we securely identify an application's identity when obtaining an
Access Token, you do not want to freely distribute a client secret. This
includes via email, public forums and code repositories, distributed native
applications, or client-side code.

## Cache tokens

Because fetching new tokens is expensive, we recommend using a token cache
to prevent unnecessary requests.

After retrieving a token, store it in an in-memory cache, like Memcached, or a
built-in ASP.NET cache service. By default, Access Tokens are valid for 60
minutes, but we recommend setting the expiration time to around 50 minutes to
allow for a buffer.

When you need a token, first check the cache for a valid token. If the token
expired, get a new one and store it in the cache for 50 minutes.

```ruby
def self.user_client(user_id)
    access_token=Rails.cache.fetch("box_tokens/user/#{user_id}", :expires_in => 50.minutes) do
        puts "getting new user token"
        response= Boxr::get_user_token(user_id, private_key: PRIVATE_KEY, private_key_password: ENV['JWT_PRIVATE_KEY_PASSWORD'])
        response.access_token
    end

    Boxr::Client.new(access_token)
end
```

<Message tip>
  Official Box SDKs use token caching.
</Message>

## Expired tokens

Expired tokens return a 401: Unauthorized error. This error should be handled
to refresh the token.

## Downscope tokens

It is important to follow the principle of least privilege when thinking about
Access Tokens. This can be accomplished through [downscoping][downscope], where
a fully scoped Access Token is exchanged for a more restricted Access Token that
can then be deployed to client-side code, mobile environments, or UI tools.

```java
//Define resource/scopes that downscoped token has access to
String resource = "https://api.box.com/2.0/files/RESOURCE_ID";
List<String> scopes = new ArrayList<String>();
scopes.add("base_preview");
scopes.add("item_download");

//Preform token exchange
ScopedToken downscopedToken =
    client.getLowerScopedToken(scopes,resource);

//Downscoped token available in downscopedToken.getAccessToken()
```

## Revoke tokens

Both fully scoped Access Tokens and Downscoped Tokens can be [revoked][revoke].
This allows you to manage the lifespan of a token to reduce exposure when a user
logs out , there is suspicious activity, or when you need to push new security
enhancements.

## Developer Tokens

Developer Tokens should only be used for development or testing purposes and
never in production.

[downscope]: g://authentication/tokens/downscope
[revoke]: g://authentication/tokens/revoke
