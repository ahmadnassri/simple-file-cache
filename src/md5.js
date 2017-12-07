const { createHash } = require('crypto')

module.exports = (string) => createHash('md5').update(string).digest('hex')
