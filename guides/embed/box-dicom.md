---
rank: 1
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-dicom
category_id: embed
subcategory_id: null
is_index: false
id: embed/box-dicom
type: guide
total_steps: 2
sibling_id: embed
parent_id: embed
next_page_id: embed/box-embed
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-dicom.md
fullyTranslated: true
---
# Box DICOM

開発者はBox DICOM Viewerを使用すると、X線、CTスキャン、超音波、MRIなどのDICOMファイルをBoxで安全に保存、表示、共有できるうえに、独自のアプリケーションにこのビューアーを埋め込むこともできます。

<ImageFrame>

![Box DICOM Viewer](./box-dicom.png)

</ImageFrame>

Box DICOM Viewerは、FDAの認可を得た、診断表示用のクラスII医療機器です。これはゼロフットプリントのHTML5ビューアーで、`<iframe>`またはJavaScript SDKによってアプリケーションに埋め込むことができます。

Box DICOM Viewerをアプリケーションに埋め込みたい開発者の方は、[メールでお問い合わせ][email]ください。

## 最新のバージョン

Box DICOMの最新のバージョンは以下のとおりです。

* バージョン: `1.3.5`
* ロケール: `en-US`
* JavaScript: [`boxdicom.com/dist/1.3.5/dicom-en-US.min.js`][js]
* CSS: [`boxdicom.com/dist/1.3.5/dicom.min.css`][css]

<Message warning>

# `v1.3.0`以降への更新

`v1.3.0`より前のバージョンのDICOM Viewerを使用している場合は、`v1.3.0`以降にアップグレードしてください。

</Message>

## サポートされているロケール

別のロケールを使用するには、上記のダウンロードURL (JavaScript) 内の`en-US`を、サポートされている以下のロケールのいずれかに置き換えてください。

|         |         |         |         |
| ------- | ------- | ------- | ------- |
| `en-AU` | `en-CA` | `en-GB` | `en-US` |
| `da-DK` | `de-DE` | `es-ES` | `fi-FI` |
| `fr-CA` | `fr-FR` | `hu-HU` | `it-IT` |
| `ja-JP` | `ko-KR` | `nb-NO` | `nl-NL` |
| `pl-PL` | `pt-BR` | `ru-RU` | `sv-SE` |
| `tr-TR` | `zh-CN` | `zh-TW` |         |

## `<iframe>`埋め込み

Box DICOM Viewerは、HTML `iframe`に埋め込むか、直接リンクすることができます。Box DICOM ViewerのURLパターンは以下のとおりです。

```sh
https://cloud.app.box.com/dicom_viewer/{FILE_ID}
```

ファイルIDは、APIまたはBoxウェブアプリのユーザーインターフェイスから取得できます。

### `<iframe>`のパラメータ

以下のオプションは、クエリの文字列パラメータとして指定できます。

<!-- markdownlint-disable line-length -->

|               |                                                     |
| ------------- | --------------------------------------------------- |
| `accessToken` | Box APIアクセストークン                                     |
| `sharedName`  | フォルダへのグローバルリンク                                      |
| `toolbar`     | 最上部のツールバーの表示と非表示を切り替えるbooleanパラメータ。デフォルトは`true`です。  |
| `overlays`    | テキストオーバーレイの表示と非表示を切り替えるbooleanパラメータ。デフォルトは`true`です。 |
| `worklist`    | 横にあるワークリストの表示と非表示を切り替えるbooleanパラメータ。デフォルトは`true`です。 |

<!-- markdownlint-enable line-length -->

URLが作成されたら、`iframe`に埋め込むか、または直接リンクすることができます。

`iframe`埋め込みの例を以下に示します。

```html
<iframe width="800"
  height="600"
  src="https://cloud.app.box.com/dicom_viewer/12345?toolbar=true"
  allowfullscreen
>
  <p>Box DICOM Viewer</p>
</iframe>
```

<Message warning>

# `allowfullscreen`は必須です。`allowfullscreen`属性は必須です。

Box DICOM Viewerのフルスクリーン機能が正常に動作するために必要です。

</Message>

## JavaScript SDK

### デモ

<!-- markdownlint-disable line-length -->

<iframe width="100%" height="550" scrolling="no" title="Box DICOM Viewer JS SDKのデモ" src="//codepen.io/box-platform/embed/VbPvNb/?height=550&theme-id=27216&default-tab=result&embed-version=2" frameborder="no" allowtransparency allowfullscreen style="width: 100%;">

</iframe>

<!-- markdownlint-enable line-length -->

### クイックスタートの例

