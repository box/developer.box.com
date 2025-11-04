# Installation & setup

[**Previous:** Contribution guidelines](../CONTRIBUTING.md) |
[**Next:** Notes for Box employees](./boxers.md)

---

## Prerequisites

This project has a few prerequisites.

* [`Git`](https://git-scm.com/) to download the source code
* When using Docker
  * A local installation of Docker. I'd recommend the
    [Docker Desktop](https://www.docker.com/products/docker-desktop)
    on Mac.
  * [Docker Compose](https://docs.docker.com/compose/) which can be
    installed with `Homebrew` using `brew install docker-compose`.
* When not using Docker
  * [`Node.js`](https://nodejs.org/) for compilation and linting of the API
    specification. Ideally Node 18 or above.
  * [`Yarn`](https://yarnpkg.com/) is the Node package manager for this project.
    It can be installed with `npm i -g yarn` if Node is installed.
  * [`YamlLint`](https://github.com/adrienverge/yamllint) is the linter to validate
    `Yaml` files. It can be installed with `brew install yamllint` if your machine
    has [`Homebrew`](https://brew.sh) installed.

## Download the code

To setup this project, download the source code and install all the
dependencies.

```sh
git clone git@github.com:box/developer.box.com.git developer.box.com
cd developer.box.com
```

## Run with Docker

To run with Docker

```sh
docker-compose up --build
```

## Run with Node

To run with Node directly, make sure you have Node 18 or higher installed.

```sh
yarn install
yarn start
```

## Lint and validate the tests

With the dependencies installed, it is possible to lint the markdown and
microcopy. Linting validates the markdown is valid, has no spelling
mistakes, and that  there are no obvious incorrect links.

```sh
yarn lint
```

Additionally, each of the lint steps can be run individually.


```sh
lint:markdown # runs markdownlint to validate the markdown syntax
lint:spelling:interactive # validates the spelling of the files
lint:alex # validates that none of the text includes any insensitive content
lint:yaml # validates that the microcopy files are valid Yaml
lint:links # runs some basic linting on the links in the guides
```


## Transpiled the markdown and microcopy

Before the markdown and microcopy can be used in other projects they need to be
transpiled.

```sh
yarn build
```

This build performs a few simple steps:

1. It reformats the markdown to add extra spacing around HTML/React tags
2. It turns self closing HTML tags (`<Foo />`) into separate open and closing
   tags (`<Foo></Foo>`)
3. It adds some extra information to each markdown file in the frontmatter
4. it converts all the separate microcopy Yaml files into one big JSONP file
   (JSON with comments).

---

[**Next:** Notes for Box employees](./boxers.md)
