---
centered: true
rank: 6
category_id: sign
subcategory_id: sign/30-request-options
is_index: false
id: sign/request-options/custom-email
type: page
total_steps: 7
sibling_id: sign/request-options
parent_id: sign/request-options
next_page_id: sign/request-options/in-person
previous_page_id: sign/request-options/request-expiration
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/30-request-options/60-custom-email.md
fullyTranslated: true
---
# カスタムメールと通知

## メールの件名と本文

署名者に送信されるメールには、デフォルトで、ドキュメントへのリンク、一般的な件名、一般的なメッセージが記載されています。

Box内で管理されているテンプレートを使用する場合、件名とメッセージ本文はテンプレート自体で設定できます。

ただし、テンプレートを使用しない場合も、`email_subject`パラメータと`email_message`パラメータを渡すことで、署名者に送信されるメールメッセージをカスタマイズすることができます。

どちらのパラメータにも文字列を使用できますが、`email_message`パラメータには、いくつか制限はあるもののHTMLも使用できます。

使用できるのは、一部のHTMLタグだけです。また、メッセージに含まれるリンクは、メールではハイパーリンクに変換されます。

メッセージパラメータには、以下のHTMLタグを含めることができます。

* `a`, `abbr`, `acronym`, `b`, `blockquote`, `code`, `em`, `i`, `ul`, `li`, `ol`, `strong`

これらのタグにカスタムスタイルを適用することはできません。

<message size="small"></message>

テキストとHTMLの比率が大きすぎると、メールがスパムフィルタに入ったり、切り取られたりする可能性があることにご注意ください。

</Message>

例:

<Tabs>

<Tab title="cURL">

```curl
curl --location 'https://api.box.com/2.0/sign_requests' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer ej...3t' \
    --data-raw '{
      "email_subject": "All we need is your signature to get started",
      "parent_folder": {
        "id": "234102987614",
        "type": "folder"
      },
      "source_files": [
        {
          "id": "1358047520478",
          "type": "file"
        }
      ],
      "signers": [
        {
          "email": "signer@example.com",
          "role": "signer"
        }
      ]
    }'

```

</Tab>

<Tab title="Pythonの次世代SDK">

```python
def sign_doc_single_more_options(
    client: Client,
    ...

    email_subject: str = None,
    email_message: str = None,
) -> SignRequest:
    ...

    # sign document
    sign_request = client.sign_requests.create_sign_request(
        ...

        email_subject=email_subject,
        email_message=email_message,
    )

    return sign_request

def main():
    ...

    # Sign with custom email subject
    sign_custom_email_subject = sign_doc_single_more_options(
        client,
        SIMPLE_PDF,
        SIGN_DOCS_FOLDER,
        SIGNER_A,
        prep_needed=False,
        email_subject="All we need is your signature to get started",
    )

```

</Tab>

</Tabs>

## 手動による通知

ここまでで、署名リクエストでは、デフォルトで署名者にメール通知が送信されることがわかりました。このメールは`box.com`ドメインおよびメールシステムから送信されます。

`embed_url_external_user_id`パラメータに特定の署名者を表す任意の識別子を設定することで、通知プロセスを引き継ぐことができます。

このパラメータを設定すると、署名者にはメール通知が送信されず、署名リクエスト内で`embed_url`と`iframeable_embed_url`の両方が返されます。

`embed_url`は直接開くことができるので、アプリからメールで送信したり、署名者が開く他の通知システムで送信したりするのに適しています。

`iframeable_embed_url`は、[Box Signクライアントの埋め込み機能][embed]との併用に適しており、ウェブアプリ内のiframeにBox Signクライアントを埋め込むことができます。

たとえば、次のリクエストを確認してください。

<Tabs>

<Tab title="cURL">

```bash
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer fN...dD' \
--data-raw '{
  "is_document_preparation_needed": false,
  "parent_folder": {
    "id": "234102987614",
    "type": "folder"
  },
  "source_files": [
    {
      "id": "1355143830404",
      "type": "file"
    }
  ],
  "signers": [
    {
      "email": "signer@example.com",
      "embed_url_external_user_id": "1234",
      "role": "signer"
    }
  ]
}'

```

</Tab>

<Tab title="Pythonの次世代SDK">

```python
def sign_doc_embed_url(
    client: Client,
    document_id: str,
    destination_folder_id: str,
    signer_email: str,
    signer_embed_url_id: str,
) -> SignRequest:
    # Sign request params
    source_file = FileBase(id=document_id, type=FileBaseTypeField.FILE)
    destination_folder = FolderMini(
        id=destination_folder_id, type=FolderBaseTypeField.FOLDER
    )

    signer = SignRequestCreateSigner(
        email=signer_email,
        embed_url_external_user_id=signer_embed_url_id,
    )

    # sign document
    sign_request = client.sign_requests.create_sign_request(
        signers=[signer],
        parent_folder=destination_folder,
        source_files=[source_file],
    )

    return sign_request

def main():
    """Simple script to demonstrate how to use the Box SDK"""
    conf = ConfigOAuth()
    client = get_client_oauth(conf)
    # Sign with phone verification
    sign_with_embed_url = sign_doc_embed_url(
        client,
        SIMPLE_PDF,
        SIGN_DOCS_FOLDER,
        SIGNER_A,
        SIGNER_A_EXTERNAL_ID,
    )
    check_sign_request(sign_with_embed_url)

```

</Tab>

</Tabs>

結果は次のとおりです (簡略化されています)。

<Tabs>

<Tab title="cURL">

```json
{
  "is_document_preparation_needed": false,
  "signers": [
    {
      "email": "sender@example.com",
      "role": "final_copy_reader",
    },
    {
      "email": "signer@example.com",
      "role": "signer",
      "embed_url_external_user_id": "1234",
      "embed_url": "https://app.box.com/sign/document/22a990ce-4e24-463b-b2f4-124820fe161a/9331fe9ac85650d61645d4b0fd30fe3e0ebee7921720ab6ecca587654d3cd875/",
      "iframeable_embed_url": "https://app.box.com/embed/sign/document/22a990ce-4e24-463b-b2f4-124820fe161a/9331fe9ac85650d61645d4b0fd30fe3e0ebee7921720ab6ecca587654d3cd875/"
    }
  ],
  "id": "22a990ce-4e24-463b-b2f4-124820fe161a",
}

```

</Tab>

<Tab title="Pythonの次世代SDK">

```yaml
Simple sign request: 22a990ce-4e24-463b-b2f4-124820fe161a-defddc79c946
  Status: created
  Signers: 2
    final_copy_reader: sender@example.com
    signer: signer@example.com
    embed_url: https://app.box.com/sign/document/...
    iframeable_embed_url: https://app.box.com/embed/sign/document/...
  Prepare url: None

```

</Tab>

</Tabs>

これで、埋め込みURLを取得して、独自の通知プロセスを使用したり、自分のアプリ内に署名クライアントを埋め込んだりできるようになりました。

[embed]: guide://box-sign/embedded-sign-client
