---
related_endpoints:
  - post_metadata_cascade_policies_id_apply
related_guides:
  - metadata/cascades/list
  - metadata/cascades/force-apply
  - metadata/cascades/delete
related_resources:
  - metadata_cascade_policy
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: false
id: metadata/cascades/force-apply
rank: 4
type: guide
total_steps: 5
sibling_id: metadata/cascades
parent_id: metadata/cascades
next_page_id: metadata/cascades/delete
previous_page_id: metadata/cascades/create
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/6-cascades/4-force-apply.md
---
# フォルダ内のすべての項目に対するメタデータの強制適用

<Message warning>

メタデータカスケードポリシーは現在ベータ版であり、構文が今後変更される可能性があります。

</Message>

メタデータカスケードポリシーがすでにフォルダに存在する場合は、メタデータカスケードポリシーの`id`を指定して[`POST /metadata_cascade_policies/:id/apply`][e_post] APIエンドポイントを呼び出すことで、フォルダ内のすべての項目にメタデータインスタンスを強制的に適用できます。

<Samples id="post_metadata_cascade_policies_id_apply">

</Samples>

<Message>

ポリシーの`id`を取得するには、フォルダに対する[すべてのポリシーのリストを取得][g_list_policies]します。

</Message>

<Message warning>

メタデータカスケード操作は非同期的に開始されます。このAPI呼び出しは、カスケード操作が完了する前に直ちに復帰し、`202 Accepted` HTTPステータスコードを返します。現時点では、この操作がいつ終了したのかを確認する方法はありません。

</Message>

## 競合解決

このAPIに追加の`conflict_resolution`パラメータを渡すことで、フォルダ内のいずれかの項目でテンプレートの既存のインスタンスを扱う方法を定義できます。

`conflict_resolution`に値を設定していない場合、デフォルトでは、このAPIによってすべての項目の既存の値が保持されます。値を`overwrite`に設定すると、カスケードポリシーに適用されているテンプレートの値が強制的に適用され、既存の値は上書きされます。

[e_post]: e://post_metadata_cascade_policies_id_apply

[g_list_policies]: g://metadata/cascades/list
