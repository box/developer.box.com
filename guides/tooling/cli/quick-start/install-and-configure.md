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
previous_page_id: tooling/cli/quick-start/create-oauth-app
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/2-install-and-configure.md
fullyTranslated: true
---
# CLIのインストールと構成

<Choice option="cli.app_type" value="create_new,use_existing,clicked" color="none">

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

You will now need to configure the CLI by logging in to your Box App.

この手順では、前の手順の**クライアントID**と**クライアントシークレット**を使用してログインし、ユーザー用に**アクセストークン**を作成します。

## ログインする理由

現時点では、以下の情報が提示されています。

<Store disabled inline id="cli_credentials.client_id">

クライアントID

</Store>

<Store disabled inline obscured id="cli_credentials.client_secret">

クライアントシークレット

</Store>

<!-- markdownlint-disable line-length -->

<!--alex ignore execute-->

Open your terminal or command line and execute the command: `box login -n example_name`.

Copy the Client ID and Client Secret into the terminal window when prompted.

<!-- markdownlint-enable line-length -->

<ImageFrame center>

![CLI Login](./cli-login.png)

</ImageFrame>

Click the **Grant access to Box** button that appears in the browser window.

<ImageFrame center>

![Grant CLI Access](./cli-grant-access.png)

</ImageFrame>

If successful, you will see the following success message.

<ImageFrame center>

![CLI Env Setup](./cli-env-setup.png)

</ImageFrame>

## 構成の確認

To confirm successful configuration, make your first Box API call with the Box CLI by entering the command `box users:get me`.

<ImageFrame center>

![CLI Users Call](./cli-first-call.png)

</ImageFrame>

A successful response will provide details about your user account.

```json
Type: user
ID: ''0123456789''
Name: Aaron Levie
Login: example@box.com
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

## まとめ

* CLIをインストールしました。
* You configured the CLI to use the OAuth 2.0 Application created earlier
* You **made your first Box CLI Box API call** confirmed the user associated with your Access Token

<Next>

CLIをインストールして構成しました

</Next>

</Choice>

<Choice option="cli.app_type" unset color="none">

<Message danger>

# 前の手順が完了していません

前の手順を完了し、使用する**Boxアプリ**をセットアップしてください。

</Message>

</Choice>

[cli]: https://github.com/box/boxcli

[auth]: g://authentication/jwt/without-sdk/

[sa]: g://getting-started/user-types/service-account/

[at]: g://authentication/tokens/

[dc]: https://app.box.com/developers/console
