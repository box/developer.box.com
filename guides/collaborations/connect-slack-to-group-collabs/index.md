---
rank: 0
type: quick-start
hide_step_number: true
hide_in_page_nav: true
icon: FiUsers
category_id: collaborations
subcategory_id: collaborations/connect-slack-to-group-collabs
is_index: true
id: collaborations/connect-slack-to-group-collabs
total_steps: 6
sibling_id: collaborations
parent_id: collaborations
next_page_id: collaborations/connect-slack-to-group-collabs/configure-slack
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/collaborations/connect-slack-to-group-collabs/0-index.md
fullyTranslated: true
---
# BoxグループコラボレーションへのSlackの接続

Slackは、よく使われているコミュニケーションおよび生産性向上ツールで、会社の内外の個人またはグループと作業する際にリアルタイムでの調整が可能になります。

カスタムBoxアプリケーションに接続すると、Slackチャンネルの構造を[スラッシュコマンド][slack-slash-commands]や[イベントAPI][slack-event-api]システムとともに使用して、Boxのファイルやフォルダを論理的にグループ化およびコラボレーションできるようになります。

## 概要

このクイックスタートガイドでは、BoxユーザーをSlackワークスペースで属しているチャンネルに基づいてグループ化し、Slackのスラッシュコマンドを使用して、そのSlackチャンネル内のユーザーがBoxのファイルやフォルダをそのグループと共有できるようにするのに必要な手順すべてを説明します。

このチュートリアルが終了すると、ワークスペースのチャンネルにSlackボットが展開されます。このボットは、そのチャンネルに存在するすべてのユーザーが含まれるBoxグループを作成し、チャンネルで`/boxadd`コマンドをリッスンします。その後、そのコマンドを解析し、自動的にチャンネルのユーザーグループ全体とBoxのファイルやフォルダでコラボレーションします。

<ImageFrame noborder center shadow>

![Slackの/boxaddコマンド](./img/slack_0_boxadd_command.png)

</ImageFrame>

このガイドでは、以下の手順を説明します。

1. イベント通知とスラッシュコマンドの構造を処理するよう[Slackアプリのセットアップと構成][step1]を行います。
2. ウェブアプリケーションをBoxに接続するよう[Boxアプリケーションのセットアップと構成][step2]を行います。
3. ユーザーがチャンネルに参加したりチャンネルから退出したりするとき、またはBoxのファイルやフォルダをグループと共有するときに[Slackイベントおよびコマンドをリッスン][step3]します。
4. Slackイベントまたはスラッシュコマンドに基づいて、[Boxグループおよびファイル/フォルダのコラボレーションを構造化][step4]します。
5. [最後に、アプリケーションをワークスペースに展開][step5]し、Slackアプリのボットをチャンネルに招待してイベントのリッスンを開始します。

## 要件

先に進む前に、このクイックスタートガイドには注目すべき2つの要件があります。

1. **ユーザーのメールアドレスがBoxとSlackで一致している必要がある**: SlackユーザーアカウントをBoxユーザーアカウントに関連付ける際に、Slackユーザーのメールアドレスを比較します。そのため、一致するBoxユーザーアカウントが同一のメールアドレスを使用し、Box Enterpriseに存在する必要があります。
2. **一般公開されているサーバーが必要**: Slackはイベントおよびコマンド通知データをアプリケーションの公開URLに送信する必要があります。このガイドでは、`https://mysite.com/`など、アプリケーションコードをホストする公開された場所があることを想定しています。公開されているホスト用の場所にアクセスできない場合は、[Heroku][heroku]などのアプリケーションプラットフォームや[AWS Lambda][aws-lambda]などのサーバーレスオプションの使用または[ngrok][ngrok]のようなサービスによるlocalhostの公開を検討してください。

<Next>

開始する準備ができました

</Next>

[slack-slash-commands]: https://api.slack.com/apps/A0155185TT3/slash-commands

[slack-event-api]: https://api.slack.com/events-api

[step1]: g://collaborations/connect-slack-to-group-collabs/configure-slack

[step2]: g://collaborations/connect-slack-to-group-collabs/configure-box

[step3]: g://collaborations/connect-slack-to-group-collabs/scaffold-application-code

[step4]: g://collaborations/connect-slack-to-group-collabs/handle-slack-events

[step5]: g://collaborations/connect-slack-to-group-collabs/connect-box-functions

[step6]: g://collaborations/connect-slack-to-group-collabs/test-bot

[heroku]: https://heroku.com/

[aws-lambda]: https://aws.amazon.com/lambda/

[ngrok]: https://ngrok.com/
