const tap = require('tap')
const test = tap.test

const getDepsWebpack = require('../lib/index.js')
const result = require('./fixtures/result-expected-flatlist.json')

const sortBy = require('lodash/sortBy')

const config = require('./fixtures/webpack.config.js')
test('fails', (t) => {
  getDepsWebpack(config)
    .then((res) => {
      t.same(sortBy('name', res), sortBy('name', result))
      t.end()
    })
})
