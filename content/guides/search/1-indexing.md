---
related_endpoints:
 - get_search
required_guides: []
---

# Search indexing

Box keeps a search index for any files or folders stored in Box.
Every time a file or folder is changed, those words are added to the index.
When a search is performed, the API looks in the search index for files and
folders that match the query. When content is added, updated, or deleted in
Box, the search index is updated accordingly.

## Search Availability

It can take time between uploading or modifying a
file for it to be fully indexed and ready to be searched. In most cases,
newly added or changed files can be expected to be available via Box search
in 10 minutes. The current service load determines the index time and it may
take more than 10 minutes in some cases.

<Message info>

In some cases an index might not be updated even after 10 minutes.
In those cases we recommend reaching out to [Box Support][support]
to get the issue resolved.

</Message>

## Search Access

Only content that the authenticated user has access to
(items they can preview and/or view) will be returned in the search results.

In other words, a user needs to either own an item or be a collaborated in on an
item for it to show up in the search results. If a user doesn't have access to
an item, or if they have been shared the item via a shared link, then the item
will also not appear in the search results.

One exception is that items that have been recently accessed via a shared link
can be requested in the search results by setting the
`include_recent_shared_links` query parameter to `true`.

## Prefix Matching and Wildcard Search

Trailing wildcards (also known as
prefix matching) are implicitly included in search results because of the way
text is indexed. Searching for `Bo` results in items with titles containing
`Box` or `Boat` or `Boxer`. It is the equivalent of searching for `Bo*` or
`Bo%` in traditional search engines. Traditional wildcard notation is not
supported by Box, such as `%ox%`. While we support prefix matching on titles,
we do not support prefix matching on body content, suffix matching in the
title or body content, or infix (middle of the word) matching in the title or
body content. For example, a search on `cal` would match results for a **file
named** `California` but not `decal` or `recall`. It would not match results
with **file body contents** of prefixes, infixes, or suffixes including
`California`, `recall`, or `decal`.

## Stemming

Box Search uses stemming to match terms from the query to terms
in the index. Because of this, words that include the same stem may be
included in the result set, even if the words do not contain the exact form
in the query. For example, `run` and `running` map to the same stem, so a
search on `running` may return a document containing `run` in the title.

## File Content Searching

The content within files is also stored
within the Box search index. The following file types allow searching for
their content:

|           |          |              |          |        |
| --------- | -------- | ------------ | -------- | ------ |
| `boxnote` | `csv`    | `doc`        | `docx`   | `gdoc` |
| `gsheet`  | `gslide` | `gslides`    | `htm`    | `html` |
| `msg`     | `odp`    | `odt`        | `ods`    | `pdf`  |
| `ppt`     | `pptx`   | `rtf`        | `tsv`    | `wpd`  |
| `xhtml`   | `xls`    | `xlsm`       | `xlsx`   | `xml`  |
| `xsd`     | `xsl`    | `as`         | `as3`    | `asm`  |
| `bat`     | `c`      | `cc`         | `cmake`  | `cpp`  |
| `cs`      | `css`    | `cxx`        | `diff`   | `erb`  |
| `groovy`  | `h`      | `haml`       | `hh`     | `java` |
| `js`      | `json`   | `less`       | `log`    | `m`    |
| `make`    | `md`     | `ml`         | `mm`     | `php`  |
| `pl`      | `plist`  | `properties` | `py`     | `rb`   |
| `rst`     | `sass`   | `scala`      | `script` | `scm`  |
| `sml`     | `sql`    | `sh`         | `txt`    | `vi`   |
| `vim`     | `webdoc` | `yaml`       |          |        |

## Indexed Text per Document

The Box search index stores up to 10,000 bytes
(~10,000 characters in English) per document for accounts from Business level
and above. This amount can vary from document to document because of
language, Box’s indexing method, and document type.

<Message warning>
  If your enterprise has full text search turned off
  (e.g. [Keysafe][keysafe] customers), characters within a document
  cannot be searched. If you need to find out if full
  text search is turned off, reach out to your account team.
</Message>

## OCR Support

Box does not currently perform OCR on its documents.

## Document Versions

Search only indexes content from the current version
of a document, so that you do not have to sift through hundreds of irrelevant
search results of outdated documents. You cannot use search to query
non-current versions of a document.

## Language Support

<!--alex ignore chinese-->
Box search supports the following languages: Chinese,
English, French, German, Italian, Japanese, and Spanish. Box does not support
indexing of multiple languages within a single document.

## Trash

Searching the trash is available via the API by using the
`trash_content` query parameter.

<!-- i18n-enable localize-links -->
<CTA to='https://support.box.com/hc/en-us/articles/360043696314-Search-for-Files-Folders-and-Content'>
  Check our community article with the latest details on Search in Box
</CTA>
<!-- i18n-disable localize-links -->

[support]: page://support
<!-- i18n-enable localize-links -->
[keysafe]: https://www.box.com/security/keysafe
<!-- i18n-disable localize-links -->
