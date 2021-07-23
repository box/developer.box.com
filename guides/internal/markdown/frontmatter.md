---
hide: true
category_id: internal
subcategory_id: internal/markdown
is_index: false
id: internal/markdown/frontmatter
rank: 0
type: guide
total_steps: 5
sibling_id: internal/markdown
parent_id: internal/markdown
next_page_id: ''
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/internal/markdown/frontmatter.md
fullyTranslated: true
---
<!-- does not need translation -->

# Frontmatter

Frontmatterとは、マークダウンファイルの上部にあるデータのことで、破線で挟まれています。

```md
---
id: 1
---
Markdown content
```

<!-- markdownlint-disable line-length -->

Boxのドキュメントでは以下のFrontmatterがサポートされています。

| キー                  | 説明                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `alias_paths`       | このページにリダイレクトするパスのリスト。古いURLを新しいURLにスムーズにリダイレクトするために使用します。                                       |
| `centered`          | コンテンツをページの中央に揃えるために、(ガイドではなく) ページを`<Centered>`要素にラップします。                                       |
| `hide`              | このページを検索対象から外します。                                                                              |
| `hide_in_page_nav`  | 右側のページ内ナビゲーションを非表示にします。                                                                        |
| `hide_step_number`  | クイックスタートガイドの左側のサイドバーにある手順番号を非表示にします。                                                           |
| `hide_title`        | ページのタイトルを非表示にします。ホームページで使用します。                                                                 |
| `rank`              | ページのランク。サイドバーやその他のページリストでページを並べ替える際に使用されます。                                                    |
| `related_endpoints` | このガイド/ページに関連するエンドポイントID (`get_files_id`など) のリスト。これらは、ページ下部で、マークダウンコンテンツの後に表示されます。              |
| `related_guides`    | このガイド/ページに関連するガイドID (`tooling/postman`など) のリスト。これらは、ページ下部で、マークダウンコンテンツの後に表示されます。               |
| `related_pages`     | このガイド/ページに関連するページID (`sdks-and-tooling`など) のリスト。これらは、ページ下部で、マークダウンコンテンツの後に表示されます。              |
| `related_resources` | このガイド/ページに関連するリソースID (`file`など) のリスト。これらは、ページ下部で、マークダウンコンテンツの後に表示されます。                         |
| `required_guides`   | このガイド/ページの前に読む必要がある前提条件ガイドID (`tooling/postman`など) のリスト。これらは、ページ上部で、タイトルとマークダウンコンテンツの間に表示されます。 |
| `type`              | これが表すガイド/ページのタイプ (省略可)。現時点で有効な値は`quick-start`ガイドのみです。                                          |

<!-- markdownlint-enable line-length -->
