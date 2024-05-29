---
rank: 230
alias_paths:
  - /docs/configure-a-box-skill
related_endpoints:
  - post_files_id_metadata_global_boxSkillsCards
category_id: skills
subcategory_id: null
is_index: true
id: skills
type: guide
total_steps: 2
sibling_id: guides
parent_id: guides
next_page_id: ''
previous_page_id: skills/kit
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/skills/index.md
fullyTranslated: true
---
# Box Skills

Box Skillsは、ファイルの基盤となるメタデータを強化することを目的として、Boxにアップロードされたファイルのカスタム処理を可能にします。このシステムの利点は、さまざまなファイルの豊富な情報を保存しておき、自動化されたタスクや将来のプロセスに使用できることです。

Skillsアプリケーションのエンドツーエンドプロセスは以下のとおりです。

1. [アプリのセットアップ](guide://skills/handle/setup) - 会社全体または1つ以上のフォルダ内でアップロードされるファイルをリッスンする**カスタムスキル**Boxアプリケーションを作成します。
2. [`invocation_url`の構成](guide://skills/invocation-url) - **カスタムスキル**アプリを作成したら、`invocation_url`を構成する必要があります。このURLは、Boxに新しいファイルがアップロードされるたびに呼び出されます。
3. [イベントペイロードの解析](guide://skills/handle/payload) - Box Skillがリッスンするフォルダにファイルがアップロード、コピー、または移動されると、`invocation_url`にイベントペイロードが送信されます。このペイロードには、2つの**アクセストークン**が含まれています。これらのアクセストークンを使用すると、Boxにアップロードされたファイルにアクセスし、ファイルにメタデータを保存することができます。
4. [主な署名の検証][1] - Skillペイロードを処理するサービスは、他の処理を行う前に、`invocation_url`がBoxによって呼び出されたことを検証する必要があります。この検証を手動またはSDKを使用して行う例については、リンクを確認してください。
5. [処理するファイルの送信][2] - Skillペイロードを処理するサービスは、ファイルのURLまたはコンテンツを処理するために外部サービスに送信します。このサービスは、サードパーティの機械学習システムでも、社内サービスでもかまいません。
6. [ファイルにメタデータを保存](guide://skills/handle/metadata) - 処理サービスによってファイルのメタデータが抽出されたら、これらのインサイトをアップロードされたファイルにカスタムメタデータとして再保存できます。

<Message>

Box Skillsとの統合を簡素化するため、上記の手順の複雑さを減らした[Skills Kit](guide://skills/kit)が提供されています。Skills Kitは現在、Nodeでのみ入手可能です。

</Message>

[1]: guide://webhooks/v2/signatures-v2

[2]: https://github.com/box-community/Box-Custom-Skills-Starter
