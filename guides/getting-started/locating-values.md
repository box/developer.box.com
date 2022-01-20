---
rank: 6
related_endpoints:
  - get-users-me
  - get-users
  - get-folders-id-items
related_guides: []
required_guides: []
related_resources: []
alias_paths: []
category_id: getting-started
subcategory_id: null
is_index: false
id: getting-started/locating-values
type: guide
total_steps: 5
sibling_id: getting-started
parent_id: getting-started
next_page_id: getting-started/branding-guidelines
previous_page_id: getting-started/architecture-patterns
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/getting-started/locating-values.md
fullyTranslated: true
---
# 一般的な値の確認

## ユーザーID

### 開発者の場合

Boxウェブアプリで自分のユーザーIDを確認するには、\[**すべてのファイル**] ページに移動し、右上隅の円をクリックして、ドロップダウンメニューから \[**アカウント設定**] を選択します。ユーザーIDは、\[**アカウント**] タブの \[**アカウントの詳細**] セクションに表示されている \[**アカウントID**] の値です。

APIを使用してユーザーIDを確認するには、開発者コンソールに移動し、[開発者トークン][devtoken]を生成するか、自分で[アクセストークン][at]を取得します。このトークンを[現在のユーザーを取得エンドポイント][currentuser]で使用すると、`id`フィールドにユーザーIDが返されます。

### 管理者の場合

自分のアカウントの種類で[コンテンツマネージャ][contentmanager]にアクセスできる場合は、ユーザーリストで当該ユーザーをクリックします。URLでユーザーIDが示されます。たとえば、`https://.app.box.com/master/content/2267862105/0/0`の場合、ユーザーIDは`2267862105`です。

APIを使用してユーザーIDを確認するには、開発者コンソールに移動し、[開発者トークン][devtoken]を生成するか、自分で[アクセストークン][at]を取得します。その後、[企業ユーザーのリストを取得][leu]エンドポイントに対してAPI呼び出しを実行します。これにより、企業内のすべてのユーザーのリストが返されます。

## Enterprise ID

### 開発者の場合

APIを使用してEnterprise IDを取得するには、開発者コンソールに移動し、[開発者トークン][devtoken]を生成するか、自分で[アクセストークン][at]を取得します。このトークンを[現在のユーザーを取得エンドポイント][currentuser]で使用し、`enterprise`フィールドをリクエストします。

### 管理者の場合

**管理コンソール**で、\[**アカウントと請求**] タブに移動します。Enterprise IDは、\[**アカウント情報**] セクションにあります。

## コンテンツID

### 開発者の場合

BoxウェブアプリでファイルIDを確認するには、ブラウザでファイルのプレビューに移動し、URLを確認します。たとえば、`https://app.box.com/file/1234567890`のファイルIDは`1234567890`です。

BoxウェブアプリでフォルダIDを確認するには、フォルダに移動し、URLを確認します。たとえば、`https://app.box.com/folder/9876543210`のフォルダIDは`9876543210`です。

APIを使用してコンテンツIDを確認するには、まず、[フォルダ内の項目のリストを取得][lif]エンドポイントの`folder_id`として`0`を渡すことで、\[すべてのファイル] レベルの全項目のリストを取得します。

### 管理者の場合

[コンテンツマネージャ][contentmanager]にアクセスできる場合は、ユーザーリストで当該ユーザーをクリックしてから、コンテンツに移動します。URLにフォルダ/ファイルIDが示されます。たとえば、`https://app.box.com/master/content/1987212562/88560510648/0/532181212706`の場合、ユーザーIDは`1987212562`、フォルダIDは`88560510648`、そのフォルダ内のファイルIDは`532181212706`です。

<!-- i18n-enable localize-links -->

[contentmanager]: https://support.box.com/hc/ja/articles/360044197333-コンテンツマネージャの使用

<!-- i18n-disable localize-links -->

[currentuser]: e://get-users-me

[devtoken]: g://authentication/tokens/developer-tokens

[uo]: e://resources/user

[uo-full]: e://resources/user--full

[at]: g://authentication/tokens/access-tokens

[leu]: e://get-users

[lif]: e://get-folders-id-items
