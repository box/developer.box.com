---
rank: 100
related_endpoints: []
related_guides: []
required_guides: []
category_id: api-calls
subcategory_id: api-calls/permissions-and-errors
is_index: false
id: api-calls/permissions-and-errors/versioning-errors
type: guide
total_steps: 6
sibling_id: api-calls/permissions-and-errors
parent_id: api-calls/permissions-and-errors
next_page_id: ''
previous_page_id: api-calls/permissions-and-errors/app-diagnostics-report
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/api-calls/permissions-and-errors/versioning-errors.md
fullyTranslated: true
---
# バージョン管理のエラー

Boxでは、特定のAPIエンドポイントに対してバージョン管理機能を提供しています。このバージョン管理システムにより、Boxがエンドポイントのバージョンを新しく導入した場合でも、既存のエンドポイントのバージョンに対してシームレスな機能が保証されます。

APIのバージョン管理により、Boxは、自社のプラットフォームを継続的に強化できると同時に、機能の更新や廃止のための信頼できる手段をサードパーティの開発者に提供することもできます。

APIの変更について常に最新情報を把握できるように、[変更ログ](https://developer.box.com/changelog/)を注視し、開発者コンソールの \[**アプリ情報**] セクションで最新のメールアドレスを指定しておいてください。

## エラーの例

バージョン管理されているAPIコールの使用時に、バージョン管理に関連したエラーが発生する場合があります。このリファレンスでは、エラーが表示される最も一般的なケースを挙げ、そのようなエラーの例を示します。

## 正しくない`box-version`ヘッダーを使用した呼び出し

正しくない`box-version`ヘッダーを使用してAPIを呼び出すと、APIは`HTTP error code 400 - Bad Request`エラーで応答し、レスポンスのメッセージ内にサポート対象のバージョンを示します。

レスポンスの`message`フィールドには、以下のステータスメッセージのいずれかが含まれます。

| 詳細                                                                       | メッセージ                                                                                    |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| `box-version`値が、サポートされていないAPIバージョンであるか、正しくない形式で送信されました。                  | `Invalid API version specified in 'box-version' header.`                                 |
| バージョン管理されているエンドポイントのみが呼び出されたときに、リクエストヘッダーに`box-version`ヘッダーが含まれていませんでした。 | `Missing required box-version header.`                                                   |
| `box-version`が空です。                                                       | `Invalid (empty) API version specified in 'box-version' header.`                         |
| `box-version`に複数のバージョンが含まれていました。リクエストごとに指定できるバージョンの数は**1つのみ**です。         | `The 'box-version' header supports only one header value per request, do not use comas.` |
| サポートされていないAPIバージョンが既存のエンドポイントに使用されています。                                  | `Unsupported API version specified in 'box-version' header.`                             |

`box-version`ヘッダーが正しくない場合のレスポンスの例:

```json
{
  "type": "error",
  "status": 400,
  "code": "invalid_api_version",
  "help_url": "https://developer.box.com/reference/error-codes/invalid-api-version",
  "message": "Invalid API version specified in 'box-version' header. Supported API versions: [2024.0].",
  "request_id": "abcdef123456"
}

```

## URLでの正しくないAPIバージョンの呼び出し

Boxのドキュメントでは、APIのURLが示されています。たとえば、署名リクエストのエンドポイントへのアクセスには`https://api.box.com/2.0/sign_requests/`を使用します。誤って`https://api.box.com/3.0/sign_requests/`のような正しくないバージョンを呼び出すと、レスポンスでは`HTTP error code 404 - Not Found`エラーが返されます。

## 非推奨のAPIの呼び出し

Boxで非推奨としてマークされたAPIバージョンを使用した場合、APIは通常どおり応答します。また、非推奨になった日付を示す`Deprecation`ヘッダーが追加されます。次に例を示します。

```sh
Deprecation: date="Fri, 11 Nov 2023 23:59:59 GMT"
Box-API-Deprecated-Reason: https://developer.box.com/reference/deprecated

```

APIレスポンスを監視して`Deprecation`ヘッダーが存在するかどうかを確認し、その結果に応じて新しいAPIバージョンへの移行を計画する必要があります。

## 存在しないバージョンの呼び出し

公式サポートが終了した古いAPIバージョン (`2023.0`など) を使用しようとすると、レスポンスでは`HTTP error code 404 - Not Found`が返されます。詳細については、[URLでの正しくないAPIバージョンの呼び出し](#calling-an-incorrect-api-version-in-the-url)を参照してください。
