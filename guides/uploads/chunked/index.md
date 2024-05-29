---
rank: 2
alias_paths: []
category_id: uploads
subcategory_id: uploads/chunked
is_index: true
id: uploads/chunked
type: guide
total_steps: 5
sibling_id: uploads
parent_id: uploads
next_page_id: uploads/chunked/with-sdks
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/uploads/chunked/index.md
fullyTranslated: true
---
# 分割アップロード

大きなファイルでも、分割アップロードAPIを使用して一連のパーツに分割して個別にアップロードすることで、Boxに確実にアップロードできます。

<!--alex ignore failed-->

このAPIを使用することにより、アプリケーションではファイルを分割してアップロードできるため、失敗したリクエストからより確実に回復できるようになります。つまり、アプリケーションがファイル全体ではなく単一のパーツのアップロードを再試行するだけで済む、ということです。

分割アップロードのもう1つの利点は、パーツを並行してアップロードできるため、パフォーマンスが向上することです。

## 概要

分割アップロードでは、以下の一連のAPIコールを行う必要があります。

1. **[アップロードセッションを作成する][newsession]**: アプリケーションが新しいファイルまたはファイルの新しいバージョンのアップロードセッションを作成します。このセッションにより、ファイルの (新しい) 名前、サイズ、および親フォルダを定義します。
2. **[パーツをアップロードする][uploadparts]**: アプリケーションがファイルの個々のパーツをチャンクとしてアップロードします。
3. **[セッションをコミットする][commit]**: アプリケーションがセッションをコミットします。このときにファイルの整合性がチェックされた後、セッションが作成されたときに指定された場所にファイルが配置されます。

<Message>

ほとんどの[Box SDKではBoxからの分割アップロードがサポートされている][sdks]ため、アプリケーションコードの複雑さが解消されます。

</Message>

## 制約事項

分割アップロードAPIは、サイズが20 MB以上の大きいファイルを対象としています。これより小さいサイズのファイルのアップロードはサポートされていません。

このAPIは、セッション内でのパーツの再アップロードまたは上書きをサポートしていません。アップロード後のパーツは変更できません。

アップロードセッションの有効期間は7日間です。この期間に、クライアントは自身のペースでパーツをアップロードできます。

<!--alex ignore corruption-->

リソースの浪費やデータ破損を避けるために、クライアントは、アップロードの開始以降、ディスク上の基になるファイルが変更されていないことを確認する必要があります。

[newsession]: g://uploads/chunked/create-session

[uploadparts]: g://uploads/chunked/upload-part

[commit]: g://uploads/chunked/commit-session

[sdks]: g://uploads/chunked/with-sdks
