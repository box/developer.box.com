---
rank: 1
category_id: box-sign
subcategory_id: null
is_index: false
id: box-sign/create-sign-request
type: guide
total_steps: 4
sibling_id: box-sign
parent_id: box-sign
next_page_id: box-sign/list-sign-requests
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/box-sign/create-sign-request.md
fullyTranslated: true
---
# Box Signのリクエストの作成

[Box Signのリクエストを作成エンドポイント][create]を使用するには、少なくとも、署名用ファイルのほか、署名済みドキュメント/[署名ログ][log]の保存先フォルダを選択し、署名者を指定する必要があります。

<Samples id="post_sign_requests">

</Samples>

## ファイル

Each Box Sign request begins with a file that needs to be signed. If the file does not already exist in Box, it must be [uploaded][upload], in a separate API call, prior to creating the request. Multiple files can be signed in one request. File ID of the first file in a request is specified in the `source_files` body parameter.

<Message type="warning">

The requester must have download privileges to the file in Box. Review our [collaboration levels][collab] to ensure this requirement is met.

</Message>

サポートされているファイルタイプは以下のとおりです。

* すべての[ドキュメント][documents]
* すべての[プレゼンテーション][presentations]
* 画像: `png`、`jpg`、`jpeg`、`tiff`のみ
* テキストベースのファイル: `.csv`、`.txt`のみ

All file types are converted to `.pdf` for the signature process. This converted document can be found in the `parent_folder` upon successfully sending a request. This means that the final, signed document is a `.pdf`, regardless of the original file type. As each signer completes the request, Box Sign will automatically add a new file version.

ファイルサイズの上限は、アカウントの種類によって決まります。詳細については、[アップロードガイド][uploads]を参照してください。 

## 親フォルダ

`parent_folder`本文パラメータで指定されたフォルダIDによって、最終的な署名済みドキュメントと[署名ログ][log]の保存先が決まります。このフォルダには、フォルダID `0`で表される \[すべてのファイル] やルートレベルを指定することができません。 

## 署名者

各署名者には、[役割][role]として、署名者、承認者、または最終的なコピー受信者を割り当てる必要があります。

リクエスト送信者に役割が指定されていない場合は、`final_copy_reader`という役割の署名者が自動的に作成されます。つまり、最終的な署名済みドキュメントと[署名ログ][log]のコピーを受信するだけです。

署名者は、ドキュメントに署名するために、既存のBoxアカウントを持っている必要も、アカウントを作成する必要もありません。他のAPIエンドポイントとは異なり、署名者はBox `user_id`ではなくメールアドレスを使用して招待されます。 

If necessary, signers can log in to Box before signing the request. In such case set the parameter `login_required` to `true` for signers. If the signer does not have an existing account, they will have an option to create a free Box account.

<Message type="warning">

Box Signは、リクエストで指定された署名者のメールアドレスに署名用メールを送信しようとするだけです。Boxユーザーの場合、指定しない限り、メールエイリアスは含まれません。指定された署名者のメールアドレスすべてが有効であることを再確認してください。

</Message>

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

## ドキュメントの準備

Box Signのリクエストを送信する前にドキュメントを準備することで、開発者は署名者のために日付、テキスト、チェックボックス、署名のプレースホルダを追加できます。これを実行するには、UIを使用するか、ドキュメント内で直接[タグ][tags]を使用します。これを実行しなかった場合、署名者には準備が完了していないドキュメントが送信されるため、署名者の判断で署名やフィールドを配置できます。ただし、開発者は、準備が完了していないドキュメントの機能をオンまたはオフにするためのコントロールをリクエスト内で利用できます。

`is_document_preparation_needed`を`true`に設定すると、レスポンスで`prepare_url`が返されます。ブラウザでこのリンクにアクセスすると、ドキュメントの準備を完了し、UIを使用してリクエストを送信できます。

ドキュメントのタグの詳細については、[サポート記事][tags]を参照してください。

<Message type="warning">

Boxウェブアプリを使用してテンプレートに作成された事前入力タグには、APIからアクセスできません。

</Message>

<ImageFrame border center shadow>

![準備のオプション](images/prepare.png)

</ImageFrame>

## リクエストのステータス

* `converting`: The file is converted to a `.pdf` for the signing process once the sign request is sent.
* `error_converting`: An issue was encountered while converting the file to a `.pdf`.
* `created`: If `document_preparation_is_needed` is set to `true`, but the `prepare_url` has not yet been visited.
* `sent`: The request was successfully sent, but no signer has interacted with it.
* `error_sending`: An issue was encountered while sending the request.
* `viewed`: Once the first, or only, signer clicks on **Review document** in the signing email or visits the signing URL.
* `downloaded`: The signing document was downloaded by signer.
* `signed`: All signers completed the request.
* `signed and downloaded`: The signing document was signed and downloaded by signer.
* `declined`: If any signer declines the request.
* `cancelled`: If the request is cancelled via UI or API.
* `expired`: The date of expiration has passed with outstanding, incomplete signatures.

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
