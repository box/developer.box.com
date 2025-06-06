---
rank: 10
related_endpoints: []
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/annotations
  - /annotations-beta
---

# Annotations

Box Annotations allow developers to provide collaboration capabilities right
from within the embedded Box preview in their application. Box Annotations fit a
wide range of use cases and can be used to draw the previewer's attention and/or
provide feedback on specific parts of a document or images.

<CTA to="g://embed/ui-elements/preview">
  Learn more about Content Preview
</CTA>

Box Content Preview currently supports four annotation types - highlight
comment, highlight only, draw, and point annotation. Box Annotations are today
supported on documents and image previews only. You can find the full list of
supported file types for Box Content Preview [here][filetypes].

## Browser support

[Learn more about browser support](g://embed/ui-elements/browser) for Box UI
element.

## Usage

<!-- i18n-enable localize-links -->
Box Annotations can be used by pulling from our [NPM
package](https://www.npmjs.com/package/box-annotations).
<!-- i18n-disable localize-links -->

## Initialization

```js
/* global BoxAnnotations */
const boxAnnotations = new BoxAnnotations();
const annotatorConf = boxAnnotations.determineAnnotator(
    options,
    disabledAnnotationTypes
);

// Construct and init annotator
const annotator = new annotatorConf.CONSTRUCTOR(options);

annotator.init(scale);
```

Where `disabledAnnotationTypes` is a string of valid annotation types to
disable. See below for
more details on viewer specific annotation configurations.

## Authentication

The UI Elements are designed in an authentication agnostic way so whether
you are using UI Elements for users who have Box accounts (Managed Users) or
non-Box accounts (App Users), UI Elements should work out of the box. The
reason for this is that UI Elements only expect a "token" to be passed in for
authentication, and Box provides two different ways to generate tokens - OAuth
and JWT.

<CTA to="g://authentication/select">
  Learn about selecting an authentication method
</CTA>

If your application requires the end user to only be able to access a subset of
the Annotations functionality, you can use
[Downscoping](g://authentication/tokens/downscope) to appropriately
downscope your Access Token to a resulting token that has the desired set of
permissions, and can thus, be securely passed to the end user client
initializing Annotations.

Below are a set of new Annotation-specific scopes to go alongside Downscoping.
These allow developers to enable/disable functionality on Box
Annotations by configuring the appropriate scopes on the downscoped token. To
learn more, see [Dedicated scopes for the Box UI
Elements](g://embed/ui-elements/scopes).

## Parameters & Options

```js
const annotator = new annotatorConf.CONSTRUCTOR({
    annotator,
    apiHost,
    token,
    container,
    file: {
        id,
        file_version: {
            id
        },
        permissions
    },
    isMobile,
    hasTouch,
    locale,
    modeButtons: {
        // Annotation mode buttons, i.e. point, draw, etc
        point: {
          // Accessibilty message for the point annotation mode button
          title: "Point annotation mode",
          // CSS selector for the point annotation mode button
          selector: ".bp-btn-annotate-point"
        }
    }
});
```

| Parameter              | Default | Description                                                                                            |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `annotator`            |         | Viewer-specific annotator configurations object                                                        |
| `apiHost`              |         | Host for Box API calls for example `https://app.box.com/api`                                           |
| `fileId`               |         | Box file ID                                                                                            |
| `token`                |         | A string auth token, see below for details on how to generate annotator tokens with appropriate scopes |
| `container`            |         | DOM node or selector where Preview should be placed                                                    |
| `file`                 |         | File metadata object                                                                                   |
| `file.id`              |         | String `Box_File` id                                                                                   |
| `file.file_version.id` |         | String `Box_File_Version` id                                                                           |
| `file.permissions`     |         | File permissions object, see below on how to scope permissions                                         |

| Option        | Default | Description                                                                                                                         |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `modeButtons` |         | Object containing a CSS selector and accessibility message for the annotation mode button, see parameters and options example above |
| `isMobile`    | `false` | Whether the user's browser is on a mobile device                                                                                    |
| `hasTouch`    | `false` | Whether the mobile browser has touch enabled                                                                                        |
| `locale`      | `en-US` | Shared link URL                                                                                                                     |

### Base Scope

| Scope Name     | What permissions does it grant?                                                           |
| -------------- | ----------------------------------------------------------------------------------------- |
| `base_preview` | Allows preview access to a file or files in a folder based on user/file/token permissions |

### Feature Scopes

| Scope Name             | What permissions does it grant?                                             |
| ---------------------- | --------------------------------------------------------------------------- |
| `item_download`        | Allows files/folders contents to be downloaded                              |
| `annotation_view_self` | Allows user to view their own annotations                                   |
| `annotation_view_all`  | Allows user to view all annotations on the file                             |
| `annotation_edit`      | Allows user to edit their own annotations (includes `annotation_view_self`) |

### Sample Scenarios

| Scenario                                                                                                       | Scope Combinations                                         |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| User wants basic preview functionality + ability to edit own annotations                                       | `base_preview` + `annotation_edit`                         |
| User wants basic preview functionality + ability to edit own annotations + ability to select text on documents | `base_preview` + `annotation_edit` + `item_download`       |
| User wants basic preview functionality + ability to view all annotations + ability to edit own annotations     | `base_preview` + `annotation_view_all` + `annotation_edit` |
| User wants basic preview functionality + ability to view only their own annotations                            | `base_preview` + `annotation_view_self`                    |

## Enabling/Disabling Annotations and Annotation Types

Annotation types can be selectively turned off through preview options. Viewer
options override global `showAnnotations` value, for that viewer. See [Box
Content Preview](g://embed/ui-elements/preview) for more details on how to
set up the Preview instances that are used with Box Annotations here.

```js
preview.show(..., {
    showAnnotations: Boolean
});
```

Combined with the following:

```js
preview.show(..., {
    viewers: {
        VIEWER_NAME: {
            annotations: {
                enabled: Boolean,
                enabledTypes: String[] | null
            }
        }
    }
});
```

This turns the annotations on if `enabled` is set to `true`. This respects the
`showAnnotations` value if empty. The `enabledTypes` value is a list of
annotation types to enable for this viewer. If empty, will respect default types
for that annotator.

### Example

Enable all annotations, turn off for Image Viewers, and enable only point
annotations on Document viewer:

```js
preview.show(fileId, token, {
    showAnnotations: true,
    viewers: {
        Image: {
            annotations: {
                enabled: false
            }
        },
        Document: {
            annotations: {
                enabled: true,
                enabledTypes: ["point"]
            }
        }
    }
});
```

## Annotators

The name of an annotator can be one of the following `DocAnnotator` or
`ImageAnnotator`. Call `boxAnnotations.getAnnotators()` to get the list of
possible annotators.

## Additional Methods

- `annotator.init()` initializes the annotator.
- `annotator.isModeAnnotatable(/* String */ type)` returns whether or not the current annotation mode is enabled for the current viewer/annotator.
- `annotator.showModeAnnotateButton(/* String */ currentMode)` shows the annotate button for the specified annotation mode.
- `annotator.getAnnotateButton(/* String */ annotatorSelector)` gets the annotation button element.
- `annotator.showAnnotations()` fetches and shows saved annotations.
- `annotator.hideAnnotations()` hides annotations.
- `annotator.hideAnnotationsOnPage(/* number */ pageNum)` hides annotations on a specified page.
- `annotator.setScale()` sets the zoom scale.
- `annotator.toggleAnnotationHandler()` toggles annotation modes on and off. When an annotation mode is on, annotation threads will be created at that location.
- `annotator.disableAnnotationMode(/* String */ mode, /* HTMLElement */ buttonEl)` disables the specified annotation mode.
- `annotator.enableAnnotationMode(/* String */ mode, /* HTMLElement */ buttonEl)` enables the specified annotation mode.
- `annotator.getAnnotatedEl(/* HTMLElement */ containerEl)` determines the annotated element in the viewer.
- `annotator.createAnnotationThread(/* Annotation[] */ annotations, /* Object */ location, /* String */ [annotation type])` creates the proper type of annotation thread, adds it to the in-memory map, and returns it.

## Events

Events can be bound to the annotator object with `addListener` and removed with
`removeListener`. Event listeners should be bound before `showAnnotations()` is
called, otherwise events can be missed.

```js
/* global BoxAnnotations */
const boxAnnotations = new BoxAnnotations();
const annotatorConf = boxAnnotations.determineAnnotator(
    options,
    disabledAnnotationTypes
);

// Construct and init annotator
const annotator = new annotatorConf.CONSTRUCTOR(options);
var listener = value => {
    // Do something with value
};

// Attach listener before calling show otherwise events can be missed
annotator.addListener(EVENTNAME, listener);

// Initialize a annotator
annotator.showAnnotations();

// Remove listener when appropriate
annotator.removeListener(EVENTNAME, listener);
```

`EVENTNAME` can be one of the following

- `annotator` event will be triggered when we have the annotator instance first available. Box Annotations trigger this event before `load` so that clients can attach their listeners before the `load` event is triggered from Box Content Preview.
- `annotationsfetched` event will be triggered when annotations have been fetched from the Box API.
- `annotationmodeenter` event will be triggered on when an annotation mode is entered. The event data will contain:

```js
{
  // Annotation mode that was entered
  mode: 'point',
  // Optional CSS selector for the container's header
  headerSelector: '.bp-preview-header',
}
```

`annotationmodeexit` event will be triggered on when an annotation mode is exited.
The event data will contain:

```js
{
  // Annotation mode that was exited
  mode: 'point',
  // Optional CSS selector for the container's header
  headerSelector: '.bp-preview-header',
}
```

`annotationerror` event will be triggered when an annotation error has occurred.
The event data will contain:

```js
{
  message: 'message', // Error message to show
}
```

`annotationpending` event will be triggered when an annotation thread was created
but has not yet been saved on the server. The event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationthreadsaved` event will be triggered when an annotation thread was saved
on the server. The event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationthreaddeleted` event will be triggered when an annotation thread was
deleted on the server. The event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationsaved` event will be triggered when an annotation is added and saved to
an existing annotation thread on the server. The event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationdeleted` event will be triggered when an annotation is deleted from an
existing thread on the server. The entire annotation thread is not deleted. The
event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationcanceled` event will be triggered when an annotation is canceled from
posting on either a new or existing thread. The event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationdeleteerror` event will be triggered when an error occurs while deleting
an annotation on either a new or existing thread. The event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotationcreateerror` event will be triggered when an error occurs while posting
an annotation on either a new or existing thread. The event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

`annotatorevent` Each annotator will trigger its own sets of events. For example,
the Image Annotator will trigger `rotate` or `resize`, etc. while other annotator
may trigger another set of events. The Annotator wrapper will also re-emit events
at the Preview level in Box Content Preview, with event data containing:

```js
{
  event: EVENTNAME,             // Event name
  data: DATA,                   // Event data object
  annotatorName: ANNOTATORNAME, // Name of the annotator
  fileVersionId: fileVersionId  // The file version id
  fileId: fileId                // The file id
}
```

### Example event usage

```js
preview.addListener("annotator", viewer => {
    annotator.addListener("annotationsfetched", () => {
        // Do something when annotations are fetched on a preview
    });
});

// Event listeners can be attached to viewers
preview.addListener("load", data => {
    var viewer = data.viewer;
    viewer.addListener("annotationsfetched", () => {
        // Do something when annotations are fetched on a preview
    });
});

// Event listeners can be attached to annotators
preview.addListener("load", data => {
    var annotator = data.viewer.annotator;
    annotator.addListener("annotationsfetched", () => {
        // Do something when annotations are fetched on a preview
    });
});

preview.addListener("annotatorevent", data => {
    if (data.event === "annotationsfetched") {
        // Do something when annotations are fetched on a preview
    } else if (data.event === "annotationerror") {
        // Do something different when an annotation error has occurred
    } else {
    }
});

preview.addListener("annotatorevent", data => {
    if (data.viewerName === "Image") {
        if (data.event === "annotationsfetched") {
            // Do something when annotations are fetched on an image preview
        }
    } else if (data.viewerName === "MultiImage") {
        if (data.event === "annotationsfetched") {
            // Do something different when annotations are fetched on a multi-page image
        }
    } else {
    }
});

preview.addListener("annotationsfetched", data => {
    if (data.viewerName === "Image") {
        // Do something when annotations are fetched on an image preview
    } else if (data.viewerName === "MultiImage") {
        // Do something different when annotations are fetched on a multi-page image
    } else {
    }
});
```

## Annotation Thread

### Thread Methods

The following methods are available for the annotation threads.

| Method Name        | Explanation                                     | Method Parameters                                                                  |
| ------------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| `createDialog`     | Creates the dialog for the thread               |                                                                                    |
| `show`             | Shows the annotation indicator                  |                                                                                    |
| `hide`             | Hides the annotation indicator                  |                                                                                    |
| `reset`            | Resets thread state to 'inactive'               |                                                                                    |
| `showDialog`       | Shows the appropriate dialog for this thread    |                                                                                    |
| `hideDialog`       | Hides the appropriate indicator for this thread |                                                                                    |
| `saveAnnotation`   | Saves an annotation locally and on the server   | {string} annotation type, {text} text of annotation to save                        |
| `deleteAnnotation` | Deletes an annotation                           | {string} annotation ID, {boolean} whether or not to delete on server, default true |

### Thread Events

All annotation threads trigger the following events. The event data will contain:

```js
{
  data: {
    type: 'point', // Annotation type
    threadID: '123abc',
    userId: '456def',
    threadNumber: '1' // Thread number from Annotations API
  }
}
```

| Event Name                | Explanation                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `annotationpending`       | An annotation thread was created but has not yet been saved on the server.                                           |
| `annotationthreadsaved`   | An annotation thread was saved on the server.                                                                        |
| `annotationthreaddeleted` | An annotation thread was deleted on the server.                                                                      |
| `annotationsaved`         | An annotation thread was added and saved to an existing annotation thread on the server                              |
| `annotationdeleted`       | An annotation thread was deleted from an existing thread on the server. The entire annotation thread is not deleted. |
| `annotationcanceled`      | An annotation thread was canceled from posting on either a new or existing thread.                                   |
| `annotationdeleteerror`   | An error occurs while deleting an annotation on either a new or existing thread.                                     |
| `annotationcreateerror`   | An error occurs while posting an annotation on either a new or existing thread.                                      |

See the **Events** section above for example event usage.

## Annotation Dialog

### Dialog Methods

The following methods are available for the annotation dialog.

| Method Name        | Explanation                               | Method Parameters                |
| ------------------ | ----------------------------------------- | -------------------------------- |
| `show`             | Positions and shows the dialog            |                                  |
| `hide`             | Hides the dialog                          |                                  |
| `hideMobileDialog` | Hides and resets the shared mobile dialog |                                  |
| `addAnnotation`    | Adds an annotation to the dialog          | {Annotation} annotation to add   |
| `removeAnnotation` | Removes an annotation from the dialog     | {string} annotation ID           |
| `postAnnotation`   | Posts an annotation in the dialog         | {string} annotation text to post |
| `position`         | Positions the dialog                      |                                  |

## Supported Annotation Types

Point annotations are supported on both document and image formats. Highlight
comment, highlight only, and draw annotations are only supported on document
formats.

Supported document file extensions: `pdf`, `doc`, `docx`, `ppt`, `pptx`, `xlsx`,
`xls`, `xlsm`.

Supported image file extensions: `ai`, `bmp`, `dcm`, `eps`, `gif`, `idml`,
`indd`, `indt`, `inx``png`, `ps`, `psd`, `svs`, `tga`, `tif`, `tiff`.

<!-- i18n-enable localize-links -->
[filetypes]: https://support.box.com/hc/en-us/articles/360043695794-Viewing-Different-File-Types-Supported-in-Box-Content-Preview
<!-- i18n-disable localize-links -->
