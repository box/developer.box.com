---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/install-and-configure
rank: 2
total_steps: 5
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/build-commands-help
previous_page_id: tooling/cli/quick-start/create-jwt-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/2-install-and-configure.md
fullyTranslated: true
---
# CLIのインストールと構成

Windows用およびmacOS用のインストーラが提供されていますが、その他の環境でCLIを構築する場合はRawソースコードを利用できます。

## Windows用およびmacOS用インストーラ

お使いのマシンに最新のCLIをインストールするには、最新リリースに対応する最新の`.exe` (Windowsの場合) または`.pkg` (macOSの場合) をダウンロードします。

<CTA to="https://github.com/box/boxcli/releases">

最新のCLIインストーラをダウンロード

</CTA>

## LinuxとNodeのインストール

さらに、CLIは、任意のプラットフォーム (Linuxなど) にNodeパッケージとしてインストールすることができます。このためには、[Node JS](https://nodejs.org/)をマシンにインストールしておく必要があります。

```bash
npm install --global @box/cli
```

## ソースコード

CLIのソースコードは、[GitHub][cli]で提供されています。

## 構成コマンドの実行

ここで、手順1でダウンロードした構成ファイルを指すよう、CLIを構成する必要があります。

<ImageFrame center>

![CLIの構成図](./cli-config-diagram.png)

</ImageFrame>

<!--alex ignore execute-->

ターミナルまたはコマンドラインを開き、`box configure:environments:add PathToConfigFileHere`コマンドを実行します。ここでは、`PathToConfigHere`を`config.json`ファイルのパスに置き換えます。

<!-- markdownlint-disable line-length -->

例: `box configure:environments:add /Users/ExampleUser/Documents/CLI/config.json`

<!-- markdownlint-enable line-length -->

<message type="tip"></message>

Finder/エクスプローラからターミナル/コマンドラインウィンドウにcsvファイルをドラッグすると、パスを自動で入力できます。

</Message>

## 構成の確認

うまく構成されているか確認するには、コマンド`box users:get`を使用します。

次のように、成功を示すレスポンスには、[アクセストークン][at]に関連付けられた[サービスアカウント][sa]ユーザーの詳細が示されます。

```json
Type: user
ID: ''0123456789''
Name: Box CLI - Quickstart Example
Login: AutomationUser_123456_8jSo6Lqvko@boxdevedition.com
Created At: '2020-01-01T09:45:01-07:00'
Modified At: '2021-03-01T09:30:05-07:00'
Language: en
Timezone: America/Los_Angeles
Space Amount: 999999999999999
Space Used: 6291500
Max Upload Size: 16106127360
Status: active
Job Title: ''
Phone: ''
Address: example+user@box.com
Avatar URL: ''
Notification Email: []
```

<message type="tip"></message>

デフォルトでは、JWTアプリケーションはサービスアカウントのアクセストークンを自動的に取得します。デフォルトユーザーの変更は可能ですが、このガイドでは変更しないことを想定しています。

</Message>

## まとめ

* CLIをインストールしました。
* アプリケーションの構成ファイルを指すようCLIを構成しました。
* アクセストークンに関連付けられたユーザーを確認しました。

<Next>

CLIをインストールして構成しました

</Next>

[cli]: https://github.com/box/boxcli

[auth]: g://authentication/jwt/without-sdk/

[sa]: g://getting-started/user-types/service-account/

[at]: g://authentication/tokens/

[dc]: https://app.box.com/developers/console
