---
rank: 3
related_endpoints: []
related_guides:
  - authentication/oauth2/oauth2-setup
  - authentication/tokens
  - applications/app-center
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
next_page_id: ''
previous_page_id: applications/web-app-integrations/user-experience
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/applications/web-app-integrations/configure.md
fullyTranslated: true
---
# ウェブアプリ統合の作成

このガイドでは、カスタムアプリとのウェブアプリ統合を設定する方法について説明します。

## 1. OAuth 2.0アプリケーションを作成する

[開発者コンソール][devconsole]に移動し、[OAuth 2.0認証][custom-oauth2]を利用する[カスタムアプリ][ca]を作成します。

## 2. 新しい統合を作成する

次に、\[**統合**] タブに移動し、\[**ウェブアプリ統合を作成**] をクリックします。

<ImageFrame center shadow border>

![\[統合\] タブ](../images/create_integration.png)

</ImageFrame>

## 3. 統合を構成する

統合を構成するには、各値について、以下のガイダンスに従います。

### アプリ情報

<!-- markdownlint-disable line-length -->

| フィールド                                                                                   | 説明                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 統合名                                                                                     | The name of your integration, which users see in the Box Web App when they select the **More Options** > **Integrations** menu on a file or folder.                                                                                                                |
| 説明                                                                                      | Box App Centerに表示される統合の説明。                                                                                                                                                                                                                                         |
| サポートされているファイル拡張子                                                                        | The integration will only appear as an option in the **More Options** > **Integrations** menu for the selected file extensions.                                                                                                                                    |
| Permissions requirement                                                                 | Determines what permissions level users need to see the integration. **Download permissions are required** allows users to download the file - they will not be able to update it. **Full permissions are required** allows users to download and update the file. |
| Integration scopes                                                                      | Specifies the scope of your integration - either the file/folder from which integration is invoked, or its parent folder.                                                                                                                                          |
| Display on shared pages toggle                                                          | Determines if an integration can be shown to external users on a shared page. If enabled, users who are not collaborating on the content will see the integration in the context-menu when accessing the items through a shared link.                              |
| Lock to only allow the current user to overwrite the file using your integration toggle | Determines if different web app integrations can edit the file at the same time.                                                                                                                                                                                   |
| Integration type                                                                        | Select desired integration type. Available options are: **Files**, **Folders**, **Both**.                                                                                                                                                                          |

<!-- markdownlint-enable line-length -->

### コールバック設定

<!-- markdownlint-disable line-length -->

| フィールド               | 説明                                                                                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| クライアントコールバックのURL    | ポップアップ統合での最初のリクエストの後に、Boxからの追加のコールバックリクエストを処理します。アプリケーションがRESTメソッドでファイルパラメータを指定した場合、事前コールバックのURLはクライアントから発信できません。そのため、必要なインターフェースをサーバーがユーザーに送信できるように、2番目のリクエストがクライアントからサーバーに送信される必要があります。 |
| 事前コールバックのURL        | ユーザーがプロンプトを受け入れたときにコールバックパラメータの送信先となるURL。これは、アプリケーションサーバーでAPI呼び出しを実行するURLであることがほとんどですが、HTTPリクエストを受け入れるように構成されたエンドポイントにすることもできます。                                                          |
| ユーザーエクスペリエンス        | 統合が[ポップアップ][pu]統合か[サーバー側][ssi]統合かを判断します。                                                                                                                                                  |
| New window settings | Determines if the application opens in a new tab.                                                                                                                                         |

<!-- markdownlint-enable line-length -->

### コールバックパラメータ

The **Callback Parameters** section configures the parameters that Box sends to the callback URL when a user accepts a confirmation prompt. If this setting is not configured, Box does not send any parameters to the callback URL. To add a parameter, you need to select the **Method**, specify the **Parameter name** and add a **Parameter value**. Available methods are **Get**, **Post** and **File**. For example: **Get - `userid` - `#user_id#`**.

The following parameter values are available.

<!-- markdownlint-disable line-length -->

