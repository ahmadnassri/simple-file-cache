const { writeFileSync, statSync, readFileSync, unlinkSync } = require('fs')
const { join } = require('path')
const md5 = require('./md5')
const mkdirp = require('mkdirp')

const root = process.env.SIMPLE_CACHE_DIR || '.cache'

exports.set = (key, data, ttl) => {
  // construct the full path
  const file = join(root, md5(key))

  // ensure cache directory exists
  mkdirp(root)

  // create the file record
  writeFileSync(file, JSON.stringify({ ttl, data }))
}

exports.get = (key) => {
  // construct the full path
  const file = join(root, md5(key))

  // parse the file content
  const record = JSON.parse(readFileSync(file))

  if (record.ttl) {
    // get time data
    const stats = statSync(file)

    // setup time in milliseconds
    const now = new Date().getTime()
    const mtime = new Date(stats.mtime).getTime()

    // check file age
    if (now - mtime > record.ttl) {
      // delete if old
      unlinkSync(file)

      return null
    }
  }

  // return the record data
  return record.data
}
