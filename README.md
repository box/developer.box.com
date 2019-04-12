# Box Developer Documentation - Configuration

[![Project Status](http://opensource.box.com/badges/active.svg)](http://opensource.box.com/badges)

This repository contains the microcopy content and configuration for the Box Developer Documentation.

Visit [developer.box.com](https://developer.box.com) for more details on the Box API Platform.

## Structure

For now, this repository contains the microcopy and locale details for the 
Box Developer Documentation in plain YML files.

```yml
- locales.yml # contains a list of locales with their names and codes
- [locale_code]/ # a folder for every locale
  - microcopy/ # a folder containing microcopy
    - index.yml # an index of microcopy files
    - [...] # the microcopy files as specified in the index.yml
```

## Development

To use these files on a local machine you can use the build in HTTP server.

```sh
npm install -g yarn
yarn install
yarn start
```

## Copyright and License

Copyright 2019 Box, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

