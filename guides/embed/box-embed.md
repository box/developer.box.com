---
rank: 2
related_endpoints: []
related_guides: []
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-embed
category_id: embed
subcategory_id: null
is_index: false
id: embed/box-embed
type: guide
total_steps: 1
sibling_id: embed
parent_id: embed
next_page_id: embed
previous_page_id: ''
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-embed.md
---
# Box Embed

Box Embed is a HTML-based framework that allows embedding the entire
Box Web App experience in a custom-made application. Box Embed provides the ability to upload, search, comment, share, tag, and edit files using Box Edit.

## Before you start

To create a widget, you need to:

* Set an embeddable element, such as a **folder**, **file**, **Hub**, **note**, or **app** for sharing. 
* Have at least **Viewer** [permissions][5].

## Using web app

To fetch the Box Embed widget code from the Box web app, perform the following steps.

### Files and folders

1. Navigate to the chosen file or folder. 
2. Click on the ellipsis next to the folder. 
3. Go to  **More Actions** >  **Embed Widget**.

### Hubs

1. Navigate to the chosen Hub. 
2. Click on the ellipsis menu in the top right corner. 
3. Click **Embed Hub**.

### Notes

1. Navigate to the chosen Box Note.
2. Click on the ellipsis menu.
3. Click **Embed Box Note**.

### Apps

1. Navigate to the chosen Box App or Box App View.
2. Click on the ellipsis menu.
3. Click **Embed**.

<ImageFrame border>

![Box Embed](./box-embed-new.png)

</ImageFrame>

In the next step, configure the parameters of an embeddable element.

| Files | Folders  | Hubs  | Notes | Apps |
|----------|----------|------------------------| --- | --- |
| Size of the widget.| Size of the widget, sorting of the files in a folder, hiding the navigation path and sidebar. | Size of the widget,  hiding the parent navigation path and sidebar. | Size of the widget, skipping cloud game (results in note being in read only mode), hiding notes navigation. | Size of the widget. |

<ImageFrame border>

![Box Embed Configuration](./embed-configuration.png)

</ImageFrame>

When you are done customizing the embed widget, copy
and paste the embed code into your site or web application.

## Programmatically

If you want to customize Box Embed even further, you can do it programmatically. The format for an embed snippet is as follows:

```html
<iframe
  src="https://{custom_domain}.app.box.com/embed/s/{shared link value}?view={list or icon}&sortColumn={name, date, or size}&sortDirection=ASC"
  width="{pixels}"
  height="{pixels}"
  frameborder="0"
  allowfullscreen
  webkitallowfullscreen
  msallowfullscreen>
</iframe>
```

### Browser permissions

Starting with Chrome 142 and Edge 143, add the following attribute to the `<iframe>` element to enable clipboard and local network access:

```html
allow="local-network-access; clipboard-read; clipboard-write"
```

Without this attribute, embedded Box content might not work correctly with Tools, Device Trust, or the clipboard copy button.

#### Example

```html
<iframe 
  src="https://app.box.com/embed/s/1234567890abcdefgheijklmsopqrs?sortColumn=date"   
  width="800" 
  height="600" 
  frameborder="0" 
  allow="local-network-access; clipboard-read; clipboard-write" 
  allowfullscreen 
  webkitallowfullscreen 
  msallowfullscreen>
</iframe>  
```

<Message type='notice'>

The Embed Widget Link Generation Modal automatically includes this parameter in the generated code.

</Message>

### Finding your shared link value

The first step to building an embed `iframe` programmatically is to generate
or find the value for the shared link. One way to find this value is by
using the Box web app.

<ImageFrame border>

![Box Share](./embed-share.png)

</ImageFrame>

Another way is to create a shared link with API using the
[`PUT /files/:file_id`][3] or [`PUT /files/:file_id`][4].

Then you can find this shared link value using the
[`GET /files/:id`][1] or [`GET /folders/:id`][2] endpoint and passing in the
query parameter `fields=shared_link`.

```curl
curl https://api.box.com/2.0/folders/12345?fields=shared_link \
    -H "authorization: Bearer ACCESS_TOKEN"
```

```json
"shared_link": {
  "url": "https://app.box.com/s/dsbJFzdO7qZxdfOHFzdO7qZxdfOH",
  "download_url": null,
  "vanity_url": null,
  ...
}
```

You can also set the page to Root Folder/All Files page. Set the URL to
`/folder/0` instead of the share link:
`<iframe src=“https://app.box.com/embed/folder/0”….></iframe>`

### Parameters

Next, you will want to choose your view customization options. The following is
a list of optional parameters you can configure.

