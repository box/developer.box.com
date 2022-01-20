---
rank: 3
related_endpoints:
  - post_collaborations
related_guides:
  - collaborations/share-content
required_guides: []
related_resources:
  - collaboration
  - file
  - folder
category_id: collaborations
subcategory_id: null
is_index: false
id: collaborations/groups
type: guide
total_steps: 3
sibling_id: collaborations
parent_id: collaborations
next_page_id: collaborations/pending
previous_page_id: collaborations/share-content
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/groups.md
fullyTranslated: true
---
# グループとの共有

ファイルやフォルダをユーザーのグループと共有するには、グループID、ファイルまたはフォルダのIDに加え、グループがファイルまたはフォルダにアクセスする際に必要なロールまたは権限を使用してコラボレーションを作成します。

<Samples id="post_collaborations" variant="group">

</Samples>

<Message>

コラボレーションロールは`editor`、`viewer`、`previewer`、`uploader`、`previewer uploader`、`viewer uploader`、`co-owner`、または`owner`です。各ロールについての詳しい説明は、Boxの[サポートドキュメント][support documentation]を参照してください。

</Message>

## ネストされたオブジェクト

コラボレーションの作成時には、リクエスト本文に`accessible_by`と`item`という2つのネストされたオブジェクトを使用します。

`accessible_by`オブジェクトは、この項目の共有相手を指定し、グループ`id`と`type`を含みます。`type`フィールドは常に`group`に設定する必要があります。

`item`オブジェクトは、共有する項目を指定します。このオブジェクトには、`file`または`folder`として設定する必要がある`type`フィールドと、そのファイルまたはフォルダの`id`フィールドがあります。

<!-- i18n-enable localize-links -->

[support documentation]: https://support.box.com/hc/ja/articles/360044196413-コラボレータの権限レベルについて

<!-- i18n-disable localize-links -->
