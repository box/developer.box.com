---
category_id: metadata
subcategory_id: metadata/6-cascades
is_index: true
id: metadata/cascades
rank: 6
type: guide
total_steps: 5
sibling_id: metadata
parent_id: metadata
next_page_id: ''
previous_page_id: metadata/cascades/delete
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/metadata/6-cascades/0-index.md
---
# メタデータカスケードポリシー(ベータ)

<Message warning>

メタデータカスケードポリシーは現在ベータ版であり、構文が今後変更される可能性があります。

</Message>

メタデータカスケードポリシーは、フォルダに適用された[メタデータインスタンス][instance]をそのフォルダ内の項目にどのように適用するかを記述したものです。たとえば、ユーザーがプロジェクトフォルダに同じ`invoiceData`メタデータテンプレートを割り当てると、そのプロジェクトフォルダ内のすべてのファイルとフォルダに自動的に適用することができます。

各ポリシーで指定するメタデータテンプレートインスタンスとフォルダはそれぞれ1つだけです。

## 有効化と権限

メタデータカスケードポリシーを使用するには、会社の管理者が会社全体に対してそのポリシーを有効化する必要があります。**管理コンソール**で\[**Enterprise設定**]、\[**コンテンツと共有**]、\[**フォルダレベルメタデータのカスケード**]の順に選択します。\[**構成の編集**]ボタンをクリックして、フォルダにカスケードポリシーを適用できるユーザーを選択します。

フォルダの編集権限を持ち、カスケードポリシーを作成できるユーザーは、その特定のフォルダ用にメタデータカスケードポリシーを作成できます。

## 制限

ファイルのアップロードからメタデータの適用まで、若干の遅延が生じます。この遅延の程度はフォルダ内の項目の数によって大きく変わります。メタデータカスケード操作は非同期で実行され、現時点では、すべてのメタデータがいつすべてのファイルにカスケードされたかを確認する方法はありません。

[instance]: g://metadata/instances
