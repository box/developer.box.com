---
rank: 4
related_endpoints:
  - get-metadata-templates-id
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-explorer
  - /docs/content-explorer
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/explorer-metadata-v1
type: guide
total_steps: 17
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/open-with
previous_page_id: embed/ui-elements/explorer
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/explorer-metadata-v1.md
fullyTranslated: true
---
# Content Explorer - metadata view v1

コンテンツエクスプローラを使用すると、メタデータに基づいてファイルを表示することもできます。メタデータビューでは、[メタデータテンプレート][template]と[メタデータクエリ][metadata-query]を使用して、表示するデータを探します。

![メタデータビュー](./images/explorer-view.png)

## 前提条件

* [コンテンツエクスプローラ][explorer]ガイドを読む。
* [メタデータの用語][terminology]を確認する。
* [メタデータクエリ][metadata-query]に関する情報を確認する。

## アプリの作成と構成

1. [Boxアプリを作成します][box-app]。
2. \[CORSドメイン] にローカルでの開発用のアドレスを追加します。 ![CORSドメイン](./images/box-app-cors.png)
3. [開発者トークン][token]を生成します。

## メタデータテンプレートの作成

次の手順では、メタデータテンプレートを作成します。

1. [メタデータAPI][creating-templates-api]または[管理コンソール][creating-templates-ui]を使用してテンプレートを作成します。
2. すでに作成済みのテンプレートをBoxフォルダに適用します。必ずカスケードポリシーを有効にするようにしてください。詳細な手順については、[テンプレートのカスタマイズと適用の手順][apply-templates]を参照してください。

<Message type="notice">

メタデータテンプレートは、ファイルにも適用できます。

</Message>

### 表示名と主なパラメータ

* `displayName`パラメータは、管理コンソールに表示されるテンプレートの表示名です。
* `templateKey`パラメータは、テンプレートの一意の識別子です。これは、メタデータテンプレート作成の対象となる企業全体で一意である必要があります。`templateKey`パラメータを指定しなかった場合は、APIによって、`displayName`の値を基に一意の識別子が作成されます。
* `[fields].displayName`パラメータは、ウェブアプリおよびモバイルアプリでユーザーに表示されるフィールドの表示名です。
* `[fields].key`パラメータは、テンプレート内の特定のフィールドの一意の識別子です。この識別子は、そのフィールドが属するテンプレート内で一意である必要があります。

## メタデータビューの表示

次に、コンテンツエクスプローラに渡される必須のプロパティを入力します。作業を簡単にするために、基本的なReactアプリに基づいた[サンプルプロジェクト][metadata-project]を使用して、メタデータビューを起動できます。

1. メタデータのサンプルプロジェクトを複製します。
2. [`App.js`][appjs]内のプレースホルダを実際の値で更新します。

