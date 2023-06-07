---
rank: 4
related_endpoints: []
related_guides:
  - tooling/sdks/salesforce
required_guides: []
related_resources: []
alias_paths: []
category_id: tooling
subcategory_id: tooling/salesforce-toolkit
is_index: false
id: tooling/salesforce-toolkit/ui-elements
type: guide
total_steps: 4
sibling_id: tooling/salesforce-toolkit
parent_id: tooling/salesforce-toolkit
next_page_id: ''
previous_page_id: tooling/salesforce-toolkit/flow-actions
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/tooling/salesforce-toolkit/ui-elements.md
fullyTranslated: true
---
# SalesforceのUI Elements

Box for Salesforce管理パッケージでは、[Content Picker][2]、[エクスプローラ][3]、[プレビュー][4]、[アップローダー][5]の[UI Elements][1]がLightningコンポーネントとして提供されます。これらのUI ElementsはLightningページまたはLightningフローで使用できます。

## Content Picker

Box for SalesforceのPickerで使用できる[オプション][6]は以下のとおりです。

* `folderId` - Lightningコンポーネントがレコードページにある場合は、デフォルトでレコードフォルダになります
* `chooseButtonLabel`
* `cancelButtonLabel`
* `canSetShareAccess`
* `canCreateNewFolder`
* `canUpload`
* `maxSelectable`

## コンテンツエクスプローラ

Box for Salesforceのエクスプローラで使用できる[オプション][7]は以下のとおりです。

* `folderId` - Lightningコンポーネントがレコードページにある場合は、デフォルトでレコードフォルダになります
* `canSetShareAccess`
* `canCreateNewFolder`
* `canUpload`
* `canPreview`
* `canDownload`
* `canDelete`
* `canRename`
* `canShare`

## コンテンツプレビュー

Box for Salesforceのプレビューで使用できる[オプション][8]は以下のとおりです。

* `fileId` ([ファイルIDの確認][9])
* **ファイルIDのAPIフィールド名** - Salesforce固有。レコードページでは、表示するファイルIDを保持するAPIフィールド名を使用できます

## コンテンツアップローダー

Box for Salesforceのアップローダーで使用できる[オプション][10]は以下のとおりです。

* `folderId` - Lightningコンポーネントがレコードページにある場合は、デフォルトでレコードフォルダになります
* `fileLimit`

[1]: g://embed/ui-elements

[2]: g://embed/ui-elements/picker

[3]: g://embed/ui-elements/explorer

[4]: g://embed/ui-elements/preview

[5]: g://embed/ui-elements/uploader

[6]: g://embed/ui-elements/picker/#options

[7]: g://embed/ui-elements/explorer/#options

[8]: g://embed/ui-elements/preview/#options

[9]: g://files/get

[10]: g://embed/ui-elements/uploader/#options
