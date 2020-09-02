---
type: quick-start
hide_in_page_nav: true
category_id: sso-identities-and-app-users
subcategory_id: sso-identities-and-app-users/connect-okta-to-app-users
is_index: false
id: sso-identities-and-app-users/connect-okta-to-app-users/run-the-app
rank: 6
total_steps: 6
sibling_id: sso-identities-and-app-users/connect-okta-to-app-users
parent_id: sso-identities-and-app-users/connect-okta-to-app-users
next_page_id: ''
previous_page_id: >-
  sso-identities-and-app-users/connect-okta-to-app-users/find-or-create-box-users
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/sso-identities-and-app-users/connect-okta-to-app-users/6-run-the-app.md
---
# アプリケーションの実行

サンプルの構成コンポーネントがすべて設定できたら、プログラムを実行してすべてが正常に動作していることを確認します。

<Choice option="programming.platform" value="node" color="none">

ターミナル/コマンドプロンプトで、ローカルアプリケーションディレクトリに`node server.js`と入力してEnterキーを押します。サーバーが起動し、`Server started: Listening on port 3000`と出力されます。

ブラウザで`http://localhost:3000/`にアクセスします。ユーザーのサインインフローを試すのは今回が初めてなので、Oktaログインが表示されます。

<ImageFrame noborder center shadow>

![Oktaログイン](./img/okta-qs-step6-login.png)

</ImageFrame>

[手順2](g://sso-identities-and-app-users/connect-okta-to-app-users/configure-okta/)の最後のサクションで作成したOktaユーザーの資格情報を使用してサインインします。

サインインしたら、`New user created: {{USERNAME}}`というメッセージがブラウザに出力されます。

その後このユーザーでログインを試みると、ブラウザに`Hello {{USERNAME}}`と出力されるようになります。

</Choice>

<Choice option="programming.platform" value="java" color="none">

Eclipse (またはお好みのエディタ)で、クリックしてアプリケーションを実行します。Spring Bootアプリケーションがポート8080で実行されていることを示すコンソール出力が表示されます。

ブラウザで`http://localhost:8080/`にアクセスします。ユーザーのサインインフローを試すのは今回が初めてなので、Oktaログインが表示されます。

<ImageFrame noborder center shadow>

![Oktaログイン](./img/okta-qs-step6-login.png)

</ImageFrame>

[手順2](g://sso-identities-and-app-users/connect-okta-to-app-users/configure-okta/)の最後のサクションで作成したOktaユーザーの資格情報を使用してサインインします。

サインインしたら、`New User Created: {{USERNAME}}`というメッセージがブラウザに出力されます。

その後このユーザーでログインを試みると、ブラウザに`Hello {{USERNAME}}`と出力されるようになります。

</Choice>

<Choice option="programming.platform" value="python" color="none">

ターミナル/コマンドプロンプトで、ローカルアプリケーションディレクトリに`env FLASK_APP=server.py flask run`と入力してEnterキーを押します。サーバーが起動し、`Running on http://127.0.0.1:5000/`と出力されます。

ブラウザで`http://127.0.0.1:5000/`にアクセスします。ユーザーのサインインフローを試すのは今回が初めてなので、Oktaログインが表示されます。

<ImageFrame noborder center shadow>

![Oktaログイン](./img/okta-qs-step6-login.png)

</ImageFrame>

[手順2](g://sso-identities-and-app-users/connect-okta-to-app-users/configure-okta/)の最後のサクションで作成したOktaユーザーの資格情報を使用してサインインします。

サインインしたら、`New user created: {{USERNAME}}`というメッセージがブラウザに出力されます。

その後このユーザーでログインを試みると、ブラウザに`Hello {{USERNAME}}`と出力されるようになります。

</Choice>

<Choice option="programming.platform" value="cs" color="none">

Visual Studio Code (またはお好みのエディタ)で、メニューから\[`Run`] -> \[`Start Debugging`]をクリックします。アプリケーションが読み込まれるとデバッグコンソール出力が表示され、その後、ブラウザウィンドウでは、`https://localhost:5001/`でアプリケーションが表示されます。

アプリケーションをテストするのは今回が初めてなので、サインインリンクが表示されます。クリックすると、Oktaログインが自動的に読み込まれます。

<ImageFrame noborder center shadow>

![Oktaログイン](./img/okta-qs-step6-login.png)

</ImageFrame>

[手順2](g://sso-identities-and-app-users/connect-okta-to-app-users/configure-okta/)の最後のサクションで作成したOktaユーザーの資格情報を使用してサインインします。

サインインしたら、デバッグコンソールの`New user created: {{USERNAME}}`というメッセージがブラウザに出力されます。

その後このユーザーでログインを試みると、ブラウザに`Current user name: {{USERNAME}}`と出力されるようになります。

</Choice>

<Choice option="programming.platform" unset color="none">

<Message danger>

# 前の手順が完了していません

最初に、手順1でお好みの言語/フレームワークを選択してください。

</Message>

</Choice>

## まとめ

このクイックスタートガイドが完了しました。ここまで、以下の手順を実行しました。

1. [ウェブアプリケーションのスキャフォールディングを作成しました][step1]。
2. [Oktaアプリケーションを設定および構成][step2]して、ウェブアプリへのログインに使用できる1人目のユーザーを作成しました。
3. [Boxアプリケーションを設定および構成][step3]して、ウェブアプリからBoxに接続できるようにしました。
4. [ウェブアプリケーションのログインフローを作成][step4]して、Oktaユーザーがログインできるようにしました。
5. Oktaユーザーが初めてウェブアプリケーションにログインするときに、[既存のBoxユーザーを検索し、必要に応じてBoxユーザーを作成するためのチェックを追加][step5]しました。
6. [最後にアプリケーションを実行][step6]して、フロー全体の動作を確認しました。

## 次の手順

ユーザーの作成とアクセスのプロセスに関連したより高度な機能について詳しく知りたい方には、以下のリソースをお勧めします。

* ユーザーフォルダのアーキテクチャの詳細な設定に関する、[ユーザープロビジョニング](g://users/provision/)のベストプラクティス。
* 非アクティブなユーザーの削除と別のアカウントへのユーザーコンテンツの転送に関する、[ユーザーのプロビジョニング解除](g://users/deprovision/)のベストプラクティス。
* 事前チェックや大容量ファイルの(分割)アップロードなど、Boxへの[コンテンツのアップロード](g://uploads/)。

[step1]: g://sso-identities-and-app-users/connect-okta-to-app-users/scaffold-application-code/

[step2]: g://sso-identities-and-app-users/connect-okta-to-app-users/configure-okta/

[step3]: g://sso-identities-and-app-users/connect-okta-to-app-users/configure-box/

[step4]: g://sso-identities-and-app-users/connect-okta-to-app-users/logging-into-app/

[step5]: g://sso-identities-and-app-users/connect-okta-to-app-users/find-or-create-box-users/

[step6]: g://sso-identities-and-app-users/connect-okta-to-app-users/run-the-app/
