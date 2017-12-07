const { readFileSync } = require('fs')
const { test } = require('tap')
const cache = require('..')
const md5 = require('../src/md5')

test('write', assert => {
  assert.plan(1)

  // write to cache
  cache.set('foo', 'bar', 1000)

  const data = readFileSync(`.cache/${md5('foo')}`)
  const record = JSON.parse(data)

  assert.same(record, { ttl: 1000, data: 'bar' })
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
