---
rank: 3
related_endpoints: []
related_guides:
  - authentication/oauth2/oauth2-setup
  - authentication/tokens
  - applications/app-gallery
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

<ImageFrame center shadow border width="200">

![\[統合\] タブ](../images/create_integration.png)

</ImageFrame>

## 3. 統合を構成する

統合を構成するには、各値について、以下のガイダンスに従います。

### アプリ情報

<!-- markdownlint-disable line-length -->

| フィールド            | 説明                                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| 統合名              | 統合の名前。ファイルまたはフォルダの \[**その他のオプション**] > \[**統合**] メニューを選択したときに、Boxウェブアプリでユーザーに表示されます。                       |
| 説明               | Boxアプリギャラリーに表示される統合の説明。                                                                                   |
| サポートされているファイル拡張子 | 統合は、選択されているファイル拡張子の \[**その他のオプション**] > \[**統合**] メニューのオプションとしてのみ表示されます。                                   |
| 共有ページで表示         | 共有ページで外部ユーザーに統合を表示可能にするかどうかを決定します。有効にした場合、コンテンツでコラボレーションしていないユーザーが共有リンクを介して項目を閲覧すると、コンテキストメニューに統合が表示されます。 |

<!-- markdownlint-enable line-length -->

### コールバック設定

<!-- markdownlint-disable line-length -->

| フィールド            | 説明                                                                                                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ユーザーエクスペリエンス     | 統合が[ポップアップ][pu]統合か[サーバー側][ssi]統合かを判断します。                                                                                                                                                  |
| 事前コールバックのURL     | ユーザーがプロンプトを受け入れたときにコールバックパラメータの送信先となるURL。これは、アプリケーションサーバーでAPI呼び出しを実行するURLであることがほとんどですが、HTTPリクエストを受け入れるように構成されたエンドポイントにすることもできます。                                                          |
| クライアントコールバックのURL | ポップアップ統合での最初のリクエストの後に、Boxからの追加のコールバックリクエストを処理します。アプリケーションがRESTメソッドでファイルパラメータを指定した場合、事前コールバックのURLはクライアントから発信できません。そのため、必要なインターフェイスをサーバーがユーザーに送信できるように、2番目のリクエストがクライアントからサーバーに送信される必要があります。 |

<!-- markdownlint-enable line-length -->

### 統合ステータス

* **開発**: 統合は、\[**一般設定**] タブで表示されるアプリケーションコラボレータのみが表示および使用できます。このオプションは、アプリケーションがまだ開発中でテストの実施中である場合に最もよく使用されます。
* **オンライン**: 統合は、すべてのBoxユーザーが表示し、使用できます。このオプションは、開発が完了し、アプリケーションをアプリギャラリーで公開する準備ができている場合に最もよく使用されます。
* **メンテナンス**: 統合は、\[**一般設定**] タブで表示されるアプリケーションコラボレータのみが表示し、使用できます。このオプションは、統合がアプリギャラリーで公開された後、メンテナンスでの更新を実行したり問題をトラブルシューティングしたりする必要がある場合に最もよく使用されます。このオプションを使用すると、アプリケーションのコラボレータ以外のすべてのユーザーに対して統合が一時的にオフラインになります。

### コールバックパラメータ

\[コールバックパラメータ] セクションでは、ユーザーが確認プロンプトを受け入れるとBoxからコールバックURLに送信されるパラメータを構成します。この設定が構成されていない場合、BoxからコールバックURLにパラメータが送信されません。

以下のパラメータが使用可能です。

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

## Box統合の使用例

ユーザーがポップアップ統合を選択すると、Boxから事前コールバックのURLにコールバックリクエストが送信されます。これにより、構成済みのコールバックパラメータがサーバーに送信されます。クライアントが必要なデータを最初のリクエストからすべて取得できない場合は、Boxが2番目のリクエストを送信することもあります。

次の例では、クライアントコールバックのURLが必要ありません。

* ポップアップ統合で、`download_file_url`コールバックパラメータを使用してREST呼び出しを実行する。
* ユーザーが確認プロンプトで \[**OK**] をクリックしてポップアップを受け入れる。
* Boxが次のURLにリクエストを送信する (事前コールバックのURLにコールバックパラメータを追加): `http://www.doceditor.com/service?apikey=abc&file=&redirect=`。
* コールバックURLからのレスポンスにより、リクエストを送信したユーザーにユーザーインターフェイスが表示される。ポップアップには、アクションを続行するために必要なすべての情報が表示されているため、追加のクライアントコールバックは必要ありません。

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

Box統合を一般公開するには、統合をアプリギャラリーに掲載する必要があります。詳細については、[アプリギャラリー][app-gallery]ガイドに従ってください。

[ca]: g://applications/custom-apps

[pu]: g://applications/web-app-integrations/types/#popup-integrations

[ssi]: g://applications/web-app-integrations/types/#server-side-integration

[uid]: g://getting-started/locating-values/#user-ids

[fid]: g://getting-started/locating-values/#content-ids

[code]: g://authentication/oauth2/without-sdk/#3-user-grants-application-access

[custom-oauth2]: g://authentication/oauth2/oauth2-setup

[devconsole]: https://app.box.com/developers/console

[devaccount]: https://account.box.com/signup/n/developer

[app-gallery]: g://applications/app-gallery
