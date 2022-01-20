---
rank: 7
related_endpoints:
  - post_metadata_templates_schema#classifications
  - >-
    put_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema#add
  - >-
    put_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema#update
  - >-
    put_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema#delete
  - post_files_id_metadata_enterprise_securityClassification-6VMVochwUWo
  - post_folders_id_metadata_enterprise_securityClassification-6VMVochwUWo
related_resources:
  - classification
category_id: metadata
subcategory_id: null
is_index: false
id: metadata/classifications
type: guide
total_steps: 2
sibling_id: metadata
parent_id: metadata
next_page_id: metadata
previous_page_id: metadata/scopes
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/classifications.md
fullyTranslated: true
---
# 分類

Boxを使用すると、ユーザーおよびアプリケーションは、セキュリティ分類ラベルをファイルを適用したり、分類ラベルをフォルダとそのコンテンツにカスケードしたりできます。分類は、BoxのGovernanceおよびShield製品から不注意でアクセスされないよう、共有した機密性の高いコンテンツを保護するのに役立ちます。

分類APIを使用すると、新しい分類ラベルを作成したり、分類をファイルやフォルダに割り当てたりすることができます。

<ImageFrame border center>

![文字列フィールド](./classification-example.png)

</ImageFrame>

分類では、[メタデータAPI](g://metadata)を使用して、分類ラベルを作成したり、分類をファイルやフォルダに割り当てたりします。メタデータテンプレートとメタデータインスタンスの詳細については、[メタデータ](g://metadata)に関するガイドを参照してください。

## 分類とメタデータ

分類を使用する場合、開発者はメタデータテンプレートとメタデータインスタンスを操作する必要があります。

* **分類テンプレート:** 分類を使用するために、会社では、1つ以上の分類を含む分類メタデータテンプレートを用意する必要があります。このテンプレートでは、`scope`/`templateKey`を`enterprise.securityClassification-6VMVochwUWo`にしておく必要があります。このテンプレートは、使用可能な分類レベル、そのラベル名、説明、`colorID`値を保持します。
* **テンプレートインスタンス**: ファイルやフォルダに分類を適用するために、開発者は、`enterprise.securityClassification-6VMVochwUWo`テンプレートのインスタンスを項目に適用します。テンプレートが適用されると、テンプレート上の分類のリストから分類のいずれかが選択されます。
