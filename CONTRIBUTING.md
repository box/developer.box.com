<!-- alex disable japanese -->

# Contributing

<!-- vscode-markdown-toc -->
* [Background](#Background)
	* [Project layout](#Projectlayout)
	* [Deploying changes](#Deployingchanges)
	* [Internationalization](#Internationalization)
* [Local development](#Localdevelopment)
	* [Prerequisites](#Prerequisites)
	* [Start local server](#Startlocalserver)
	* [Adding a guide](#Addingaguide)
	* [Adding index pages](#Addingindexpages)
	* [Adding microcopy](#Addingmicrocopy)
		* [Adding new Microcopy files.](#AddingnewMicrocopyfiles.)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Background'></a>Background

The key purpose for this project is to allow for the creation and deployment of
microcopy, guides, and pages for the [developer.box.com][boxdev] site.

### <a name='Projectlayout'></a>Project layout

* `./content` - the source content (guides and microcopy), as well as some
  templates and spellcheck dictionaries.
  * `./content/dictionaries` - The US English Hunspell dictionaries, used for
    spell checking.
  * `./content/guides` - A nested set of folders containing markdown files for
    guides before they are spellchecked and sanitized.
  * `./content/pages` - A nested set of folders containing markdown files for
    pages before they are spellchecked and sanitized.
  * `./content/microcopy` - A nested set of folders containing YAML files,
    before they combined into one file. These represent all the small bits of
    content on the site, mostly the text on buttons, in headers, and in links.
  * `./content/templates` - A set of templates that are by scripts to quickly
    add new guides, pages, and other content.
* `./src` - the Javascript source files used to compile the
  source content into the compiled content.
* `./tests` - the Javascript files used to lint, test, and spellcheck the guides
  and microcopy.

Additionally, the following folder is created at build time:

* `./compiled` - the compiled guides and microcopy
  * `./compiled/microcopy/microcopy.json` - a resolved and flattened JSON
    version of all the microcopy YAML files. This file is in JSON5 format.
  * `./compiled/guides` - a copy of `./content/guides` but with some small
    transformations applied. Mainly, MDX tags are sanitized to add padding and
    remove unwanted indentation.
  * `./compiled/pages` - a copy of `./content/pages` but with some small
    transformations applied. Mainly, MDX tags are sanitized to add padding and
    remove unwanted indentation.
	
### <a name='Deployingchanges'></a>Deploying changes

By pushing to the `default` branch the source will automatically be compiled and
pushed to the [`en`][en_branch] branch by
[Travis][travis].

This will then trigger a build by [Netlify][netlify] and push the changes to
[developer.box.com][boxdev]. 

To see this process in action, check the [#devrel-build][slack] channel in Slack.

### <a name='Internationalization'></a>Internationalization

Translations are automatically handled by Box's translation team. Currently, all
material is automatically translated to Japanese in the [`jp`][jp_branch]
branch.

To see this process in action, check the [#devrel-build][slack] channel in Slack.

## <a name='Localdevelopment'></a>Local development

### <a name='Prerequisites'></a>Prerequisites

This project requires Node for testing, linting, and compilation.

It also needs `yamllint` to lint the yaml files, and `hunspell` for
automatic spell checks.

On a Mac with Homebrew installed, you can install these as follows.

```shell
brew install hunspell yamllint
```

Finally, this project depends on Yarn, the Node package manager.

```shell
npm install -g yarn
```

### <a name='Startlocalserver'></a>Start local server

To work on this project we download the source, install the
dependencies, start the local web server, and watch for changes.

```bash
# clone this repository
git clone git@github.com:box/developer.box.com.git
# change into the folder
cd developer.box.com
# install all dependencies
yarn install
# build the content, start a webserver, and watch for changes
yarn start
```

This will compile guides and microcopy to the `./compiled` folder and serve them
on [localhost:8081](localhost:8081).

### <a name='Addingaguide'></a>Adding a guide

To add a guide, run the following. The title is optional.

```shell
yarn new path/to/file "My long title"
```

This will add a new empty guide file in `./content/guides/path/to/file.md` with a title
as provided. When published, this file will match to a page at `https://developer.box.com/en/guides/path/to/file`.

To get a more rich template, use the following template instead:

```shell
yarn new:guide:example path/to/file "My long title"
```

Make sure the server is started with `yarn start` and make changes to the guide.
Make sure all tests and linting passes before committing changes.

### <a name='Addingindexpages'></a>Adding index pages

Guides are rendered slightly different when they are index pages. Index pages
are pages named `index.md` and will automatically list all guides and
nested in that folder (and any folders within that folder).

To create an index page run:

```shell
yarn new path/to/index "Index page title"
```

This will add a new empty guide file in `./content/guides/path/to/index.md` and
map to the URL `https://developer.box.com/en/guides/path/to/`.

### <a name='Addingmicrocopy'></a>Adding microcopy

To add microcopy, find the relevant file in `./content/microcopy` to add the new
file to. Make sure to add a comment for every entry to provide a hint to the
translation stream on how to translate the value.

```yaml
// foobar: A hint for the "foobar" key that is passed to the translation team.
foobar: The actual value for the "foobar" key
```

Make sure the server is started with `yarn start` and make your changes.
Make sure all tests and linting passes before committing changes.

#### <a name='AddingnewMicrocopyfiles.'></a>Adding new Microcopy files.

Generally, microcopy is held within files that keep related keys together. To
add a new file, create a Yaml file with your content, and then add a new entry
for that file to `./content/microcopy/index.yml`.

```yml
new_file:
  $ref: "content/microcopy/new_file.yml"
```

[travis]: https://travis-ci.com/box/developer.box.com
[en_branch]: https://github.com/box/developer.box.com/tree/en
[jp_branch]: https://github.com/box/developer.box.com/tree/jp
[boxdev]: https://developer.box.com
[slack]: https://box.slack.com/app_redirect?channel=CH921R38R