# get-array
[![NPM](https://img.shields.io/npm/v/@dumplings/get-array.svg)](https://www.npmjs.org/package/@dumplings/get-array)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A small module to return an array.

## Example

```javascript
const getArray = require('@dumplings/get-array');

console.log(getArray([1, 2]));
// => [1, 2]

console.log(getArray([]));
// => []

console.log(getArray());
// => []

console.log(getArray({}));
// => []
```

## LICENSE [MIT](LICENSE)
