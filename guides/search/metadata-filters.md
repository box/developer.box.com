---
related_endpoints:
  - get_search
required_guides: []
category_id: search
subcategory_id: null
is_index: false
id: search/metadata-filters
rank: 5
type: guide
total_steps: 9
sibling_id: search
parent_id: search
next_page_id: search/enterprise
previous_page_id: search/pagination
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/guides/search/5-metadata-filters.md
---
# Metadata Query Filters

The [`GET /search`][search_api] API allows for filtering search results by their
associated metadata. A `mdfilters` query parameter allows a developer to specify
a metadata template and the desired values to query.

<!-- markdownlint-disable line-length -->

<Tabs>

<Tab title='cURL'>

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&mdfilters=%5B%7B%22scope%22%3A%22enterprise%22%2C%22templateKey%22%3A%22contract%22%2C%22filters%22%3A%7B%22category%22%3A%22online%22%7D%7D%5D" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

</Tab>

<Tab title='Java'>

```java
long offsetValue = 0;
long limitValue = 10;

BoxSearch boxSearch = new BoxSearch(api);
BoxSearchParameters searchParams = new BoxSearchParameters();
searchParams.setQuery("sales");

BoxMetadataFilter bmf = new BoxMetadataFilter();
bmf.setScope("enterprise");
bmf.setTemplateKey("contract");
bmf.setFilter("category", "online")
searchParams.setMetadataFilter(bmf)

PartialCollection<BoxItem.Info> searchResults = boxSearch.searchRange(offsetValue, limitValue, searchParams);
```

</Tab>

<Tab title='.NET'>

```dotnet
var filter = new
{
  category = "online"
};

var filters = new List<BoxMetadataFilterRequest>()
{
    new BoxMetadataFilterRequest()
    {
        Scope = "enterprise",
        TemplateKey = "contract",
        Filters: filter
    }
};
BoxCollection<BoxItem> results = await client.SearchManager
    .QueryAsync("sales", mdFilters: filters);
```

</Tab>

<Tab title='Python'>

```py
from boxsdk.object.search import MetadataSearchFilter, MetadataSearchFilters

metadata_search_filter = MetadataSearchFilter(scope='enterprise', template_key='contract')
metadata_search_filter.add_value_based_filter(field_key='category', value='online')
metadata_search_filters = MetadataSearchFilters()
metadata_search_filters.add_filter(metadata_search_filter)

client.search().query("sales", metadata_filters=metadata_search_filters)
```

</Tab>

<Tab title='Node'>

```js
client.search.query(
  'sales',
  {
    mdfilters: [
      {
        scope: 'enterprise',
        templateKey: 'contract',
        filters: {
          category: 'online;
        }
      }
    ]
  })
  .then(results => {
    // ...
  });
```

</Tab>

</Tabs>

<!-- markdownlint-enable line-length -->

<Message info>

This example filters a search for any content that matches the query `sales`
by any item that has `enterprise.contract` metadata attached to it and where
the `category` field is set to `online`.

</Message>

## Introduction to Metadata

Metadata allows users and applications to define and store custom data
associated with files and folders.

<ImageFrame border center>

![String field](../metadata/metadata-example.png)

</ImageFrame>

Metadata consists of key/value pairs that are assigned to a file or a folder.
For example, an important contract may have the key/value pairs of
`clientNumber: 820183` and `category: online`.

The `mdfilters` query parameter allows developers to find files and folders that
have a specific piece of metadata attached to them.

<CTA to='g://metadata'>

Learn more about metadata templates and instances

</CTA>

## Metadata Filter Syntax

The `mdfilters` parameter can currently only contain one filter, although this
may be expanded in the future.

Each filter defines the `scope` and `templateKey` of the metadata template to
filter on.

```json
[
  {
    "scope": "enterprise",
    "templateKey": "contract",
    "filters": {}
  }
]
```

<Message>

To get the `scope` and `templateKey` for a template, either
[list all metadata templates][g_list_templates] for an enterprise, or
[list all metadata instances on an item][g_list_instances_item].

</Message>

With the template defined, the `filters` field accepts a few different filter
formats. The format of the filter very much depends on the type of field being
filtered by.

### Filter by `string` field

To filter by a field of type `string` a filter will need to define the `key` of
the field and the desired value to find items for.

```json
[
  {
    "scope": "enterprise",
    "templateKey": "contract",
    "filters": {
      "category": "online"
    }
  }
]
```

<Message info>

This example will find all files and folders that have an instance of the
`enterprise.contract` template applied to it, and for which the field with the
key `category` is set to the value `online`.

</Message>

### Filter by `float` field

To filter by a field of type `float`, you will need to define define a range by
specifying a `gt` (greater-than) and/or `lt` (lower-than) value. To find an
exact value, you can input the same value for both `gt` and `lt`.

```json
[
  {
    "scope": "enterprise",
    "templateKey": "contract",
    "filters": {
      "amount": {
        "gt": 10000,
        "lt": 20000
      }
    }
  }
]
```

This example will find all files and folders that have an instance of the
`enterprise.contract` template applied to it, and for which the field with the
key `amount` is set to a value equal or higher than `10000` and equal or lower
than `2000`. Note that `gt` and `lt` are inclusive and do not need to
both be set.

<Message info>

If you create a query based on numbers, do not
exceed the range of -16777215 and +16777215.
For metadata search using number attributes
the index value is stored as FLOAT32. As a result,
integers between -16777215 and +16777215 can be precisely represented.
Any operation with numbers beyond the range can lose its precision.

</Message>

### Filter by `date` field

To filter by a field of type `date` a filter will need to define the `key` of
the field and the desired range to find items by specifying a `gt`
(greater-than) and `lt` (lower-than) value. Please note that `gt` and `lt` are
inclusive.

```json
[
  {
    "scope": "enterprise",
    "templateKey": "contract",
    "filters": {
      "expirationDate": {
        "gt": "2016-08-01T00:00:00Z",
        "lt": "2017-08-01T00:00:00Z"
      }
    }
  }
]
```

<Message info>

This example will find all files and folders that have an instance of the
`enterprise.contract` template applied and have an `expirationDate` set to
a date after or exactly `2016-08-01T00:00:00Z`
and before or exactly `2017-08-01T00:00:00Z`.

</Message>

### Filter by `enum` field

To filter by a field of type `enum` a filter will need to define the `key` of
the field and the desired value to find items for.

```json
[
  {
    "scope": "enterprise",
    "templateKey": "contract",
    "filters": {
      "category": "online"
    }
  }
]
```

<Message info>

This example will find all files and folders that have an instance of the
`enterprise.contract` template applied to it, and for which the field with the
key `category` is set to the value `online`.

</Message>

### Filter by `multiSelect` field

To filter by a field of type `multiSelect` a filter will need to define the
`key` of the field and any of the potential desired values to find items for.
When performing a search, the query will essentially perform an `OR` operation
to match any template where any of the provided values match this field.

```json
[
  {
    "scope": "enterprise",
    "templateKey": "contract",
    "filters": {
      "category": [
        "online",
        "enterprise"
      ]
    }
  }
]
```

<Message info>

This example will find all files and folders that have an instance of the
`enterprise.contract` template applied to it, and for which the field with the
key `category` is set to the value `online` or `enterprise`.

</Message>

[search_api]: e://get_search
[g_list_templates]: g://metadata/templates/list
[g_list_instances_item]: g://metadata/instances/list