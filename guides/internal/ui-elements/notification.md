---
hide: true
category_id: internal
subcategory_id: internal/ui-elements
is_index: false
id: internal/ui-elements/notification
rank: 0
type: guide
total_steps: 0
sibling_id: internal/ui-elements
parent_id: ''
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal/ui-elements/notification.md
fullyTranslated: true
---
<!-- does not need translation -->

# 通知

通知要素は、閲覧者に重要なメッセージまたはアラートを表示するために使用される、サイト上部にあるオレンジ色のバーです。`box.com`のオレンジ色のバーに、いくつかの情報で構成できます。

## 表示

表示 (display) は、Boxでこのバーを表示するかどうかを決定するブール値です。BoxのフレームワークではMicrocopyのブール値が認識されないため、このブール値をすべて小文字、かつ二重引用符で囲んで (`"true"`または`"false"`) 指定する必要があります。

**例**:

```yaml
display: "false"

```

## メッセージ

メッセージ (message) は、ユーザーに知らせたい情報を示す短い文です。長さに制限はありませんが、メッセージが長くなるほど、小さな画面 (特に携帯電話) では占有する領域が大きくなることに注意する必要があります。

最善の方法として、ローカルでテストし、Chromeデベロッパーツールでブラウザのレスポンシブテスターを使用して、通知が長すぎないかどうかを判断することをお勧めします。

**例**:

```yaml
message: >
    Join the first BoxWorks Hackathon for Good - customers,
    partners, and the developer community are welcome to participate
    in the 48 hour Hack to benefit The Nature Conservancy.

```

## HREF

hrefは、ユーザーがCTAをクリックしたときにアクセス先となるURLです。完全修飾URL (`https://box.com`、`https://developer.box.
com/guides`、`https://github.com/box/sdks`など) を指定できます。

**例**:

```yaml
href: "https://box.com/hack4good"

```

## CTA

CTAは、上記のhrefにリンクする短いフレーズです。短く、ユーザーがクリックしたくなるように指定します。

**例**:

```yaml
cta: Learn more and register!

```

## TTL

このコンポーネントを使用すると、所定の秒数が経過した後にバーを自動で非表示にできます。通常は、ユーザーが閉じるボタンをクリックするまで表示されたままにしておくために、0に設定されたままになります。Boxのフレームワークでは、Microcopyで整数をなるべく受け付けないようにしているため、この整数は二重引用符で囲む必要があります。

**例**:

```yaml
ttl: "0"

```

## 変更方法

すべての設定は、`developer.box.com`リポジトリの`/content/microcopy/headers.yml`ファイルにあります。設定を更新し、ベストプラクティスに従って更新をプッシュします。

```yaml
notifications:
  // display: |-
    A boolean that determines whether to show the orange notification bar
    in the header. Must be "true" or "false"
  display: "false"

  // message: |-
    The content of the notification
  message: >
    Join the first BoxWorks Hackathon for Good - customers,
    partners, and the developer community are welcome to participate
    in the 48 hour Hack to benefit The Nature Conservancy.

  // href: |-
    The link to navigate to when the CTA is clicked
  href: "https://box.com/hack4good"

  // cta: |-
    The text of the CTA
  cta: Learn more and register!

  // ttl: |-
    The number of seconds to display the message. Should always
    be 0 unless you want to autohide.
  ttl: "0"

```
