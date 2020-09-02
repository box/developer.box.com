---
rank: 5
related_guides:
  - webhooks/manage/for-file
  - webhooks/handle/payload
  - webhooks/handle/rotate-signatures
  - webhooks/handle/setup-signatures
required_guides:
  - webhooks/manage/for-file
  - webhooks/handle/setup-signatures
alias_paths: []
category_id: webhooks
subcategory_id: webhooks/handle
is_index: false
id: webhooks/handle/verify-signatures
type: guide
total_steps: 5
sibling_id: webhooks/handle
parent_id: webhooks/handle
next_page_id: webhooks/handle/rotate-signatures
previous_page_id: webhooks/handle/setup-signatures
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/webhooks/handle/verify-signatures.md
---
<!-- alex disable attacks -->

# Webhook署名の検証

中間者攻撃や再生攻撃からアプリケーションを保護するには、Webhook署名の検証が非常に重要です。検証により、Webhookペイロードが実際にBoxから送信されたものであること、およびペイロードの内容が転送中に変更されていないことを確認できます。

## SDKによる検証

独自のコードを使用して手動でSDKを検証することもできますが、SDKには便利なメソッドが用意されています。

<Samples id="x_webhooks" variant="validate_signatures">

</Samples>

## 手動での検証

SDKのメソッドを使用しない場合、署名の検証は基本的に以下の手順で行います。

### 1. 有効なタイムスタンプの確認

初めに、ペイロードの`BOX-DELIVERY-TIMESTAMP`ヘッダーのタイムスタンプが10分以内のものであることを確認します。

<Tabs>

<Tab title="Node">

```js
var timestamp = headers['BOX-DELIVERY-TIMESTAMP'];
var date = Date.parse(timestamp);
var expired = Date.now() - date > 10*60*1000;
```

</Tab>

<Tab title="Python">

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

### 2. HMAC署名の計算

次に、[開発者コンソール][console]のアプリケーションの設定にある2つの署名のいずれかを使用して、ペイロードのHMACを計算します。

最初にペイロードの本文のバイトを追加し、次に`BOX-DELIVERY-TIMESTAMP`ヘッダーにあるタイムスタンプのバイトを追加します。

<Tabs>

<Tab title="Node">

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

<Tab title="Python">

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

### 4. base64への変換

HMACを`Base64`でエンコードされたダイジェストに変換します。

<Tabs>

<Tab title="Node">

```js
var digest1 = hmac1.digest('base64');
var digest2 = hmac2.digest('base64');
```

</Tab>

<Tab title="Python">

```py
import base64

digest1 = base64.b64encode(hmac1)
digest2 = base64.b64encode(hmac2)
```

</Tab>

</Tabs>

### 5. 署名の比較

最後に、エンコードされたダイジェストを`BOX-SIGNATURE-PRIMARY`または`BOX-SIGNATURE-SECONDARY`ヘッダーの値と比較します。

`BOX-SIGNATURE-PRIMARY`ヘッダーの値はプライマリキーで作成されたダイジェストと比較し、`BOX-SIGNATURE-SECONDARY`ヘッダーの値はセカンダリキーで作成されたダイジェストと比較してください。

<Tabs>

<Tab title="Node">

```js
var signature1 = headers['BOX-SIGNATURE-SECONDARY'];
var signature2 = headers['BOX-SIGNATURE-PRIMARY'];

var primarySignatureValid = digest1 === signature1
var secondarySignatureValid = digest2 === signature2

var valid = !expired && (primarySignatureValid || secondarySignatureValid)
```

</Tab>

<Tab title="Python">

```py
signature1 = headers["BOX-SIGNATURE-SECONDARY"]
signature2 = headers["BOX-SIGNATURE-PRIMARY"]

primary_sig_valid = digest1 === signature1
secondary_sig_valid = digest2 === signature2

valid = !expired && (primary_sig_valid || secondary_sig_valid)
```

</Tab>

</Tabs>

<Message warning>

HTTPヘッダー名では大文字と小文字が区別されないため、クライアントでは、すべてのヘッダーの名前を標準化された小文字または大文字の形式に変換してから、ヘッダーの値を確認するのが理想的です。

</Message>

[console]: https://app.box.com/developers/console
