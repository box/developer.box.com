---
rank: 3
related_endpoints: []
related_guides:
  - authentication/oauth2/oauth2-setup
  - authentication/tokens
  - applications/integrations
required_guides: []
related_resources: []
alias_paths: []
notes: Needs a massive cleanup
category_id: applications
subcategory_id: applications/web-app-integrations
is_index: false
id: applications/web-app-integrations/configure
type: guide
total_steps: 3
sibling_id: applications/web-app-integrations
parent_id: applications/web-app-integrations
next_page_id: applications/web-app-integrations
previous_page_id: applications/web-app-integrations/user-experience
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/web-app-integrations/configure.md
fullyTranslated: true
---
# ウェブアプリ統合の作成

このガイドでは、カスタムアプリとのウェブアプリ統合を設定する方法について説明します。

<message type="warning">

サーバー側統合のサポートは終了しました。つまり、サーバー側の処理を使用するアプリケーションは引き続き動作しますが、事前コールバックのURLやBasic認証など、サーバー側の構成オプションを変更することはできなくなります。これらのオプションを無効化し、実装を新しいものに変更できます。

</message>

## OAuth 2.0アプリケーションの作成

[開発者コンソール][devconsole]に移動し、[OAuth 2.0認証][custom-oauth2]を利用する[カスタムアプリ][ca]を作成します。

## 新しい統合の作成

次に、\[**統合**] タブに移動し、\[**ウェブアプリ統合を作成**] をクリックします。

<ImageFrame center shadow border>

![\[統合\] タブ](./images/create_integration.png)

</ImageFrame>

## 統合の構成

統合を構成するには、各値について、以下のガイダンスに従います。

### アプリ情報

| フィールド                                         | 説明                                                                                                                                              |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 統合名                                           | 統合の名前。ユーザーがファイルまたはフォルダの \[**その他のオプション**] > \[**統合**] メニューを選択したときにBoxウェブアプリに表示されます。                                                              |
| 説明                                            | The description of the integration displayed in the Box Integrations.                                                                           |
| サポートされているファイル拡張子                              | 統合は、選択されているファイル拡張子の \[**その他のオプション**] > \[**統合**] メニューのオプションとしてのみ表示されます。                                                                         |
| 必要な権限                                         | ユーザーが統合を表示するために必要な権限を決定します。\[**ダウンロードの権限が必要**] にした場合、ユーザーはファイルをダウンロードできますが、そのファイルを更新することはできません。\[**すべての権限が必要**] にした場合、ユーザーはファイルのダウンロードと更新を行えます。 |
| 統合の範囲                                         | 統合の範囲を指定します。統合の呼び出し元となるファイル/フォルダ、またはその親フォルダを指定します。                                                                                              |
| \[共有ページで表示] の切り替え                             | 共有ページで外部ユーザーに統合を表示可能にするかどうかを決定します。有効にした場合、コンテンツでコラボレーションしていないユーザーが共有リンクを介して項目にアクセスすると、コンテキストメニューに統合が表示されます。                                     |
| \[ロックして、この統合を使用したファイルの上書きを現在のユーザーにのみ許可] の切り替え | 異なるウェブアプリ統合でファイルを同時に編集可能にするかどうかを決定します。                                                                                                          |
| 統合の種類                                         | 必要な統合の種類を選択します。使用できるオプションは、\[**ファイル**]、\[**フォルダ**]、\[**両方**] です。                                                                                |

### コールバック構成

| フィールド            | 説明                                                                                                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| クライアントコールバックのURL | [ポップアップ統合][pu]での最初のリクエストの後に、Boxからの追加のコールバックリクエストを処理します。アプリケーションがRESTメソッドでファイルパラメータを指定した場合、事前コールバックのURLはクライアントから発信できません。そのため、必要なインターフェースをサーバーがユーザーに送信できるように、2番目のリクエストがクライアントからサーバーに送信される必要があります。 |
| ユーザーエクスペリエンス     | 統合が新しいウィンドウで開くことを通知します。                                                                                                                                                                         |
| 新しいウィンドウの設定      | アプリケーションを新しいタブで開くかどうかを決定します。                                                                                                                                                                    |

### コールバックパラメータ

\[**コールバックパラメータ**] セクションでは、ユーザーが確認プロンプトを受け入れるとBoxからコールバックURLに送信されるパラメータを構成します。この設定が構成されていない場合、BoxからコールバックURLにパラメータが送信されません。パラメータを追加するには、\[**メソッド**] を選択し、\[**パラメータ名**] を指定して、\[**パラメータ値**] を追加します。使用可能なメソッドは**Get**と**Post**です。

<message type="warning">

**File**メソッドのサポートは終了しました。すでにこのメソッドを使用している場合は、その値を編集できません。**File**メソッドを**Get**または**Post**に変更することはできますが、この操作を元に戻すことはできません。

</message>

例: **Get - `userid` - `#user_id#`**。

以下のパラメータ値が使用可能です。

