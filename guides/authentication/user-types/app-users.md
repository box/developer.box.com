---
rank: 2
related_endpoints:
  - get_users_id
  - get_users
related_guides:
  - authentication/user-types
required_guides: []
related_resources:
  - user
category_id: authentication
subcategory_id: authentication/user-types
is_index: false
id: authentication/user-types/app-users
type: guide
total_steps: 3
sibling_id: authentication/user-types
parent_id: authentication/user-types
next_page_id: authentication/user-types/managed-users
previous_page_id: authentication/user-types/service-account
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/authentication/user-types/app-users.md
fullyTranslated: true
---
# App User

App UserはAPIを介してのみアクセスできます。つまり、ログイン資格情報を持っていません。これは、[サービスアカウント][sa]によって作成できるため、サーバー間認証を利用するアプリケーションのみに適用できます。App Userは、その作成に使用されたアプリケーションに関連付けられています。また、そのアプリケーション以外でのコンテンツのコラボレーションは可能ですが、ユーザー自体を別のアプリケーション下に移動することはできません。

## 作成

App Userを作成するには、[サービスアカウント][sa]アクセストークンを使用して[ユーザーを作成エンドポイント][createuser]を呼び出します。`is_platform_access_only`本文パラメータはtrueに設定する必要があります。そうしないと、代わりに[管理対象ユーザー][managed]が作成されます。

すべてのBoxアカウントにはメールアドレスが必要なため、Boxによって割り当てられます。これは常に`AppUser_AppServiceID_RandomString@boxdevedition.com`形式になります (例: `AppUser_1234567_LOCqkWI79A@boxdevedition.com`)。

アンダースコアで囲まれた数字もアプリケーションに固有であり、サービスIDと呼ばれます。[開発者コンソール][dc]でサービスIDを見つけるには、アプリケーションのタイルをクリックし、URLを確認します。たとえば、`https://exampl.app.box.com/developers/console/app/1234567`というURLの場合、このアプリケーションは、上記の例のApp Userに対応していることがわかります。

## ユースケース

App Userは、既存のBoxアカウントを持っているかどうかに関係なく、BoxのPlatformの機能を、任意のユーザーにサービスを提供するアプリケーションに拡張します。App Userは、独自のユーザー認証を管理しつつもデータを一意のBoxユーザーアカウントに保存しようとするアプリケーションでよく使用されます。

* _顧客ポータル_: 顧客や患者がログインして、企業の従業員が提供する情報にアクセスしたり、自分の機密文書を保存および取得したりできるウェブサイトまたはアプリケーション。
* _ベンダーポータル_: 企業がマーケティング用販促品、価格表、製品情報、販売契約書、その他の文書を含む資料をベンダーに提供するためのコンテンツ配布サイト。Boxのグループと権限モデルにより、企業はパートナーの基準や層に基づいてパートナー向けのコンテンツを編成できます。
* _ブランドの顧客向けアプリケーション_: エンドユーザーに代わってApp Userを作成できるため、企業は、権限、監査、レポートなどのシームレスな顧客向け機能を構築できます。これは、金融サービスや医療などの規制産業にとって特に有用です。さらに、Boxの[レポート機能][events]によって取得したユーザーベースのデータにより、開発者は分析ツールを活用して、ユーザーの行動についてより理解を深めることができます。

## 権限

App Userは、コラボレータとして明示的に追加されない限り、サービスアカウントのフォルダツリー内のコンテンツを表示することも操作することもできません。また、App Userはログイン資格情報を持っていないため、カスタムアプリケーション以外でコンテンツにアクセスすることはできません。

## UIでのアクセス

App Userには、管理コンソールの [\[ユーザーとグループ\] タブ][uag-tab]からアクセスできます。これらのユーザーにフィルタをかけるには、表示オプションボタン > \[ロール] > \[App User] を使用します。

<ImageFrame center shadow border>

![App Userのフィルタ](./app_users_filter.png)

</ImageFrame>

管理コンソールの[コンテンツマネージャ][cm]からもApp Userにアクセスできます。

## フォルダツリーとコラボレーション

各App Userには、独自のフォルダツリーとコンテンツ所有権の機能があります。最初は、所有するコンテンツやコラボレーションしているコンテンツがないため、このフォルダツリーはデフォルトで空になっています。これは、新しくプロビジョニングしたBoxアカウントの \[すべてのファイル] ページに初めてアクセスしたときと似ています。

既存のコンテンツでのコラボレーションにApp Userを追加するには、他のユーザーの場合と同様、割り当てられたメールアドレスを使用してApp Userを招待します。[APIを使用して][collabapi]コラボレーションを追加する場合は、すでにコンテンツへのアクセス権があり、コラボレータを招待するための適切なコラボレーション権限を持っているユーザーのアクセストークンを使用する必要があります。

[sa]: g://authentication/user-types/service-account/

[createuser]: e://post-users

[managed]: g://authentication/user-types/managed-users/

[dc]: https://app.box.com/developers/console

[events]: e://get-events/

[uag-tab]: https://support.box.com/hc/en-us/articles/360043695714-Admin-Console-Guide

[cm]: https://support.box.com/hc/en-us/articles/360044197333-Using-the-Content-Manager

[collabapi]: e://post-collaborations/
