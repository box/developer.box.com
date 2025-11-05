# Markdown styleguide

[**Previous:** Contributing a pull request](./pull-request.md) |
[**Next:** Updating dependencies](./dependencies.md)

---

The following guidance will help you pass all spell checks and other common
issues.

## Limit line length

<!-- TODO: Determine new line length limit -->

We enforce a maximum line length of 80 characters. In general this is enough for
most people to easily read the content. Most advanced code editors allow for
automatic wrapping of content at the 80 character mark. Check your code editor
for details. Line length limit is disabled for tables and code blocks.

[!NOTE] Given that text editors support line wrapping, we are currently working on deciding on a new line length limit.

In the extreme case that a line can not be kept under the length limit,
for example, you can use the following syntax to make an exception.

```md
<!-- markdownlint-disable line-length -->

Do something long here ...........................................

<!-- markdownlint-enable line-length -->
```

## Internal links

You can link internal pages using `page://` (`p://`), `guide://` (`g://`), `endpoint://` (`e://`) or `resource://` (`r://`) prefixes:

* Using `page://` or `p://` you can link all internal pages.

  For example
  `page://changelog` will be resolved to `https://<domain>/changelog`
  where domain is a domain of a page on which the link is clicked. E.g. it can navigate to `https://developer.box.com/changelog` or `https://ja.developer.box.com/changelog`

* Using or `guide://` or `g://` prefix you can link guides. For example
  ```
  g://api-calls/permissions-and-errors/rate-limits
  ```
  will be changed to
  ```
  https://<domain>/guides/api-calls/permissions-and-errors/rate-limits
  ```
* Using `endpoint://` or `e://` you can link API reference pages. For instance
  ```
  e://post_users#param-language
  ```
  will become
  ```
  https://<domain>/reference/post_users#param-language
  ```

  * Using `resource://` or `r://` you can link resource pages:
  ```
  resource://user
  ```
  will become
  ```
  https://<domain>/reference/resources/user
  ```

> **Important note**
>
> Links staring with one of these prefixes should not end with `/`


## Localize links

Any links that do not use the `g://`, `e://` structure or otherwise need to use
the tags below to ensure they are localized for our Japan customers.

```md
<!-- i18n-enable localize-links -->
[view-app]: https://developer.box.com/guides/embed/box-view/
<!-- i18n-disable localize-links -->
```

## Indentation

### Ordered and unordered lists

If a list element contains more elements (e.g., an extra paragraph, a block of code, a nested list), these elements should have 4 extra spaces added at the beginning of each line to ensure proper rendering.

### Code blocks

Code blocks should use standard idnentation for used programming language. For most programming language like Java, C# or Python it's 4 spaces per tab. Code blocks containg json data should use 2 spaces as the unit of indentation.

## Escape any code and brand names

The spell-checker will often fail on brand names
and any pieces of code. Rather than adding these
words to the dictionary, we recommend instead that you
use backticks to describe any of these words.

```md
The `ad_id` field represents the `Active Directory`
identifier of this user.
```

For example:

* Product names like `NodeJS`
* References to function names like `getFileById()`, `BoxConfig.doThatThing()`,
  etc
* References to variable names like `file_id`, `allow_access`, etc
* Version numbers, like `v1.0.0`, or `V2.0`
* Or alternatively capitalize acronyms, like TLS, SSH, etc, as these will be
  ignored by the spell-checker as well.

Backticked words will not be translated, so only use
backticks for words that do not require translation.

## Add unknown words to dictionary

In the extreme case that a word is not recognized
by our dictionary, and it's a word that needs to be
translated and therefore can not be escaped using
backticks, the word can be added to the `.spelling`
file at the root of the project.

## Add syntax highlighting

When writing longer code-blocks, add the language of the sample in the
definition of the code block. This will enable syntax highlighting for the
sample.

<!-- markdownlint-disable code-fence-style fenced-code-language -->

~~~
```yaml
---
- title: This is Yaml
```
~~~

<!-- markdownlint-enable code-fence-style fenced-code-language -->

## Avoid using `a`, `an` and `the` in titles

Titles of endpoints and resources should not include `a`, `an`, or `the`.

| Bad                   | Good          |
|-----------------------|---------------|
| Get a comment         | Get comment   |
| Assign the policy     | Assign policy |
| List all the comments | List comments |

## Don't over capitalize titles

Titles and headers should only be capitalized at the start of the title, and for
names.

| Bad                        | Good                       |
|----------------------------|----------------------------|
| Add `owner` Field to Files | Add `owner` field to files |
| Allow File API To Use JWT  | Allow file API to use JWT  |
| Box CLI `3.0.0` Release    | Box CLI `3.0.0` release    |

## Standards for Box terminology

* Platform App refers to the type of app selected in the create new app flow
whereas platform application refers to the custom solution built by the customer
* Access Token
* Box Admin
* App Users and Managed Users
* Developer Console
* Service Account
* support article or support resource
* bold button names
* capitalize setting names
* use application vs app when possible

[**Next:** Updating dependencies](./dependencies.md)