| パラメータ                 | 説明                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user_id`             | Box[ユーザーID][uid]。この情報は、アクションを完了するためにユーザー認証が必要なポップアップ統合で使用されます。Box IDをアプリケーションに保存すると、統合からの後続の認証リクエストを有効にできます。                                                                                                                                                                                                                                                                     |
| `user_name`           | Boxユーザーのフルネームまたはメールアドレス。Boxユーザーが常に自分の名前を指定しているとは限りません。                                                                                                                                                                                                                                                                                                                           |
| `file_id`             | Box[ファイルID][fid]。このIDを使用すると、ファイルを操作するBox API呼び出しを実行できます。                                                                                                                                                                                                                                                                                                                         |
| `file_name`           | ファイルの名前。                                                                                                                                                                                                                                                                                                                                                                         |
| `file_extension`      | ファイルの拡張子。                                                                                                                                                                                                                                                                                                                                                                        |
| `auth_code`           | OAuth 2.0[承認コード][code]。これは、認証の成功時にBoxによって生成されます。その後、アプリケーションは、この承認コードをOAuth 2.0アクセストークンの代わりにBoxに指定する必要があります。有効なアクセストークンが含まれた承認ヘッダーをすべてのBox APIリクエストに含める必要があります。                                                                                                                                                                                                                  |
| `redirect_to_box_url` | ポップアップ統合で、確認プロンプトによるリクエストの送信先となるURL。このURLを使用すると、ユーザーは \[すべてのファイル] ページにリダイレクトされます。このパラメータにより、ポップアップパネルが閉じ、\[すべてのファイル] ページは、統合による変更をすべて反映するよう更新されます。このパラメータをアプリケーションに追加しない場合は、URL全体を指定できます。**成功**: `#redirect_to_box_url#&status=success&message=Your%20action%20was%20successful%2E`。**失敗**: `#redirect_to_box_url#&status=failure&message=Your%20action%20was%20unsuccessful%2E` |

<!-- markdownlint-enable line-length -->

### 認証

Switch on the toggle **Enable HTTP Basic Authentication** to create a username and password.

### 統合ステータス

* **開発**: 統合は、\[**一般設定**] タブで表示されるアプリケーションコラボレータのみが表示および使用できます。このオプションは、アプリケーションがまだ開発中でテストの実施中である場合に最もよく使用されます。
* **オンライン**: 統合は、すべてのBoxユーザーが表示し、使用できます。このオプションは、開発が完了し、アプリケーションをApp Centerで公開する準備ができている場合に最もよく使用されます。
* **メンテナンス**: 統合は、\[**一般設定**] タブで表示されるアプリケーションコラボレータのみが表示し、使用できます。このオプションは、統合がApp Centerで公開された後、メンテナンスでの更新を実行したり問題をトラブルシューティングしたりする必要がある場合に最もよく使用されます。このオプションを使用すると、アプリケーションのコラボレータ以外のすべてのユーザーに対して統合が一時的にオフラインになります。

## Example Use Cases of Box Integrations

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

<!-- markdownlint-disable line-length -->

| クライアントコールバックのURL                                                                                     | 例                                                        |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 2つのGETパラメータと1つのPOSTパラメータ: `http://your-client-callback-url.com/?get_param1=value1&get_param2=value2` | `POST data: post_param1=value1initial_callback_response` |

<!-- markdownlint-enable line-length -->

クライアントコールバックリクエストへのレスポンスはHTTPステータス302で、ユーザーは正しいURLにリダイレクトされるか、UIのHTMLにリダイレクトされます。

ほとんどの場合、このURLは、ウェブアプリ統合のために開発された個々のAPIまたはカスタムスクリプトを指します。これは、事前コールバックのURLの結果を解析します。また、このURLは、インターネット上で一般公開する必要があることに注意してください。

## 統合の一般公開

Box統合を一般公開するには、統合をApp Centerに掲載する必要があります。詳細については、[App Center][app-center]ガイドに従ってください。

[ca]: g://applications/custom-apps

[pu]: g://applications/web-app-integrations/types/#popup-integrations

[ssi]: g://applications/web-app-integrations/types/#server-side-integration

[uid]: g://getting-started/locating-values/#user-ids

[fid]: g://getting-started/locating-values/#content-ids

[code]: g://authentication/oauth2/without-sdk/#3-user-grants-application-access

[custom-oauth2]: g://authentication/oauth2/oauth2-setup

[devconsole]: https://app.box.com/developers/console

[devaccount]: https://account.box.com/signup/n/developer

[app-center]: g://applications/app-center
