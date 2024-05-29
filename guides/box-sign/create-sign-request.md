---
rank: 1
related_endpoints:
  - post-sign-requests
related_guides:
  - box-sign/resend-sign-request
  - box-sign/cancel-sign-request
  - box-sign/sign-templates
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/create-sign-request
type: guide
total_steps: 7
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/resend-sign-request
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/create-sign-request.md
fullyTranslated: true
---
# Box Signのリクエストの作成

[Box Signのリクエストを作成する][create]には、少なくとも、署名が必要なファイル、署名済みドキュメント/[署名ログ][log]の保存先フォルダ、署名者が必要です。

<Samples id="post_sign_requests">

</Samples>

<Message type="warning">

公開APIを使用したCFR Part 11の署名リクエストの作成はサポートされていません。詳細については、[21 CFR Part 11コンプライアンスのサポート][CFR]を参照してください。

</Message>

## ドキュメントの準備

Box Signのリクエストを送信する前にドキュメントを準備することで、開発者は署名者のために日付、テキスト、チェックボックス、署名のプレースホルダを追加できます。これを行うには、UIを使用するか、ドキュメント内で直接[タグ][tags]を使用します。準備を行わなかった場合、署名者には準備が完了していないドキュメントが送信されるため、署名者の判断で署名やフィールドを配置できます。ただし、開発者は、準備が完了していないドキュメントの機能をオンまたはオフにするためのコントロールをリクエスト内で利用できます。

`is_document_preparation_needed`を`true`に設定すると、レスポンスで`prepare_url`が返されます。ブラウザでこのリンクにアクセスすると、ドキュメントの準備を完了し、UI上でリクエストを送信できます。

ドキュメントのタグの詳細については、[サポート記事][tags]を参照してください。

<Message type="warning">

Boxウェブアプリを使用してテンプレートに作成された事前入力タグには、APIからアクセスできません。

</Message>

<ImageFrame border center shadow>

![準備のオプション](images/prepare.png)

</ImageFrame>

## ファイル

Box Signの各リクエストは、署名が必要なファイルから始まります。そのファイルがまだBoxに存在しない場合は、リクエストを作成する前に、別のAPIコールでファイルを[アップロードする][upload]必要があります。1つのリクエストで複数のファイルに署名できます。リクエストに含まれる最初のファイルのファイルIDを`source_files`本文パラメータで指定します。

<Message type="warning">

リクエスト送信者は、Box内のファイルに対してダウンロード権限を持っている必要があります。この要件を満たしているかどうかを確認するには、[コラボレーションレベル][collab]を確認します。

</Message>

サポートされているファイルタイプは以下のとおりです。

* すべての[ドキュメント][documents]
* すべての[プレゼンテーション][presentations]
* 画像: `png`、`jpg`、`jpeg`、`tiff`のみ
* テキストベースのファイル: `.csv`、`.txt`のみ

すべてのファイルタイプは、署名の処理のために`.pdf`に変換されます。この変換後のドキュメントは、リクエストの送信が成功した場合に`parent_folder`で見つかります。つまり、元のファイルタイプに関係なく、最終的な署名済みドキュメントは`.pdf`になります。各署名者がリクエストを完了すると、Box Signにより新しいファイルバージョンが自動的に追加されます。

ファイルサイズの上限は、アカウントの種類によって決まります。詳細については、[アップロードガイド][uploads]を参照してください。

## 親フォルダ

`parent_folder`本文パラメータで指定されたフォルダIDによって、最終的な署名済みドキュメントと[署名ログ][log]の保存先が決まります。このフォルダには、フォルダID `0`で表される \[すべてのファイル] やルートレベルを指定することができません。

## 署名者

各署名者には、[役割][role]として、`signer`、`approver`、または`final copy_reader`を割り当てる必要があります。

リクエスト送信者に役割が指定されていない場合は、`final_copy_reader`という役割の署名者が自動的に作成されます。つまり、最終的な署名済みドキュメントと[署名ログ][log]のコピーを受信するだけです。

署名者は、ドキュメントに署名するために、既存のBoxアカウントを持っている必要も、アカウントを作成する必要もありません。他のAPIエンドポイントとは異なり、署名者はBox `user_id`ではなくメールアドレスを使用して招待されます。

必要に応じて、署名者は、リクエストに署名する前にBoxにログインできます。その場合は、署名者の`login_required`パラメータを`true`に設定します。署名者が既存のアカウントを所有していない場合は、無料Boxアカウントを作成するオプションもあります。

<Message type="warning">

Box Signは、リクエストで指定された署名者のメールアドレスに署名用メールを送信しようとするだけです。Boxユーザーの場合、指定しない限り、メールエイリアスは含まれません。指定された署名者のメールアドレスすべてが有効であることを再確認してください。

</Message>

### 入力

