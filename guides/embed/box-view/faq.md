---
rank: 5
related_endpoints:
  - get_files_id
related_guides:
  - embed/box-view/setup
  - embed/box-view/upload-file
  - embed/box-view/create-preview
required_guides: []
related_resources: []
alias_paths:
  - /docs/box-view-faqs
  - /docs/box-view-faq
category_id: embed
subcategory_id: embed/box-view
is_index: false
id: embed/box-view/faq
type: guide
total_steps: 5
sibling_id: embed/box-view
parent_id: embed/box-view
next_page_id: ''
previous_page_id: embed/box-view/best-practices
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/box-view/faq.md
---
# FAQ

**How does Box View work?**

To get started with the New Box View, follow our guide
[here](guide://embed/box-view/setup).

**Which Preview method, Embed Link or UI Element, is right for me?**

Please follow our guide [here](guide://embed/box-view/create-preview) to choose
the best method for your use case.

**What file types are supported by Box View?**
Supported [file types][file_types] can be found in our support article.

**Which file types are not supported on mobile with Box View?**

* All documents supported on web preview are supported on mobile browsers (Safari for iOS and Chrome).
* Full annotations support is available for mobile via the [Content Preview UI Element](guide://embed/ui-elements/preview), which leverages Box Annotations.
* Mobile SDKs (for iOS and Android) do not support 360 Videos/Images, and 3D.
* Mobile SDKs (for iOS and Android) do not support annotations (both read and write).

**What are annotations?**

[Annotations][annotations] are markup notes on a file rendering and allow
developers to provide collaboration capabilities right from within the
embedded Box preview in their application.

**After uploading a file, how can my application get file representations?**

[Box Representations](guide://representations) let you get the digital assets
created for files stored in Box. You can use these endpoints to get PDF, text,
image, and thumbnail representations for a file.

**Can I use Box View with storage providers other than Box?**

Currently, Box View is only compatible with files that are stored in Box. You
can delete the files from Box once you no longer need to display them. However,
you would need to re-upload them again in order to generate the preview.
For this reason, we recommend keeping the files stored in Box for at least as
long as you want to be able to display them.

**How do I fix the CORS error Box gives me when I embed a Box UI Element?**

To fix the [CORS][cors] error, add each domain you wish to allow to make CORS
requests via the application's configuration page. Wildcards are supported for
the subdomain (`https://*.domain.com`). See the
[CORS guide](g://security/cors) for more information.

**How can I replace the Box logo that shows up on preview?**

See this guide for information on customizing the logo within a
[Preview UI Element](g://embed/ui-elements/logo/).

<!-- i18n-enable localize-links -->

[file_types]: https://support.box.com/hc/en-us/articles/360043695794-Viewing-Different-File-Types-Supported-in-Box-Content-Preview
<!-- i18n-enable localize-links -->

[annotations]: g://embed/ui-elements/annotations
[cors]: g://security/cors