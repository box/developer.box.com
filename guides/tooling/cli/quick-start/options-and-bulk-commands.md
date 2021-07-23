---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/options-and-bulk-commands
rank: 4
total_steps: 5
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/next-steps
previous_page_id: tooling/cli/quick-start/build-commands-help
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/4-options-and-bulk-commands.md
fullyTranslated: true
---
# オプションや一括コマンドの使用

## オプション

オプションは、CLIコマンドで使用する追加のオプション機能を提供します。また、オプションはフラグまたは引数とも呼ばれる場合があります。前の手順で説明したように、`--help`はオプションの一例です。

コマンドに有効なすべてのオプションを確認するには、[GitHubリポジトリ][github]を参照してください。

たとえば、[フォルダの削除][df]に関するコマンドのドキュメントを参照すると、`--recursive`や`--force`など、このコマンドで使用するオプションのリストを確認できます。

## as-userヘッダー

[as-userヘッダー][asuser]を使用するには、コマンドの末尾に`--as-user=USERID`オプションを追加します。

たとえば、次のコマンドでは、ユーザーID 123456のアカウントのルートレベルに`Example_Folder`というフォルダが作成されます。

```bash
box folders:create 0 Example_Folder --as-user=123456
```

<message type="warning"></message>

as-userヘッダーを使用できるのは、サービスアカウントと管理者のみです。必要なスコープでアプリケーションが承認されていない場合、または別のユーザーのデフォルトのトークンを取得するようCLIを構成した場合は、この呼び出しが失敗する可能性があります。詳細なエラーログを確認するには、コマンドに`-v`または`--verbose`を追加してください。

</Message>

## 一括コマンド

<!--alex ignore execute-->

csvファイルを使用すると、コマンドを一括して実行できます。このスプレッドシートの各行が個別のAPI呼び出しとして処理されます。

<!--alex ignore execute-->

一括コマンドを実行するには、`--bulk-file-path=pathtoacsv`オプションを使用します。ここでは、`pathtoacsv`を、必要な情報が記載されているcsvファイルのローカルパスに置き換えます。

<!-- markdownlint-disable line-length -->

たとえば、コマンド`box folders:create --bulk-file-path=pathtoacsv`を使用して、フォルダを作成してみましょう。

<!-- markdownlint-enable line-length -->

<message type="tip"></message>

Finderウィンドウ/エクスプローラからターミナル/コマンドラインウィンドウにcsvファイルをドラッグすると、パスを自動で入力できます。

</Message>

csvの列名を決める際は、[GitHubリポジトリ][github]のドキュメントを参照し、引数名を確認するか`--help`オプションを使用します。この場合、列名は`PARENTID`と`NAME`となり、大文字と小文字は区別されません。このフォルダの一括作成コマンドの例では、こちらのcsv[テンプレート][csv]を確認してください。

<!--alex ignore executing-->

以下のコマンドを実行すると、サービスアカウントのフォルダツリーのルートレベル (0) に3つのフォルダが作成されます。

<!-- markdownlint-disable line-length -->

`box folders:create --bulk-file-path=/Users/ExampleUser/Desktop/bulkcreatefolders.csv`

<!-- markdownlint-enable line-length -->

## オプションを使用した一括コマンド

<!-- markdownlint-disable line-length -->

コマンドでオプションを渡すと、そのオプションがcsvの各行に自動的に適用されます。たとえば、`box folders:collaborations:create --bulk-file-path=pathtocsv --role=editor`を実行すると、csv内の各ユーザーに編集者としてコラボレーションが作成されます。

<!-- markdownlint-enable line-length -->

ただし、csvでオプションを使用することもできます。前の例を基に、コマンド自体で`--role=editor`オプションを使用する代わりに、csvで`role`という名前の列を指定することができます。コマンド自体は次のようになります。

<!-- markdownlint-disable line-length -->

`box folders:collaborations:create --bulk-file-path=pathtocsv`.

<!-- markdownlint-enable line-length -->

## まとめ

* コマンドや一括コマンドとともにオプションを使用しました。

<Next>

オプションや一括コマンドの使い方を理解しました

</Next>

[github]: https://github.com/box/boxcli#command-topics-1

[df]: https://github.com/box/boxcli/blob/master/docs/folders.md#box-foldersdelete-id

[asuser]: g://authentication/jwt/as-user/

[csv]: https://cloud.box.com/s/0jowjhf85dnnjt9i5pd9va1fu54i1m0m
