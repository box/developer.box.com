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
---

# FAQ

## General

### What is Box View

Box View is an API service that allows customers and developers to
display high-fidelity, interactive viewers for documents, images, videos, 360
images and videos, 3D files and more in custom web and mobile applications.
Using Box View, customers and developers can display nearly any file
type in their app without having to build their own viewers.

## Product

### How does the new Box View work

To get started with the New Box View, follow our guide
[here](guide://embed/box-view/setup).

### Which Preview method, Embed Link or UI Element, is right for me

Please follow our guide [here](guide://embed/box-view/create-preview) to choose
the best method for your use case.

### What file types are supported in the new Box View

Click [here][file_types] to see all supported file types.

### Which file types are not supported on mobile in the new Box View

* All documents supported on web preview are supported on mobile browsers
(Safari for iOS and Chrome).
* Full annotations support is available for mobile via the
[Content Preview UI Element](guide://embed/ui-elements/preview), which
leverages Box Annotations.
* Mobile SDKs (for iOS and Android) do not support 360 Videos/Images, and 3D.
* Mobile SDKs (for iOS and Android) do not support annotations (both read and
write).

### What are annotations

Annotations are mark up notes on a file rendering generated from Box View.
Annotations allow end users to collaborate on a file rendering.

### After uploading a file, how can my application get file representations

[Box Representations](guide://representations) lets you get
the digital assets created for files stored in Box. You can use these endpoints
to get PDF, text, image, and thumbnail representations for a file.

### Can I use the new Box View with storage providers other than Box

Currently, the new Box View is only compatible with files that are stored in
Box. You can delete the files from Box once you no longer need to display them.
However, you would need to upload it again in order to generate the preview.
For this reason, we recommend keeping the files stored in Box for at least as
long as you want to be able to display them.

### How do I fix the CORS error Box gives me when I embed a Box UI Element

To fix the CORS error, you have to whitelist each domain you wish to allow to
make CORS requests. You can whitelist the domain on your application's
configuration page within the Box developer console. If you have many
subdomains that you want to use the UI element on, you can use a wildcard for
the subdomain (`https://*.domain.com`). See the
[CORS guide](guide://best-practices/cors) for more information.

### How can I replace the Box logo that shows up on preview

See this guide for information on customizing the logo within a
[Preview UI Element](guide://embed/ui-elements/logo/).

## Pricing

### How is the new Box View priced

The new Box View is priced based on the number of API calls, total storage, and
bandwidth that an application will require to upload, convert, and display
files within an application. A conversion occurs when a file is uploaded via
the API to Box and is prepared to be displayed in an app. A conversion happens
only one time per file.

Customers will license appropriate levels of API calls, storage, and bandwidth
to meet their use case. We estimate the resource allocation based on the number
of files a customer estimates will be uploaded and converted each month. We
offer volume discounts as customers purchase more API calls, storage, or
bandwidth. Additional resources can be purchased as needed depending on the
customer's use case.

For example, if a customer estimates that they will be converting 250,000
documents per month, it will require 1,250,000 API calls, 110 GB of total
storage, and 1.637 TB of bandwidth per month. These calculations are based on
common patterns in our API usage. Once we have an estimate of the number of
files they will be converting, we can generate a quote.

INPUT - Estimated Monthly Conversions: 250,000

Monthly API Calls: 1,250,000
Total Storage (TB): 0.110
Monthly Bandwidth (TB): 1.637
List Price Total: $3,297 per month

[file_types]: https://community.box.com/t5/Migrating-and-Previewing-Content/Viewing-Different-File-Types-Supported-in-Box-Content-Preview/ta-p/327
