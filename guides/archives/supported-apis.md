---
rank: 3
related_endpoints: []
related_resources:
  - archive
related_guides: []
required_guides: []
alias_paths: []
category_id: archives
subcategory_id: null
is_index: false
id: archives/supported-apis
type: guide
total_steps: 3
sibling_id: archives
parent_id: archives
next_page_id: ''
previous_page_id: archives/restore-content
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/archives/supported-apis.md
fullyTranslated: true
---
# Box ArchiveでサポートされているAPI

基本的なBox Archive APIを使用すると、アーカイブの作成、リスト取得、削除を実行できますが、他のAPIを使用してアーカイブやそのコンテンツを操作することもできます。このようなAPIの詳細なリストについては、以下の表を参照してください。

<Message type="notice">

これらのAPIを使用するには、アプリケーションで[`GCM`スコープ][GCM scope]を有効にする必要があります。このスコープは、開発者コンソールでは使用できないため、カスタマーサポートに連絡して有効にする必要があります。

さらに、以下のAPIの中には、Box Archiveを適切に使用するために、カスタマーサポートに連絡して有効にする必要があるものもあります。カスタマーサポートに連絡する際は、これらのAPIを使用する予定のユーザーIDを明記してください。

</Message>

| APIエンドポイント                                                                                                        | 説明                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`POST /archives`][Create archive]                                                                                | アーカイブを作成します。                                                                                                   |
| [`GET /archives`][List archives]                                                                                  | すべてのアーカイブのリストを取得します。                                                                                           |
| [`DELETE /archives/:id`][Delete archive]                                                                          | アーカイブを削除します。                                                                                                   |
| [`PUT /files/:id`][Update file]                                                                                   | ファイルをアーカイブに追加したり、アーカイブから復元したり、アーカイブ内またはアーカイブ間で移動したりします。ファイルに対するその他の更新は許可されていません。有効にするには、カスタマーサポートに連絡する必要があります。 |
| [`PUT /folders/:id`][Update folder]                                                                               | フォルダをアーカイブに追加したり、アーカイブから復元したり、アーカイブ内またはアーカイブ間で移動したりします。フォルダに対するその他の更新は許可されていません。有効にするには、カスタマーサポートに連絡する必要があります。 |
| [`POST /files/content`][Upload file]                                                                              | ファイルをアーカイブまたはアーカイブ内のフォルダにアップロードします。有効にするには、カスタマーサポートに連絡する必要があります。                                              |
| [`GET /files/:id/content`][Download file]                                                                         | ファイルをアーカイブまたはアーカイブ内のフォルダからダウンロードします。                                                                           |
| [`POST /zip_downloads`][Download zip]                                                                             | アーカイブまたはアーカイブ内のフォルダのzipファイルをダウンロードします。                                                                         |
| [`POST /folders`][Create folder within archive]                                                                   | アーカイブ内にフォルダを作成します。有効にするには、カスタマーサポートに連絡する必要があります。                                                               |
| [`GET /files/:id`][Get file details]                                                                              | アーカイブ内のファイルの詳細を取得します。                                                                                          |
| [`GET /folders/:id`][Get folder details]                                                                          | アーカイブまたはアーカイブ内のフォルダの詳細を取得します。                                                                                  |
| [`GET /folders/:id/items`][List folder items]                                                                     | アーカイブまたはアーカイブ内のフォルダ内にある項目のリストを取得します。                                                                           |
| [`POST /files/:id/copy`][Copy file]                                                                               | アーカイブ内のファイルを別のアーカイブにコピーします。                                                                                    |
| [`POST /folders/:id/copy`][Copy folder]                                                                           | アーカイブ内のフォルダを別のアーカイブにコピーします。                                                                                    |
| [`POST /files/:id/metadata/:scope/:template_key`][Create metadata on file]                                        | アーカイブ内のファイルにメタデータインスタンスを作成します。                                                                                 |
| [`GET /files/:id/metadata/:scope/:template_key`][View metadata on file]                                           | アーカイブ内のファイルのメタデータインスタンスを表示します。                                                                                 |
| [`GET /files/:id/metadata`][List metadata on file]                                                                | アーカイブ内のファイルのすべてのメタデータインスタンスのリストを取得します。                                                                         |
| [`PUT /files/:id/metadata/:scope/:template_key`][Update metadata on file]                                         | アーカイブ内のファイルのメタデータインスタンスを更新します。                                                                                 |
| [`DELETE /files/:id/metadata/:scope/:template_key`][Delete metadata on file]                                      | アーカイブ内のファイルのメタデータインスタンスを削除します。                                                                                 |
| [`POST /files/:id/metadata/enterprise/securityClassification/6VMVochwUWo`][Create classification label on file]   | アーカイブ内のファイルに分類ラベルを作成します。                                                                                       |
| [`GET /files/:id/metadata/enterprise/securityClassification/6VMVochwUWo`][View classification label on file]      | アーカイブ内のファイルの分類ラベルを表示します。                                                                                       |
| [`PUT /files/:id/metadata/enterprise/securityClassification/6VMVochwUWo`][Update classification label on file]    | アーカイブ内のファイルの分類ラベルを更新します。                                                                                       |
| [`DELETE /files/:id/metadata/enterprise/securityClassification/6VMVochwUWo`][Delete classification label on file] | アーカイブ内のファイルの分類ラベルを削除します。                                                                                       |

[Create archive]: https://developer.box.com/reference/v2025.0/post-archives/

[List archives]: https://developer.box.com/reference/v2025.0/get-archives/

[Delete archive]: https://developer.box.com/reference/v2025.0/delete-archives-id/

[Update file]: e://put-files-id

[Update folder]: e://put-folders-id

[Upload file]: e://post-files-content

[Download file]: e://get-files-id-content

[Download zip]: e://post-zip-downloads

[Create folder within archive]: e://post-folders

[Get file details]: e://get-files-id

[Get folder details]: e://get-folders-id

[List folder items]: e://get-folders-id-items

[Copy file]: e://post-files-id-copy

[Copy folder]: e://post-folders-id-copy

[Create metadata on file]: e://post-files-id-metadata-id-id

[View metadata on file]: e://get-files-id-metadata-id-id

[List metadata on file]: e://get-files-id-metadata

[Update metadata on file]: e://put-files-id-metadata-id-id

[Delete metadata on file]: e://delete-files-id-metadata-id-id

[Create classification label on file]: e://post-files-id-metadata-enterprise-securityClassification-6VMVochwUWo

[View classification label on file]: e://get-files-id-metadata-enterprise-securityClassification-6VMVochwUWo

[Update classification label on file]: e://put-files-id-metadata-enterprise-securityClassification-6VMVochwUWo

[Delete classification label on file]: e://delete-files-id-metadata-enterprise-securityClassification-6VMVochwUWo

[GCM scope]: https://developer.box.com/guides/api-calls/permissions-and-errors/scopes/#global-content-manager-gcm
