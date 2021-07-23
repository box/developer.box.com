---
rank: 5
related_endpoints:
  - post_webhooks
alias_paths:
  - /webhooks/handle/setup-signatures
  - /webhooks/handle/verify-signatures
  - /webhooks/handle/rotate-signatures
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/signatures_v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/limitations_v2
previous_page_id: webhooks/v2/delete_v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/signatures_v2.md
fullyTranslated: true
---
# 署名の検証

Webhook署名は、Boxから送信されたWebhookペイロードが送信中に改ざんされていないことを確認するために役立ちます。署名により、中間者攻撃または再生攻撃が成功する可能性を大幅に低減できます。

設定すると、Boxは通知の本文の暗号化ダイジェストを生成し、これをWebhookペイロードのヘッダーに添付します。アプリケーションがペイロードを受信したら、同じダイジェストを計算し、それを受信したダイジェストと比較することにより、署名を検証することをお勧めします。ダイジェストが一致しない場合、ペイロードは信頼できません。

署名キーを頻繁に変更することで、保護レベルをさらに高めることができます。古いキーと新しいキーをスムーズに切り替えられるよう、Boxでは同時に2つの署名キーをサポートしています。

## 署名設定

アプリケーションの通知に署名を添付するには、まず、アプリケーション用の署名キーを生成する必要があります。

アプリケーションのキーを設定するには、開発者コンソールでアプリケーションに移動します。\[**Webhook**] タブをクリックし、\[**キーを生成**] ボタンを見つけます。 

プライマリキーまたはセカンダリキーを生成したら、その値をコピーします。この値は、Webhookペイロードの検証で必要になります。これで、すべてのWebhookに`BOX-SIGNATURE-PRIMARY`および`BOX-SIGNATURE-SECONDARY`ヘッダーペイロードが含まれるようになります。

## SDKによる署名の検証

手動で署名を検証することもできますが、[Box公式SDK][sdks]には便利なメソッドが用意されています。

<Samples id="x_webhooks" variant="validate_signatures">

</Samples>

## 手動による署名の検証

署名の検証は基本的に以下の手順で行います。

### タイムスタンプの検証

ペイロードの`BOX-DELIVERY-TIMESTAMP`ヘッダーのタイムスタンプが10分以内のものであることを確認します。

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

### HMAC署名の計算

[開発者コンソール][console]でアプリケーションに設定されている2つの署名のいずれかを使用して、ペイロードのHMACを計算します。

最初にペイロードの本文のバイトを追加してから、`BOX-DELIVERY-TIMESTAMP`ヘッダーにあるタイムスタンプのバイトを追加してください。

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

### Base64変換

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

### 署名の比較

エンコードされたダイジェストを`BOX-SIGNATURE-PRIMARY`または`BOX-SIGNATURE-SECONDARY`ヘッダーの値と比較します。

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

## 署名のローテーション

有効にした場合、Boxは常にすべてのWebhookペイロードで2つの署名を送信します。少なくとも1つの署名が有効であれば、アプリケーションはペイロードを信頼できます。一度に1つの署名キーを更新すると、アプリケーションは常に少なくとも1つの有効な署名を含むペイロードを受信することになります。

### 循環の手順

以下の手順は、[開発者コンソール][console]でプライマリキーとセカンダリキーを作成済みで、どちらかのキーを置き換える準備ができていることを前提としています。

これらの手順に従うことにより、競合することなく、2つの新しいキーを使ってアプリケーションを構成できます。

1. [開発者コンソール][console]で \[リセット] ボタンをクリックして、プライマリキーを変更します。
2. 新しいプライマリキーでアプリケーションを更新します。アプリケーションは、引き続き古いプライマリキーを含む通知を受信する可能性がありますが、セカンダリキーがまだ有効であるため、Webhookは今後も正しく処理されます。
3. 古いプライマリキーを持つWebhookが動作していないことを確認できたら、同じプロセスを使用してセカンダリキーを更新できます。

[sdks]: g://tooling/sdks

[console]: https://app.box.com/developers/console
