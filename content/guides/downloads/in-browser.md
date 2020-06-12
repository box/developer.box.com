---
rank: 4
related_endpoints:
  - get_files_id_content
related_guides:
  - downloads/file
  - uploads/direct/file
required_guides: []
related_resources: []
alias_paths:
  - /docs/download-all-files-from-a-folder-1
---

# Download in Browser

Sometimes an application wants to embed a file into a page as a HTML element. An
example would be when working with an audio player.

```html
<audio controls>
  <source src="..." type="audio/mp3">
</audio>
```

In this case, using the regular [download URL][durl] does not work because the
`dl.boxcloud.com` domain does not support [Cross Origin Resource Sharing][cors].

Instead an application can use the following format.

```sh
https://api.box.com/2.0/files/[FILE_ID]/content?access_token=[ACCESS_TOKEN]
```

<Message warning>
  # CORS

  For this to work the application needs to have the domain of the web site
  hosting this file added to the list of allowed domains in the [CORS
  settings][cors].
</Message>

<Message warning>
  # Downscope Token

  Using this method would expose the Access Token to the end user, allowing them
  to potentially use this token to do more than intended. For this reason we
  recommend [downscoping][downscoping] this token accordingly.
</Message>

[durl]: g://downloads/get-url
[cors]: g://best-practices/cors
[downscoping]: g://authentication/access-tokens/downscope
