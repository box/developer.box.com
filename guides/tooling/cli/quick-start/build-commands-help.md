---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/build-commands-help
rank: 3
total_steps: 5
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/options-and-bulk-commands
previous_page_id: tooling/cli/quick-start/install-and-configure
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/3-build-commands-help.md
fullyTranslated: true
---
# コマンドの作成とヘルプ機能

CLIコマンドの全一覧と使用方法に関する情報については、[GitHubリポジトリ][github]を参照してください。

<message type="warning"></message>

Only Service Accounts and Admins are able to use some commands. If your user is not authorized with the necessary scopes or you configured your CLI to obtain a default token for another user, calls may fail. Add `-v` or `--verbose` to your command for verbose error logging.

</Message>

必要なエンドポイント用のコマンドが表示されない場合は、[カスタムリクエスト][custom]を作成できます。

<message type="tip"></message>

helpコマンドで提供されない情報を確認するには、リファレンスドキュメントと併せてリポジトリのドキュメントを使用してください。このような情報には、制限事項、トークンの権限の要件、フィールドなどがあります。

</Message>

## はじめに: ブラウザのストレージをリセットする

Now that you've imported the Box API credentials into the CLI you should take a moment to remove these credentials from your browser's storage.

<ResetButton id="cli,credentials,observable_events">

資格情報をクリア

</ResetButton>

<Message warning>

Removing your API credentials from the browser storage ensures that no other script can read your **Client ID** or **Client Secret**

</Message>

## helpを使用したフォルダの作成

<!--alex ignore executing-->

どのCLIコマンドも`box`で始まります。任意のコマンドにオプション`--help`を追加すると、そのコマンドを作成するためのヘルプが表示されます。たとえば、`box --help`を実行すると、使用可能なすべてのオブジェクトコマンドのリストが表示されます。オプションの詳細については、[手順4][four]で説明します。

<ImageFrame center>

![ヘルプ](./help.png)

</ImageFrame>

<!--alex ignore execute-->

次に、例として、フォルダオブジェクトを使用してコマンド`box folders --help`を実行します。その結果、このオブジェクトに実行できるすべてのアクションのリストが表示されます。

<ImageFrame center>

![ヘルプ](./folders_help.png)

</ImageFrame>

<!-- markdownlint-disable line-length -->

フォルダの作成に必要な引数を調べるためのコマンド: `box folders:create --help`

<!-- markdownlint-enable line-length -->

<ImageFrame center>

![ヘルプ](./folders_create_help.png)

</ImageFrame>

<!--alex ignore execute-->

コマンド`box folders:create 0 "My CLI Folder"`を実行し、レスポンスで返されたフォルダIDを書き留めておきます。

<message type="tip"></message>

フォルダツリーのルートレベルである \[すべてのファイル] ページは、常にフォルダID 0で表されます。

</Message>

**自分の**Boxアカウントにログインします。このフォルダが自分のフォルダツリーに表示されているでしょうか?

<message type="warning"></message>

If you set up the Box CLI using JWT authentication, you will not see the folder in your Box account. The folder will live in the service account of the application that was created after application approval.

</Message>

## まとめ

* You used the **help** feature to create a folder

<Next>

I created my first folder

</Next>

[github]: https://github.com/box/boxcli#command-topics-1

[custom]: https://github.com/box/boxcli/blob/master/docs/request.md

[sa]: g://getting-started/user-types/service-account

[four]: g://tooling/cli/quick-start/options-and-bulk-commands/#options
