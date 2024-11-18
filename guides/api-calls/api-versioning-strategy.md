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
# API versioning strategy

Boxでは、特定のAPIエンドポイントに対してバージョン管理機能を提供しています。このバージョン管理システムにより、Boxがエンドポイントのバージョンを新しく導入した場合でも、既存のエンドポイントのバージョンに対してシームレスな機能が保証されます。

APIのバージョン管理により、Boxは、自社のプラットフォームを継続的に強化できると同時に、機能の更新や廃止のための信頼できる手段をサードパーティの開発者に提供することもできます。

<Message type="tip">

今後予定されているAPIの変更について常に最新情報を把握できるように、[変更ログ](https://developer.box.com/changelog/)を注視し、開発者コンソールの \[アプリ情報] セクションで最新のメールアドレスを指定しておいてください。

</Message>

## Box APIのバージョン管理の仕組み

<Message type="notice">

Box APIは、URLの`path`と`header`でバージョン管理をサポートしています。どのバージョンを使用するかを決定するには、APIリファレンスとそこに記載されているサンプルリクエストを参照してください。

</Message>

### Versioning in `path`

The default version of the API used in any requests is specified in the URL of the endpoint you call. For example, when calling the `https://upload.box.com/api/2.0/files/content` endpoint without any version header specified, you reach the `2.0` version defined in the URL.

APIの動作に大きな変更があると、新しいエンドポイントは新しいURLで公開されます。たとえば、`https://upload.box.com/api/2.0/files/content`では、Boxにファイルをアップロードする際にマルチパートのコンテンツタイプをサポートしています。このAPIの新しいバージョンでこのコンテンツタイプがサポートされなくなると、新しいバージョンは新しいURL`https://upload.box.com/api/3.0/files/content`でリリースされます。

### Versioning in `header`

Box API processes the `box-version` header which should contain a valid version name, that is `box-version: 2025.0` and be directed at `https://api.box.com/2.0/files/:file_id/metadata`.

指定したバージョンが正しい場合は、クライアントにレスポンスが返されます。リクエストで`box-version`ヘッダーを指定した場合、レスポンスにはこのヘッダーも含まれます。デフォルトでは、このヘッダーはレスポンスに存在しません。バージョンが正しくない場合は、HTTPコード`400`のエラーがクライアントに返されます。

## リリーススケジュールと命名規則

Box can introduce a new breaking change to certain endpoints **once per year**. Introducing a new version of the Sign Request endpoint means that **all paths and HTTP methods** of an endpoint will support it.

For example, if Sign Request endpoints receive a new version it will apply to all endpoints listed in the table:

| メソッド | リクエストURL                                           | 説明                   |
| ---- | -------------------------------------------------- | -------------------- |
| GET  | `https://api.box.com/2.0/sign_requests/:id`        | 特定の署名リクエストの詳細を取得します。 |
| GET  | `https://api.box.com/2.0/sign_requests/`           | すべての署名リクエストを取得します。   |
| POST | `https://api.box.com/2.0/sign_requests/`           | 新しい署名リクエストを作成します。    |
| POST | `https://api.box.com/2.0/sign_requests/:id/resend` | 特定の署名リクエストを再度送信します。  |
| POST | `https://api.box.com/2.0/sign_requests/:id/cancel` | 特定の署名リクエストをキャンセルします。 |

### 命名規則

New API versions are labeled according to the calendar year of their release.

**Example**: If a new version of the Sign Requests endpoint is released in 2025, it will be named `2025.0`.

Box can issue a new breaking change to API endpoints **once** per year, reserving the right to release an additional breaking change to address security or privacy concerns. In such cases, the new version will be incremented by one in the suffix.

**Example**: If security issues need addressing in the previously released version `2025.0` of Sign Requests, the new version will be labeled `2025.1`.

安定した各バージョンは最低12か月間サポートされます。つまり、新しいバージョンがリリースされると、以前のバージョンは非推奨となり、使用することはできますが、新機能が追加されなくなります。また、12か月経たずに新しいバージョンがリリースされることはありません。

アプリを更新して最新の安定したAPIバージョンにリクエストを実行することを強くお勧めします。ただし、アプリで使用している安定したバージョンがサポートされなくなると、HTTPエラーコード`400 - Bad Request`を含むレスポンスが返されます。詳細については、[バージョン管理のエラー](g://api-calls/permissions-and-errors/versioning-errors)を参照してください。

If your request doesn't include a version, the API defaults to the initial Box API version—the version available before year-based versioning was introduced. However, relying on this behavior is not recommended when adopting deprecated changes. To ensure consistency, always specify the API version, with each request. By making your application version-aware, you anchor it to a specific set of features, ensuring consistent behavior throughout the supported timeframe.

### Endpoint versioning indication

To keep you informed about the current API state, and improve the readability of the versioned API reference, the affected endpoints are marked with a pill based on the `x-stability-level` tag or `deprecated` attribute.

![An example of a beta pill used for API reference endpoints](./images/api-versioning-pills.png)

| Schema element                                            | Pill name      | 説明                                                                                                                                                                                                                                          |
| --------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x-stability-level: beta`                                 | Beta           | Endpoints marked with **beta**, are offered subject to Box’s Main Beta Agreement, meaning the available capabilities may change at any time. Although beta endpoints not the same as versioned endpoints, they are a part of API lifecycle. |
| `x-stability-level: stable` or no `x-stability-level` tag | Latest version | The latest version applies to APIs that are already versioned. **Latest version** marks the most recent stable API version of an endpoint.                                                                                                  |
| `deprecated: true`                                        | Deprecated     | An endpoint is deprecated, which means it is still available for use, but no new features are added. Such an endpoint is annotated with the `deprecated` attribute set to `true`.                                                           |

## APIバージョンの呼び出し

Box APIのバージョンは、アプリでリクエストする`box-version`ヘッダーで明示的に宣言します。次に例を示します。

```curl
curl --location 'https://api.box.com/2.0/sign_requests' \
    --header 'box-version: 2025.0' \
    --header 'Authorization: Bearer …

```

クライアントは、作成されたすべての署名リクエストのリストを取得し、バージョン`2025.0`を要求します。使用可能なAPIにはサポートされているバージョンがいくつかあるため、使用するバージョンを`box-version`ヘッダーで指定します。APIのバージョンには、**安定**、**非推奨**、**不安定**の3種類があります。

## バージョン管理のエラー

When using versioned API actions such as calling an incorrect API version in header or a deprecated version can lead to errors.

For details on possible errors, see [versioning errors](g://api-calls/permissions-and-errors/versioning-errors).

## Box SDKのバージョン管理の仕組み

The versioning strategy applies only to [next generation generated SDKs](https://developer.box.com/sdks-and-tools/#next-generation-sdks).

Box SDKs support the **All Versions In** SDK approach. This means that every release of SDK provides access to all endpoints in any version which is currently live. All generated SDKs use manager's approach - they group all endpoints with the same domain in one manager.

For example `FolderManager` contains methods to: `create_folder`, `get_folder_by_id`, `update_folder_by_id`, `delete_folder_by_id`, `get_folder_items` and `copy_folder`. This division is done based on the value of `x-box-tag` field, which is assigned to each method in Public API Service specification. It mostly corresponds to the root of the endpoint URL, but not necessarily. For example: `FolderManager` contains methods with `https://api.box.com/2.0/folders` root URL, but the same base URL is also used in some methods of `SharedLinkFoldersManager`. References to all managers are stored under one Box Client object.

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

Breaking changes in the Box API occur within versioned releases, typically accompanied by a new major API version. Minor adjustments, which do not disrupt existing functionality, can be integrated into an existing API version. The following table lists both breaking and non-breaking changes.

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

The [oasdiff](https://github.com/Tufin/oasdiff/blob/main/BREAKING-CHANGES-EXAMPLES.md) tool allows detecting most of the possible breaking changes.

</Message>

## AIエージェントの構成のバージョン管理

[AIエージェント](g://box-ai/ai-agents)のバージョン管理により、開発者はモデルのバージョン管理をより詳細に制御できるようになり、レスポンスの一貫性が確保されます。詳細については、[AIエージェントの構成のバージョン管理ガイド](g://box-ai/ai-agents/ai-agent-versioning)を参照してください。

## サポートポリシーと非推奨情報

Box APIとBox SDKの新しいバージョンがリリースされると、それより前のバージョンは廃止されます。Boxでは、バージョンを廃止する少なくとも24か月前に、そのバージョンを`deprecated`とマークします。つまり、非推奨バージョンの公式サポートが24か月経たずに終了することはありません。同様に、正式リリース (GA) されている個々のAPIについても、GAバージョンから削除する少なくとも24か月前にそのAPIを`deprecated`として宣言します。

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

* If you do not specify a version, the service will return the initial version that existed before year-based versioning was introduced. If the initial version does not exist, the response will return an HTTP error code `400 - Bad Request`.
* If the version header is specified but the requested version is unavailable, the response will return an HTTP error code `400 - Bad Request`.

For details, see [versioning errors](g://api-calls/permissions-and-errors/versioning-errors).

APIに含まれるリソースまたはリソースのプロパティが非推奨になると、その変更は以下の1つ以上の方法で伝えられます。

* 非推奨の動作を伴う呼び出しにより、レスポンスヘッダー`Box-API-Deprecated-Reason`と、詳細を確認するためのリンクが返されます。

```sh
    box-version: 2023.0
    Deprecation: version="version", date="date"
    Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated

```

* A deprecation announcement is posted in the developer changelog.
* The API reference is updated to identify the affected resource and any action you need to take. Affected endpoints are marked with **deprecated** pill.
* アプリに影響する後方互換性のない変更が差し迫っている場合は、その非推奨についてアプリの連絡先メールアドレスに問い合わせることがあります。

## その他のリソース

* [APIリファレンス](https://developer.box.com/reference/)
