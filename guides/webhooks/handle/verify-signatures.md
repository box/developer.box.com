---
rank: 5
related_guides:
  - webhooks/manage/create
  - webhooks/handle/payload
  - webhooks/handle/rotate-signatures
  - webhooks/handle/setup-signatures
required_guides:
  - webhooks/manage/create
  - webhooks/handle/setup-signatures
alias_paths: []
id: webhooks/handle/verify-signatures
cId: webhooks
scId: webhooks/handle
isIndex: false
---

# Verify webhook signatures

To protect your application against man-in-the-middle and replay attacks it is
essential to verify webhook signatures. Verification ensures that the webhook
payloads were actually sent by Box and that the contents of the payloads have
not been changed in transport.

## Verify with SDK

Although it is possible to verify SDKs manually using your own code, convenience
methods are provided in our SDKs.

<Samples id='x_webhooks' variant='validate_signatures' />

## Verify manually

If using our SDKs is not an option the following steps describe the basics of
how to verify a signature.

### 1. Ensure valid timestamp

Firstly, ensure that the timestamp in the `BOX-DELIVERY-TIMESTAMP` header of the
payload is no older than ten minutes.

<Tabs>

<Tab title='Node'>

```js
var timestamp = headers['BOX-DELIVERY-TIMESTAMP'];
var date = Date.parse(timestamp);
var expired = Date.now() - date > 10*60*1000;
```

</Tab>
<Tab title='Python'>

```py
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

### 2. Calculate HMAC signature

Then, calculate the HMAC of the payload using either of the two signatures
found in the application's configuration on the [developer console][console].

Make sure to append the bytes of the body of the payload first, and then the
bytes of the timestamp found in the `BOX-DELIVERY-TIMESTAMP` header.

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

```py
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

### 4. Convert to Base64

Make sure to convert the HMAC to a `Base64` encoded digest.

<Tabs>

<Tab title='Node'>

```js
var digest1 = hmac1.digest('base64');
var digest2 = hmac2.digest('base64');
```

</Tab>
<Tab title='Python'>

```py
import base64

digest1 = base64.b64encode(hmac1)
digest2 = base64.b64encode(hmac2)
```

</Tab>

</Tabs>

### 5. Compare signatures

Finally, compare the encoded digest with the value of the
`BOX-SIGNATURE-PRIMARY` or `BOX-SIGNATURE-SECONDARY` headers.

Make sure to compare the value of the `BOX-SIGNATURE-PRIMARY` header
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

```py
signature1 = headers["BOX-SIGNATURE-SECONDARY"]
signature2 = headers["BOX-SIGNATURE-PRIMARY"]

primary_sig_valid = digest1 === signature1
secondary_sig_valid = digest2 === signature2

valid = !expired && (primary_sig_valid || secondary_sig_valid)
```

</Tab>

</Tabs>

[console]: https://app.box.com/developers/console
