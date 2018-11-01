const { join } = require('path')
const { writeFileSync, statSync, readFileSync, unlinkSync } = require('fs')
const dir = require('cache-directory')
const mkdirp = require('mkdirp')

const md5 = require('./lib/md5')

module.exports = namespace => {
  /* istanbul ignore next */ const root = process.env.SIMPLE_CACHE_DIR || dir(namespace || 'simple-cache') || '.cache' // ignore line in coverage

  function set (key, data, ttl) {
    // construct the full path
    const file = join(root, md5(key))

    // ensure cache directory exists
    mkdirp(root)

    // create the file record
    writeFileSync(file, JSON.stringify({ ttl, data }))
  }

  function get (key) {
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

  return { set, get }
}
