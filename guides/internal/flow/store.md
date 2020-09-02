---
hide: true
rank: 5
category_id: internal
subcategory_id: internal/flow
is_index: false
id: internal/flow/store
type: guide
total_steps: 5
sibling_id: internal/flow
parent_id: internal/flow
next_page_id: internal/flow/login
previous_page_id: internal/flow/choices
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/internal/flow/store.md
---
<!-- does not need translation -->

# Store

`Store`は、ユーザーが指定した値を収集して表示するための要素です。

ストアを表示すると、ユーザーにテキストフィールドが示されます。

```html
<Store placeholder='e.g. John' id='example.store_a'>
  Your name
</Store>
```

<H>

<Store placeholder="e.g. John" id="example.store_a">

名前

</Store>

</H>

<Message>

ストアに入力されたテキストは、キー`com.box.developer.$id` (`$id`はストアで提供されるID)とともにブラウザのローカルストレージに保存されます。

</Message>

## フィールドの設定

ローカルストレージに保存されたオブジェクトにフィールドを設定するという高度な例もあります。たとえば、ローカルストレージのキー`com.box.developer.example.store_b`にオブジェクト`{}`が含まれていると、以下のように、ストアではユーザーの入力内容がフィールド`name`に保存されます。

```html
<Store placeholder='e.g. John' id='example.store_b' field='name'>
  Your name
</Store>
```

## Placeholder

ストアでは、`<input />`子フィールドに渡される`placeholder`がサポートされます。

## ストアの検証

ストアでは、`<input />`子フィールドに渡され、フィールドの検証に使用される`pattern`がサポートされます。

## ストアの表示

以前に入力された値をユーザーに再度表示したい場合もあります。このような場合は、以下のように、ストアのインラインバージョンを作成し、編集を無効にして、機密情報をわかりにくくすることができます。

```html
<Store id='example.store_a' disabled inline obscured>
  Your name
</Store>
```

<H>

<Store id="example.store_a" disabled inline obscured>

名前

</Store>

</H>

## 値のリセット

ユーザーが値をクリアできるようにリセットボタンを表示できます。これは、`com.box.developer.$id` (`$id`は渡されたID)で始まる、ローカルストレージ内の任意のキーと一致します。

```html
<ResetButton id='example'>
  Reset all IDs starting with example.
</ResetButton>
```

<H>

<ResetButton id="example">

exampleで始まるすべてのIDをリセット。

</ResetButton>

</H>

複数のIDは、カンマ区切りリストとして渡すことができます。

```html
<ResetButton id='example1,example2'>
  Reset all IDs starting with example1 or example2.
</ResetButton>
```
