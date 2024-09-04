---
rank: 170
alias_paths:
  - /docs/work-with-metadata
category_id: metadata
subcategory_id: null
is_index: true
id: metadata
type: guide
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: metadata/classifications
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/0-index.md
fullyTranslated: true
---
# メタデータ

メタデータを使用すると、ユーザーやアプリケーションは、ファイルやフォルダに関連付けられたカスタムデータを定義、格納できます。

<ImageFrame border center>

![文字列フィールド](./metadata-example.png)

</ImageFrame>

メタデータは、ファイルまたはフォルダに割り当てられているキー/値ペアで構成されます。たとえば、重要な契約には、`clientNumber: 820183`と`clientName: bioMedicalCorp`のキー/値ペアが使用されている場合があります。

## メタデータの用語

メタデータを操作するには、開発者は異なる数種類のリソースを使用する必要があります。

* **テンプレート:** [メタデータテンプレート][template]には、ファイルに割り当てることができる再利用可能な一連のキー/値ペアが記載されています。たとえば、`invoiceData`テンプレートでは、請求書に関するデータを保持するため、請求書IDと顧客IDのフィールドが設定されています。
* **フィールド:** [メタデータテンプレートフィールド][field]には、メタデータテンプレート内の特定のデータが記載されています。たとえば、請求書のIDを`invoiceData`テンプレートの`id`フィールドとして表すことができます。
* **インスタンス:** [メタデータインスタンス][instance]には、各フィールドに割り当てられている値など、テンプレートとファイルやフォルダ間の関係が記載されています。たとえば、ユーザーは、`invoiceData`メタデータテンプレートをファイルに割り当て、2つの値を指定しています (1つは請求書ID、もう1つは顧客ID)。特定のファイルまたはフォルダには最大100個のテンプレートを割り当てることができます。
* **カスケードポリシー**: [メタデータカスケードポリシー][cascade]には、フォルダに適用されているメタデータインスタンスを、そのフォルダ内の項目にどのように適用するかが記載されています。たとえば、ユーザーは、同じ`invoiceData`メタデータテンプレートをプロジェクトフォルダに割り当てると (2つの値を含む)、そのプロジェクトフォルダ内のすべてのファイルとフォルダに自動的に適用できます。
* **Queries:** A [metadata query][query] provides a way to find files and folders by searching for the metadata attached to them. For example, to find all the files for an invoice with a certain ID, the query would look for all files and folders with the `invoiceData` template attached to it and a value of `id = :id`, where `:id` would be the value of the invoice.

## メタデータの目的

メタデータは多くの目的で使用できます。会社がマーケティングチーム向けにデジタルアセットを効率よく編成する場合もあれば、開発者がワークフローや承認の促進のような高度なコンテンツ機能を提供する場合もあります。

たとえば、`marketingCollateral`テンプレートでは、特定のマーケティングコンテンツを使用する状況とタイミングを定義できます。ユーザーは、Boxウェブアプリでテンプレートのレプリゼンテーションを確認すると同時に、ファイルのプレビューに移動できます。

詳細については、[Boxコミュニティの記事][community]を参照してください。

<!-- i18n-enable localize-links -->

[community]: https://support.box.com/hc/ja/articles/360044196173-メタデータの使用

<!-- i18n-disable localize-links -->

[template]: g://metadata/templates

[instance]: g://metadata/instances

[cascade]: g://metadata/cascades

[field]: g://metadata/fields

[query]: g://metadata/queries
