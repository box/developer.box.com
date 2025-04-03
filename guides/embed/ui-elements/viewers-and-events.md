---
rank: 14
hide_in_page_nav: true
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/file-types-events
category_id: embed
subcategory_id: embed/ui-elements
is_index: false
id: embed/ui-elements/viewers-and-events
type: guide
total_steps: 16
sibling_id: embed/ui-elements
parent_id: embed/ui-elements
next_page_id: embed/ui-elements/custom-domains
previous_page_id: embed/ui-elements/scopes
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/embed/ui-elements/viewers-and-events.md
---
# Preview - Viewers & Events

<!-- markdownlint-disable no-duplicate-header -->

This page describes the preview experience for each file type. It also lists the
events you can listen for by viewer type.

## Text Viewer

The text viewer renders previews of text files. For code files like `py` or
`rb`, it uses [`highlight.js`](https://github.com/isagalaev/highlight.js) to add
syntax highlighting.

### Behavior

The text viewer displays the first 192 KB of text in the file. Additional text is
truncated and a notification and download button are appended to the bottom of
the preview.

Re-sizing the viewer window will reflow the text to fit the available space and
the zoom in and out buttons will increase and decrease font size respectively.

This viewer supports printing and will attempt to print with appropriate syntax
highlighting when either `print()` is invoked or the print button is pressed.
Note that printing large files may cause some browsers to freeze for a few
seconds.

### Controls

- Zoom In
- Zoom Out
- Fullscreen: can be exited with the escape key

### Supported File Extensions

`as`, `as3as`, `asmas`, `batas`, `cas`, `ccas`, `cmakeas`, `cppas`, `csas`,
`cssas`, `cxxas`, `diffas`, `erbas`, `groovyas`, `has`, `hamlas`, `hhas`,
`htmas`, `htmlas`, `javaas`, `jsas`, `lessas`, `mas`, `makeas`, `mdas`, `mlas`,
`mmas`, `phpas`, `plas`, `plistas`, `propertiesas`, `pyas`, `rbas`, `rstas`,
`sassas`, `scalaas`, `scriptas`, `scmas`, `smlas`, `sqlas`, `shas`, `vias`,
`vimas`, `webdocas`, `xhtmlas`, `yaml`,

### Events

The text viewer triggers the following events.

| Event Name     | Explanation                                | Event Data                                                            |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed     |                                                                       |
| `load`         | The preview loads                          | 1. `{string}` **`error`** (optional): error message                   |
|                |                                            | 2. `{object}` **`file`**: current file                                |
|                |                                            | 3. `{object}` **`metrics`**: information from the logger              |
|                |                                            | 4. `{object}` **`viewer`**: current viewer                            |
| `notification` | A notification is displayed                |                                                                       |
| `navigate`     | The preview is shown for a given index     | `{object}` file                                                       |
| `reload`       | The preview reloads                        |                                                                       |
| `resize`       | The preview resizes                        | 1. `{number}` **`height`**: window height                             |
|                |                                            | 2. `{number}` **`width`**: window width                               |
| `zoom`         | The preview zooms in or out                | 1. `{number}` **`zoom`**: new zoom value                              |
|                |                                            | 2. `{boolean}` **`canZoomIn`**: true if the viewer can zoom in more   |
|                |                                            | 3. `{boolean}` **`canZoomOut`**: true if the viewer can zoom out more |
| `printsuccess` | An attempt to print triggered successfully |                                                                       |

## 360 Video Viewer

The 360 video viewer renders a preview of a video stored as an equirectangular
projection (often recorded with a 360 camera).

### Behavior

This viewer gives you an interactive view of the 360 degree video.

### Controls

- Change the view direction with the left mouse button (single touch on touch-enabled device).

### VR button

When using a browser that supports WebVR and a suitable VR device is attached to
your computer, a VR button will be available to allow toggling in and out of VR
mode.

### Limitations

Currently, this previewer requires that the file be named with a `.360`
preceding the file extension. This is so that Preview SDK knows to run this
viewer rather than the standard video preview.

### Supported File Extensions

`360.3g2`, `360.3gp`, `360.avi`, `360.m2v`, `360.m2ts`, `360.m4v`, `360.mkv`,
`360.mov`, `360.mp4`, `360.mpeg`, `360.mpg`, `360.mts`, `360.qt`, `360.wmv`

### Events

The 360 video viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                               |
| -------------- | -------------------------------------- | -------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                          |
| `load`         | The preview loads                      | 1. `{string}` **`error`** (optional): error message      |
|                |                                        | 2. `{object}` **`file`**: current file                   |
|                |                                        | 3. `{object}` **`metrics`**: information from the logger |
|                |                                        | 4. `{object}` **`viewer`**: current viewer               |
| `notification` | A notification is displayed            |                                                          |
| `navigate`     | The preview is shown for a given index | `{object}` file                                          |
| `reload`       | The preview reloads                    |                                                          |
| `resize`       | The preview resizes                    | 1. `{number}` **`height`**: window height                |
|                |                                        | 2. `{number}` **`width`**: window width                  |

## SWF Viewer

The SWF viewer uses [`SWFObject`](https://github.com/swfobject/swfobject) to embed
SWF files.

### Behavior

If the user has the Adobe Flash Player plugin, `SWFObject` will embed the SWF file
and allow the plugin to render relevant content.

Note that all network requests made by the flash content will be blocked due to
security constraints, so any content that requires network connectivity will not
be rendered.

### Supported File Extensions

- `swf`

### Events

The SWF viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                               |
| -------------- | -------------------------------------- | -------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                          |
| `load`         | The preview loads                      | 1. `{string}` **`error`** (optional): error message      |
|                |                                        | 2. `{object}` **`file`**: current file                   |
|                |                                        | 3. `{object}` **`metrics`**: information from the logger |
|                |                                        | 4. `{object}` **`viewer`**: current viewer               |
| `notification` | A notification is displayed            |                                                          |
| `navigate`     | The preview is shown for a given index | `{object}` file                                          |
| `reload`       | The preview reloads                    |                                                          |
| `resize`       | The preview resizes                    | 1. `{number}` **`height`**: window height                |
|                |                                        | 2. `{number}` **`width`**: window width                  |

## Presentation viewer

The presentation viewer renders previews of PowerPoint files.

### Behavior

The presentation viewer remembers which slide you were viewing upon closing the
preview. The next time that file is opened, you will immediately be brought to
that slide. Scrolling the mouse up and down, or swiping up and down on mobile
will transition between slides. Zooming in or out will increase or decrease the
size of the slide respectively. If the zoom level causes the content to
overflow, scrolling the mouse will allow you to scroll around the slide. To
return to normal scrolling behavior, the user must zoom out until the overflow
is removed.

### Controls

- Zoom In
- Zoom Out
- Set Page: either with the up and down arrows, or by clicking the page number and entering text
- Fullscreen: can be exited with the escape key

### Supported File Extensions

`ppt`, `pptx`, `odp`

### Options

| Option        | Type    | Description                                                             |
| ------------- | ------- | ----------------------------------------------------------------------- |
| `annotations` | boolean | Optional. Whether annotations on content are shown. Defaults to `false` |

### Events

The presentation viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                                                    |
| -------------- | -------------------------------------- | ----------------------------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                                               |
| `load`         | The preview loads                      | 1. `string` **`error`** (optional): error message                             |
|                |                                        | 2. `object` **`file`**: current file                                          |
|                |                                        | 3. `object` **`metrics`**: information from the logger                        |
|                |                                        | 4. `object` **`viewer`**: current viewer                                      |
| `notification` | A notification is displayed            |                                                                               |
| `navigate`     | The preview is shown for a given index | `object` file                                                                 |
| `reload`       | The preview reloads                    |                                                                               |
| `resize`       | The preview resizes                    | 1. `number` **`height`**: window height                                       |
|                |                                        | 2. `number` **`width`**: window width                                         |
| `zoom`         | The preview zooms in or out            | 1. `number` **`zoom`**: new zoom value                                        |
|                |                                        | 2. `boolean` **`canZoomIn`**: true if the viewer can zoom in more             |
|                |                                        | 3. `boolean` **`canZoomOut`**: true if the viewer can zoom out more           |
| `pagerender`   | A page renders                         | `number` page number of rendered page                                         |
| `pagefocus`    | A page is visible                      | `number` page number of focused page                                          |
| `scrollstart`  | The viewer starts to scroll            | 1. `number` **`scrollTop`**: number of pixels scrolled from top of viewport   |
|                |                                        | 2. `number` **`scrollLeft`**: number of pixels scrolled from left of viewport |
| `scrollend`    | The viewer stops scrolling             | 1. `number` **`scrollTop`**: number of pixels scrolled from top of viewport   |
|                |                                        | 2. `number` **`scrollLeft`**: number of pixels scrolled from left of viewport |

## MP4 Viewer

The MP4 viewer renders previews for video files.

### Behavior

<!--alex ignore black-->

The MP4 viewer uses a black background to create a better viewing experience.
Volume can be muted or unmuted by clicking the volume icon, or changed by
dragging the volume scrubber. The position of the video can be changed by
clicking or dragging the playback scrubber.

### Controls

- Play/Pause
- Volume
- Settings
- Fullscreen (can be exited with the escape key)

### Settings

Settings are available through the cog icon in the preview toolbar.

- Video speed values: `0.25`, `0.5`, normal (`1`), `1.25`, `1.5`, `2.0`

### Supported File Extensions

`3g2`, `3gp`, `avi`, `m2v`, `m2ts`, `m4v`, `mkv`, `mov`, `mp4`, `mpeg`, `mpg`,
`ogg`, `mts`, `qt`, `wmv`

### Events

The MP4 viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                             |
| -------------- | -------------------------------------- | ------------------------------------------------------ |
| `destroy`      | The preview is intentionally destroyed |                                                        |
| `load`         | The preview loads                      | 1. `string` **`error`** (optional): error message      |
|                |                                        | 2. `object` **`file`**: current file                   |
|                |                                        | 3. `object` **`metrics`**: information from the logger |
|                |                                        | 4. `object` **`viewer`**: current viewer               |
| `notification` | A notification is displayed            |                                                        |
| `navigate`     | The preview is shown for a given index | `object` file                                          |
| `reload`       | The preview reloads                    |                                                        |
| `resize`       | The preview resizes                    | 1. `number` **`height`**: window height                |
|                |                                        | 2. `number` **`width`**: window width                  |
| `speedchange`  | Media speed changes                    | `string` playback speed                                |
| `play`         | The video plays                        |                                                        |
| `pause`        | The video pauses                       |                                                        |
| `seek`         | The video skips to a time              | `number` time                                          |

## MP3 Viewer

The MP3 viewer displays previews for audio files.

### Behavior

Volume can be muted or unmuted by clicking the volume icon, or changed by
dragging the volume scrubber. The position of the audio can be changed by
clicking or dragging the playback scrubber.

### Controls

- Play/Pause
- Volume
- Settings

### Settings

Settings are available through the cog icon in the preview toolbar.

- Audio Speed: `0.25`, `0.5`, normal (`1`), `1.25`, `1.5`, `2.0`

### Supported File Extensions

`aac`, `aif`, `aifc`, `aiff`, `amr`, `au`, `flac`, `m4a`, `mp3`, `ra`, `wav`, `wma`

### Events

The MP3 viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                             |
| -------------- | -------------------------------------- | ------------------------------------------------------ |
| `destroy`      | The preview is intentionally destroyed |                                                        |
| `load`         | The preview loads                      | 1. `string` **`error`** (optional): error message      |
|                |                                        | 2. `object` **`file`**: current file                   |
|                |                                        | 3. `object` **`metrics`**: information from the logger |
|                |                                        | 4. `object` **`viewer`**: current viewer               |
| `notification` | A notification is displayed            |                                                        |
| `navigate`     | The preview is shown for a given index | `object` file                                          |
| `reload`       | The preview reloads                    |                                                        |
| `resize`       | The preview resizes                    | 1. `number` **`height`**: window height                |
|                |                                        | 2. `number` **`width`**: window width                  |
| `speedchange`  | Media speed changes                    | `string` playback speed                                |
| `play`         | The video plays                        |                                                        |
| `pause`        | The video pauses                       |                                                        |
| `seek`         | The video skips to a time              | `number` time                                          |

## Office Viewer

The Office viewer renders previews of Microsoft Office documents by embedding an
`<iframe>` of Microsoft's Office Online viewer.

### Behavior

The Office viewer currently supports previews of Excel files using Microsoft
Office Online from within the Box Web Application. Support for platform use
cases and other Office file formats is in progress.

There are several limitations at the moment:

- File must be downloadable
- File size cannot be greater than 5MB
- File cannot be shared via a Box shared link with a password (shared links without passwords are okay)

### Supported File Extensions

`xlsx`

### Events

The Office viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                               |
| -------------- | -------------------------------------- | -------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                          |
| `load`         | The preview loads                      | 1. `{string}` **`error`** (optional): error message      |
|                |                                        | 2. `{object}` **`file`**: current file                   |
|                |                                        | 3. `{object}` **`metrics`**: information from the logger |
|                |                                        | 4. `{object}` **`viewer`**: current viewer               |
| `notification` | A notification is displayed            |                                                          |
| `navigate`     | The preview is shown for a given index | `{object}` file                                          |
| `reload`       | The preview reloads                    |                                                          |
| `resize`       | The preview resizes                    | 1. `{number}` **`height`**: window height                |
|                |                                        | 2. `{number}` **`width`**: window width                  |

## Markdown Viewer

The Markdown viewer uses
[`Remarkable`](https://github.com/jonschlinkert/remarkable) to parse markdown
files and [`highlight.js`](https://github.com/isagalaev/highlight.js) to add
syntax highlighting to code blocks contained within.

### Behavior

The Markdown viewer parses the first 192KB of raw markdown in the file and
renders it using GitHub's Markdown style. Additional content is truncated and a
notification along with a download button are appended to the bottom of the
preview.

The viewer supports
[GitHub Flavored
Markdown](https://guides.github.com/features/mastering-markdown/) including
tables, syntax highlighting, and automatic URL linking.

Re-sizing the viewer window will reflow the markdown to fit the available space.
Also, this viewer supports printing and will attempt to print the parsed
markdown and with syntax highlighting on code when either `print()` is invoked
or the print button is pressed. Note that printing large files may cause some
browsers to freeze for a few seconds.

### Controls

- Fullscreen (can be exited with the escape key)

### Supported File Extensions

`md`

### Events

The Markdown viewer triggers the following events.

| Event Name     | Explanation                                | Event Data                                               |
| -------------- | ------------------------------------------ | -------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed     |                                                          |
| `load`         | The preview loads                          | 1. `{string}` **`error`** (optional): error message      |
|                |                                            | 2. `{object}` **`file`**: current file                   |
|                |                                            | 3. `{object}` **`metrics`**: information from the logger |
|                |                                            | 4. `{object}` **`viewer`**: current viewer               |
| `notification` | A notification is displayed                |                                                          |
| `navigate`     | The preview is shown for a given index     | `{object}` file                                          |
| `reload`       | The preview reloads                        |                                                          |
| `resize`       | The preview resizes                        | 1. `{number}` **`height`**: window height                |
|                |                                            | 2. `{number}` **`width`**: window width                  |
| `printsuccess` | An attempt to print triggered successfully |                                                          |

## `Model3D` viewer

The `Model3D` viewer renders previews of 3D model files and allows you to enable
different rendering modes to inspect various aspects of the model. for example
wireframe, texture coordinates, and more. Animation data is also supported for
files that contain it (for example `box3d`, `fbx`, `dae`).

### Behavior

The `Model3D` viewer gives you an interactive view of the model. The left mouse
button allows you to orbit about the model (single touch on touch-enabled
device). Double-clicking somewhere on the model allows you to change orbit
focus.

### Controls

- Zoom (change distance to the model) with the mouse wheel (or two-finger scroll on a touch-enabled device).
- Pan (lateral movement) with the right mouse button (or three-finger swipe on a touch-enabled device).
- Animation Selection: If the model that is being viewed contains animations, two animation buttons will be visible in the toolbar. The first allows you to play and pause the animation and the second allows the selection of the current animation.
- VR button: If using a browser that supports WebVR and a suitable VR device is attached to your computer, the VR button will allow toggling in and out of VR mode.

### Settings

Settings are available through the cog icon in the preview toolbar.

- Render Mode: Lit, Unlit, Normal, Shape, UV Overlay
- Toggle Wireframe
- Toggle Skeleton
- Camera Projection: Perspective, Orthographic
- Render Quality: Auto, Full
- Rotate Model: X, Y, Z

## `Box3D` Packages

Preview gives users the ability to view a single file within Box so, by default,
you can't view textures on your model. However, the Box web application gives
users the ability to create a Box3D package that combines all dependent files
into a single file that can be shared and previewed. To do this, right-click the
model file within Box and choose "Create 3D Package". All referenced files found
within Box will be included in the resulting package.

### Supported File Extensions

`box3d`, `fbx`, `dae`, `3ds`, `obj`, `stl`, `ply`

### Events

The `Model3D` viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                               |
| -------------- | -------------------------------------- | -------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                          |
| `load`         | The preview loads                      | 1. `{string}` **`error`** (optional): error message      |
|                |                                        | 2. `{object}` **`file`**: current file                   |
|                |                                        | 3. `{object}` **`metrics`**: information from the logger |
|                |                                        | 4. `{object}` **`viewer`**: current viewer               |
| `notification` | A notification is displayed            |                                                          |
| `navigate`     | The preview is shown for a given index | `{object}` file                                          |
| `reload`       | The preview reloads                    |                                                          |
| `resize`       | The preview resizes                    | 1. `{number}` **`height`**: window height                |
|                |                                        | 2. `{number}` **`width`**: window width                  |

## 360 Image viewer

The 360 image viewer renders a preview of an image stored as an equirectangular
projection (often taken with a 360 camera).

### Behavior

This viewer gives you an interactive view of a 360 degree image. First, a low
resolution version of the image is loaded to give a quick view before the full
resolution image is finished loading. Clicking and dragging with the left mouse
button will change the view direction (single touch and drag on touch-enabled
device).

### Controls

- Fullscreen (can be exited with the escape key)
- VR Button: When using a browser that supports WebVR and a suitable VR device is attached to your computer, a VR button will be available to allow toggling in and out of VR mode.

### Limitations

Currently, this previewer requires that the file be named with a '.360'
preceding the file extension. This is so that Preview SDK knows to run this
viewer rather than the standard image viewer.

### Supported File Extensions

`360.jpg`, `360.jpeg`, `360.png`, `360.ai`, `360.bmp`, `360.dcm`, `360.eps`,
`360.gif`, `360.ps`, `360.psd`, `360.svg`, `360.svs`, `360.tga`, `360.tif`,
`360.tiff`

### Events

The 360 image viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                               |
| -------------- | -------------------------------------- | -------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                          |
| `load`         | The preview loads                      | 1. `{string}` **`error`** (optional): error message      |
|                |                                        | 2. `{object}` **`file`**: current file                   |
|                |                                        | 3. `{object}` **`metrics`**: information from the logger |
|                |                                        | 4. `{object}` **`viewer`**: current viewer               |
| `notification` | A notification is displayed            |                                                          |
| `navigate`     | The preview is shown for a given index | `{object}` file                                          |
| `reload`       | The preview reloads                    |                                                          |
| `resize`       | The preview resizes                    | 1. `{number}` **`height`**: window height                |
|                |                                        | 2. `{number}` **`width`**: window width                  |

## Image viewer

The image viewer renders previews of image files.

### Behavior

Rotating the viewer will rotate the image 90 degrees clockwise. At the default
zoom level, clicking on the image will zoom in once. When zoomed in, clicking on
the document will return to the default zoom level. When zoomed out, clicking on
the document will zoom in until the original zoom level is reached.

### Controls

- Zoom In
- Zoom Out
- Rotate
- Fullscreen: can be exited with the escape key

### Supported File Extensions

`ai`, `bmp`, `dcm`, `eps`, `idml`, `indt`, `indd`, `inx`, `gif`, `png`, `ps`,
`psd`, `svs`, `tga`

### Options

| Option        | Type    | Description                                                             |
| ------------- | ------- | ----------------------------------------------------------------------- |
| `annotations` | boolean | Optional. Whether annotations on content are shown. Defaults to `false` |

### Events

The image viewer triggers the following events.

| Event Name     | Explanation                                | Event Data                                                            |
| -------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed     |                                                                       |
| `load`         | The preview loads                          | 1. `{string}` **`error`** (optional): error message                   |
|                |                                            | 2. `{object}` **`file`**: current file                                |
|                |                                            | 3. `{object}` **`metrics`**: information from the logger              |
|                |                                            | 4. `{object}` **`viewer`**: current viewer                            |
| `notification` | A notification is displayed                |                                                                       |
| `navigate`     | The preview is shown for a given index     | `{object}` file                                                       |
| `reload`       | The preview reloads                        |                                                                       |
| `resize`       | The preview resizes                        | 1. `{number}` **`height`**: window height                             |
|                |                                            | 2. `{number}` **`width`**: window width                               |
| `zoom`         | The preview zooms in or out                | 1. `{number}` **`zoom`**: new zoom value                              |
|                |                                            | 2. `{boolean}` **`canZoomIn`**: true if the viewer can zoom in more   |
|                |                                            | 3. `{boolean}` **`canZoomOut`**: true if the viewer can zoom out more |
| `pan`          | The preview is panning                     |                                                                       |
| `panstart`     | Panning starts                             |                                                                       |
| `panend`       | Panning ends                               |                                                                       |
| `rotate`       | The image rotates                          |                                                                       |
| `printsuccess` | An attempt to print triggered successfully |                                                                       |

## Multi-image viewer

The multi-image viewer renders previews of multi-image files (`tiff`, `tif`).

### Behavior

At the default zoom level, clicking on the image will zoom in once. When zoomed
in, clicking on the document will return to the default zoom level. When zoomed
out, clicking on the document will zoom in until the original zoom level is
reached.

### Controls

- Zoom In
- Zoom Out
- Fullscreen: can be exited with the escape key
- Set Page: either with the up and down arrows, or by clicking the page number and entering text

### Supported File Extensions

`tif`, `tiff`

### Options

| Option        | Type    | Description                                                             |
| ------------- | ------- | ----------------------------------------------------------------------- |
| `annotations` | boolean | Optional. Whether annotations on content are shown. Defaults to `false` |

### Events

The image viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                                            |
| -------------- | -------------------------------------- | --------------------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                                       |
| `load`         | The preview loads                      | 1. `{string}` **`error`** (optional): error message                   |
|                |                                        | 2. `{object}` **`file`**: current file                                |
|                |                                        | 3. `{object}` **`metrics`**: information from the logger              |
|                |                                        | 4. `{object}` **`viewer`**: current viewer                            |
| `notification` | A notification is displayed            |                                                                       |
| `navigate`     | The preview is shown for a given index | `{object}` file                                                       |
| `reload`       | The preview reloads                    |                                                                       |
| `resize`       | The preview resizes                    | 1. `{number}` **`height`**: window height                             |
|                |                                        | 2. `{number}` **`width`**: window width                               |
| `zoom`         | The preview zooms in or out            | 1. `{number}` **`zoom`**: new zoom value                              |
|                |                                        | 2. `{boolean}` **`canZoomIn`**: true if the viewer can zoom in more   |
|                |                                        | 3. `{boolean}` **`canZoomOut`**: true if the viewer can zoom out more |
| `pagefocus`    | A page is visible                      | `{number}` page number of focused page                                                                     |
| `pan`          | The preview is panning                 |                                                                       |
| `panstart`     | Panning starts                         |                                                                       |
| `panend`       | Panning ends                           |                                                                       |

### Methods

The following methods are available for the multi-page image viewer.

| Method Name        | Explanation                    | Method Parameters                  |
| ------------------ | ------------------------------ | ---------------------------------- |
| `zoom`             | Zooms the image                | `{string}` 'in', 'out', or 'reset' |
| `previousPage`     | Navigates to the previous page |                                    |
| `nextPage`         | Navigates to the next page     |                                    |
| `setPage`          | Navigates to a given page      | `{number}` page number             |
| `toggleFullscreen` | Toggles full screen mode       |                                    |

## Document viewer

The document viewer renders previews for a variety of document types.

### Behavior

The document viewer remembers which page you were viewing upon closing the
preview. The next time that file is opened, you will immediately be brought to
that page. Resizing the viewer window will cause the document to resize.

### Controls

- Zoom In
- Zoom Out
- Set Page: either with the up and down arrows, or by clicking the page number and entering text
- Fullscreen (can be exited with the escape key)

### Supported File Extensions

`as`, `as3`, `asm`, `bat`, `c`, `cc`, `cmake`, `cpp`, `cs`, `css`, `csv`, `cxx`,
`diff`, `doc`, `docx`, `erb`, `gdoc`, `groovy`, `gsheet`, `h`, `haml`, `hh`,
`htm`, `html`, `java`, `js`, `less`, `log`, `m`, `make`, `md`, `ml`, `mm`,
`msg`, `odp`, `ods`, `odt`, `pdf`, `php`, `pl`, `plist`, `ppt`, `pptx`,
`properties`, `py`, `rb`, `rst`, `rtf`, `sass`, `scala`, `scm`, `script`, `sh`,
`sml`, `sql`, `tsv`, `txt`, `vi`, `vim`, `webdoc`, `wpd`, `xhtml`, `xls`,
`xlsm`, `xlsx`, `xml`, `xsd`, `xsl`, `yaml`

### Options

| Option        | Type    | Description                                                             |
| ------------- | ------- | ----------------------------------------------------------------------- |
| `annotations` | boolean | Optional. Whether annotations on content are shown. Defaults to `false` |

### Events

The document viewer triggers the following events.

| Event Name     | Explanation                                | Event Data                                                                      |
| -------------- | ------------------------------------------ | ------------------------------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed     |                                                                                 |
| `load`         | The preview loads                          | 1. `{string}` **`error`** (optional): error message                             |
|                |                                            | 2. `{object}` **`file`**: current file                                          |
|                |                                            | 3. `{object}` **`metrics`**: information from the logger                        |
|                |                                            | 4. `{object}` **`viewer`**: current viewer                                      |
| `notification` | A notification is displayed                |                                                                                 |
| `navigate`     | The preview is shown for a given index     | `{object}` file                                                                 |
| `reload`       | The preview reloads                        |                                                                                 |
| `resize`       | The preview resizes                        | 1. `{number}` **`height`**: window height                                       |
|                |                                            | 2. `{number}` **`width`**: window width                                         |
| `zoom`         | The preview zooms in or out                | 1. `{number}` **`newScale`**: new zoom value                                    |
|                |                                            | 2. `{boolean}` **`canZoomIn`**: true if the viewer can zoom in more             |
|                |                                            | 3. `{boolean}` **`canZoomOut`**: true if the viewer can zoom out more           |
| `pagerender`   | A page is rendered                         | `{number}` page number of rendered page                                         |
| `pagefocus`    | A page is visible                          | `{number}` page number of focused page                                          |
| `scrollstart`  | The viewer starts to scroll                | 1. `{number}` **`scrollTop`**: number of pixels scrolled from top of viewport   |
|                |                                            | 2. `{number}` **`scrollLeft`**: number of pixels scrolled from left of viewport |
| `scrollend`    | The viewer stops scrolling                 | 1. `{number}` **`scrollTop`**: number of pixels scrolled from top of viewport   |
|                |                                            | 2. `{number}` **`scrollLeft`**: number of pixels scrolled from left of viewport |
| `printsuccess` | An attempt to print triggered successfully |                                                                                 |
| `printsuccess` | An attempt to print failed                 |                                                                                 |

### Annotations

| Event Name                 | Explanation                                                                                                                                | Event Data |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| `annotationdraw`           | Text is highlighted                                                                                                                        |            |
| `annotationcommentpending` | User hovers back into a dialog that has a pending comment                                                                                  |            |
| `annotationcreate`         | Annotation is created                                                                                                                      |            |
| `annotationcancel`         | An annotation was started but then abandoned before it was created                                                                         |            |
| `annotationdelete`         | Annotation with provided `AnnotationID` is deleted. If no ID is provided, deletes the first (and only remaining) annotation in the thread. |            |

## `<iframe>` viewer

The `<iframe>` viewer embeds an frame to show content rendered from an external
source.

### Behavior

The `<iframe>` viewer is used for previews of Box Notes.

Box Notes has full-featured viewers within the main Box Web
Application, but these full viewers are not initialized when users navigate from
previews of other files that may be in the same directory as the Notes
files. In this situation, the `<iframe>` viewer embeds an view-only render of
the Box Note file.

### Supported File Extensions

`boxnote`

### Events

The `<iframe>` viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                               |
| -------------- | -------------------------------------- | -------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                          |
| `load`         | The preview loads                      | 1. `{string}` **`error`** (optional): error message      |
|                |                                        | 2. `{object}` **`file`**: current file                   |
|                |                                        | 3. `{object}` **`metrics`**: information from the logger |
|                |                                        | 4. `{object}` **`viewer`**: current viewer               |
| `notification` | A notification is displayed            |                                                          |
| `navigate`     | The preview is shown for a given index | `{object}` file                                          |
| `reload`       | The preview reloads                    |                                                          |
| `resize`       | The preview resizes                    | 1. `{number}` **`height`**: window height                |
|                |                                        | 2. `{number}` **`width`**: window width                  |

## DASH viewer

The DASH viewer renders previews for video files using [`Shaka Player`][shaka].

### Behavior

<!-- alex ignore black -->

The DASH viewer uses a black background to create a more native viewing
experience. Video is streamed in chunks of bytes at an initial quality
determined automatically. Volume can be muted or unmuted by clicking the volume
icon, or changed by dragging the volume scrubber. The position of the video can
be changed by clicking or dragging the playback scrubber.

### Controls

- Play/Pause
- Volume
- Settings
- Fullscreen (can be exited with the escape key)

### Settings

Settings are available through the cog icon in the preview toolbar.

- Video Speed: `0.25`, `0.5`, normal (`1`), `1.25`, `1.5`, `2.0`
- Video Quality: `480p`, `1080p`, `auto`

### Supported File Extensions

`3g2`, `3gp`, `avi`, `m2v`, `m2ts`, `m4v`, `mkv`, `mov`, `mp4`, `mpeg`, `mpg`,
`ogg`, `mts`, `qt`, `wmv`

### Events

The DASH viewer triggers the following events.

| Event Name         | Explanation                                                   | Event Data                                               |
| ------------------ | ------------------------------------------------------------- | -------------------------------------------------------- |
| `destroy`          | The preview is intentionally destroyed                        |                                                          |
| `load`             | The preview loads                                             | 1. `{string}` **`error`** (optional): error message      |
|                    |                                                               | 2. `{object}` **`file`**: current file                   |
|                    |                                                               | 3. `{object}` **`metrics`**: information from the logger |
|                    |                                                               | 4. `{object}` **`viewer`**: current viewer               |
| `notification`     | A notification is displayed                                   |                                                          |
| `navigate`         | The preview is shown for a given index                        | `{object}` file                                          |
| `reload`           | The preview reloads                                           |                                                          |
| `resize`           | The preview resizes                                           | 1. `{number}` **`height`**: window height                |
|                    |                                                               | 2. `{number}` **`width`**: window width                  |
| `speedchange`      | The media speed changes                                       | `{string}` playback speed                                |
| `qualitychange`    | The video quality changes                                     | `{string}` media quality                                 |
| `bandwidthhistory` | Gives bandwidth history when the preview is destroyed         | `{array}` bandwidth information                          |
| `switchhistory`    | Gives quality switching history when the preview is destroyed | `{array}` quality switch objects                         |
| `adaptation`       | Quality adapts to a change in bandwidth                       | `{number}` bandwidth                                     |
| `play`             | The video plays                                               |                                                          |
| `pause`            | The video pauses                                              |                                                          |
| `seek`             | The video skips to a time                                     | `{number}` time                                          |

## CSV viewer

The CSV viewer uses [`PapaParse`](https://github.com/mholt/PapaParse) to parse
CSV and TSV files and [`React Virtualized`][reactv] to display the parsed data
in a table.

### Behavior

Resizing the viewer window will cause the table to resize, and the zoom in and
out buttons will increase and decrease font size respectively. Currently, column
and row sizes are fixed and overflowing text will be truncated.

This viewer does not support printing.

### Controls

- Zoom In
- Zoom Out
- Fullscreen (can be exited with the escape key)

### Supported File Extensions

`csv`, `tsv`

### Events

The CSV viewer triggers the following events.

| Event Name     | Explanation                            | Event Data                                                            |
| -------------- | -------------------------------------- | --------------------------------------------------------------------- |
| `destroy`      | The preview is intentionally destroyed |                                                                       |
| `load`         | The preview loads                      | 1. `{string}` **`error`** (optional): error message                   |
|                |                                        | 2. `{object}` **`file`**: current file                                |
|                |                                        | 3. `{object}` **`metrics`**: information from the logger              |
|                |                                        | 4. `{object}` **`viewer`**: current viewer                            |
| `notification` | A notification is displayed            |                                                                       |
| `navigate`     | The preview is shown for a given index | `{object}` file                                                       |
| `reload`       | The preview reloads                    |                                                                       |
| `resize`       | The preview resizes                    | 1. `{number}` **`height`**: window height                             |
|                |                                        | 2. `{number}` **`width`**: window width                               |
| `zoom`         | The preview zooms in or out            | 1. `{number}` **`zoom`**: new zoom value                              |
|                |                                        | 2. `{boolean}` **`canZoomIn`**: true if the viewer can zoom in more   |
|                |                                        | 3. `{boolean}` **`canZoomOut`**: true if the viewer can zoom out more |

<!-- markdownlint-enable no-duplicate-header -->

[reactv]: https://github.com/bvaughn/react-virtualized
[shaka]: https://github.com/google/shaka-player