<!-- markdownlint-disable line-length -->

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Box DICOM Viewer</title>
    <link
      rel="stylesheet"
      href="https://boxdicom.com/dist/1.3.5/dicom.min.css"
    />
    <script src="https://boxdicom.com/dist/1.3.5/dicom-en-US.min.js"></script>
  </head>

  <body>
    <div class="box-dicom-viewer-body"></div>
    <script>
      box.dicom.createViewer(document.querySelector(".box-dicom-viewer-body"), {
        accessToken: "ACCESS_TOKEN_HERE",
        studies: [{ fileId: "FILE_ID_HERE" }]
      });
    </script>
  </body>
</html>
```

<!-- markdownlint-enable line-length -->

### JS SDKのパラメータ

ビューアーを作成するための主な関数は`box.dicom.createViewer()`です。適切な定義は次のとおりです。

```js
box.dicom.createViewer(element, config);
```

<!-- markdownlint-disable line-length -->

|           |                                                            |
| --------- | ---------------------------------------------------------- |
| `element` | ビューアーの初期化先のDOM要素。文字列 (DOM要素ID) またはElement (DOM要素) を指定できます。 |
| `config`  | 構成オブジェクト。                                                  |

`config`は、プロパティの形式で多くのオプションを指定できるJavaScriptオブジェクトです。

|                    |                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------ |
| `accessToken`      | ユーザーのアクセストークン。`.boxdicom`ファイルおよび個々の`.dcm`ファイルすべてへのアクセス権限が必要です。                       |
| `studies`          | 読み込むスタディの配列。各スタディはオブジェクトです。各スタディオブジェクトは、BoxファイルID`("fileID": "123456")`でスタディを指定できます。 |
| `overlays`         | オーバーレイの構成の詳細 (省略可)。                                                                  |
| `toolbar`          | ツールバーの構成の詳細 (省略可)。                                                                   |
| `worklist`         | ワークリストの構成の詳細 (省略可)。                                                                  |
| `hangingProtocols` | スタディのレイアウトと表示の設定を制御するハンギングプロトコル (省略可)。                                               |

<!-- markdownlint-enable line-length -->

visibleプロパティを使用して、オーバーレイを有効/無効にすることができます。

```json
{
  "accessToken": "asdf",
  "studies": [
    /* ... */
  ],
  "overlays": {
    "visible": false
  }
}
```

fieldsプロパティを使用して、表示されるフィールドを制御できます。

```json
{
  "accessToken": "asdf",
  "studies": [
    /* ... */
  ],
  "overlays": {
    "visible": true,
    "fields": [
      box.dicom.core.Tag.PatientID,
      box.dicom.core.Tag.StudyDate,
      box.dicom.core.Tag.AdditionalPatientHistory,
      box.dicom.core.Tag.PatientAge,
      box.dicom.core.Tag.PatientSex,
      box.dicom.core.Tag.StudyDescription,
      box.dicom.core.Tag.SeriesDescription,
      box.dicom.core.Tag.Modality
    ]
  }
}
```

visibleプロパティを使用して、ツールバーの表示/非表示を切り替えることができます。

```json
{
  "accessToken": "asdf",
  "studies": [
    /* ... */
  ],
  "toolbar": {
    "visible": false
  }
}
```

buttonsプロパティを使用して、表示されるボタンを制御できます。

```json
{
  "accessToken": "asdf",
  "studies": [
    /* ... */
  ],
  "toolbar": {
    "visible": true,
    "buttons": [
      box.dicom.viewer.Toolbar.Buttons.Logo,
      box.dicom.viewer.Toolbar.Buttons.Separator,
      box.dicom.viewer.Toolbar.Buttons.Stack,
      box.dicom.viewer.Toolbar.Buttons.WindowLevel,
      box.dicom.viewer.Toolbar.Buttons.Annotate
    ]
  }
}
```

visibleプロパティを使用して、ワークリストの表示/非表示を切り替えることができます。

```json
{
  "accessToken": "asdf",
  "studies": [
    /* ... */
  ],
  "worklist": {
    "visible": false
  }
}
```

## DICOMインポートのJavaScript SDK

Box DICOMインポートツールは、フォルダとサブフォルダをインテリジェントにクロールし、DICOMデータを見つけます。実行可能ファイルなどの不要なコンテンツがアップロードされないようにDICOM以外のものを認識できます。結果のファイルは、患者とスタディの詳細別に整理されます。

Box DICOMインポートウィジェットは、JavaScript SDKを使用してアプリケーションに埋め込むことができます。

```js
box.dicom.createImportWidget("my-container", {
  accessToken: "MY_ACCESS_TOKEN",
  folderId: "MY_FOLDER_ID"
});
```

「success」コールバックの使用方法の例を以下に示します。

```js
box.dicom.createImportWidget("my-dicom-import-container", {
  folderId: "123",
  accessToken: "abc",
  success: function(e) {
    console.log("Success!");
    console.log(
      "Patient Name = " +
        e
          .getStudy()
          .getPatientName()
          .getDisplayString()
    );
    console.log("Folder ID= " + e.getStudy().getFolderId());
    console.log("File ID     = " + e.getStudy().getFileId());
  }
});
```

### 使用可能なオーバーレイフィールド

`box.dicom.core.Tag.AdditionalPatientHistory`,
`box.dicom.core.Tag.BitsAllocated`, `box.dicom.core.Tag.BitsStored`,
`box.dicom.core.Tag.BluePaletteColorLookupTableData`,
`box.dicom.core.Tag.BluePaletteColorLookupTableDescriptor`,
`box.dicom.core.Tag.BodyPartExamined`, `box.dicom.core.Tag.Columns`,
`box.dicom.core.Tag.CompensatorPixelSpacing`,
`box.dicom.core.Tag.GreenPaletteColorLookupTableData`,
`box.dicom.core.Tag.GreenPaletteColorLookupTableDescriptor`,
`box.dicom.core.Tag.FrameOfReferenceUID`, `box.dicom.core.Tag.HighBit`,
`box.dicom.core.Tag.ImageOrientationPatient`,
`box.dicom.core.Tag.ImagePlanePixelSpacing`,
`box.dicom.core.Tag.ImagePositionPatient`,
`box.dicom.core.Tag.ImagerPixelSpacing`, `box.dicom.core.Tag.InstanceNumber`,
`box.dicom.core.Tag.InstitutionName`, `box.dicom.core.Tag.Item`,
`box.dicom.core.Tag.ItemDelimitationItem`,
`box.dicom.core.Tag.ModalitiesInStudy`, `box.dicom.core.Tag.Modality`,
`box.dicom.core.Tag.NumberOfFrames`, `box.dicom.core.Tag.OverlayColumns`,
`box.dicom.core.Tag.OverlayData`, `box.dicom.core.Tag.OverlayRows`,
`box.dicom.core.Tag.PatientAge`, `box.dicom.core.Tag.PatientBirthDate`,
`box.dicom.core.Tag.PatientName`, `box.dicom.core.Tag.PatientID`,
`box.dicom.core.Tag.PatientSex`, `box.dicom.core.Tag.PhotometricInterpretation`,
`box.dicom.core.Tag.PixelData`, `box.dicom.core.Tag.PixelRepresentation`,
`box.dicom.core.Tag.PixelSpacing`,
`box.dicom.core.Tag.PresentationPixelSpacing`,
`box.dicom.core.Tag.PrinterPixelSpacing`, `box.dicom.core.Tag.ProtocolName`,
`box.dicom.core.Tag.RedPaletteColorLookupTableData`,
`box.dicom.core.Tag.RedPaletteColorLookupTableDescriptor`,
`box.dicom.core.Tag.ReferringPhysicianName`,
`box.dicom.core.Tag.RescaleIntercept`, `box.dicom.core.Tag.RescaleSlope`,
`box.dicom.core.Tag.Rows`, `box.dicom.core.Tag.SequenceDelimitationItem`,
`box.dicom.core.Tag.SeriesDescription`, `box.dicom.core.Tag.SeriesInstanceUID`,
`box.dicom.core.Tag.SeriesNumber`, `box.dicom.core.Tag.SOPInstanceUID`,
`box.dicom.core.Tag.SpecificCharacterSet`, `box.dicom.core.Tag.StudyDate`,
`box.dicom.core.Tag.StudyDescription`, `box.dicom.core.Tag.StudyInstanceUID`,
`box.dicom.core.Tag.TransferSyntaxUID`, `box.dicom.core.Tag.WindowCenter`,
`box.dicom.core.Tag.WindowCenterWidthExplanation`,
`box.dicom.core.Tag.WindowWidth`

### 使用可能なツールバーオプション

`box.dicom.viewer.Toolbar.Buttons.Log`,
`box.dicom.viewer.Toolbar.Buttons.Separato`,
`box.dicom.viewer.Toolbar.Buttons.Stac`,
`box.dicom.viewer.Toolbar.Buttons.WindowLeve`,
`box.dicom.viewer.Toolbar.Buttons.Zoo`, `box.dicom.viewer.Toolbar.Buttons.Pa`,
`box.dicom.viewer.Toolbar.Buttons.ThreeDCurso`,
`box.dicom.viewer.Toolbar.Buttons.Annotate`,
`box.dicom.viewer.Toolbar.Buttons.Separato`,
`box.dicom.viewer.Toolbar.Buttons.Gri`,
`box.dicom.viewer.Toolbar.Buttons.Overlay`,
`box.dicom.viewer.Toolbar.Buttons.More`

[email]: mailto:dicom-sales@box.com

[js]: https://boxdicom.com/dist/1.3.5/dicom-en-US.min.js

[css]: https://boxdicom.com/dist/1.3.5/dicom.min.css
