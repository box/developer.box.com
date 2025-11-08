---
rank: 4
related_endpoints:
  - get-metadata-templates-id
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/explorer-metadata-v2
type: guide
total_steps: 18
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/explorer-metadata-v1
previous_page_id: embed/ui-elements/explorer
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/explorer-metadata-v2.md
fullyTranslated: true
---
# コンテンツエクスプローラ – メタデータビューv2

[コンテンツエクスプローラ][content-explorer]のメタデータビューを使用すると、メタデータに基づいてファイルやフォルダを表示できます。

## 概要

メタデータビュー`v2`は、Box Content Explorer UI Elementの元のメタデータビューのデザインを根本から変更したもので、メタデータ駆動型ワークフローに合わせて合理化されたインターフェースが導入されています。主な機能には、メタデータフィールドのタイプごとに専用のUIを備えたフィルタおよび編集用のインターフェース、リストビューとグリッドビューを使用した柔軟な表示オプション、ページネーションのサポートなどがあります。

![メタデータビュー](./images/explorer-metadata-v2.png)

## 前提条件

コンテンツエクスプローラのメタデータビュー`v2`を実装する前に、以下を準備できていることを確認してください。

* `box-ui-elements`パッケージ`v24.0.0`以上、React `v18.0.0`、`Node.js` `v18.0.0`以上
* 適切なCORS設定を含むBox Platformアプリ
* 有効な[開発者トークン][developer-token]
* 対象のフォルダまたはファイルに適用されている構成済みのメタデータテンプレート。[APIを使用したテンプレートの作成][creating-templates-api]または[管理コンソールを使用したテンプレートの作成][creating-templates-ui]を確認してください。

<Message type="tip">

必ずカスケードポリシーを有効にするようにしてください。詳細な手順については、[テンプレートのカスタマイズと適用の手順][apply-templates]を参照してください。

</Message>

## インターフェースの領域

メタデータビューのインターフェースは、以下の領域で構成されています。

* **ヘッダー** – 現在のビューのタイトル、ナビゲーション、コンテキストに応じた情報 (選択数など) が表示されます。ヘッダーの値は、`title`プロパティで指定できます。定義されていない場合は、デフォルトで、`ancestor_folder_id`で指定されているフォルダ名に設定されます。
* **操作バー** – 各メタデータフィールドのフィルタチップ、並べ替えオプション、表示モードの切り替えボタン (リストまたはグリッド) が含まれています。
* **ページネーションのフッター** – \[**前へ**] および \[**次へ**] ナビゲーションボタンとページインジケータが提供されます。

## メタデータビューの表示

コンテンツエクスプローラのメタデータビューを表示するには、以下のプロパティが必要です。

| プロパティ                                     | 説明                                                                          |
| ----------------------------------------- | --------------------------------------------------------------------------- |
| `token`                                   | 開発者コンソールで生成された開発者トークン。                                                      |
| `title`                                   | コンポーネント全体のタイトル。定義されていない場合は、デフォルトで、`ancestor_folder_id`で指定されているフォルダ名が設定されます。 |
| `defaultView`                             | `metadata`に設定する必要があります。                                                     |
| `features.contentExplorer.metadataViewV2` | メタデータビュー (v2) を有効にするには、trueに設定する必要があります。                                    |
| `metadataQuery`                           | [メタデータクエリAPI][md-queries]のスキーマに一致するメタデータクエリのリクエスト本文。                        |
| `metadataViewProps`                       | コンポーネントの構成。構成の詳細については、`metadataViewProps`オブジェクトを参照してください。                   |
| `columns`                                 | メタデータテーブルの列の構造と動作を定義します。詳細については、列を参照してください。                                 |

ニーズや設定に応じて、Box UI Elementsは、Vanilla JavaScriptまたはReactとともに使用できます。インストールの詳細については、[インストール][installation]ガイドを参照してください。

<Message type="notice">

**大文字で記述された文字列は、カスタム値に置き換える必要があります。**

</Message>

### Vanilla JavaScriptのコードスニペット

```js
const contentExplorer = new Box.ContentExplorer();

contentExplorer.show(FOLDER_ID, ACCESS_TOKEN, {
  container: ".container",
  defaultView: "metadata",
  // metadataQuery must match the query files/folders by metadata API body request:
  // <https://developer.box.com/reference/post-metadata-queries-execute-read/>
  metadataQuery: {
    from: "METADATA_SCOPE.TEMPLATE_KEY", // For example from: "enterprise_123456789.templatename" where the number is the enterprise_123456789 is metadata template scope)
    ancestor_folder_id: "FOLDER_ID"
    // Metadata fields and values pulled to the component
    fields: [
        "metadata.TEMPLATE_SCOPE.TEMPLATE_KEY.FIELD_KEY1",
        "metadata.TEMPLATE_SCOPE.TEMPLATE_KEY.FIELD_KEY2",
        "metadata.TEMPLATE_SCOPE.TEMPLATE_KEY.FIELD_KEY3",  // For example "metadata.enterprise_123456789.templatename.date"
        ...
    ]
    // Optional for filtering data with specific metadata value
    query: "METADATA_FIELD_KEY = :arg1",
    query_params: { arg1: "METADATA_FIELD_VALUE" },
  },
  features: {
    contentExplorer: {
      metadataViewV2: true, // Required for enabling V2
    },
  },
 // NEW dynamic column configuration
  metadataViewProps: {
    columns // Required - for details see section below
    ...
  }
});

```

