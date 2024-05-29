---
centered: true
rank: 4
category_id: sign
subcategory_id: sign/30-request-options
is_index: false
id: sign/request-options/resend-requests
type: page
total_steps: 7
sibling_id: sign/request-options
parent_id: sign/request-options
next_page_id: sign/request-options/request-expiration
previous_page_id: sign/request-options/custom-urls
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/pages/sign/30-request-options/40-resend-requests.md
fullyTranslated: true
---
# リクエストの再送信

署名者がメールを受信できなかった場合や、メールを紛失したり、署名者が誤ってメールを削除したりした場合はどうなるでしょうか。

署名リクエストメールは、手動で`signer`に再送信することも、自動再送信オプションをオンにすることもできます。

## 手動による再送信

署名リクエストメールを手動で署名者に再送信するには、`sign_requests`オブジェクトで`resend_sign_request`メソッドを呼び出します。この操作は、10分間に1回しか実行できません。

以下に例を示します。

<Tabs>

<Tab title="cURL">

```curl
curl --location --request POST 'https://api.box.com/2.0/sign_requests/
52f6f86c-c0b3-401e-a4ec-1709f277c469/resend' \
    --header 'Authorization: Bearer ej...3t'

```

</Tab>

<Tab title="Pythonの次世代SDK">

```python
def sign_send_reminder(client: Client, sign_request_id: str):
    """Send reminder to signers"""
    sign_request = client.sign_requests.resend_sign_request(sign_request_id)
    return sign_request

```

</Tab>

</Tabs>

## 自動再送信

自動再送信オプションを使用すると、ドキュメントにまだ署名していない署名者に対して3日後、8日後、13日後、18日後にリマインダメールが送信されます。

自動再送信を有効にするには、`are_reminders_enabled`パラメータを`true`に設定します。以下に例を示します。

<Tabs>

<Tab title="cURL">

```curl
curl --location 'https://api.box.com/2.0/sign_requests' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer <access token>' \
    --data-raw '{
      "are_reminders_enabled": true,
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
    document_id: str,
    destination_folder_id: str,
    signer_email: str,
    prep_needed: bool = False,
    auto_reminder: bool = False,
) -> SignRequest:
    """Single doc sign by single signer"""

    # Sign request params
    source_file = FileBase(id=document_id, type=FileBaseTypeField.FILE)
    destination_folder = FolderMini(
        id=destination_folder_id, type=FolderBaseTypeField.FOLDER
    )

    # signer
    signer = SignRequestCreateSigner(signer_email)

    # sign document
    sign_request = client.sign_requests.create_sign_request(
        signers=[signer],
        parent_folder=destination_folder,
        source_files=[source_file],
        is_document_preparation_needed=prep_needed,
        are_reminders_enabled=auto_reminder,
    )

    return sign_request

def main():
    ...

    # Sign with redirects
    sign_with_auto_reminder = sign_doc_single_more_options(
        client,
        SIMPLE_PDF,
        SIGN_DOCS_FOLDER,
        SIGNER_A,
        prep_needed=False,
        auto_reminder = True,
    )

```

</Tab>

</Tabs>
