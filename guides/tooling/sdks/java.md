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
total_steps: 9
sibling_id: tooling/sdks
parent_id: tooling/sdks
next_page_id: tooling/sdks/python-gen
previous_page_id: tooling/sdks/dotnet-gen
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/sdks/java.md
---
# Install Java SDK

You can use Box Java SDK to call Box APIs in a Java
project.

To install Java SDK, add a Gradle dependency or Maven dependency, or
clone the source into a project. Additionally, you can download one of the precompiled JARs from the releases page on GitHub.

<CTA to="https://github.com/box/box-java-sdk">

Learn more about Java SDK on GitHub

</CTA>

## Gradle

Add the following dependency to the `build.gradle` file.

```shell
compile 'com.box:box-java-sdk:2.32.0'
```

<Message>

For the most up-to-date version number of the Java SDK, please refer to the
[Java SDK Open Source page][java-os].

</Message>

## Maven

Add the following to Maven dependency.

```xml
<dependency>
    <groupId>com.box</groupId>
    <artifactId>box-java-sdk</artifactId>
    <version>2.32.0</version>
</dependency>
```

<Message>

For the most up-to-date version number of the Java SDK, please refer to the
[Java SDK Open Source page][java-os].

</Message>

## Installation from source

Download the SDK source from the [Java SDK GitHub repository][java-sdk-src] and
add it to a project.

## Precompiled JAR

Download one of the precompiled JARs for the Java SDK from the GitHub [releases
page][java-sdk-releases].

When using one of the precompiled JARs, it is important to also add the
following additional dependencies to the project.

| Dependency                                               |
| -------------------------------------------------------- |
| [`minimal-json v0.9.1`][dependency-min-json]             |
| [`jose4j v0.4.4`][dependency-jose]                       |
| [`bouncycastle bcprov-jdk15on v1.52`][dependency-bcprov] |
| [`bouncycastle bcpkix-jdk15on v1.52`][dependency-bcpkix] |
| [`Java Cryptography Extension (JCE)`][dependency-crypto] |

[npm]: https://www.npmjs.com/
[java-os]: http://opensource.box.com/box-java-sdk/
[java-sdk-src]: https://github.com/box/box-java-sdk/tree/master/src/main/java/com/box/sdk
[java-sdk-releases]: https://github.com/box/box-java-sdk/releases
[dependency-min-json]: https://github.com/ralfstx/minimal-json
[dependency-jose]: https://bitbucket.org/b_c/jose4j/wiki/Home
[dependency-bcprov]: http://mvnrepository.com/artifact/org.bouncycastle/bcprov-jdk15on
[dependency-bcpkix]: http://mvnrepository.com/artifact/org.bouncycastle/bcpkix-jdk15on
[dependency-crypto]: http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html