`inputs`パラメータは、ユーザーが操作できるプレースホルダを表します。`document_tag_id`パラメータには、署名リクエストの作成時に渡すデータを設定できます。

## テンプレート

署名リクエストは、テンプレートを使用して作成できます。そのためには、`template_id`パラメータを指定する必要があります。署名リクエスト作成時のテンプレートの使用の詳細については、[こちらのガイド][templates]を参照してください。

## リダイレクト

`redirect_url`および`declined_redirect_url`で指定したURLにより、署名するか署名リクエストを拒否した署名者をカスタムランディングページにリダイレクトすることができます。たとえば、アプリケーションをBox Signと統合した場合は、署名者をアプリケーションにリダイレクトすることもカスタムランディングページにリダイレクトすることもできます。リダイレクトURLは、すべての署名者を対象にグローバルに設定することも、特定の署名者のみを対象に設定することもできます。つまり、Box Signでは、選択した署名者に特定のURLを使用し、残りの署名者にグローバルな設定を使用します。リダイレクトURLを設定しなかった場合、Box Signでは署名者がデフォルトのページにリダイレクトされます。

<Message type="warning">

デフォルトのページには「すべての関係者がドキュメントでの作業を完了すると、期限が設定された最終版へのリンクがメールで届きます。また、Boxアカウントをお持ちの場合は、アカウントにコピーが保存されます。」と表示されます。署名者を別のページにリダイレクトする場合、この情報は署名者に表示されなくなります。

</Message>

## 複数の署名者と署名の順序

署名の順序は、指定された`order`の数値を小さいものから大きいものへ順序付けすることで決まります。2つの数値が同じ場合、署名者には同時にリクエストが届きます。

最初は、割り当てられた`order`の数値が最も小さい署名者だけに、Box Signのリクエストメールが送信されます。その署名者が署名すると、次のユーザーにメールが送信される、というように進んでいきます。Box Signでは、ユーザーが署名するたびに、ドキュメントの新しいバージョンが`parent_folder`に自動的に追加されます。

いずれかの署名者が拒否した場合、残りの署名者にBox Signのリクエストメールが送信されません。リクエスト全体が拒否されます。

<ImageFrame border center shadow>

![複数の署名者のフロー](images/multiple_signer_flow.png)

</ImageFrame>

## リクエストのステータス

* `converting`: 署名リクエストが送信された後、ファイルが署名プロセスのために`.pdf`に変換されている。
* `error_converting`: ファイルを`.pdf`に変換している間に問題が発生した。
* `created`: `document_preparation_is_needed`が`true`に設定されているが、`prepare_url`がまだアクセスされていない。
* `sent`: リクエストが正常に送信されたが、どの署名者も対応していない。
* `error_sending`: リクエストを送信中に問題が発生した。
* `viewed`: 最初 (または唯一) の署名者が署名用メールの \[**ドキュメントをレビュー**] をクリックするか、署名用URLにアクセスした。
* `downloaded`: 署名者が署名用ドキュメントをダウンロードした。
* `signed`: すべての署名者がリクエストの処理を完了した。
* `signed and downloaded`: 署名者が署名用ドキュメントに署名してダウンロードした。
* `declined`: いずれかの署名者がリクエストを拒否した。
* `cancelled`: リクエストがUIまたはAPIを介してキャンセルされた。
* `expired`: 署名が未完了、不十分のまま、有効期限が過ぎた。
* `finalizing`: すべての署名者がリクエストに署名済みでも、署名された最終的なドキュメントと署名ログがまだ生成されていない。
* `error_finalizing`: `finalizing`フェーズが正常に完了しなかった。

エラーステータスになった場合、再試行するには、新しい署名リクエストを作成する必要があります。

<ImageFrame border center shadow>

![ステータスの図](images/status.png)

</ImageFrame>

[upload]: e://post-files-content/

[documents]: g://representations/supported-file-types/#documents

[presentations]: g://representations/supported-file-types/#presentations

[uploads]: g://uploads/direct

[create]: e://post-sign-requests

<!-- i18n-enable localize-links -->

[tags]: https://support.box.com/hc/ja/articles/4404085855251-タグを使用したテンプレートの作成

[log]: https://support.box.com/hc/ja/articles/4404095202579-署名ログの確認

[role]: https://support.box.com/hc/ja/articles/4404105660947-署名者の役割

[collab]: https://support.box.com/hc/ja/articles/360044196413-コラボレータの権限レベルについて

<!-- i18n-disable localize-links -->

[embed]: g://embed/box-embed

[embedguide]: g://embed/box-embed#programmatically

[signrequest]: e://post-sign-requests

[externalid]: e://post-sign-requests#param-signers-embed_url_external_user_id

[cloudgame]: g://embed/box-embed#cloud-game

[templates]: g://box-sign/sign-templates

[CFR]: https://support.box.com/hc/en-us/articles/24169443030163
