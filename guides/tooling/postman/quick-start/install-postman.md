---
type: quick-start
hide_in_page_nav: true
category_id: tooling
subcategory_id: tooling/postman
is_index: false
id: tooling/postman/quick-start/install-postman
rank: 1
total_steps: 6
sibling_id: tooling/postman/quick-start
parent_id: tooling/postman/quick-start
next_page_id: tooling/postman/quick-start/configure-box-app
previous_page_id: tooling/postman/quick-start
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/postman/quick-start/1-install-postman.md
fullyTranslated: true
---
# Postmanのインストール

<Message type="danger">

Boxでは、Postmanへのコレクションのインポートに関連した問題を認識しており、修正に対応しています。修正されるまでの間は、デスクトップアプリケーションの[バージョン8][v8]をダウンロードして使用するようにしてください。

</Message>

**Box Postmanコレクション**を使用するには、デバイスに[Postman][postman]アプリがインストールされている必要があります。PostmanはWindows、Mac、およびLinux環境で利用できます。

<Grid columns="4">

<Download>

![Windowsロゴ](./windows.png) Windows (x32)

<Trigger option="postman.downloaded" value="win32">

[ダウンロード][v8]

</Trigger>

</Download>

<Download>

![Windowsロゴ](./windows.png) Windows (x64)

<Trigger option="postman.downloaded" value="win64">

[ダウンロード][v8]

</Trigger>

</Download>

<Download>

![MacOSロゴ](./macos.png) MacOS

<Trigger option="postman.downloaded" value="osx">

[ダウンロード][v8]

</Trigger>

</Download>

<Download>

![Linuxロゴ](./linux.png) Linux (x64)

<Trigger option="postman.downloaded" value="linux64">

[ダウンロード][v8]

</Trigger>

</Download>

</Grid>

次に、お使いのマシンにPostmanをインストールし、(必要に応じて) [Postmanアカウントを登録してログインします][register]。

<ImageFrame border center>

![Postman](./postman-example.png)

</ImageFrame>

## まとめ

* Postmanのインストールが完了しました
* Postmanアカウントを作成しました (必要な場合)
* Postmanアカウントを使用してPostmanアプリケーションにログインしました。

<Observe option="postman.downloaded" value="win32,win64,osx,linux64">

<Next>

Postmanのインストールが完了しました

</Next>

</Observe>

[register]: https://identity.getpostman.com/signup

[postman]: https://getpostman.com

[v8]: https://learning.postman.com/docs/administration/upgrading/#downloading-postman-v8