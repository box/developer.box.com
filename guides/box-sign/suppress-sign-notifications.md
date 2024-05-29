---
rank: 5
related_endpoints:
  - post-sign-requests
related_guides:
  - box-sign/create-sign-request
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/suppress-sign-notifications
type: guide
total_steps: 7
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/sign-templates
previous_page_id: box-sign/list-sign-requests
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/suppress-sign-notifications.md
fullyTranslated: true
---
# デフォルトのBox Sign通知の抑制

Box Sign APIを使用すると、Signのワークフローの中で送信されるデフォルトのBoxメール通知を抑制できます。この機能により、以下のようにBox Sign通知の管理を容易にします。

* 全面的にカスタマイズしたメール通知テンプレートを使用して、自社のドメインからメールを送信できます。
* メールとは別に、プッシュ通知またはテキストメッセージを送信できます。​

<Message type="notice">

Boxメール通知を抑制することを選択すると、組織は、該当する場合に、使用される配信方法に対して署名者の同意を得ることを含め、適用されるすべての法律と規制に従い、署名プロセスにおいて適切なタイミングで適切な内容を含むすべての通知を署名者に確実に配信する責任を負うことになります。

</Message>

## Box Sign APIを使用したデフォルトの通知の抑制

Box Signのメール通知を抑制するには、以下のパラメータを設定する必要があります。

1. [`signers`][signers]オブジェクトの`suppress_notifications`パラメータを`true`に設定して、通知をオフにします。
2. [`embed_url_external_user_id`][externalid]パラメータを設定して、通知を送信しないユーザーを指定します。

この構成により、指定したユーザーに対するBox Signの自動メール通知は無効になります。その結果、独自の通知を構成して送信できます。

```curl
curl -i -X POST "https://api.box.com/2.0/sign_requests" \
     -H "authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
       "signers": [
          {    
            "role": "signer",
            "email": "example_email@box.com"
            "suppress_notifications": true
            "embed_url_external_user_id": "1234"
          }
        ],
       "source_files": [
          {
            "type": "file",
            "id": "123456789"
          }
       ],
       "parent_folder": 
          {
            "type": "folder",
            "id": "0987654321"
          }
     }'

```

## 署名ログのエントリ

Box Signのデフォルトの通知が抑制されると、署名ログには、送信者によってすべてのBox Sign通知が抑制されたことが記録されます。また、このログには、API統合を介してBox Signに提供される、通知配信の目的で使用されるシステムに関する情報や組織のシステムにおける署名者のユーザーIDも記録されます。

[signers]: e://post-sign-requests/#param-signers

[externalid]: e://post-sign-requests/#param-signers-embed_url_external_user_id
