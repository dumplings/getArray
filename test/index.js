const fixtures = require('./fixtures')
const getArray = require('../')
const tape = require('tape')
const stringify = JSON.stringify
fixtures.forEach(function (f) {
  tape('returns ' + stringify(f.expected) + ' for ' + stringify(f.array), function (t) {
    t.plan(1)
    const actual = getArray(f.array)
    t.equal(actual.toString(), f.expected.toString())
  })
})
