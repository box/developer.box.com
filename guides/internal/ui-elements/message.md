---
hide: true
category_id: internal
subcategory_id: internal/ui-elements
is_index: false
id: internal/ui-elements/message
rank: 0
type: guide
total_steps: 8
sibling_id: internal/ui-elements
parent_id: internal/ui-elements
next_page_id: internal/ui-elements
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal/ui-elements/message.md
fullyTranslated: true
---
<!-- does not need translation -->

# メッセージ

メッセージは、ユーザーに注目すべき情報を示すための方法です。

## メッセージのタイプ

### デフォルトのメッセージ

最も低いレベルのメッセージはデフォルトのメッセージです。このタイプは明示的に設定することも省略することもできます。このメッセージタイプは、必ずしも読む必要がないメッセージに使用します。

```html
<Message>
  A default note
</Message>

<default type='default'>
  A default note
</Message>
```

<H>

<Message>

デフォルトのメモ

</Message>

</H>

## ヒントメッセージ

次のレベルはヒントです。役立つ一般的なヒントとベストプラクティスとなるメッセージには、このメッセージのタイプを使用します。

```html
<Message type='tip'>
  A tip message
</Message>

<Message tip>
  A tip message
</Message>
```

<H>

<Message tip>

ヒントメッセージ

</Message>

</H>

## 通知メッセージ

次のレベルは通知です。このメッセージタイプは、ユーザーが無視しても支障がない通知であるメッセージに使用します。

```html
<Message type='notice'>
  A notice message
</Message>

<Message notice>
  A notice message
</Message>
```

<H>

<Message Notice>

通知メッセージ

</Message>

</H>

## 警告メッセージ

次のメッセージレベルは警告です。このメッセージタイプは、ユーザーが無視した場合にエラーまたは例外が発生する可能性があることを示すメッセージ、またはユーザーが前述したアクションを完了したときに発生する可能性のあるエラーまたは例外を示すメッセージに使用します。

```html
<Message type='warning'>
  A warning note
</Message>

<Message warning>
  A warning note
</Message>
```

<H>

<Message warning>

警告メモ

</Message>

</H>

## 危険メッセージ

最終的なメッセージレベルは危険の警告です。このメッセージタイプは、ユーザーにとってエラーまたは例外の原因となる可能性が高いアクションに付随するメッセージに使用します。

```html
<Message type='danger'>
  Danger zone!
</Message>

<Message danger>
  Danger zone!
</Message>
```

<H>

<Message danger>

危険なゾーン

</Message>

</H>

## タイトル

メッセージにはタイトルを設定できます。`<h1>`のタイトルのみを使用してください。

```html
<Message>
  # A title

  A default note
</Message>
```

<H>

<Message>

# タイトル

デフォルトのメモ

</Message>

</H>

## サイズ

メッセージのサイズは、デフォルトより小さくすることができます。

```html
<Message size='small'>
  A small note
</Message>
```

<H>

<Message size="small">

小さいメモ

</Message>

</H>
