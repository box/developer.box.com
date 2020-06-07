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
  https://github.com/box/developer.box.com/blob/default/content/guides/embed/box-dicom.md
---

# Box DICOM

The Box DICOM Viewer allows developers to store, view and share DICOM files like
X-rays, CT scans, Ultrasounds and MRIs securely with Box while still embedding
the viewer into their own application.

<ImageFrame>

![Box DICOM viewer](./box-dicom.png)

</ImageFrame>

The Box DICOM Viewer is an FDA cleared Class II Medical Device for diagnostic
viewing. It is a zero-footprint HTML5 viewer and can be embedded into an
application in an `<iframe>` or with a Javascript SDK.

If you are a developer and want to embed the Box DICOM Viewer into your
application, please [email us at for more information][email].

## Current Version

The current version for Box DICOM is

- Version: `1.3.5`
- Locale: `en-US`
- Javascript: [`boxdicom.com/dist/1.3.5/dicom-en-US.min.js`][js]
- CSS: [`boxdicom.com/dist/1.3.5/dicom.min.css`][css]

<Message warning>

# Update to `v1.3.0` or higher

If you are using a version of the DICOM Viewer prior to `v1.3.0`, please
upgrade to `v1.3.0` or higher.

</Message>

## Supported Locales

To use a different locale, replace `en-US` in the Javascript download URL above
with any of the following supported locales:

|         |         |         |         |
| ------- | ------- | ------- | ------- |
| `en-AU` | `en-CA` | `en-GB` | `en-US` |
| `da-DK` | `de-DE` | `es-ES` | `fi-FI` |
| `fr-CA` | `fr-FR` | `hu-HU` | `it-IT` |
| `ja-JP` | `ko-KR` | `nb-NO` | `nl-NL` |
| `pl-PL` | `pt-BR` | `ru-RU` | `sv-SE` |
| `tr-TR` | `zh-CN` | `zh-TW` |         |

## `<iframe>` Embed

The Box DICOM viewer can be embedded in a HTML `iframe` or linked to directly.
The URL pattern for the Box DICOM Viewer is as follows.

```sh
https://cloud.app.box.com/dicom_viewer/{FILE_ID}
```

The File ID can be obtained from the API or from the Box web application user
interface.

### `<iframe>` Parameters

The following options can be provided as query string parameters:

<!-- markdownlint-disable line-length -->

|               |                                                                            |
| ------------- | -------------------------------------------------------------------------- |
| `accessToken` | A Box API access token                                                     |
| `sharedName`  | A global link to a folder                                                  |
| `toolbar`     | A boolean parameter to show or hide the top toolbar. Default is `true`.    |
| `overlays`    | A boolean parameter to show or hide the text overlays. Default is `true`.  |
| `worklist`    | A boolean parameter to show or hide the side worklist. Default is `true`.  |

<!-- markdownlint-enable line-length -->

After the URL has been constructed, it can be embedded in an `iframe` or be
linked to directly.

The following is an example of an `iframe` embed.

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

# `allowfullscreen` is required The `allowfullscreen` attribute is required
for the Box DICOM viewer's full-screen function to work properly.

</Message>

## Javascript SDK

### Demo

<!-- markdownlint-disable line-length -->

<iframe
width="100%"
height="550"
scrolling="no"
title="Box DICOM JS SDK Viewer Demo"
src="//codepen.io/box-platform/embed/VbPvNb/?height=550&theme-id=27216&default-tab=result&embed-version=2"
frameborder="no"
allowtransparency="true"
allowfullscreen="true"
style="width: 100%;"
>

</iframe>

<!-- markdownlint-enable line-length -->

### Quick Start Example

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

### JS SDK Parameters

The primary function to create a viewer is `box.dicom.createViewer()`. The proper
definition is:

```js
box.dicom.createViewer(element, config);
```

<!-- markdownlint-disable line-length -->

|           |                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `element` | The DOM element to initialize the viewer into. Can be either a string (a DOM element ID) or an Element (a DOM element). |
| `config`  | The configuration object.                                                                                               |

The `config` is a Javascript object with many possible options in the form of properties.

|                    |                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `accessToken`      | The access token for the user. Must have access to the `.boxdicom` file AND all of the individual `.dcm` files.                        |
| `studies`          | An array of studies to load. Each study is an object. Each study object can specify a study by the Box File ID `("fileID": "123456")`. |
| `overlays`         | Optional overlay configuration details.                                                                                                |
| `toolbar`          | Optional toolbar configuration details.                                                                                                |
| `worklist`         | Optional worklist configuration details.                                                                                               |
| `hangingProtocols` | Optional hanging protocols to control the layout and display settings of the study.                                                    |

<!-- markdownlint-enable line-length -->

You can enable / disable overlays using the visible property:

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

You can control which fields are displayed using the fields property:

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

You can show / hide the toolbar using the visible property.

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

You can control which buttons are displayed using the buttons property:

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

You can show / hide the worklist using the visible property.

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

## DICOM Import Javascript SDK

The Box DICOM Import tool intelligently crawls through folders and subfolders to
find your DICOM data. It can recognize non-DICOM to avoid uploading unwanted
content such as executables. The resulting files are organized by patient and
study details.

The Box DICOM Import widget can be embedded in your applications using the
JavaScript SDK.

```js
box.dicom.createImportWidget("my-container", {
  accessToken: "MY_ACCESS_TOKEN",
  folderId: "MY_FOLDER_ID"
});
```

Here is an example of how to use the "success" callback:

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

### Available Overlay Fields

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

### Available Toolbar Options

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

[email]: dicom-sales@box.com
[js]: https://boxdicom.com/dist/1.3.5/dicom-en-US.min.js
[css]: https://boxdicom.com/dist/1.3.5/dicom.min.css
