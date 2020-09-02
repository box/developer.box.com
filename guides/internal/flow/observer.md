---
hide: true
rank: 2
category_id: internal
subcategory_id: internal/flow
is_index: false
id: internal/flow/observer
type: guide
total_steps: 5
sibling_id: internal/flow
parent_id: internal/flow
next_page_id: internal/flow/choices
previous_page_id: internal/flow
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/internal/flow/observer.md
---
<!-- does not need translation -->

# ObserveとTrigger

`Observe`要素と`Trigger`要素を使用すると、ページ内の変更を監視できます。

この例では、いくつかのダウンロードリンクをTriggerでラップし、ダウンロードリンクがクリックされたときにメッセージを表示します。

```html
<Trigger option="example.trigger" value="win32">
  [Download](https://dl.pstmn.io/download/latest/win32)
</Trigger>

<Observe option="example.trigger" value="win32">
  ...
</Observe>
```

<H>

<Trigger option="example.trigger" value="win32">

[ダウンロード](https://dl.pstmn.io/download/latest/win32)

</Trigger>

<Observe option="example.trigger" value="win32">

...

</Observe>

</H>

<Message notice>

イベントはページを越えて追跡され、キー`com.box.developer.observable_events`を使用してローカルストレージに一定期間保持されます。ガイド全体で一意のオプション名と値を使用することが重要です。

</Message>

<Message warning>

`Observe`オブジェクトがその子コンテンツの表示/非表示を自動的に切り替えることはありません。その代わり、子の周囲に`[data-triggered=true]`属性を追加すると、それを使用してネストされたスタイルを適用できます。

ユーザーの選択を追跡するには、代わりに`Choice`要素と`Choices`要素を使用してください。

</Message>

## 複数の値の監視

`Observe`要素は、カンマ区切りリストを使用して複数の値をリッスンできます。

```html
<Trigger option="example.multiple" value="win32">
  [Download](https://dl.pstmn.io/download/latest/win32)
</Trigger>

<Trigger option="example.multiple" value="macos">
  [Download](https://dl.pstmn.io/download/latest/macos)
</Trigger>

<Observe option="example.multiple" value="win32,macos">
  ...
</Observe>
```

<H>

<Trigger option="example.multiple" value="win32">

[ダウンロード](https://dl.pstmn.io/download/latest/win32)

</Trigger>

<Trigger option="example.multiple" value="macos">

[ダウンロード](https://dl.pstmn.io/download/latest/macos)

</Trigger>

<Observe option="example.multiple" value="win32,macos">

...

</Observe>

</H>

## 設定されていない値の監視

場合によっては、値がまだ設定されていないときに何らかの操作を実行することもできます。この場合は、`unset`オプションを使用して、代わりにイベントをリッスンするよう要素を設定します。

```html
<Observe option="example.unset" unset>
  ...
</Observe>
```

<H>

<Observe option="example.unset" unset>

...

</Observe>

</H>
