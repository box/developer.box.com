---
related_pages:
  - sdks-and-tools
category_id: mobile
subcategory_id: mobile/android
is_index: false
id: mobile/android/install
rank: 0
type: guide
total_steps: 1
sibling_id: mobile/android
parent_id: mobile/android
next_page_id: mobile/android
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/mobile/android/install.md
fullyTranslated: true
---
# Android SDKのインストール

<Message type="warning">

日本時間2023年6月1日をもって、Android SDKのサポートは終了しました。既存のAndroid SDKアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

最新のAndroid機能を引き続きご利用いただくために、Java SDKを使用してAndroid版アプリを作成することをお勧めします。詳細については、[こちら][android-docs]のドキュメントを参照してください。

</Message>

Android SDKは、次のように、いくつかの方法で入手できます。

* MavenまたはGradle依存関係として追加する
* ソースをプロジェクトに複製する
* プリコンパイル済みJARの1つをダウンロードする

## Maven依存関係として追加

以下のMaven依存関係を追加します。

```xml
<dependency>
    <groupId>com.box</groupId>
    <artifactId>box-android-sdk</artifactId>
</dependency>

```

## Gradle依存関係として追加

`build.gradle`ファイルに以下を追加します。

```js
dependencies {
    implementation 'com.box:box-android-sdk:4.2.3'
}

```

## ソースの複製

Box Android SDKのソースコードは、[GitHubにあるプロジェクト][android-sdk-github]を複製またはダウンロードすることで入手できます。

## プリコンパイル済みJARのダウンロード

Android SDK用のプリコンパイル済みJARは、GitHubプロジェクトの[リリースに関するページ][android-sdk-github-releases]から入手できます。

<Message warning>

プリコンパイル済みJARのいずれかが使用されている場合、Android SDKでは依存関係`minimal-json v0.9.1` (Mavenの場合は`com.eclipsesource.minimal-json:minimal-json:0.9.1`) も必要になります。

</Message>

[android-sdk-github]: https://github.com/box/box-android-sdk/tree/master/box-content-sdk

[android-sdk-github-releases]: https://github.com/box/box-android-sdk/releases

[android-docs]: https://github.com/box/box-java-sdk/blob/main/doc/android.md
