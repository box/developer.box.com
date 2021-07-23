---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/cli
is_index: false
id: tooling/cli/quick-start/create-jwt-app
rank: 1
total_steps: 5
sibling_id: tooling/cli/quick-start
parent_id: tooling/cli/quick-start
next_page_id: tooling/cli/quick-start/install-and-configure
previous_page_id: tooling/cli/quick-start
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/cli/quick-start/1-create-jwt-app.md
fullyTranslated: true
---
# Boxアプリケーションの作成、構成、承認

CLIを使用するには、まず、[開発者コンソール][dc]でBoxアプリケーションを作成します。CLIはAPI呼び出しを実行する際にバックグラウンドでこのアプリケーションを使用できます。CLIを既存のJWTアプリケーションに関連付ける場合は、この手順を省略できます。ただし、少なくとも、以下のスコープがアプリケーションの \[**構成**] タブで設定されていることを確認してください。

* Boxに格納されているすべてのファイルとフォルダの読み取り
* Boxに格納されているすべてのファイルとフォルダの書き込み

## JWTアプリケーションの設定

1. \[すべてのファイル] ページの左側にあるナビゲーションパネルから、[開発者コンソール][dc]を開きます。今回Box APIを使用するのが初めてで、このオプションがまだ使用できない場合は、[こちら][dc]をクリックするとこのオプションをアカウントに追加できます。

2. \[**アプリの新規作成**] > \[**カスタムアプリ**] > \[**サーバー認証 (JWT使用)**] の順にクリックし、アプリケーションに名前を付けて、\[**アプリの作成**] をクリックします。

<Message warning>

サーバー認証 (JWT使用) は、現在Box CLIでサポートされている唯一の認証方式で、使用前には必ず管理者の承認が必要です。

</Message>

## アプリケーションの構成

これにより、アプリケーションの設定ページが表示され、そこで、そのアクセスや権限を選択する必要があります。アプリケーションの認証タイプが原因で、管理者の承認が必要になることにもう一度注意してください。

少なくとも、以下の[スコープ][scopes]が必要です。

* Boxに格納されているすべてのファイルとフォルダの読み取り
* Boxに格納されているすべてのファイルとフォルダの書き込み

[アプリケーションアクセス][aa]として、\[アプリアクセスのみ] または \[アプリ + Enterpriseアクセス] のいずれかを選択できます。

<Message warning>

このアプリケーションの設定に変更を加える際は必ず、これらの変更が反映されるようにCLIのトークンのキャッシュをクリアする必要があります。そうしないと、403などの予期しないエラーが発生する可能性があります。

</Message>

## アプリケーションの承認

API呼び出しを正常に実行する前に、サーバー認証を利用するすべてのアプリケーションを管理コンソールで承認する必要があります。これは、すべてのJWTアプリケーションには[サービスアカウント][sa]があるためです。サービスアカウントは、アプリケーションの[スコープ][scopes]に基づいて管理者アクションを実行できます。

開発者と管理者向けの手順については、Boxの[承認ガイド][ag]を参照してください。

スコープ、アプリケーションアクセス、トークン、権限がどのように連携しているかの詳細については、[Boxのセキュリティメカニズム][blogpost]に関する記事を参照してください。

<Message warning>

設定の変更がこのアプリケーションに対して行われた場合は、その変更を有効にするためにこのアプリケーションを再承認する必要があります。

</Message>

アプリケーションが使用できる状態になっているかどうかを確認するには、[開発者コンソール][dc]の \[承認] タブを表示します。状態とステータスはそれぞれ、\[有効] と \[承認済み] になっているはずです。

<ImageFrame center>

![承認済みのアプリ](./app-authorized.png)

</ImageFrame>

## 必要なデータのダウンロード

CLIでは、API呼び出しを実行するために、ローカルに保存されている構成ファイルが必要です。

構成ファイルをダウンロードするには、[開発者コンソール][dc]の \[**構成**] タブにアクセスし、\[**公開/秘密キーペアを生成**] をクリックします。これにより、アプリケーションの構成ファイルを自動的にダウンロードする前に2FA認証が行われます。詳細については、Boxの[ガイド][keypair]を参照してください。

<Message warning>

セキュリティ上の理由により、公開/秘密キーペアを生成するには、Boxアカウントで2FAを有効にする必要があります。

</Message>

`EnterpriseID_publicKeyID_config.json`という形式のデフォルトの名前が付いているダウンロード済みファイルをコンピュータ上で探します。この名前をそのまま使用しても、変更してもかまいません。このガイドでは、ファイルの名前を`config.json`に変更することを想定しています。

<Message warning>

誤って削除または移動されることがない場所にファイルを配置することが重要です。ファイルが削除または移動された場合は、手順2を繰り返してCLIを再構成する必要があります。

</Message>

## まとめ

* 新しいJWTアプリケーションを作成してCLIに関連付けました。または既存のJWTアプリケーションをCLIに関連付けました。このJWTアプリケーションは承認されました。
* アプリケーションの構成ファイルをダウンロードして、コンピュータ上の安全な場所に移動しました。

<Next>

アプリが承認されたため、構成ファイルをダウンロードしました

</Next>

[dc]: https://account.box.com/developers/console

[keypair]: g://applications/custom-apps/jwt-setup/#public-and-private-key-pair

[sa]: g://authentication/user-types/service-account/

[scopes]: g://api-calls/permissions-and-errors/scopes/

[ag]: g://applications/custom-apps/app-approval/

[blogpost]: https://medium.com/box-developer-blog/box-api-understanding-security-9fcad7b1d72e

[scopes]: g://api-calls/permissions-and-errors/scopes/

[aa]: g://applications/custom-apps/jwt-setup/#application-access
