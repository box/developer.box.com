---
rank: 1
related_guides:
  - skills/handle/payload
  - skills/handle/metadata
alias_paths: []
category_id: skills
subcategory_id: skills/handle
is_index: true
id: skills/handle
type: guide
total_steps: 2
sibling_id: skills
parent_id: skills
next_page_id: skills/handle/payload
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/skills/handle/index.md
fullyTranslated: true
---
# Skillsペイロードの処理

[呼び出しURL](guide://skills/invocation-url)として設定されているアプリケーションまたはサイト内では、一般に以下の2つのタスクを行う必要があります。

* [スキルペイロードを処理する](guide://skills/handle/payload) - Box Skillsは、新しいファイルがフォルダにアップロード、コピー、または移動されたことを検出するたびに、呼び出しURLにJSON通知を送信します。このURLは解析する必要があります。
* [ファイルにスキルカードを適用する](guide://skills/handle/metadata) - 処理サービスから返されたメタデータを、イベントをトリガーしたファイルにメタデータとして保存する必要があります。
