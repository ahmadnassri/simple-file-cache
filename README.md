# `simple-file-cache` [![version][npm-version]][npm-url] [![License][license-image]][license-url]

> a simple and easy to use file-based cache

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
# npm
npm install --production --save simple-file-cache

# yarn
yarn add simple-file-cache
```

## API

### `set(key, value[, ttl])`

Creates a cache record using the `key`:`value` pair, and optionally sets an expiry date using `ttl` in milliseconds.

```js
const cache = require('simple-file-cache')

cache.set('foo', 'bar', 100)
```

### `get(key)`

retrieves a cache record identified with `key`, if the expiry time has elapsed, the record will be deleted and return a value of `null`

```js
const cache = require('simple-file-cache')

cache.get('foo')
```

### `process.env.SIMPLE_CACHE_DIR`

path to store the cache records, defaults to `.cache`

---
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/)  · 
> License: [ISC][license-url]  · 
> Github: [@ahmadnassri](https://github.com/ahmadnassri)  · 
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/simple-file-cache.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/simple-file-cache
[travis-image]: https://img.shields.io/travis/ahmadnassri/simple-file-cache.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/simple-file-cache
[npm-version]: https://img.shields.io/npm/v/simple-file-cache.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/simple-file-cache.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/simple-file-cache
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/simple-file-cache.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/simple-file-cache.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/simple-file-cache
[david-image]: https://img.shields.io/david/ahmadnassri/simple-file-cache.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/simple-file-cache
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/simple-file-cache/badge?style=flat-square