### Reactのコードスニペット

```js
import React from 'react';
import { IntlProvider } from 'react-intl';
import ContentExplorer from "box-ui-elements/es/elements/content-explorer"

// Fill with custom values of your metadata template
// You can use this endpoint to get all needed values: https://developer.box.com/reference/get-metadata-templates-id-id-schema/
const metadataScopeAndKey = `${METADATA_TEMPLATE_SCOPE}.${METADATA_TEMPLATE_KEY}`;
const metadataFieldNamePrefix = `metadata.${metadataScopeAndKey}`;
const folderID = "FOLDER_ID"

const metadataQuery = {
   // Check this endpoint for more details on query structure:
   // https://developer.box.com/reference/post-metadata-queries-execute-read/
   from: metadataScopeAndKey,
   ancestor_folder_id: folderID,
   fields: [
      "metadata.METADATA_SCOPE.TEMPLATE_KEY.METADATA_FIELD_KEY1",
      "metadata.METADATA_SCOPE.TEMPLATE_KEY.METADATA_FIELD_KEY2",  // For example "metadata.enterprise_123456789.templatename.date"
      ...
   ]
};

// Required - for details see section below
const columns = [
   {
      textValue: "METADATA_FIELD_DISPLAY_NAME1", // or our your custom value
      id: `${metadataFieldNamePrefix}.${METADATA_FIELD_KEY1}`,
      type: field.type,
      allowsSorting: true,
      minWidth: 150,
      maxWidth: 150,
   },
   {
      textValue: "METADATA_FIELD_DISPLAY_NAME2", // or our your custom value
      id: `${metadataFieldNamePrefix}.${METADATA_FIELD_KEY2}`,
      type: field.type,
      allowsSorting: true,
      minWidth: 150,
      maxWidth: 150,
   },
   ...
];

const componentProps = {
 features: {
   contentExplorer: {
       metadataViewV2: true,
   },
 },
 metadataQuery,
 metadataViewProps: {
   columns
 },
};

const ContentExplorerContainer = () => {
 const { features, metadataQuery, metadataViewProps } = componentProps;
 // Store token in a secure way
 return (
   <IntlProvider locale="en">
     <ContentExplorer
       token={TOKEN}
       defaultView="metadata"
       features={features}
       metadataQuery={metadataQuery}
       metadataViewProps={metadataViewProps}
     />
   </IntlProvider>
 );
};

export default ContentExplorerContainer;

```

## 列

列プロパティでは、メタデータテーブルの列の構造と動作を定義します。

| プロパティ           | 型       | 必須  | 説明                                                                         |
| --------------- | ------- | --- | -------------------------------------------------------------------------- |
| `id`            | string  | はい  | 次の形式のメタデータフィールド識別子: `metadata.<scope>.<templateKey>.<field>`               |
| `textValue`     | string  | はい  | 列ヘッダーの表示名。                                                                 |
| `type`          | string  | はい  | Boxメタデータフィールドのタイプ (`string`、`number`、`date`、`singleSelect`、`multiSelect`)。 |
| `allowsSorting` | boolean | いいえ | 列ヘッダーの並べ替えを有効にします。                                                         |
| `minWidth`      | number  | いいえ | 列の幅の最小値 (ピクセル単位)。                                                          |
| `maxWidth`      | number  | いいえ | 列の幅の最大値 (ピクセル単位)。                                                          |

## 機能

### 行の選択の有効化

個々の行の選択を有効化できます。1行以上が選択されると、ヘッダーが更新され、選択記述子とメタデータ編集ボタンが表示されます。これにより、ユーザーは、単一の操作または一括操作を実行できます。行の選択の範囲は、ページ割りされたコンテンツに限定されます。

![行の選択](./images/explorer-select.png)

選択機能を有効にするには、`metadataViewProps`オブジェクト内で`isSelectionEnabled`プロパティを`true`に設定します。

```js
const contentExplorer = new Box.ContentExplorer();

contentExplorer.show(FOLDER_ID, ACCESS_TOKEN, {
 ...
 metadataViewProps: {
   columns,
   isSelectionEnabled: true
 },
});

```

### メタデータ値の編集

1つ以上の項目が選択されると、コンポーネントのヘッダーには、選択した数が表示され、\[**メタデータ**] ボタンがアクティブになります。\[**メタデータ**] ボタンをクリックすると、サイドバーが開き、ユーザーは、選択した項目のメタデータを表示したり編集したりできます。

![メタデータの編集](./images/explorer-edit.png)

この動作は、デフォルトで有効になっています。つまり、有効にするために、追加のプロパティは必要ありません。

### メタデータのフィルタ