| パラメータ                    | 説明                                                                                                                                                                                                                                                    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DEVELOPER_TOKEN`        | 開発者コンソールで生成された[開発者トークン][token]。                                                                                                                                                                                                                       |
| `ENTERPRISE_ID`          | Boxアプリケーションの \[**一般設定**] タブからコピーしたEnterprise ID。                                                                                                                                                                                                      |
| `METADATA_TEMPLATE_NAME` | 作成済みのメタデータテンプレートの`templateKey`。**注**: 適切な名前を指定済みであることを確認するには、[メタデータAPI][get-template]を使用して名前を取得するか、管理コンソールでURLから名前をコピーします。![管理コンソールにおけるメタデータ名](./images/metadata-template-name.png) UIでテンプレート名を変更しても、変更されるのは表示名のみです。コンポーネントで使用する名前は、常に最初に指定した名前になります。 |
| `METADATA_SOURCE`        | [メタデータ][source]のソース。これは、スコープ、Enterprise ID、メタデータキーを組み合わせた文字列です。                                                                                                                                                                                       |
| `ROOTFOLDER_ID`          | メタデータクエリを適用してフィルタがかけられたファイルを表示するBoxフォルダのID。                                                                                                                                                                                                           |

`defaultView`、`fieldsToShow`、`metadataQuery`の各パラメータは、すでにサンプルプロジェクトで定義されています。これらのパラメータの例は、サンプルプロジェクトで確認できます。

| パラメータ           | 説明                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------- |
| `defaultView`   | メタデータビューを描画するための必須プロパティ。指定されていない場合は、通常のファイルビューが表示されます。                                       |
| `fieldsToShow`  | コンテンツエクスプローラに表示する特定のメタデータ列を追加または非表示にします。                                                     |
| `metadataQuery` | ファイルに設定されているメタデータを検索してそのファイルを探す方法を指定します。メタデータクエリの詳細については、[こちらのガイド][metadata-query]を参照してください。 |

3. コンテンツエクスプローラコンポーネントに必須パラメータを渡します。

コンテンツエクスプローラのメタデータビューを含むReactコンポーネントのサンプルコードは次のようになります。

```js
function App() {
    const token = "<DEVELOPER_TOKEN>";
    const rootFolderID = "<ROOTFOLDER_ID>";
    const EID = "<ENTERPRISE_ID>";
    const templateName = "<METADATA_TEMPLATE_NAME>";
    const metadataSource = `enterprise_${EID}.${templateName}`;
    const metadataSourceFieldName = `metadata.${metadataSource}`;
    const metadataQuery = {
    	from: metadataSource,
    	query: "key = :arg1",
    	query_params: { arg1: "value" },
    	ancestor_folder_id: 0,
    	fields: [
        `${metadataSourceFieldName}.name`,
        `${metadataSourceFieldName}.last_contacted_at`,
        `${metadataSourceFieldName}.industry`,
        `${metadataSourceFieldName}.role`,
        ],
    };

    const fieldsToShow = [
    // canEdit propetry determines if the user can edit the metadata directly from Content Explorer component
    { key: `${metadataSourceFieldName}.name`, canEdit: false },
    // displayName alows to change the label on metadata column
    { key: `${metadataSourceFieldName}.industry`, canEdit: false, displayName: "alias" },
    { key: `${metadataSourceFieldName}.last_contacted_at`, canEdit: true },
    { key: `${metadataSourceFieldName}.role`, canEdit: true },
    ];

const defaultView = "metadata";
return (
    <IntlProvider locale="en">
        <div className="App">
            <header className="App-header">
                <h2>Metadata view in Content Explorer</h2>
            </header>
            <section>
                <div className="metadata-based-view">
                    <ContentExplorer
                        rootFolderId={rootFolderID}
                        token={token}
                        metadataQuery={metadataQuery}
                        fieldsToShow={fieldsToShow}
                        defaultView={defaultView}
                    />
                </div>
            </section>
        </div>
    </IntlProvider>
);
}

export default App;

```

## メタデータキー

表示するフィールドを決定するには、コンテンツエクスプローラで、[表示名][display-name]ではなく、メタデータの[フィールドキー][field-key]を使用します。表示名は管理コンソールやユーザービューで確認できる一方、フィールドキーはAPIを使用して取得できます。

フィールドキーは、メタデータの表示名を変更した場合でも変わりません。これにより、UIビューでメタデータが変更されても、この機能は正常に動作します。

### メタデータキーのサニタイズ

[キー][field-key]は、英数字のみに制限されています。

* ハイフン`-`とアンダースコア`_`は許可されていません。
* 許可されているのは文字 (`a-z, A-Z`) と数字 (`0-9`) のみです。

**ラテン語以外の文字:**

キーにラテン語以外のアルファベット (キリル文字、アラビア語、中国語など) が含まれている場合、それらは自動的に共通識別子に変更されます。

* 最初に出現した文字は`field`
* それ以降出現した文字は`field1`、`field2`と続く

キーは、表示名に基づいています。

<Message type="notice">

**ヒント**: 詳細なフローについては、[メタデータビューに関するブログ記事][blogpost]を参照してください。

</Message>

[terminology]: g://metadata/#metadata-terminology

[template]: r://get-metadata-templates-id

[explorer]: g://embed/ui-elements/explorer

[blogpost]: https://medium.com/box-developer-blog/metadata-view-in-box-content-explorer-4978e47e97e9

[creating-templates-api]: g://metadata/templates/create

[creating-templates-ui]: https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates

[appjs]: https://github.com/box-community/content-explorer-metadata/blob/main/src/App.js

[box-app]: g://applications/app-types

[token]: g://authentication/tokens/developer-tokens

[apply-templates]: https://support.box.com/hc/en-us/articles/360044196173-Using-Metadata

[metadata-project]: https://github.com/box-community/content-explorer-metadata/tree/main

[get-template]: e://metadata/templates/get/#get-a-metadata-template-by-name

[metadata-query]: g://metadata/queries

[get-id]: e://get-metadata-templates-id-id-schema/

[field-key]: e://post-metadata-templates-schema/#param-fields-key

[display-name]: e://post-metadata-templates-schema/#param-fields-displayName

[source]: g://metadata/scopes
