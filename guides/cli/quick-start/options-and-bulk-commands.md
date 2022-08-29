---
type: quick-start
hide_in_page_nav: true
category_id: cli
subcategory_id: cli/quick-start
is_index: false
id: cli/quick-start/options-and-bulk-commands
rank: 4
total_steps: 6
sibling_id: cli/quick-start
parent_id: cli/quick-start
next_page_id: cli/quick-start/powershell-script-templates
previous_page_id: cli/quick-start/build-commands-help
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/cli/quick-start/4-options-and-bulk-commands.md
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

You can use a CSV file to execute commands in bulk. Each row of the spreadsheet is treated as an individual API call.

<!--alex ignore execute-->

To execute a bulk command, use the option `--bulk-file-path=<PATH_TO_CSV>`, where `<PATH_TO_CSV>` is the local path of a CSV file containing the necessary information.

<!-- markdownlint-disable line-length -->

たとえば、コマンド`box folders:create --bulk-file-path=pathtoacsv`を使用して、フォルダを作成してみましょう。

<!-- markdownlint-enable line-length -->

<message type="tip"></message>

Drag the CSV file from your finder window/file explorer to the terminal/command line window to auto-populate the path.

</Message>

To specify the column names for your CSV file, go to the [GitHub repository][github] documentation and look at the argument names or use the `--help` option. In this case, these are `PARENTID` and `NAME` and are case insensitive. You can also use a CSV [template][csv] for this example bulk create folders command.

<!--alex ignore executing-->

以下のコマンドを実行すると、サービスアカウントのフォルダツリーのルートレベル (0) に3つのフォルダが作成されます。

<!-- markdownlint-disable line-length -->

```bash
box folders:create --bulk-file-path=/Users/ExampleUser/Desktop/bulkcreatefolders.csv
```

<!-- markdownlint-enable line-length -->

## オプションを使用した一括コマンド

<!-- markdownlint-disable line-length -->

Passing an option in a command will automatically apply to it to each row in the CSV file. For example, `box folders:collaborations:create --bulk-file-path=pathtocsv --role=editor` will create collaborations for each user in the csv as an editor.

<!-- markdownlint-enable line-length -->

However, you can also use options in the CSV file. Building on the last example, instead of using the `--role=editor` option in the command itself, it can be a column called `role`. The command itself becomes:

<!-- markdownlint-disable line-length -->

`box folders:collaborations:create --bulk-file-path=pathtocsv`

<!-- markdownlint-enable line-length -->

For more details on bulk commands read [this document][bulk].

## まとめ

* コマンドや一括コマンドとともにオプションを使用しました。

<Next>

オプションや一括コマンドの使い方を理解しました

</Next>

[github]: https://github.com/box/boxcli#command-topics

[df]: https://github.com/box/boxcli/blob/master/docs/folders.md#box-foldersdelete-id

[asuser]: g://authentication/jwt/as-user/

[csv]: https://cloud.box.com/s/0jowjhf85dnnjt9i5pd9va1fu54i1m0m

[bulk]: g://cli/cli-docs/bulk-commands
