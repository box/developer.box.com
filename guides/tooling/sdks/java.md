---
rank: 2
related_endpoints: []
related_guides:
  - authentication/jwt
  - authentication/oauth2
related_pages:
  - sdks-and-tools
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/sdks
is_index: false
id: tooling/sdks/java
type: guide
total_steps: 6
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/python
previous_page_id: tooling/sdks/dotnet
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/tooling/sdks/java.md
---
# Java SDKのインストール

Javaプロジェクトでは、Box Java SDKを使用してBox APIへのAPI呼び出しを行うことができます。

SDKは、Gradle依存関係またはMaven依存関係を追加するか、ソースをプロジェクトに複製することでインストールできます。また、GitHubのリリースページからプリコンパイル済みJARのいずれかをダウンロードすることでもインストールできます。

<CTA to="https://github.com/box/box-java-sdk">

GitHubでJava SDKの詳細を確認する

</CTA>

## Gradle

`build.gradle`ファイルに以下の依存関係を追加します。

```shell
compile 'com.box:box-java-sdk:2.32.0'
```

<Message>

Java SDKの最新のバージョン番号については、[Java SDKのオープンソースに関するページ][java-os]を参照してください。

</Message>

## Maven

以下のMaven依存関係を追加します。

```xml
<dependency>
    <groupId>com.box</groupId>
    <artifactId>box-java-sdk</artifactId>
    <version>2.32.0</version>
</dependency>
```

<Message>

Java SDKの最新のバージョン番号については、[Java SDKのオープンソースに関するページ][java-os]を参照してください。

</Message>

## ソースからのインストール

[Java SDK GitHubリポジトリ][java-sdk-src]からSDKソースをダウンロードしてプロジェクトに追加します。

## プリコンパイル済みJAR

GitHubの[リリースに関するページ][java-sdk-releases]からJava SDK用のプリコンパイル済みJARをダウンロードします。

プリコンパイル済みJARを使用する際は、以下の依存関係をプロジェクトに追加することが重要です。

<!-- markdownlint-disable line-length -->

| 依存関係                                                     |
| -------------------------------------------------------- |
| [`minimal-json v0.9.1`][dependency-min-json]             |
| [`jose4j v0.4.4`][dependency-jose]                       |
| [`bouncycastle bcprov-jdk15on v1.52`][dependency-bcprov] |
| [`bouncycastle bcpkix-jdk15on v1.52`][dependency-bcpkix] |
| [`Java Cryptography Extension (JCE)`][dependency-crypto] |

<!-- markdownlint-enable line-length -->

<CTA to="https://github.com/box/box-java-sdk">

GitHubでJava SDKの詳細を確認する

</CTA>

[npm]: https://www.npmjs.com/

[java-os]: http://opensource.box.com/box-java-sdk/

[java-sdk-src]: https://github.com/box/box-java-sdk/tree/master/src/main/java/com/box/sdk

[java-sdk-releases]: https://github.com/box/box-java-sdk/releases

[dependency-min-json]: https://github.com/ralfstx/minimal-json

[dependency-jose]: https://bitbucket.org/b_c/jose4j/wiki/Home

[dependency-bcprov]: http://mvnrepository.com/artifact/org.bouncycastle/bcprov-jdk15on

[dependency-bcpkix]: http://mvnrepository.com/artifact/org.bouncycastle/bcpkix-jdk15on

[dependency-crypto]: http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html