|                       |                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------- |
| `hideHubsGallery` | Hide or show navigation chevron button to go back to Hubs gallery. Can be `true` or `false` (default).                         |
| `hideNavigationControls` | Hide or show navigation controls in Box Notes.|
| `showItemFeedActions` | Hide or show file comments or tasks. Can be `true` (default) or `false`.                         |
| `showParentPath`      | Hide or show the folder path in the header of the frame. Can be `true` or `false` (default). |
| `sortColumn`          | The order the files or folders are sorted in. Can be `name`, `date` (default), or `size`.    |
| `sortDirection`       | The sort direction of files or folders. Can be `ASC` (default) or `DESC`.                    |
| `view`                | The view type for your files or folders. Can be `list` (default) or `icon`. For logged-in users the view type from user preferences takes precedence.                  |
| `uxLite` | Show the limited content preview (Preview Light), with no cloud game. Works only for shared files and Box Notes. |

<Message type='notice'>

When you use `uxLite` with Box Notes, navigation controls are not displayed, regardless of the `hideNavigationControls` setting.

</Message>

All custom search parameters from the first-party app URL are passed to the embed widget modal and Content Preview.

### Full screen capabilities

To enable full screen capabilities for the Box Embed snippet, include one or more
of the following parameters if you want the object to be viewable in full screen
within an `<iframe>`:

* `allowfullscreen`
* `webkitallowfullscreen`
* `mozallowfullscreen`
* `oallowfullscreen`
* `msallowfullscreen`

## Expiring embed links

For files, another option is to call the [`GET /files/:id`][1]
and request an `expiring_embed_link` using the `fields` query parameter.

```curl
curl https://api.box.com/2.0/files/12345?fields=expiring_embed_link \
    -H "authorization: Bearer ACCESS_TOKEN"
```

```json
{
  "etag": "1",
  "expiring_embed_link": {
    "token": {
      "access_token": "1!rFppcinUwwwDmB4G60nah7z...",
      "expires_in": 3646,
      "restricted_to": [
        {
          "object": {
            "etag": "1",
            "file_version": {
              "id": "34567",
              "sha1": "1b8cda4e52cb7b58b354d8da0068908ecfa4bd00",
              "type": "file_version"
            },
            "id": "12345",
            "name": "Image.png",
            "sequence_id": "1",
            "sha1": "1b8cda4e52cb7b58b354d8da0068908ecfa4bd00",
            "type": "file"
          },
          "scope": "base_preview"
        },
        ...
      ],
      "token_type": "bearer"
    },
    "url": "https://cloud.app.box.com/preview/expiring_embed/...."
  },
  "id": "12345",
  "type": "file"
}
```

The `url` attribute can be used in an `<iframe>` to embed an auto expiring Box
Embed interface.

```html
<iframe
  src="YOUR-GENERATED-BOX-EMBED-LINK"
  width="{pixels}"
  height="{pixels}"
  frameborder="0"
  allowfullscreen
  webkitallowfullscreen
  msallowfullscreen
/>
```

### Parameters

Extra parameters can be added to this URL as well to customize the UI. To do so,
add the following parameters to the `url` as query parameters. The eventual URL
would look something like this.

```sh
https://app.box.com/preview/expiring_embed/[HASH]?[parameterName]=true
```

|                   |                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `showDownload`    | Shows the download button in the embedded header bar if the viewer has permissions to download the file. Document file types will also show a print button since print and download are governed by the same permissions. Defaults to `false`.                                                                                                                                                                                              |
| `showAnnotations` | Enables users with permission Preview and above to annotate document and image previews. Also shows annotations that are already on the document. To learn more about the file types that annotations is available on as well as the types of annotations, you can refer to our Annotations page. Annotations are available today on web browsers only. On mobile browsers, users will be able to view annotations but not create new ones. |

## Cloud game

The cloud game is a widget created to prevent [clickjacking][cloud-game].
It's shown for embedded sites that aren’t partner integrations.
In cloud game, user must drag a cloud to the correct location before an
interaction is allowed. It makes clickjacking difficult, as the
position of the cloud and its destination are randomly generated.

<ImageFrame border>

![Box Embed](./cloud-game.png)

</ImageFrame>

`postMessage()` is used on the iframe to retrieve both the embed and the
`showCloudGame` status. If embedded, `document.hasStorageAccess()` shows
if Box has access to cookies. If yes and the user is logged in, the cloud
game is displayed.
If the `showCloudGame` status is `false`, user is navigated to the login
page.

## Custom logo

Paid Box customers have the option to remove the Box logo in the file Preview.
To do so, visit the **Admin Console**, **Enterprise Settings**, **Custom
Setup** and toggle the **Embed widget customization** off to hide the Box
logo.

## Limitations

Box Embed is not optimized for mobile browsers and should not be used in web
experiences designed for mobile devices. Many UI elements, like the **download**
and **print** options might not show in mobile browsers.

<!-- i18n-enable localize-links -->

[logo]: https://support.box.com/hc/en-us/articles/360044193633-Customize-Your-Account-s-Branding
<!-- i18n-enable localize-links -->

[1]: e://get-files-id
[2]: e://get-folders-id
[3]: e://put-files-id--add-shared-link
[4]: e://put-folders-id--add-shared-link
[5]: https://support.box.com/hc/en-us/articles/360044196413-Understanding-Collaborator-Permission-Levels
[cloud-game]: https://support.box.com/hc/en-us/articles/360043691034-How-Does-Box-Prevent-Clickjacking