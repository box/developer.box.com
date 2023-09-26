---
rank: 1
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/create-sign-request
type: guide
total_steps: 6
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/sign-templates
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/create-sign-request.md
fullyTranslated: true
---
# Box Signのリクエストの作成

At minimum, to [create Box Sign request][create] you need the a file you want to be signed, a destination folder for the signed document/[signing log][log], and signers.

<Samples id="post_sign_requests">

</Samples>

## ドキュメントの準備

Preparing a document prior to sending a Box Sign request allows developers to add date, text, checkbox, and/or signature placeholders for signers. This can be done with UI or [tags][tags] directly in the document. If this is not done, signers receive an unprepared document and can place signatures and fields at their own discretion. However, developers can leverage controls in the request that allow them to turn features for the unprepared document on and off.

Setting `is_document_preparation_needed` to `true` provides a `prepare_url` in the response. Visiting this link in your browser allows you to complete document preparation and send the request in the UI.

ドキュメントのタグの詳細については、[サポート記事][tags]を参照してください。

<Message type="warning">

Prefill tags created in a template with the Box web app cannot be accessed from the API.

</Message>

<ImageFrame border center shadow>

![準備のオプション](images/prepare.png)

</ImageFrame>

## ファイル

Box Signの各リクエストは、署名が必要なファイルから始まります。そのファイルがまだBoxに存在しない場合は、リクエストを作成する前に、別のAPI呼び出しでファイルを[アップロード][upload]する必要があります。1つのリクエストで複数のファイルに署名できます。リクエストに含まれる最初のファイルのファイルIDを`source_files`本文パラメータで指定します。

<Message type="warning">

リクエスト送信者は、Box内のファイルに対してダウンロード権限を持っている必要があります。この要件を満たしているかどうかを確認するには、[コラボレーションレベル][collab]を確認します。

</Message>

サポートされているファイルタイプは以下のとおりです。

* すべての[ドキュメント][documents]
* すべての[プレゼンテーション][presentations]
* 画像: `png`、`jpg`、`jpeg`、`tiff`のみ
* テキストベースのファイル: `.csv`、`.txt`のみ

すべてのファイルタイプは、署名の処理のために`.pdf`に変換されます。この変換後のドキュメントは、リクエストの送信が成功した場合は、`parent_folder`に見つかります。つまり、元のファイルタイプに関係なく、最終的な署名済みドキュメントは`.pdf`になります。各署名者がリクエストを完了すると、Box Signにより新しいファイルバージョンが自動的に追加されます。

ファイルサイズの上限は、アカウントの種類によって決まります。詳細については、[アップロードガイド][uploads]を参照してください。 

## 親フォルダ

`parent_folder`本文パラメータで指定されたフォルダIDによって、最終的な署名済みドキュメントと[署名ログ][log]の保存先が決まります。このフォルダには、フォルダID `0`で表される \[すべてのファイル] やルートレベルを指定することができません。 

## 署名者

Each signer must be assigned a [role][role]: `signer`, `approver`, or `final copy_reader`.

リクエスト送信者に役割が指定されていない場合は、`final_copy_reader`という役割の署名者が自動的に作成されます。つまり、最終的な署名済みドキュメントと[署名ログ][log]のコピーを受信するだけです。

署名者は、ドキュメントに署名するために、既存のBoxアカウントを持っている必要も、アカウントを作成する必要もありません。他のAPIエンドポイントとは異なり、署名者はBox `user_id`ではなくメールアドレスを使用して招待されます。 

必要に応じて、署名者は、リクエストに署名する前にBoxにログインできます。その場合は、署名者の`login_required`パラメータを`true`に設定します。署名者が既存のアカウントを所有していない場合は、無料Boxアカウントを作成するオプションもあります。

<Message type="warning">

Box Signは、リクエストで指定された署名者のメールアドレスに署名用メールを送信しようとするだけです。Boxユーザーの場合、指定しない限り、メールエイリアスは含まれません。指定された署名者のメールアドレスすべてが有効であることを再確認してください。

</Message>

### Inputs

The `inputs` parameter represents placeholders that the user can interact with. The `document_tag_id` parameter can be populated with data you want to pass when creating a sign request.

## テンプレート

You can create a sign request using a template. To do so, you must provide the `template_id` parameter. See [this guide][templates] to learn more about using templates when creating sign requests. 

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
