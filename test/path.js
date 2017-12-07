const { accessSync, constants } = require('fs')
const { test } = require('tap')
const md5 = require('../src/md5')
const path = require('path')

// set the env value before including the library
process.env.SIMPLE_CACHE_DIR = path.join(__dirname, '.cache')

const cache = require('..')

test('should create records under /test/.cache/*', assert => {
  assert.plan(1)

  // write to cache
  cache.set('foo', 'bar', 1000)

  assert.doesNotThrow(() => {
    accessSync(`${process.env.SIMPLE_CACHE_DIR}/${md5('foo')}`, constants.F_OK | constants.R_OK)
  })
})

test('read', assert => {
  assert.plan(1)

  // get value from cache
  const value = cache.get('foo')

  assert.equal(value, 'bar')
})

test('records with ttl should be removed', assert => {
  assert.plan(1)

  // write to cache
  cache.set('foo', 'bar', 50)

  setTimeout(() => {
    const value = cache.get('foo')
    assert.equal(value, null)
  }, 100)
})

test('records with no ttl should not be removed', assert => {
  assert.plan(1)

  // write to cache
  cache.set('foo', 'bar')

  setTimeout(() => {
    const value = cache.get('foo')
    assert.equal(value, 'bar')
  }, 100)
})