ファイルタイプで項目にフィルタをかけたり、フォルダにフィルタをかけたり、Boxの[メタデータテンプレート][metadata-guides]で指定されたメタデータフィールド値でフィルタをかけたりできます。

フィルタチップは、デフォルトで有効になっています。\[**すべてのフィルタ**] チップを無効にするには、`actionBarProps`オブジェクトの`isAllFiltersDisabled`を`true`に設定します。

```js
const contentExplorer = new Box.ContentExplorer();

contentExplorer.show(FOLDER_ID, ACCESS_TOKEN, {
 ...
metadataViewProps: {
    columns,
    isSelectionEnabled: true,
    actionBarProps: { 
        isAllFiltersDisabled: true,
    }
  },
});

```

<!-- Add info about custom and bulk actions -->

### リストビューとグリッドビューの切り替え

グリッドビューは、操作バーにある表示モード切り替えボタンからデフォルトで利用可能です。グリッドビューがアクティブな場合は、ズームコントロールが使用可能になります。選択、フィルタ、編集などのその他の機能もこのビュー内で使用できます。

![グリッドビュー](./images/explorer-grid.png)

グリッドビューを無効にするには、`metadataViewProps`オブジェクト内で`actionBarProps.isViewModeButtonDisabled`を`true`に設定します。

```js
const contentExplorer = new Box.ContentExplorer();

contentExplorer.show(FOLDER_ID, ACCESS_TOKEN, {
 ...
 metadataViewProps: {
   columns,
   actionBarProps: {
     isViewModeButtonDisabled: true,
   }
 },
});

```

### ページネーション

このUI Elementでは、フッターが常に表示された状態で、マーカーベースのページネーションのみが使用されます。オフセットまたはページ番号は設定できません。ユーザーが移動する際は \[**前へ**] と \[**次へ**] しか使用できません。無制限のスクロールはサポートされていません。

## v1からv2への移行

### Npmパッケージ

<Message type="notice">

コンテンツエクスプローラのメタデータビューの`v1`は公式サポートが終了しました。`v1`は`24.0.0`パッケージで引き続き利用できますが、バグ修正や新機能は提供されなくなります。最新の機能が提供されるようにするには、移行ガイドに従い、コンテンツエクスプローラの`v2`のメタデータビューに切り替えてください。

</Message>

`box-ui-elements`パッケージを使用してプロジェクト内で`v1`からv2に移行するには:

1. `box-ui-elements`パッケージのバージョンをバージョン`24.0.0`以上にアップグレードします。
2. `box-ui-elements`ピア依存関係が依存関係として`package.json`ファイルに追加されていることを確認します。これは、パッケージマネージャを使用してインストールします。
3. `features`フラグを追加して、強化されたメタデータビューを有効にします。

```js
features: {
   contentExplorer: {
       metadataViewV2: true
   }
}

```

4. メタデータの`fieldToShow`の構成を新しい列オブジェクトに変換します。Boxメタデータテンプレートの値に対応するフィールドタイプを追加します。列の配列を新しい`metadataViewProps`オブジェクトに渡します。

```js
const columns = [
    {
       textValue: "METADATA_FIELD_DISPLAY_NAME", // Altenratively pass a custom value
       id: `${metadataFieldNamePrefix}.${METADATA_FIELD_KEY}`,
       type: field.type,
       allowsSorting: true, // Optional
       minWidth: 150, // Optional; the default value is 220
       maxWidth: 150, // Optional; the default value is 220
    },
    ...
];

```

5. 必要に応じて、このガイドで説明されている追加機能を構成します。

### CDN

CDNのインポートを使用してプロジェクト内で`v1`からv2に移行するには:

1. CDNリンクにバージョン`24.0.0`以上のパッケージバージョンが含まれていることを確認します。
2. `features`フラグを追加して、強化されたメタデータビューを有効にします。

```js
features: {
   contentExplorer: {
       metadataViewV2: true
   }
}

```

3. メタデータの`fieldToShow`の構成を新しい列オブジェクトに変換します。Boxメタデータテンプレートの値に対応するフィールドタイプを追加します。列の配列を新しい`metadataViewProps`オブジェクトに渡します。

```js
const columns = [
    {
       textValue: "METADATA_FIELD_DISPLAY_NAME", // Altenratively pass a custom value
       id: `${metadataFieldNamePrefix}.${METADATA_FIELD_KEY}`,
       type: field.type,
       allowsSorting: true, // Optional
       minWidth: 150, // Optional; the default value is 220
       maxWidth: 150, // Optional; the default value is 220
    },
    ...
];

```

4. 必要に応じて、このガイドで説明されている追加機能を構成します。

[content-explorer]: g://embed/ui-elements/explorer/

[terminology]: g://metadata/#metadata-terminology

[creating-templates-api]: g://metadata/templates/create

[creating-templates-ui]: https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates

[developer-token]: g://authentication/tokens/developer-tokens/

[metadata-guides]: g://metadata/templates/

[md-queries]: e://post-metadata-queries-execute-read/

[apply-templates]: https://support.box.com/hc/en-us/articles/360044196173-Using-Metadata

[installation]: g://embed/ui-elements/installation
