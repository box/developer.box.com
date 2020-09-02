---
rank: 5
related_endpoints:
  - post_folders_id_copy
related_guides:
  - folders/single/create
  - folders/single/delete
required_guides:
  - folders/single/create
related_resources:
  - folder
alias_paths: []
category_id: folders
subcategory_id: folders/single
is_index: false
id: folders/single/copy
type: guide
total_steps: 7
sibling_id: folders/single
parent_id: folders/single
next_page_id: folders/single/delete
previous_page_id: folders/single/move
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/folders/single/copy.md
---
# フォルダのコピー

Box上でフォルダをコピーするには、コピー先となる`parent`フォルダの`id`をAPIに渡す必要があります。

<Samples id="post_folders_id_copy">

</Samples>

オプションで、新しいフォルダに別の名前を付けることもできます。

<Samples id="post_folders_id_copy" variant="with_name">

</Samples>

<Message type="notice">

# 名前に関する制約事項

ファイル名にはいくつかの制約事項があります。印字不可能なASCII文字を含む名前、スラッシュおよびバックスラッシュ(`/`、`\`)を含む名前、末尾にスペースを含む名前は禁止されています。

また、`.`および`..`は予約済みの名前であるため、使用できません。

</Message>

## 非同期コピー

コピーされるフォルダに含まれる項目が500個以下の場合は、API呼び出しと同時にコピーが実行されます。呼び出しはコピー操作が完了するまで復帰しません。

コピー元のフォルダに500個を超える項目が含まれる場合は、非同期的にコピー操作が実行され、API呼び出しはコピー操作が完了していなくても直ちに復帰します。現時点では、コピー操作がいつ終了したのかを確認するAPIはありません。

## フォルダのロック

この操作の進行中は、ファイルツリーの一部がロックされます。ロックされるのは、主に元のフォルダとその子孫フォルダ、および宛先フォルダです。

操作の進行中は、ロックされているどのフォルダに対しても、他の移動、コピー、削除、または復元操作を実行できません。最も重要な点は、同じフォルダをフォルダツリーの2つの異なる部分に同時にコピーすることはできないということです。

## メタデータ

宛先フォルダのいずれかの親フォルダにメタデータカスケードポリシーが適用されている場合は、メタデータカスケード操作が非同期的に開始されます。

現時点では、この操作がいつ終了したのかを確認するAPIはありません。
