---
related_endpoints: []
required_guides: []
category_id: metadata
subcategory_id: metadata/5-queries
is_index: false
id: metadata/queries/limitations
rank: 5
type: guide
total_steps: 7
sibling_id: metadata/queries
parent_id: metadata/queries
next_page_id: metadata/queries/pagination
previous_page_id: metadata/queries/errors
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/metadata/5-queries/5-limitations.md
fullyTranslated: true
---
# 制限

メタデータクエリAPIには、いくつかの制限が適用されます。

## ファイルとフォルダ

​メタデータクエリで返されるのは、リクエストしているユーザーが`previewer`以上のアクセス権限を持つ項目 (ファイルまたはフォルダ) のみです。

## 会社のテンプレートとグローバルテンプレート

メタデータクエリは、その会社によって作成されたメタデータテンプレートでのみ動作します。クエリでは、`​global.properties`テンプレートに保存された自由形式のキー/値ペアのコンテンツに基づく結果が返されません。

## 分類メタデータテンプレート

Boxでは、メタデータテンプレートを使用してコンテンツの分類を行うことができます。これらのメタデータテンプレートはメタデータクエリでは使用できません。なぜなら、大きな結果セットに関する問題が発生する可能性が高いためです。詳細は次に説明しています。

当面、将来これらのクエリのサポートを開始する計画はありません。

## 推奨される結果セットのサイズ

Where possible, it is recommended to only send requests for which the result set is less than 2,000 items.​ The ​result set​ is the entire collection of files and folders that match the metadata query exclusively based on evaluating the `​from​`, `​query​`, and `​query_params​` parameters — before the requesting user’s permissions and the `​ancestor_folder​` scope are considered.

When sending a metadata query request for which the result set exceeds 2,000 items, the API can only guarantee that it returns all matching results if both the following conditions are met:

1. リクエストするユーザーが、結果セットに含まれるすべての項目に対して**プレビューアー**以上の権限を持っていること。
2. 先祖フォルダに、結果セット内のすべてのファイルが含まれていること。

When sending a metadata query request for which the result set exceeds 2,000 items and for which these conditions are not true, the API might return an error with a 4XX response code indicating that the query will need to be restricted to return fewer results.

たとえば、次に示す、`catalogImages​`というメタデータテンプレートの簡略化したレプリゼンテーションを考えてみます。これには、`​photographer`という文字列フィールドが1つあります。

```json
{
  "templateKey": "catalogImages",
  "fields": [
    {
      "type": "string",
      "key": "photographer"
    }
  ]
}

```

この例では、10人のphotographer (写真家) がいて、それぞれが`catalogImages​`テンプレートが適用されている同じ数の画像を取り込むとします。

Now consider that there are 4,000 files in your Box enterprise which have the `catalogImages` template ​applied and which are split evenly between the two folders,​ `Parts​` and `Products`, ​which are children of the parent folder `​Catalog​` as shown below.

```sh
Catalog/
|
|- Parts/
   |
   |- file_0000.jpeg
   |- ...
   |- file_1999.jpeg
|- Products/
   |
   |- file_2000.jpeg
   |- ...
   |- file_3999.jpeg

```

以下の表に、考えられるいくつかのクエリの結果を示します。クエリについては、読みやすくするために平易な言葉で説明しています。

Remember that the ​result set ​is defined as a collection of items (files and folders) which match the metadata query exclusively based on evaluating the `​from​`, `​query​`, and `​query_params` parameters — before the requesting user’s permissions and the `​ancestor_folder​` scope are considered.

| クエリ                                                                  | 結果セット   | 結果        | メモ                                                                    |
| -------------------------------------------------------------------- | ------- | --------- | --------------------------------------------------------------------- |
| `catalogImages`テンプレートが適用されている、写真家が`Mike`の項目を選択します。                   | 200項目   | 成功        | `Mike`に対応する項目のみを選択することで、結果セットはたった400ファイルに抑えられます。                      |
| `catalogImages`テンプレートが適用されている項目を選択します。                               | 4,000項目 | 失敗する可能性あり | 結果セットは2,000項目を超えます。ユーザーが結果セット内のすべてのファイルにアクセスできない場合は、クエリが失敗する可能性があります。 |
| `Products​`フォルダにある、`catalogImages`テンプレートが適用されている項目を選択します。            | 4,000項目 | 失敗する可能性あり | 結果セットは2,000項目を超えます。すべての結果が先祖フォルダに含まれるわけではありません。                       |
| `Products`フォルダにある、`catalogImages`テンプレートが適用されている、写真家が`Mike`の項目を選択します。 | 200項目   | 成功        | `Mike`に対応する項目のみを選択することで、結果セットはたった400ファイルに抑えられます。                      |
