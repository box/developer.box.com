# Adding microcopy

[**Previous:** Add a quick start guide](./add-quick-start-guide.md) |
[**Next:** Contributing a pull request](./pull-request.md)

---

## Add a new Yaml file

Let's say you're working on a new developer documentation site feature called a
`Webhook Tester`. You want to add some microcopy for the text on the buttons in
this UI so that it can be translated by the translation team to Japanese.

First, create a new file to keep the new microcopy.

```bash
touch content/microcopy/webhook-tester.yml
```

Then in the file, add any of the text you need as a list of key-value pairs.
Nesting these values inside other keys is allowed.

```yml
---
// title: The title of the webhook tester page
title: Webhook Tester

buttons:
  // test: The label of the button used to trigger a webhook test
  test: Test
```

### Microcopy comments

As you can see in the example above, every key is preceeded by a key-value pair
where the key is the same but with two forward-slashes included.

```yml
// test: The label of the button used to trigger a webhook test
test: Test
```

This extra line is a comment that is passed on to the translation team as a
description of the microcopy text. You need to always include this when adding
new copy.

## Add new yaml file to index

So far, the new microcopy will not be included when runnign `yarn build`. To do
this, add the new file to the `content/microcopy/index.yaml` file.

```yaml
...

webhook-tester:
  $ref: "content/microcopy/webhook-tester.yml"
```

## Lint the new microcopy

Once created, lint the page using `yarn lint`. Any spelling mistakes or broken
links should pop up automatically.

## Important notes

If a microcopy entry contains formatting elements like backticks ``` `something` ``` or asterisks ``` **something** ``` it will be automatically htmlified. To avoid that, the entry path have to contain `__raw__` segment, for example:

```yml
notice:
  __raw__:
    // additional_info: Notice with additional info with link
    additional_info: For more details, see **[Start here](g://getting-started)**.
```

---

[**Next:** Contributing a pull request](./pull-request.md)
