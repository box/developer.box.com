---
type: quick-start
hide_in_page_nav: true
related_guides:
  - metadata/scopes
related_endpoints:
  - get_metadata_templates_global
  - get_metadata_templates_enterprise
category_id: metadata
subcategory_id: metadata/1-quick-start
is_index: false
id: metadata/quick-start/list-all
rank: 1
total_steps: 7
sibling_id: metadata/quick-start
parent_id: metadata/quick-start
next_page_id: metadata/quick-start/create-template
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/1-quick-start/1-list-all.md
---
# すべてのメタデータテンプレートのリストを取得

会社には、ユーザーが独自に作成しなくてもすぐに使用できるメタデータテンプレートのリストがすでに存在することがよくあります。

一般に、メタデータテンプレートには、自社のみで使用できるものと、Boxを使用するすべての会社が使用できるものがあります。テンプレートの`scope`により、テンプレートはすべての人が利用可能か(`global`)、自社のみで利用可能か(`enterprise`)が定義されます。

<CTA to="g://metadata/scopes">

メタデータのスコープの詳細

</CTA>

## テンプレートのリストの取得

すべてのユーザーが使用できる[グローバルテンプレート](e://get_metadata_templates_global)はいくつかあります。

<Samples id="get_metadata_templates_global">

</Samples>

これらのテンプレートの多くはBoxの内部使用を目的としたものですが、アプリケーションでこれらを使用したり適用したりすることもできます。会社のニーズに固有のデータを保持するには、[社内のアプリケーションや管理者が作成した](e://get_metadata_templates_enterprise)テンプレートがより便利です。

<Samples id="get_metadata_templates_enterprise">

</Samples>

## メタデータテンプレート

[メタデータテンプレート][template]には、ファイルまたはフォルダに割り当てることができる一連のキー/値ペアが記載されています。

たとえば、`customerInfo`テンプレートは顧客に関するデータを保持しており、顧客名と顧客の業種のフィールドがあるとします。

```json
{
  "id": "100ac693-a468-4b37-9535-05984b804dc2",
  "type": "metadata_template",
  "templateKey": "customerInfo",
  "scope": "enterprise_12345",
  "displayName": "Customer Info",
  "hidden": false,
  "copyInstanceOnItemCopy": false,
  "fields": [
    {
      "id": "5c6a5906-003b-4654-9deb-472583fc2930",
      "type": "string",
      "key": "name",
      "displayName": "Name",
      "hidden": false
    },
    {
      "id": "cf3eb5b8-52ef-456c-b175-44354a27e289",
      "type": "enum",
      "key": "industry",
      "displayName": "Industry",
      "options": [
        {"key": "Technology"},
        {"key": "Healthcare"},
        {"key": "Legal"}
      ],
      "hidden": false
    }
  ]
}
```

<Next>

使用できるテンプレートのリストを取得しました

</Next>

[template]: g://metadata/templates