| パラメータ                 | 説明                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user_id`             | Box[ユーザーID][uid]。この情報は、アクションを完了するためにユーザー認証が必要なポップアップ統合で使用されます。Box IDをアプリケーションに保存すると、統合からの後続の認証リクエストを有効にできます。                                                                                                                                                                                                                                                                     |
| `user_name`           | Boxユーザーのフルネームまたはメールアドレス。Boxユーザーが常に自分の名前を指定しているとは限りません。                                                                                                                                                                                                                                                                                                                           |
| `file_id`             | Box[ファイルID][fid]。このIDを使用すると、ファイルを操作するBox APIコールを実行できます。                                                                                                                                                                                                                                                                                                                          |
| `file_name`           | ファイルの名前。                                                                                                                                                                                                                                                                                                                                                                         |
| `file_extension`      | ファイルの拡張子。                                                                                                                                                                                                                                                                                                                                                                        |
| `auth_code`           | OAuth 2.0[承認コード][code]。これは、認証の成功時にBoxによって生成されます。その後、アプリケーションは、この承認コードをOAuth 2.0アクセストークンの代わりにBoxに指定する必要があります。有効なアクセストークンが含まれた承認ヘッダーをすべてのBox APIリクエストに含める必要があります。                                                                                                                                                                                                                  |
| `redirect_to_box_url` | ポップアップ統合で、確認プロンプトによるリクエストの送信先となるURL。このURLを使用すると、ユーザーは \[すべてのファイル] ページにリダイレクトされます。このパラメータにより、ポップアップパネルが閉じ、\[すべてのファイル] ページは、統合による変更をすべて反映するよう更新されます。このパラメータをアプリケーションに追加しない場合は、URL全体を指定できます。**成功**: `#redirect_to_box_url#&status=success&message=Your%20action%20was%20successful%2E`。**失敗**: `#redirect_to_box_url#&status=failure&message=Your%20action%20was%20unsuccessful%2E` |

### 統合ステータス

* **開発**: 統合は、\[**一般設定**] タブで表示されるアプリケーションコラボレータのみが表示および使用できます。このオプションは、アプリケーションがまだ開発中でテストの実施中である場合に最もよく使用されます。
* **Online**: The integration is visible and available to all Box users. This option is best used when development is complete and the application is ready to publish in the Integrations.
* **Maintenance**: The integration is visible and available only to application collaborators listed under the **General Settings** tab. This option is best used after the integration is published in the Integrations, but needs to perform maintenance updates or troubleshoot issues. Use this option to temporarily take the integration offline for everyone except the application's collaborators.

## Box統合のユースケースの例

ユーザーがポップアップ統合を選択すると、Boxから事前コールバックのURLにコールバックリクエストが送信されます。これにより、構成済みのコールバックパラメータがサーバーに送信されます。クライアントが必要なデータを最初のリクエストからすべて取得できない場合は、Boxが2番目のリクエストを送信することもあります。

次の例では、クライアントコールバックのURLが必要ありません。

* ポップアップ統合で、`download_file_url`コールバックパラメータを使用してREST呼び出しを実行する。
* ユーザーが確認プロンプトで \[**OK**] をクリックしてポップアップを受け入れる。
* Boxが次のURLにリクエストを送信する (事前コールバックのURLにコールバックパラメータを追加): `http://www.doceditor.com/service?apikey=abc&file=&redirect=`。
* コールバックURLからのレスポンスにより、リクエストを送信したユーザーにユーザーインターフェースが表示される。ポップアップには、アクションを続行するために必要なすべての情報が表示されているため、追加のクライアントコールバックは必要ありません。

次の例では、クライアントコールバックのURLが必要です。

* ポップアップ統合で、ファイルコールバックパラメータを使用してREST呼び出しを実行する。
* ユーザーが確認プロンプトで \[**OK**] をクリックしてポップアップを受け入れる。
* ポップアップによって表示されたページで、Boxからリモートサーバーに、ファイルのコンテンツを含むPOSTリクエストとともにコールバックパラメータが送信される。
* Boxがリモートサーバーからレスポンスを受信し、クライアントにクライアントコールバックのURLへのレスポンスを投稿するよう指示する。このURLで識別されたサーバーがレスポンスを解釈し、適切なセッションIDを持つユーザーをリダイレクトします。

## クライアントコールバックのURLのリクエスト形式

BoxからクライアントコールバックのURLに送信されるPOSTリクエストは、事前コールバックのURLからレスポンスを取得し、元のコールバックと同じデータとともにレスポンスを同じURLに転送します。

| クライアントコールバックのURL                                                                                     | 例                                                        |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 2つのGETパラメータと1つのPOSTパラメータ: `http://your-client-callback-url.com/?get_param1=value1&get_param2=value2` | `POST data: post_param1=value1initial_callback_response` |

クライアントコールバックリクエストへのレスポンスはHTTPステータス302で、ユーザーは正しいURLにリダイレクトされるか、UIのHTMLにリダイレクトされます。

ほとんどの場合、このURLは、ウェブアプリ統合のために開発された個々のAPIまたはカスタムスクリプトを指します。これは、事前コールバックのURLの結果を解析します。また、このURLは、インターネット上で一般公開する必要があることに注意してください。

## 統合の一般公開

To make a Box integration publicly available it needs to be listed in the App Center. Follow the [Integrations][integrations] guide for more details.

[ca]: g://applications/app-types/custom-apps

[pu]: g://applications/web-app-integrations/types

[uid]: page://platform/appendix/locating-values/#user-ids

[fid]: page://platform/appendix/locating-values/#content-ids

[code]: g://authentication/oauth2/without-sdk/#3-user-grants-application-access

[custom-oauth2]: g://authentication/oauth2/oauth2-setup

[devconsole]: https://app.box.com/developers/console

[devaccount]: https://account.box.com/signup/n/developer

[integrations]: g://applications/integrations
