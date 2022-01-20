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

必要なエンドポイント用のコマンドが表示されない場合は、[カスタムリクエスト][custom]を作成できます。

<message type="tip"></message>

helpコマンドで提供されない情報を確認するには、リファレンスドキュメントと併せてリポジトリのドキュメントを使用してください。このような情報には、制限事項、トークンの権限の要件、フィールドなどがあります。

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

<!--alex ignore executing-->

このフォルダは、自分のBoxアカウントに表示されません。なぜなら、このフォルダを所有していないか、このフォルダにコラボレータとして追加されていないからです。[サービスアカウント][sa]としてコマンドを実行しているため、作成されたフォルダは、自分のアカウントではなく[サービスアカウント][sa]のフォルダツリーに存在します。

<!-- markdownlint-disable line-length -->

<!--alex ignore execute-->

ここで、次のコマンドを実行します: `box folders:collaborations:add folder_id_created_above --role=editor --user-id=YOUR_USER_ID`

<!-- markdownlint-enable line-length -->

<message type="tip"></message>

自分のユーザーIDを確認するには、\[すべてのファイル] ページに移動し、右上隅の円をクリックして、ドロップダウンの \[**アカウント設定**] を選択します。自分のユーザーIDが、\[**アカウント**] タブに \[**アカウントID**] として表示されます。

</Message>

\[すべてのファイル] ページに戻ります。これでフォルダが表示されるようになったでしょうか?

2番目のコマンドでは、このフォルダを所有する[サービスアカウント][sa]を使用し、自分のユーザーIDを編集者レベルのコラボレータとしてフォルダに追加しました。これで、このフォルダが自分のフォルダツリーに表示されます。

## まとめ

* ヘルプ機能を使用してフォルダを作成しました。
* 作成したフォルダにコラボレーションを追加し、Boxで表示しました。

<Next>

最初のフォルダを作成し、コラボレーションを追加しました

</Next>

[github]: https://github.com/box/boxcli#command-topics-1

[custom]: https://github.com/box/boxcli/blob/master/docs/request.md

[sa]: g://getting-started/user-types/service-account

[four]: g://tooling/cli/quick-start/options-and-bulk-commands/#options
