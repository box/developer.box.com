# Box Developer Documentation - Configuration

[![Build
Status](https://travis-ci.com/box/developer.box.com.svg?branch=master)](https://travis-ci.com/box/developer.box.com)
[![Project
Status](https://opensource.box.com/badges/active.svg)](http://opensource.box.com/badges)
[![Greenkeeper
badge](https://badges.greenkeeper.io/box/developer.box.com.svg)](https://greenkeeper.io/)

This repository contains the microcopy content and configuration for the Box
Developer Documentation.

Visit [developer.box.com](https://developer.box.com) for more details on the Box
API Platform.

## Usage & License

This specification is provided under the [Apache License 2.0](LICENSE) license.

As this project is a work in progress no rights can be derived from this
specification and it may change without warning.

Currently the only recognised downstream dependency of this specification is the
new Box developer documentation available on [Box.dev](https://box.dev).

## Development

### Prerequisites

This project requires Node for testing, linting, and compilation.

It also needs `yamllint` to lint the yaml files.

```sh
brew install yamllint
```

Finally, this project depends on Yarn, the Node package manager.

```sh
npm install -g yarn
```

### Local Development

To work on the source, install the dependencies, start the local web server, and
watch for changes.

```bash
git clone git@github.com:box/developer.box.com.git
cd developer.box.com
yarn install
yarn start
```

This will compile all sources to a `config.json` and serve it on
[localhost:8081/config.json](http://localhost:8081/config.json).

## Deployment

Deployment is handled automatically to the `en` branch using Travis.
