---
rank: 4
related_endpoints:
  - get-metadata-templates-id
related_guides:
  - embed/ui-elements
required_guides:
  - embed/ui-elements/installation
related_resources: []
alias_paths:
  - /docs/box-content-explorer
  - /docs/content-explorer
---

# Content Explorer - metadata view

With Content Explorer you can also display files based on their metadata.
The metadata view uses [metadata template][template] and [metadata query][metadata-query] to
find the data you want to display.

![Metadata view](./images/explorer-view.png)

## Prerequisites

* Read the [Content Explorer][explorer] guide.
* Check the [metadata terminology][terminology].
* Check the information on [metadata queries][metadata-query].

## Create and configure an app

1. [Create a Box app][box-app].
2. Add the local development address in the CORS Domains: ![CORS Domains](./images/box-app-cors.png)
3. Generate a [developer token][token].

## Create a metadata template

The next step is to create a metadata template.

1. Use [Metadata API][creating-templates-api] or [Admin Console][creating-templates-ui] to create the template.
2. Apply an already created template to a Box folder. Make sure you enable the
cascade policy. For detailed instructions, see
[instructions on customizing and applying templates][apply-templates].

<Message type='notice'>
You can also apply a metadata template to a file.
</Message>

### Display name and key parameters

* The `displayName` parameter is the display name of the template visible
in the Admin Console.
* The `templateKey` parameter is a unique identifier of the template. It needs 
to be unique across the enterprise for which you create the metadata template.
If you don't provide the `templateKey` parameter, API creates a unique one
based on the value in `displayName`.
* The `[fields].displayName` parameter is the display name of the field as it
is shown to the user in the web and mobile apps.
* The `[fields].key` parameter is a unique identifier for a specific field in
the template. The identifier must be unique within the template to which it
belongs.

## Display metadata view

Proceed to fill in the necessary properties passed to the Content Explorer.
To make things easier, you can use a [sample project][metadata-project] based on a basic React app to launch metadata view.

1. Clone the metadata sample project.
2. Update the placeholders in [`App.js`][appjs] with actual values:

| Parameter | Description |
| --- | --- |
| `DEVELOPER_TOKEN` | [Developer token][token] generated in the the Developer Console. |
| `ENTERPRISE_ID` | Enterprise ID copied from the **General Settings** tab of your Box application. |
| `METADATA_TEMPLATE_NAME`| `templateKey` of your already created metadata template. **Note**: To make sure you provided the proper name, use the [metadata API][get-template] to retrieve the name, or copy it from the URL in the Admin Console. ![Metadata name in Admin Console](./images/metadata-template-name.png) If you decide to change the template name in the UI, you change the display name only. The name to use in the component is always the one you provided at the beginning. |
| `METADATA_SOURCE` | Source of your [metadata][source]. It's a string that combines the scope, enterprise ID, and metadata key. |
| `ROOTFOLDER_ID` | ID of a Box folder to which you want to apply the metadata query and display filtered files. |

The `defaultView`, `fieldsToShow`, and `metadataQuery` parameters are already
defined in the sample project. Examples of these parameters are available in the sample project.

| Parameter | Description |
| --- | --- |
| `defaultView` | A required prop to paint the metadata view. If it's not provided, you get the regular file view. |
| `fieldsToShow` | Add or hide specific metadata columns to display in the Content Explorer. |
|`metadataQuery` | Provides a way to find files by searching for the metadata attached to them. For additional information on metadata queries, see [this guide][metadata-query]. |

3. Pass the required parameters to the Content Explorer component.

A sample code for a React component including the Content Explorer metadata view would look as follows:

```js
function App() {
    const token = "<DEVELOPER_TOKEN>";
    const rootFolderID = "<ROOTFOLDER_ID>";
    const EID = "<ENTERPRISE_ID>";
    const templateName = "<METADATA_TEMPLATE_NAME>";
    const metadataSource = `enterprise_${EID}.${templateName}`;
    const metadataSourceFieldName = `metadata.${metadataSource}`;
    const metadataQuery = {
    	from: metadataSource,
    	query: "key = :arg1",
    	query_params: { arg1: "value" },
    	ancestor_folder_id: 0,
    	fields: [
        `${metadataSourceFieldName}.name`,
        `${metadataSourceFieldName}.last_contacted_at`,
        `${metadataSourceFieldName}.industry`,
        `${metadataSourceFieldName}.role`,
        ],
    };

    const fieldsToShow = [
    // canEdit propetry determines if the user can edit the metadata directly from Content Explorer component
    { key: `${metadataSourceFieldName}.name`, canEdit: false },
    // displayName alows to change the label on metadata column
    { key: `${metadataSourceFieldName}.industry`, canEdit: false, displayName: "alias" },
    { key: `${metadataSourceFieldName}.last_contacted_at`, canEdit: true },
    { key: `${metadataSourceFieldName}.role`, canEdit: true },
    ];

const defaultView = "metadata";
return (
    <IntlProvider locale="en">
        <div className="App">
            <header className="App-header">
                <h2>Metadata view in Content Explorer</h2>
            </header>
            <section>
                <div className="metadata-based-view">
                    <ContentExplorer
                        rootFolderId={rootFolderID}
                        token={token}
                        metadataQuery={metadataQuery}
                        fieldsToShow={fieldsToShow}
                        defaultView={defaultView}
                    />
                </div>
            </section>
        </div>
    </IntlProvider>
);
}

export default App;
```

## Metadata keys

To decide which fields to show, the metadata Content Explorer uses metadata
[field keys][field-key], not the [display names][display-name]. You can see the
display names in the Admin Console and user view, but you can obtain the field
keys through the API.

The field keys are not changing, even if you change the metadata display name.
This ensures that the functionality works properly, despite any changes to the
metadata in UI view.

### Metadata keys sanitization

[Keys][field-key] are restricted to alphanumeric characters only:

* No hyphens `-` or underscores `_` are permitted.
* Only letters (`a-z, A-Z`) and numbers (`0-9`) are allowed.

**Non-Latin characters:**

If keys contain characters from non-Latin alphabets (such as Cyrillic, Arabic,
Chinese, etc.) they are automatically renamed to generic identifiers:

* `field` for the first occurrence
* `field1`, `field2`, and so on for subsequent occurrences

Keys are based on the display names.

<Message type='notice'>
**TIP**: For a detailed flow, see [Metadata view blog post][blogpost].
</Message>

[terminology]: g://metadata/#metadata-terminology
[template]: r://get-metadata-templates-id
[explorer]: g:///embed/ui-elements/explorer
[blogpost]: https://medium.com/box-developer-blog/metadata-view-in-box-content-explorer-4978e47e97e9
[creating-templates-api]: g:///metadata/templates/create
[creating-templates-ui]: https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates
[appjs]: https://github.com/box-community/content-explorer-metadata/blob/main/src/App.js
[box-app]: g:///applications/app-types
[token]: g://authentication/tokens/developer-tokens
[apply-templates]: https://support.box.com/hc/en-us/articles/360044196173-Using-Metadata
[metadata-project]: https://github.com/box-community/content-explorer-metadata/tree/main
[get-template]: e://metadata/templates/get/#get-a-metadata-template-by-name
[metadata-query]: g://metadata/queries
[get-id]: e://get-metadata-templates-id-id-schema/
[field-key]: e://post-metadata-templates-schema/#param-fields-key
[display-name]: e://post-metadata-templates-schema/#param-fields-displayName
[source]: g://metadata/scopes
