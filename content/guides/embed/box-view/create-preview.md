---
rank: 2
related_guides:
  - embed/box-view/create-preview
required_guides:
  - embed/box-view/setup
  - embed/box-view/upload-file
  - embed/ui-elements/installation
  - embed/ui-elements/preview
alias_paths: []
---

# Create File Preview

Once a file is uploaded to an App Token application, it can be previewed
using two different methods:

* Direct embed: A standard HTML `<iframe>` component with a custom embed link.
* Customized previewer: A fully customized preview widget using Box [UI Elements][uie].

## Direct Embed (`iframe`)

The direct embed link provides limited options to customize the preview
experience in your application. Due to the light-weight nature of the method,
the API doesn't give you options to respond to client-side actions such as
scrolling in the case of documents, play/pause interactivity for videos,
rotating an image, etc.

There are two steps to create a direct `<iframe>` embed for Box View:

1. Generate an embed URL for the file
2. Add the embed URL to an `<iframe>`

### Generate an embed URL for the file

To create a public file preview URL for a file that was uploaded to the App
Token application, you may either use a direct SDK method or make the request
directly to the APIs.

<Message type='notice'>
  When generating the embed URL directly from the APIs, use the
  [Get File Information endpoint](e://get_files_id) and request
  `expiring_embed_link` via the `fields` parameter.
</Message>

<Tabs>
  <Tab title='cURL'>

```curl
curl https://api.box.com/2.0/files/FILE_ID?fields=expiring_embed_link \
    -H "authorization: Bearer [APP_TOKEN]"
```

  </Tab>
  <Tab title='.NET'>

```csharp
String fileId = "12345678";
Uri embedUri = await client.FilesManager.GetPreviewLinkAsync(id: fileId);
```

  </Tab>
  <Tab title='Java'>

```java
String fileID = "12345678";
BoxFile file = new BoxFile(api, fileID);
URL embedLink = file.getPreviewLink();
```

  </Tab>
  <Tab title='Python'>

```python
file_id = '12345678'
embed_url = client.file(file_id).get_embed_url()
```

  </Tab>
  <Tab title='Node'>

```js
const fileId = '12345678';
client.files.getEmbedLink(fileId).then(embedURL => {
    // ...
});
```

  </Tab>
</Tabs>

Within the response object will be a public embed URL like the following:

```shell
https://app.box.com/preview/expiring_embed/gvoct6FE!YT_X1LauQ8ulDTad96hTl9xLCRYJ
5iU6O61KxiduxFIgX9HSWMcCWf7zju1XkEsf6-Ul2qtKXeaFeKPT4SysQJQdxrc144KgTIBuoI3bWMf4
cfhp3jdLYrK5hnr6KMq5H6r-AW31AcFtDJi1lnT0M4b3bvvZUaE2RRJGGINMauvS6MAT2luae5PvbFSx
Ctqqx6XlN6QrqbhfJc0UeJF9qwMv3-O8q5fWn0qr8OTY4lkeYidtTs3Ux...
```

<Message type='warning'>
  For security reasons, the generated embed link will expire after 1 minute and
  should be immediately embedded in the app once generated.
</Message>

### Add the embed URL to an `<iframe>`

Within the HTML of your application, create an `iframe` elements with the `src`
attribute set to generated embed URL.

```html
<iframe src="https://app.box.com/preview/expiring_embed/gvoct6FE!ixgtCKQAziW
  9tHPm-jueq4cmS4GnL9RTJRcVEsK_3W8xcxtVo_v6gKpoXY45odgG1QrcjBVYZMrriUyGvcoSM
  SX8s-smpaFFYQik0R-PCKFtwvbv0lonid6ZfYNbuNFl2j9hOIqBccvHrdVor7i6WvOm6zELzTY
  4EWshcyYYBhDbJmYMrq61RtU_kvBe5P..."></iframe>
```

## Customized Previewer (UI Elements)

To leverage advanced preview customization and event handling capabilities, use
the Box [UI Preview Element](guide://embed/ui-elements/preview).

To set up the Preview Element, start by installing the required components.

<CTA to='guide://embed/ui-elements/installation'>
  Install Box Elements and Preview
</CTA>

The basic code will resemble the below when adding the JavaScript code to
display a new previewer.

```js
var preview = new Box.Preview();
preview.show("FILE_ID", "ACCESS_TOKEN", {
    container: ".preview-container",
    showDownload: true
});
```

Replace the placeholders in the code sample with the following:

* `FILE_ID`: The ID of the file uploaded to the App Token application, which can be obtained from the object returned when uploading the file.
* `ACCESS_TOKEN`: The primary Access Token set up when configuring the application or a downscoped version of the token.

<Message type='warning'>
  Due to the elevated privileges of the primary access token it's highly
  recommended that you use a downscoped version of the token in the Javascript
  code. See
  [best practices for downscoping](guide://embed/box-view/best-practices#use-downscoped-tokens).
</Message>

[uie]: g://embed/ui-elements
