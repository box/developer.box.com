---
rank: 5
related_endpoints:
  - post_webhooks
alias_paths:
  - /guides/webhooks/handle/setup-signatures
  - /guides/webhooks/handle/verify-signatures
  - /guides/webhooks/handle/rotate-signatures
---

# Signature Verification

Webhook signatures help ensure that a webhook payload was sent by Box and was
not tampered with. Signatures greatly reduce the likelihood of
a successful man-in-the-middle or replay attacks.

When signatures are configured, Box generates a cryptographic digest of the
notification's body and attaches it to the header of the webhook payload. When
your application receives the payload, verify the signatures by calculating the
same digest and comparing it to the one received. If the digests do not match,
the payload should not be trusted.

You can achieve an extra level of protection by frequently changing the
signature keys. To enable a smooth transition between the old and new keys,
Box supports two simultaneous signature keys.

## Signature configuration

In order to attach signatures to an application's notifications, you must first
generate signature keys for the application.

To configure your application's keys follow the steps below.

1. Navigate to the application in the developer console.
2. Click on the **Webhooks** tab.
3. Click the **Manage signature keys** button.
4. Click the **Generate Key** button to configure your keys.

Once generating the primary or secondary key, copy the value. You will need
it to verify the webhook payloads. Every webhook will now include a
`BOX-SIGNATURE-PRIMARY` and `BOX-SIGNATURE-SECONDARY` header payload.

## Signature verification with SDKs

Although it is possible to verify signatures manually, methods are provided for
your convenience in the [official Box SDKs][sdks].

<Samples id='x_webhooks' variant='validate_signatures' />

## Manual signature verification

The following steps describe the basics of how to verify a signature.

### Timestamp validation

Check if the timestamp in the `BOX-DELIVERY-TIMESTAMP` header of the payload is
not older than ten minutes.

<Tabs>
  <Tab title='Node'>

```js
var timestamp = headers['BOX-DELIVERY-TIMESTAMP'];
var date = Date.parse(timestamp);
var expired = Date.now() - date > 10*60*1000;
```

  </Tab>
  <Tab title='Python'>

```python
import dateutil.parser
import pytz
import datetime

timestamp = headers["BOX-DELIVERY-TIMESTAMP"]
date = dateutil.parser.parse(timestamp).astimezone(pytz.utc)

now = datetime.datetime.now(pytz.utc)
delta = datetime.timedelta(minutes=10)
expiry_date = now - deltaMinutes

expired = date >= expiry_date
```

  </Tab>
</Tabs>

### Calculate HMAC signature

Calculate the HMAC of the payload using either one of the two configured
signatures for the application in the [Developer Console][console].

Ensure you append the bytes of the payload body first, and then the bytes
of the timestamp found in the `BOX-DELIVERY-TIMESTAMP` header.

<Tabs>
  <Tab title='Node'>

```js
var crypto = require('crypto');

var primaryKey = '...';
var secondaryKey = '...';

var payload = '{"type":"webhook_event"...}';

var hmac1 = crypto.createHmac('sha256', primaryKey);
hmac1.update(payload);
hmac1.update(timestamp);

var hmac2 = crypto.createHmac('sha256', secondaryKey);
hmac2.update(payload);
hmac2.update(timestamp);
```

  </Tab>
  <Tab title='Python'>

```python
import hmac
import hashlib

primary_key = '...'
secondary_key = '...'

payload = "{\"type\":\"webhook_event\"...}"

bytes = bytes(payload, 'utf-8') + bytes(timestamp, 'utf-8')

hmac1 = hmac.new(primary_key, bytes, hashlib.sha256).digest()
hmac2 = hmac.new(secondary_key, bytes, hashlib.sha256).digest()
```

  </Tab>
</Tabs>

### Base64 Conversion

Convert the HMAC to a `Base64` encoded digest.

<Tabs>
  <Tab title='Node'>

```js
var digest1 = hmac1.digest('base64');
var digest2 = hmac2.digest('base64');
```

  </Tab>
  <Tab title='Python'>

```python
import base64

digest1 = base64.b64encode(hmac1)
digest2 = base64.b64encode(hmac2)
```

  </Tab>
</Tabs>

### Signature comparison

Compare the encoded digest with the value of the
`BOX-SIGNATURE-PRIMARY` or `BOX-SIGNATURE-SECONDARY` headers.

Compare the value of the `BOX-SIGNATURE-PRIMARY` header
to the digest created with the primary key, and the value of the
`BOX-SIGNATURE-SECONDARY` header to the digest created with the secondary key.

<Tabs>
  <Tab title='Node'>

```js
var signature1 = headers['BOX-SIGNATURE-SECONDARY'];
var signature2 = headers['BOX-SIGNATURE-PRIMARY'];

var primarySignatureValid = digest1 === signature1
var secondarySignatureValid = digest2 === signature2

var valid = !expired && (primarySignatureValid || secondarySignatureValid)
```

  </Tab>
  <Tab title='Python'>

```python
signature1 = headers["BOX-SIGNATURE-SECONDARY"]
signature2 = headers["BOX-SIGNATURE-PRIMARY"]

primary_sig_valid = digest1 === signature1
secondary_sig_valid = digest2 === signature2

valid = !expired && (primary_sig_valid || secondary_sig_valid)
```

  </Tab>
</Tabs>

<Message warning>
  HTTP header names are case insensitive. Your client should convert
  all header names to a standardized lowercase or uppercase format before trying
  to determine the value of a header.
</Message>

## Rotate signatures

When enabled, Box sends two signatures with every webhook payload.
Your application can trust a payload as long as at least one of its signatures
is valid. When updating one signature key at a time your application will always
receive a payload with at least one valid signature.

### Rotation steps

These instructions assume that you have already created a primary and secondary
key in the [Developer Console][console] and you are ready to replace either of
them.

By following these steps you can configure your application with two new keys
without any conflicts.

1. Go to the **Webhooks** tab in the [Developer Console][console].
2. Click the **Manage signatures keys**.
3. Click the **Reset** button to change the primary key.
4. Update your application with the new primary key. Your application can still receive notifications with the old primary key, but your webhooks should be processed correctly since the secondary key is still valid.
5. Once you are confident that no webhooks with the old primary key are in-flight, you can update the secondary key using the same process.

[sdks]: g://tooling/sdks
[console]: https://app.box.com/developers/console
