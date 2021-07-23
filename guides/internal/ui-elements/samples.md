---
hide: true
category_id: internal
subcategory_id: internal/ui-elements
is_index: false
id: internal/ui-elements/samples
rank: 0
type: guide
total_steps: 8
sibling_id: internal/ui-elements
parent_id: internal/ui-elements
next_page_id: internal/ui-elements
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal/ui-elements/samples.md
fullyTranslated: true
---
<!-- does not need translation -->

# サンプル

サンプルは、CLI、SDK、およびcURLのリポジトリから抽出された一連のサンプルコードブロックを表します。これらのコードサンプルは、これらのリポジトリにあるさまざまなマークダウンファイルから自動的に抽出されます。

## ID

サンプルはエンドポイントのIDを使用して指定されます。

```html
<Samples id='get_files_id'></Samples>
```

<H>

<Samples id="get_files_id">

</H>

## バリアント

デフォルトでは、サンプルに`default`バリアントが選択されています。一部のサンプルには、別のバリアントが存在します。これらは、`variant`の名前を渡すことで指定できます。

```html
<Samples id='post_folders_id_copy' variant='with_name' ></Samples>
```

<H>

<Samples id="post_folders_id_copy" variant="with_name">

</H>
