---
hide: true
category_id: internal
subcategory_id: internal/markdown
is_index: false
id: internal/markdown/tables
rank: 0
type: guide
total_steps: 5
sibling_id: internal/markdown
parent_id: internal/markdown
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal/markdown/tables.md
fullyTranslated: true
---
<!-- does not need translation -->

# テーブル

テーブルは、定型のマークダウン構文を使用して作成できます。

```md
| Header | Header | Header |
| ------ | ------ | ------ |
| Row 1  | Row 1  | Row 1  |
| Row 2  | Row 2  | Row 2  |
| Row 3  | Row 3  | Row 3  |
```

<H>

| ヘッダー | ヘッダー | ヘッダー |
| ---- | ---- | ---- |
| 行1   | 行1   | 行1   |
| 行2   | 行2   | 行2   |
| 行3   | 行3   | 行3   |

</H>

## ヘッダーの非表示

テーブル上部にあるヘッダーを空のままにすると、そのヘッダーは非表示になります。

```md
|        |        |        |
| ------ | ------ | ------ |
| Row 1  | Row 1  | Row 1  |
| Row 2  | Row 2  | Row 2  |
| Row 3  | Row 3  | Row 3  |
```

<H>

|     |     |     |
| --- | --- | --- |
| 行1  | 行1  | 行1  |
| 行2  | 行2  | 行2  |
| 行3  | 行3  | 行3  |

</H>

## 幅の広いテーブル

画面に対してテーブルの幅が広い場合、テーブルは水平方向にスクロールするよう自動的に設定されます。コード内で長いテーブルを可能にするには、長い行が可能になるようマークダウンのリンターにヒントを追加できます。

```md
<!-- markdownlint-disable line-length -->
| Header                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890` |
<!-- markdownlint-enable line-length -->
```

<H>

<!-- markdownlint-disable line-length -->

| ヘッダー                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890abcdefghijklmnopqrstuvwxyz01234567890` |

<!-- markdownlint-enable line-length -->

</H>
