---
rank: 5
related_endpoints:
  - post_webhooks
alias_paths:
  - /guides/webhooks/handle/setup-signatures
  - /guides/webhooks/handle/verify-signatures
  - /guides/webhooks/handle/rotate-signatures
category_id: webhooks
subcategory_id: webhooks/v2
is_index: false
id: webhooks/v2/signatures-v2
type: guide
total_steps: 6
sibling_id: webhooks/v2
parent_id: webhooks/v2
next_page_id: webhooks/v2/limitations-v2
previous_page_id: webhooks/v2/delete-v2
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/webhooks/v2/signatures-v2.md
fullyTranslated: true
---
# 署名の検証

Webhook署名は、Boxから送信されたWebhookペイロードが改ざんされていないことを確認するために役立ちます。署名により、中間者攻撃または再生攻撃が成功する可能性を大幅に低減できます。

署名を構成すると、Boxは通知の本文の暗号化ダイジェストを生成し、これをWebhookペイロードのヘッダーに添付します。アプリケーションがペイロードを受信したら、同じダイジェストを計算し、それを受信したダイジェストと比較して署名を検証してください。ダイジェストが一致しない場合、ペイロードは信頼できません。

署名キーを頻繁に変更することで、保護レベルをさらに高めることができます。古いキーと新しいキーをスムーズに切り替えられるよう、Boxでは同時に2つの署名キーをサポートしています。

## 署名設定

アプリケーションの通知に署名を添付するには、まず、アプリケーション用の署名キーを生成する必要があります。

アプリケーションのキーを構成するには、以下の手順に従います。

1. 開発者コンソールでアプリケーションに移動します。
2. \[**Webhook**] タブをクリックします。
3. \[**署名キーを管理**] ボタンをクリックします。
4. \[**キーを生成**] ボタンをクリックして、キーを構成します。

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

### HMAC署名の計算

[開発者コンソール][console]でアプリケーションに構成されている2つの署名のいずれかを使用して、ペイロードのHMACを計算します。

最初にペイロード本文のバイトを追加してから、`BOX-DELIVERY-TIMESTAMP`ヘッダーにあるタイムスタンプのバイトを追加してください。

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

```python
import base64

digest1 = base64.b64encode(hmac1)
digest2 = base64.b64encode(hmac2)

```

</Tab>

</Tabs>

### 署名の比較

エンコードされたダイジェストを`BOX-SIGNATURE-PRIMARY`または`BOX-SIGNATURE-SECONDARY`ヘッダーの値と比較します。

`BOX-SIGNATURE-PRIMARY`ヘッダーの値をプライマリキーで作成されたダイジェストと比較し、`BOX-SIGNATURE-SECONDARY`ヘッダーの値をセカンダリキーで作成されたダイジェストと比較します。タイミング攻撃を防ぐため、署名間でタイミングの影響がない比較方法を使用してください。

<Tabs>

<Tab title="Node">

```js
const crypto = require('crypto');

function compareSignatures(expectedSignature, receivedSignature) {
    const expectedBuffer = Buffer.from(expectedSignature, 'base64');
    const receivedBuffer = Buffer.from(receivedSignature, 'base64');

    if (expectedBuffer.length !== receivedBuffer.length) {
        return false;
    }

    return crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
}

const signature1 = headers['BOX-SIGNATURE-SECONDARY'];
const signature2 = headers['BOX-SIGNATURE-PRIMARY'];

const primarySignatureValid = compareSignatures(digest1, signature1)
const secondarySignatureValid = compareSignatures(digest2, signature2)

const valid = !expired && (primarySignatureValid || secondarySignatureValid)

```

</Tab>

<Tab title="Python">

```python
import hmac

def compare_signatures(expected_signature: Optional[str], received_signature: Optional[str]) -> bool:
    if not expected_signature or not received_signature:
        return False
    if len(expected_signature) != len(received_signature):
        return False
    return hmac.compare_digest(expected_signature, received_signature)

signature1 = headers["BOX-SIGNATURE-SECONDARY"]
signature2 = headers["BOX-SIGNATURE-PRIMARY"]

primary_sig_valid = compare_signatures(digest1, signature1)
secondary_sig_valid = compare_signatures(digest2, signature2)

valid = not expired and (primary_sig_valid or secondary_sig_valid)

```

</Tab>

</Tabs>

<Message warning>

HTTPヘッダー名では大文字と小文字が区別されません。クライアントでは、すべてのヘッダーの名前を標準化された小文字または大文字の形式に変換してから、ヘッダーの値を確認する必要があります。

</Message>

## 署名のローテーション

有効にした場合、BoxはすべてのWebhookペイロードで2つの署名を送信します。少なくとも1つの署名が有効であれば、アプリケーションはペイロードを信頼できます。一度に1つの署名キーを更新すると、アプリケーションは常に少なくとも1つの有効な署名を含むペイロードを受信することになります。

### 循環の手順

以下の手順は、[開発者コンソール][console]でプライマリキーとセカンダリキーを作成済みで、どちらかのキーを置き換える準備ができていることを前提としています。

これらの手順に従うことにより、競合することなく、2つの新しいキーを使ってアプリケーションを構成できます。

1. [開発者コンソール][console]で、\[**Webhook**] タブに移動します。
2. \[**署名キーを管理**] をクリックします。
3. \[**リセット**] ボタンをクリックしてプライマリキーを変更します。
4. 新しいプライマリキーでアプリケーションを更新します。アプリケーションは、引き続き古いプライマリキーを含む通知を受信する可能性がありますが、セカンダリキーがまだ有効であるため、Webhookは正しく処理されます。
5. 古いプライマリキーを持つWebhookが動作していないことを確認できたら、同じプロセスを使用してセカンダリキーを更新できます。

[sdks]: g://tooling/sdks

[console]: https://app.box.com/developers/console
