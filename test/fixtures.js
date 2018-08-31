const fixtures = [{
  array: [],
  expected: []
}, {
  array: {},
  expected: []
}, {
  array: 1,
  expected: []
}, {
  array: '',
  expected: []
}, {
  array: true,
  expected: []
}, {
  array: null,
  expected: []
}, {
  array: undefined,
  expected: []
}, {
  array: function () {
    console.log('this is not an array')
  },
  expected: []
}, {
  array: [12],
  expected: [12]
}, {
  array: [1, 2],
  expected: [1, 2]
}]

module.exports = fixtures
