---
hide: true
category_id: internal
subcategory_id: internal/markdown
is_index: false
id: internal/markdown/internal-links
rank: 0
type: guide
total_steps: 5
sibling_id: internal/markdown
parent_id: internal/markdown
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/default/content/guides/internal/markdown/internal-links.md
---
<!-- does not need translation -->

# 内部リンク

適切な内部のガイド、参照、およびエンドポイントにリンクするには、次の構文を使用できます。

```json
[Get a file by ID](endpoint://get_files_id)
[A file](resource://file)
[Get a file](guide://files/get)
[Box](https://box.com)
```

<H>

[IDを指定してファイルを取得](endpoint://get_files_id)

[ファイル](resource://file)

[ファイルを取得](guide://files/get)

[Box](https://box.com)

</H>

<Message>

この手法を使用すると、自動的にパスにロケールが追加されます。そのため、他の言語に翻訳された場合もリンクは正常に機能します。

</Message>

## 短縮形

さらに、この構文は以下のように短縮することもできます。

```json
[Get a file by ID](e://get_files_id)
[A file](r://file)
[Get a file](g://files/get)
[Box](https://box.com)
```

<H>

[IDを指定してファイルを取得](e://get_files_id)

[ファイル](r://file)

[ファイルを取得](g://files/get)

[Box](https://box.com)

</H>
