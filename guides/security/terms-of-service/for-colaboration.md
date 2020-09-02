---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
related_resources:
  - collaboration
  - terms_of_service
alias_paths: []
category_id: security
subcategory_id: security/terms-of-service
is_index: false
id: security/terms-of-service/for-colaboration
type: guide
total_steps: 3
sibling_id: security/terms-of-service
parent_id: security/terms-of-service
next_page_id: security/terms-of-service/permissions
previous_page_id: security/terms-of-service/flow
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/security/terms-of-service/for-colaboration.md
---
# コラボレーションの利用規約の検索

[コラボレーション](r://collaboration)に効力のある利用規約に関する情報を調べるには、[`GET /collaborations/:id`](e://get-collaborations-id) APIを呼び出してクエリパラメータ`fields=acceptance_requirements_status`を渡します。

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title="cURL">

```curl
curl -X GET https://api.box.com/2.0/collaborations/2342342?fields=acceptance_requirements_status \
     -H "authorization: Bearer <ACCESS_TOKEN>"
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

返される応答には、簡易版の`terms_of_service`オブジェクトを含む新しい`acceptance_requirements`オブジェクトが含まれます。

```json
{
    "type": "collaboration",
    "id": 2342342>,
    "acceptance_requirements": {
        "terms_of_service": {
            "type": "terms_of_service",
            "id": 6766677
        }
    }
}
```

<Message>

この情報が返されるのは、外部ユーザーの利用規約が会社で有効になっており、リクエストを実行するユーザーに利用規約を表示するための[権限][permissions]がある場合のみです。これは、管理者とエンドユーザーの両方に当てはまりますが、特定の利用規約タイプが無効になっている場合でも、一般的に、管理者はAPIを介してユーザーの利用規約情報を表示できます。

</Message>

利用規約タイプが有効になっていない場合は、APIによって空の結果が返されます。

```json
{
    "type": "collaboration",
    "id": 2342342>,
    "acceptance_requirements": {
        "terms_of_service": null
    }
}
```

<Message>

すでにユーザーが同意している場合でも、`terms_of_service`の情報は`acceptance_requirements`内で返されます。

</Message>

[permissions]: g://security/terms-of-service/permissions
