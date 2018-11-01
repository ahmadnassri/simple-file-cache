# Simple File Cache

[![License][license-image]][license-url] [![version][npm-image]][npm-url] [![Build Status][circle-image]][circle-url]

> a simple and easy to use file-based cache

## Install

```bash
npm install @ahmadnassri/simple-file-cache
```

## API

### `_(namespace)`

Create a new cache name space

```js
const simple = require('@ahmadnassri/simple-file-cache')

const cache = simple('my-awesome-app')

cache.set('foo', 'bar', 100)
```

### `set(key, value[, ttl])`

Creates a cache record using the `key`:`value` pair, and optionally sets an expiry date using `ttl` in milliseconds.

```js
cache.set('foo', 'bar', 100)
```

### `get(key)`

retrieves a cache record identified with `key`, if the expiry time has elapsed, the record will be deleted and return a value of `null`

```js
cache.get('foo')
```

### `process.env.SIMPLE_CACHE_DIR`

path to store the cache records, defaults to `$XDG_CACHE_HOME`

---
> Author: [Ahmad Nassri](https://www.ahmadnassri.com) &bull; 
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &bull; 
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: LICENSE
[license-image]: https://img.shields.io/github/license/ahmadnassri/simple-file-cache.svg?style=for-the-badge&logo=circleci

[circle-url]: https://circleci.com/gh/ahmadnassri/simple-file-cache
[circle-image]: https://img.shields.io/circleci/project/github/ahmadnassri/simple-file-cache/master.svg?style=for-the-badge&logo=circleci

[npm-url]: https://www.npmjs.com/package/@ahmadnassri/simple-file-cache
[npm-image]: https://img.shields.io/npm/v/@ahmadnassri/simple-file-cache.svg?style=for-the-badge&logo=npm
