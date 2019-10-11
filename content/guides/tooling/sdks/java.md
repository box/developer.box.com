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
---

# Install the Java SDK

The installation of the Box Java SDK may be accomplished by adding a Gradle
dependency, Maven dependency, cloning the source into your project, or by
downloading one of the precompiled JARs from the releases page on GitHub.

<Message>
  For the most up-to-date version number of the Java SDK, please refer to the
  [Java SDK Open Source page][java-os].
</Message>

## Gradle

Add the following dependency to your `build.gradle` file.

```sh
compile 'com.box:box-java-sdk:2.32.0'
```

## Maven

Add the following to your Maven dependencies.

```xml
<dependency>
    <groupId>com.box</groupId>
    <artifactId>box-java-sdk</artifactId>
    <version>2.32.0</version>
</dependency>
```

## Cloning from Source

Download the SDK source directly from the
[Java SDK Github repository][java-sdk-src] and add it to your existing project.

## Precompiled JAR

Download one of the available JARs from the Java SDK [releases page][java-sdk-releases].

When using one of the precompiled JARs, you will also need to include the
following dependencies:

| Dependency | Maven / Gradle |
| ------ | ------ |
| [minimal-json v0.9.1][dependency-min-json] | `com.eclipsesource.minimal-json:minimal-json:0.9.1` |
| [jose4j v0.4.4][dependency-jose] | `org.bitbucket.b_c:jose4j:0.4.4` |
| [bouncycastle bcprov-jdk15on v1.52][dependency-bcprov] | `org.bouncycastle:bcprov-jdk15on:1.52` |
| [bouncycastle bcpkix-jdk15on v1.52][dependency-bcpkix] | `org.bouncycastle:bcpkix-jdk15on:1.52` |
| [Java Cryptography Extension (JCE)][dependency-crypto] |

[npm]: https://www.npmjs.com/
[java-os]: http://opensource.box.com/box-java-sdk/
[java-sdk-src]: https://github.com/box/box-java-sdk/tree/master/src/main/java/com/box/sdk
[java-sdk-releases]: https://github.com/box/box-java-sdk/releases
[dependency-min-json]: https://github.com/ralfstx/minimal-json
[dependency-jose]: https://bitbucket.org/b_c/jose4j/wiki/Home
[dependency-bcprov]: http://mvnrepository.com/artifact/org.bouncycastle/bcprov-jdk15on
[dependency-bcpkix]: http://mvnrepository.com/artifact/org.bouncycastle/bcpkix-jdk15on
[dependency-crypto]: http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html
