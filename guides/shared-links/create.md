---
rank: 1
related_endpoints:
  - put_files_id
related_guides:
  - shared-links/update
  - shared-links/remove
  - shared-links/find-for-item
related_pages: []
required_guides: []
related_resources: []
alias_paths: []
category_id: shared-links
subcategory_id: null
is_index: false
id: shared-links/create
type: guide
total_steps: 4
sibling_id: shared-links
parent_id: shared-links
next_page_id: shared-links/update
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/shared-links/create.md
---
# 共有リンクの作成

ファイルリソースまたはフォルダリソースの共有リンクを直接作成して、適切なアクセスレベルを持つユーザーにコンテンツの表示を許可するための読み取り専用URLを生成できます。

<Message type="notice">

ファイルまたはフォルダのアクティブな共有リンクは、常に1つのみ保持できます。

</Message>

共有リンクの作成には少なくとも以下の情報が必要です。

* リソースのタイプ(ファイルまたはフォルダ)。
* リソースのID。

共有リンクの作成時には、以下の情報もオプションとして指定できます。

* 以下のいずれかのアクセスレベル。
  * open: パブリックな共有リンク。そのリンクを知っているすべてのユーザーがアクセスできます。
  * company: 会社内のすべてのユーザーがアクセスできます。
  * collaboration: コンテンツのコラボレーションに参加しているすべてのユーザーがアクセスできます。
* 有効期限。その日時から、共有リンクが自動的に無効になります。
* リソースへのアクセスに必要なパスワード。

<Message type="notice">

共有リンクの作成時にアクセスレベルを指定しなかった場合、会社の管理者が指定したデフォルトのアクセスレベルが使用されます。

</Message>

## ファイルの共有リンクの作成

ファイルの共有リンクを作成するには、ファイルのIDとオプションの共有リンクパラメータを指定します。

<Samples id="put_files_id_shared_link_create">

</Samples>

## フォルダの共有リンクの作成

フォルダの共有リンクを作成するには、フォルダのIDとオプションの共有リンクパラメータを指定します。

<Samples id="put_folders_id_shared_link_create">

</Samples>
