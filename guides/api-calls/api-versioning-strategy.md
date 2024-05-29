---
rank: 9
related_endpoints: []
related_guides: []
required_guides: []
category_id: api-calls
subcategory_id: null
is_index: false
id: api-calls/api-versioning-strategy
type: guide
total_steps: 9
sibling_id: api-calls
parent_id: api-calls
next_page_id: api-calls
previous_page_id: api-calls/language-codes
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/api-versioning-strategy.md
fullyTranslated: true
---
# APIのバージョン戦略

Boxでは、特定のAPIエンドポイントに対してバージョン管理機能を提供しています。このバージョン管理システムにより、Boxがエンドポイントのバージョンを新しく導入した場合でも、既存のエンドポイントのバージョンに対してシームレスな機能が保証されます。

APIのバージョン管理により、Boxは、自社のプラットフォームを継続的に強化できると同時に、機能の更新や廃止のための信頼できる手段をサードパーティの開発者に提供することもできます。

<Message type="tip">

今後予定されているAPIの変更について常に最新情報を把握できるように、[変更ログ](https://developer.box.com/changelog/)を注視し、開発者コンソールの \[アプリ情報] セクションで現在のメールアドレスを指定しておいてください。

</Message>

## Box APIのバージョン管理の仕組み

<Message type="notice">

Box APIは、URLの`path`と`header`でバージョン管理をサポートしています。どのバージョンを使用するかを決定するには、APIリファレンスとそこに記載されているサンプルリクエストを参照してください。

</Message>

リクエストで使用されるAPIのデフォルトのバージョンは、呼び出すエンドポイントのURLで指定します。フローの例を以下に示します。

1. バージョンヘッダーを指定せずに[アップロード](`https://upload.box.com/api/2.0/files/content`)エンドポイントを呼び出すと、URLで定義されている`2.0`バージョンが使用されます。

2. Box APIでは、以下に該当する`Box-Version`ヘッダーを処理します。

   * `Box-Version: 2025.0`のような有効なバージョン名を含む
   * `https://api.box.com/2.0/files/:file_id/metadata`に送信される

3. 指定したバージョンが正しい場合は、クライアントにレスポンスが返されます。リクエストで`Box-Version`ヘッダーを指定した場合、レスポンスにはこのヘッダーも含まれます。デフォルトでは、このヘッダーはレスポンスに存在しません。バージョンが正しくない場合は、HTTPコード`400`のエラーがクライアントに返されます。

APIの動作に大きな変更があると、新しいエンドポイントは新しいURLで公開されます。たとえば、`https://upload.box.com/api/2.0/files/content`では、Boxにファイルをアップロードする際にマルチパートのコンテンツタイプをサポートしています。このAPIの新しいバージョンでこのコンテンツタイプがサポートされなくなると、新しいバージョンは新しいURL`https://upload.box.com/api/3.0/files/content`でリリースされます。

## リリーススケジュールと命名規則

Boxでは、**1年に1回**、特定のエンドポイントに新しく重大な変更を行う場合があります。エンドポイントは、特定のAPIルート内でサポートされているすべてのHTTPメソッドに対応しています。たとえば、署名リクエストのエンドポイントには以下のメソッドが含まれます。

| メソッド | リクエストURL                                           | 説明                   |
| ---- | -------------------------------------------------- | -------------------- |
| GET  | `https://api.box.com/2.0/sign_requests/:id`        | 特定の署名リクエストの詳細を取得します。 |
| GET  | `https://api.box.com/2.0/sign_requests/`           | すべての署名リクエストを取得します。   |
| POST | `https://api.box.com/2.0/sign_requests/`           | 新しい署名リクエストを作成します。    |
| POST | `https://api.box.com/2.0/sign_requests/:id/resend` | 特定の署名リクエストを再度送信します。  |
| POST | `https://api.box.com/2.0/sign_requests/:id/cancel` | 特定の署名リクエストをキャンセルします。 |

署名リクエストエンドポイントの新しいバージョンを導入すると、上記のすべてのパスとHTTPメソッドでそのバージョンがサポートされるようになります。エンドポイントのバージョンに関する包括的な情報については、[Box APIリファレンス](https://developer.box.com/reference/)を参照してください。

### 命名規則

APIの新しいバージョンは、リリースされた暦年に従ってラベルが付けられます。たとえば、署名リクエストのエンドポイントの新しいバージョンが2025年にリリースされた場合、その名前は`2025.0`となります。

Boxは、1年に1回、APIエンドポイントに新しく重大な変更を行う場合がありますが、セキュリティやプライバシーに関する懸念に対処するためにさらに重大な変更をリリースする権利を留保します。このような場合、新しいバージョンではサフィックスが1ずつ増加します。たとえば、以前にリリースされた署名リクエストのバージョン`2025.0`でセキュリティの問題に対処する必要がある場合、新しいバージョンには`2025.1`というラベルが付きます。

安定した各バージョンは最低12か月間サポートされます。つまり、新しいバージョンがリリースされると、以前のバージョンは非推奨となり、使用することはできますが、新機能が追加されなくなります。また、12か月経たずに新しいバージョンがリリースされることはありません。

アプリを更新して最新の安定したAPIバージョンにリクエストを実行することを強くお勧めします。ただし、アプリで使用している安定したバージョンがサポートされなくなると、HTTPエラーコード`404 - Not Found`を含むレスポンスが返されます。詳細については、[バージョン管理のエラー](#versioning-errors)を参照してください。

リクエストにバージョンが含まれていない場合、APIはデフォルトのBox APIバージョン`V2`になります。ただし、非推奨の変更を適用するためにこの動作を利用することはお勧めしません。アプリを更新する際は、リクエストごとにAPIのバージョンを指定してください。アプリにバージョンを認識させることで、サポートされている期間中は同じように動作することが保証される特定の機能セットにコードを固定します。

## APIバージョンの呼び出し

Box APIのバージョンは、アプリでリクエストする`Box-Version`ヘッダーで明示的に宣言します。次に例を示します。

```curl
curl --location 'https://api.box.com/2.0/sign_requests' \
    --header 'Box-Version: 2025.0' \
    --header 'Authorization: Bearer …

```

クライアントは、作成されたすべての署名リクエストのリストを取得し、バージョン`2025.0`を要求します。使用可能なAPIにはサポートされているバージョンがいくつかあるため、使用するバージョンを`Box-Version`ヘッダーで指定します。APIのバージョンには、**安定**、**非推奨**、**不安定**の3種類があります。

## バージョン管理のエラー

### URLでの正しくないAPIバージョンの呼び出し

Boxのドキュメントでは、APIのURLが示されています。たとえば、署名リクエストのエンドポイントへのアクセスには`https://api.box.com/2.0/sign_requests/`を使用します。お客様が誤って`https://api.box.com/3.0/sign_requests/`のような正しくないバージョンを呼び出すと、レスポンスでは`HTTP error code 404 - Not Found`エラーが返されます。

### 非推奨のAPIの呼び出し

Boxで非推奨としてマークされたAPIバージョンをお客様が使用した場合も、APIは通常どおり応答します。ただし、非推奨になった日付を示す`Deprecation`ヘッダーが追加されます。次に例を示します。

```sh
Deprecation: date="Fri, 11 Nov 2023 23:59:59 GMT"
Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated

```

お客様はAPIレスポンスを監視し、このヘッダーが表示されたら新しいAPIバージョンへの移行を計画する必要があることに留意する必要があります。

### 存在しないバージョンの呼び出し

公式サポートが終了した古いAPIバージョン (`2023.0`など) をお客様が使用しようとすると、レスポンスでは`HTTP error code 404 - Not Found`が返されます。詳細については、[URLでの正しくないAPIバージョンの呼び出し](#calling-an-incorrect-api-version-in-the-url)を参照してください。

## Box SDKのバージョン管理の仕組み

このバージョン戦略は、[次世代のSDK](https://developer.box.com/sdks-and-tools/#next-generation-sdks)にのみ適用されます。Box SDKは**すべてのバージョンに対応**というSDKのアプローチをサポートしています。つまり、SDKの各リリースでは、現在サポートされている任意のバージョンのすべてのエンドポイントにアクセスできます。生成されたすべてのSDKはマネージャのアプローチを使用します。このアプローチでは、同じドメインを使用するすべてのエンドポイントを1つのマネージャにグループ化します。たとえば、`FolderManager`には、`create_folder`、`get_folder_by_id`、`update_folder_by_id`、`delete_folder_by_id`、`get_folder_items`、`copy_folder`のメソッドが含まれます。この分割は`x-box-tag`フィールドの値に基づいて行われます (このフィールドは公開APIサービスの仕様で各メソッドに割り当てられています)。ほとんどの場合、これはエンドポイントURLのルートに対応していますが、必ずしもそうとは限りません。たとえば、`FolderManager`には`https://api.box.com/2.0/folders`というルートURLを使用するメソッドが含まれますが、同じベースURLは`SharedLinkFoldersManager`のいくつかのメソッドでも使用されています。すべてのマネージャへの参照は、1つのBoxクライアントオブジェクトの下に保存されます。

エンドポイントのライフサイクルの例を見てみましょう。

1. 初期状態 (使用できるバージョンは1つのみ)。

```js
    class FilesManager {
        async updateFileById(
            fileId: string,
            requestBody: UpdateFileByIdRequestBody,
            queryParams: UpdateFileByIdQueryParams,
            headers: UpdateFileByIdHeaders
        ): Promise < FileFull > {}
    }

```

2. エンドポイントの新しい`v2025_0`バージョンが導入されます (以前のバージョンは非推奨になります)。

   SDKでは、エンドポイントの新しいバージョンごとに新しいメソッドが導入されます。これらのメソッドは古いメソッドと同じマネージャに保存されますが、その名前と対応するクラスの末尾にはバージョン番号が追加されます。古いメソッドは非推奨となり、最小限のメンテナンスが行われる日付が通知されます。これは、エンドポイントの公式サポートが終了した状態と見なされる日付です。

```js
    class FilesManager {
        /**
         * @deprecated This endpoint will be EOL'ed after 05-2026.
            */
        async updateFileById(
            fileId: string,
            requestBody: UpdateFileByIdRequestBody,
            queryParams: UpdateFileByIdQueryParams,
            headers: UpdateFileByIdHeaders
        ): Promise<FileFull> {}

        async updateFileById_2025_0(
            fileId: string,
            requestBody: UpdateFileByIdRequestBody_2025_0,
            queryParams: UpdateFileByIdQueryParams_2025_0,
            headers: UpdateFileByIdHeaders_2025_0
        ): Promise<FileFull_2025_0> {}
    }

```

3. APIエンドポイントが公式サポート終了 (EOL) としてマークされます。

   SDKは、公式サポート終了 (EOL) のエンドポイントの削除を伴う重大な変更をリリースします。SDKの新しいメジャーバージョンを何度もリリースするのを避けるために、すべてのエンドポイントの公式サポート終了日を四半期ごとに特定の日にまとめるのが理想的です。

```js
    class FilesManager {
        async updateFileById_2025_0(
            fileId: string,
            requestBody: UpdateFileByIdRequestBody_2025_0,
            queryParams: UpdateFileByIdQueryParams_2025_0,
            headers: UpdateFileByIdHeaders_2025_0
        ): Promise < FileFull_2025_0 > {}
    }

```

## 重大な変更と重大ではない変更

Box APIにおける重大な変更は、バージョン管理されたリリースの中で行われ、通常は新しいメジャーAPIバージョンを伴います。既存の機能を損なわない程度の微調整であれば、既存のAPIバージョンに統合できます。次の表では、重大な変更と重大ではない変更の例を示します。

| APIの変更                                                                                           | 重大な変更 |
| ------------------------------------------------------------------------------------------------ | ----- |
| 新しいエンドポイント                                                                                       | いいえ   |
| リクエストの新しい[読み取り専用](https://swagger.io/docs/specification/data-models/data-types/)フィールドまたは省略可フィールド | いいえ   |
| リクエストの新しい必須フィールド                                                                                 | はい    |
| リクエストの新しい文字列定数                                                                                   | はい    |
| 非推奨                                                                                              | いいえ   |
| 廃止/公式サポート終了となったエンドポイント                                                                           | はい    |
| フィールド、データ型、文字列定数の名前変更/再構築                                                                        | はい    |
| フィールド検証の制限を強化する変更                                                                                | はい    |
| フィールド検証の制限を緩和する変更                                                                                | いいえ   |
| 操作によって返されるHTTPステータスコードの変更                                                                        | はい    |
| 宣言済みプロパティの削除                                                                                     | はい    |
| APIまたはAPIパラメータの削除または名前変更                                                                         | はい    |
| 必須のリクエストヘッダーの追加                                                                                  | はい    |
| エラーコードの追加                                                                                        | いいえ   |
| エラーコードの削除または変更                                                                                   | はい    |
| 列挙へのメンバーの追加                                                                                      | はい    |

<Message type="tip">

Boxでは、[oasdiff](https://github.com/Tufin/oasdiff/blob/main/BREAKING-CHANGES-EXAMPLES.md)ツールを使用して、重大と思われる変更の大半を検出します。

</Message>

## サポートポリシーと非推奨情報

Box APIとBox SDKの新しいバージョンがリリースされると、それより前のバージョンは廃止されます。Boxでは、バージョンを廃止する少なくとも24か月前に、そのバージョンを`deprecated`とマークします。つまり、非推奨バージョンの公式サポートが24か月経たずに終了することはありません。同様に、一般提供 (GA) されている個々のAPIについても、GAバージョンから削除する少なくとも24か月前にそのAPIを`deprecated`と宣言します。

Boxは、APIのメジャーバージョンを上げる際 (`2024.0`から`2025.0`など)、現在のバージョン (この例では`2024.0`) が即座に非推奨となることを発表し、その発表から24か月後にサポートを終了します。サービスのセキュリティや状態の信頼性に問題がある場合は、このポリシーに例外を認めることがあります。

APIが非推奨としてマークされている場合は、できるだけ早く最新バージョンに移行することを強くお勧めします。場合によっては、元のAPIが非推奨になってしばらくしてから、新しいアプリケーションで新しいAPIの使用を開始する必要があることを案内することもあります。

お客様が非推奨のAPIエンドポイントを呼び出すと、レスポンスには以下のようなヘッダーが含まれます。

```sh
Deprecation: date="Fri, 11 Nov 2023 23:59:59 GMT"
Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated

```

この日付は、いつこのバージョンが非推奨としてマークされたかをクライアントに示しています。

## バージョン管理に関する考慮事項

リクエストの作成時には、以下の点を考慮してください。

* バージョンを指定しないと、サービスによってデフォルトのバージョンが返されますが、これは最新バージョンではない場合があります。

  * バージョンヘッダーがない場合、デフォルトのリソースバージョンは、URLに含まれるバージョンによって決まります。
  * バージョンヘッダーが指定されていても、リクエストされたバージョンを利用できない場合、レスポンスではHTTPエラーコード`404 - Not Found`が返されます。

APIに含まれるリソースまたはリソースのプロパティが非推奨になると、その変更は以下の1つ以上の方法で伝えられます。

* 非推奨の動作を伴う呼び出しにより、レスポンスヘッダー`Box-API-Deprecated-Reason`と、詳細を確認するためのリンクが返されます。

```sh
    Box-Version: 2023.0
    Deprecation: version="version", date="date"
    Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated

```

* 非推奨に関するお知らせが開発者向け変更ログに掲載されます。
* 影響を受けるリソースと必要な対応を特定できるように、APIリファレンスが更新されます。
* アプリに影響する後方互換性のない変更が差し迫っている場合は、その非推奨についてアプリの連絡先メールアドレスに問い合わせることがあります。

## その他のリソース

* [APIリファレンス](https://developer.box.com/reference/)
