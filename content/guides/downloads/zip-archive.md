---
rank: 11
related_endpoints:
  - get_zip_downloads_id_content
  - get_zip_downloads_id_status
  - post_zip_downloads
related_guides: []
required_guides: []
alias_paths: []
---

# Download ZIP Archive

To download all files in a folder or an entire folder structure, you have to create and download a ZIP archive.

## Create a ZIP Archive

First, you need to create a ZIP archive containing the files or the folder structure. You can include up to 10,000 file and folder IDs unless you reach the account’s upload limit.

<Samples id="post_zip_downloads" />

The response will look similar to the following:

```json
{
  "download_url":"https://dl.boxcloud.com/2.0/zip_downloads/25gvaXcIE4QJlinNiw2oHAQ==ZFs3Q2Xpd7pKBz7OyzXNrUaoW3aJxQRN5znAvyM-KpdEEPdWcQDKU-Dl85Ew/content",
  "status_url":"https://api.box.com/2.0/zip_downloads/25gvaXcIE4QJlinNiw2oHAQ==ZFs3Q2Xpd7pKBz7OyzXNrUaoW3aJxQRN5znAvyM-KpdEEPdWcQDKU-Dl85Ew/status",
  "expires_at":"2023-02-28T10:23:54Z",
  "name_conflicts":[]
}
```

## Extract the ZIP download ID

To download the ZIP archive, you need the ZIP download ID.
You can find it in the response you got when you created the archive.

Go to `status_url` and copy the ID located between`zip_downloads` and `content`:

```json
25gvaXcIE4QJlinNiw2oHAQ==ZFs3Q2Xpd7pKBz7OyzXNrUaoW3aJxQRN5znAvyM-KpdEEPdWcQDKU-Dl85Ew
```

<Message type='notice'>
Download URL is valid only for a the time specified in `expires_at` parameter.
</Message>

## Download files

Place the download ID in the file location URL as in the sample below
to point to the right files.

<Samples id="get_zip_downloads_id_content" />

For downloads that take longer, you can monitor the
download status using the
[status endpoint](e://get-zip-downloads-id-status).
This allows you to inspect the progress of the
download as well as the number of items that might have been skipped.

<Samples id="get_zip_downloads_id_status" />

<Message notice>
If you want to use SDKs to download the contents
of the folder, follow [this](g://downloads/folder) guide.
</Message>
