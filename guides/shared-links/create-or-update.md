---
rank: 1
related_endpoints:
  - put_files_id
related_guides:
  - shared-links/permissions
  - shared-links/remove
  - shared-links/find-for-item
related_pages: []
required_guides: []
related_resources: []
alias_paths:
  - /shared-links/create
  - /shared-links/update
category_id: shared-links
subcategory_id: null
is_index: false
id: shared-links/create-or-update
type: guide
total_steps: 4
sibling_id: shared-links
parent_id: shared-links
next_page_id: shared-links/find-for-item
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/shared-links/create-or-update.md
fullyTranslated: true
---
# Create or Update Shared Link

Shared links may be created or directly for file, folder, or web link resources to generate a read-only URL to permit users with the appropriate access level to view the content.

<Message type="notice">

You may only have one active shared link for a file, folder, or web link at any time.

</Message>

共有リンクの作成には少なくとも以下の情報が必要です。

* The type of resource, either a file, folder, or web link.
* リソースのID。

共有リンクの作成時には、以下の情報もオプションとして指定できます。

* 以下のいずれかのアクセスレベル。
  * open: パブリックな共有リンク。リンクを知っている全員がアクセスできます。
  * company: 会社内のすべてのユーザーがアクセスできます。
  * collaborators: コンテンツのコラボレーションに参加しているすべてのユーザーがアクセスできます。
* 有効期限。その日時から、共有リンクが自動的に無効になります。
* リソースへのアクセスに必要なパスワード。

<Message type="notice">

共有リンクの作成時にアクセスレベルを指定しなかった場合、会社の管理者が指定したデフォルトのアクセスレベルが使用されます。

</Message>

## Create or Update Shared Link for File

ファイルの共有リンクを作成するには、ファイルのIDとオプションの共有リンクパラメータを指定します。

<Samples id="put_files_id" variant="add_shared_link">

</Samples>

## Create or Update Shared Link for Folder

フォルダの共有リンクを作成するには、フォルダのIDとオプションの共有リンクパラメータを指定します。

<Samples id="put_folders_id" variant="add_shared_link">

</Samples>

## Create or Update Shared Link for Web Link

To create a shared link on a web link, specify the ID of the web link with any optional shared link parameters.

<Samples id="put_web_links_id" variant="add_shared_link">

</Samples>
