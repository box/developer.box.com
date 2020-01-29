---
related_pages:
 - sdks-and-tools
---

# Android SDK Installation

The Android SDK may be obtained through several methods:

* Adding as a Maven or Gradle dependency
* Cloning the source into your project
* Downloading one of the precompiled JARs

## Add as a Maven dependency

Add the following to your Maven dependencies.

```xml
<dependency>
    <groupId>com.box</groupId>
    <artifactId>box-android-sdk</artifactId>
</dependency>
```

## Add as a Gradle dependency

Add the following to your `build.gradle` file.

```js
dependencies {
    implementation 'com.box:box-android-sdk:4.2.3'
}
```

## Clone the source

The Box Android SDK source code may be obtained by cloning or downloading the
[project from Github][android-sdk-github].

## Download precompiled JARs

Precompiled JARs for the Android SDK may be obtained from the Github project
[releases page][android-sdk-github-releases]

<Message warning>
  If one of the precompiled JARs is being used, the Android SDK will also
  require the following dependency: `minimal-json v0.9.1` (for Maven:
  `com.eclipsesource.minimal-json:minimal-json:0.9.1`)
</Message>

[android-sdk-github]: https://github.com/box/box-android-sdk/tree/master/box-content-sdk
[android-sdk-github-releases]: https://github.com/box/box-android-sdk/releases