
[![npm Version][npmVersion]][npmVersionUrl] [![Build Status][build]][buildUrl] [![Coverage Status][coverage]][coverageUrl] [![License][license]][licenseUrl]  
[![GitHub Repo][githubRepo]][githubRepoUrl] [![GitHub Follow][githubFollow]][githubFollowUrl] [![GitHub stars][githubStars]][githubStarsUrl]
# JS Form Data
Plain-old-JS near-implementation of the [FormData][1] web API with analogue methods for browsers with limited support and ergonomic parsing & serialization functionality

### Constructor
_Every class that instantiates has one!_

**`JSFormData`**  
Creates a new `JSFormData` object from a `<form>` tag and its children.
```
// in document body:
//<form id="example">
//	<input name="foo" value="bar" />
//	<input name="baz" value="qux" />
//	<input name="bool" value="true" />
//	<input name="bool" value="false" />
//</form>

// params: <form>
const formData = new JSFormData(document.getElementById('example'));
formData.serialize();
// => { foo: 'bar', baz: 'qux', bool: [true, false] }
```

### Class Methods
_The JSFormData class has one util method but it's an important one if you need an instance but don't have a DOM element to pass to the constructor_

**`JSFormData::parse`**  
Creates a new `JSFormData` object from k/v pairs in a plain JS object argument.
```
// params: <Object>
const formData = JSFormData.parse({ foo: 'bar', baz: true, qux: [1, 2, 3] });
formData.serialize();
// => { foo: 'bar', baz: true, qux: [1, 2, 3] }
```

### Instance Methods
_JSFormData instance methods are analogues of the regular FormData web API instance methods, modified to accept and return friendlier objects for easier integration with other processing logic_

**`JSFormData.append`**   
Appends a new value onto an existing key in a `JSFormData` internal data structure, or adds the key and value if it does not already exist.
```
// params: <String>, <_>
const formData = new JSFormData();
formData.append('foo', 'bar');
formData.append('foo', 'baz');
formData.append('qux', true);
formData.serialize();
// => { foo: ['bar', 'baz'], qux: true }

// params: <String>, <Blob>, <String>
const formData = new JSFormData();
formData.append('blob', new Blob(), 'blob-name');
formData.serialize().blob.name;
// => 'blob-name'

// params: <Object>
const formData = new JSFormData();
formData.append({ foo: 'bar' });
formData.serialize();
// => { foo: ['bar'] }

```

**`JSFormData.delete`**  
Deletes a k/v pair from a `JSFormData` internal data structure.
```
// params: <String>
const formData = JSFormData.parse({ foo: 'bar', baz: 'qux'});
formData.delete('foo');
formData.serialize();
// => { baz: 'qux' }
```

**`JSFormData.entries`**  
Returns an `Array` of 2-element `Array`s from k/v pairs in `JSFormData`'s internal data structure.
```
// params: none
const formData = JSFormData.parse({ foo: 'bar', baz: ['qux', 'quux']});
formData.serialize();
// => [['foo', 'bar'], ['baz', ['qux', 'quux]]]
```

**`JSFormData.get`**  
Returns the first value associated with a given key in a `JSFormData` instance.
```
// params: <String>
const formData = JSFormData.parse({ foo: 'bar', baz: [1, 2] });
formData.get('foo');
// => 'bar'
formData.get('baz');
// => 1
```

**`JSFormData.getAll`**  
Returns an `Array` of all values associated with a given key in a `JSFormData` instance.
```
params: <String>
const formData = JSFormData.parse({ foo: 'bar', baz: [1, 2] });
formData.getAll('foo');
// => ['bar']
formData.getAll('baz');
// => [1, 2]
```

**`JSFormData.has`**  
Returns a boolean indicating whether a `JSFormData` instance contains a given key.
```
params: <String>
const formData = JSFormData.parse({ foo: 'bar', baz: false });
formData.has('foo');
// => true
formData.has('baz');
// => true
formData.has('qux');
// => false
```

**`JSFormData.keys`**  
Returns an `Array` of all the keys in a `JSFormData` instance.
```
// params: none
const formData = JSFormData.parse({ foo: 'bar', baz: false, qux: [1, 2, 3] });
formData.keys();
// => ['foo', 'baz', 'qux']
```

**`JSFormData.set(<str>, <_>)`**  
Sets a new value for an existing key in a `JSFormData` instance, or adds a k/v pair if the given key does not already exist. Similar to append, but replaces any existing values on specified keys.
```
params: <String>, <_>
const formData = JSFormData({ foo: 'bar' });
formData.set('foo', 'baz');
formData.serialize();
 // => { foo: 'baz' }
 
 // params: <String>, <Blob>, <String>
 const formData = new JSFormData();
 formData.set('blob', 'test-value');
 formData.set('blob', new Blob(), 'blob-name');
 formData.serialize().blob.name;
 // => 'blob-name'
 
 // params: <Object>
 const formData = new JSFormData();
 formData.set({ foo: 'bar' });
 formData.set({ foo: 'baz' });
 formData.serialize();
 // => { foo: ['baz'] }
```

**`JSFormData.values`**  
Returns an `Array` of values in a `JSFormData` instance; `Array` elements are either single values associated 1:1 with a key, or the first of a set of values associated many:1 with a key.
```
// params: none
const formData = JSFormData.parse({ foo: 'bar', baz: false, qux: [1, 2, 3] });
JSFormData.values();
// => ['bar', false, 1]
```

[1]: [https://developer.mozilla.org/en-US/docs/Web/API/FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

[npm]: https://nodei.co/npm/js-form-data.png?downloads=true&downloadRank=true&stars=true
[npmVersion]: https://badge.fury.io/js/js-form-data.svg
[npmVersionUrl]: https://badge.fury.io/js/js-form-data
[build]: https://travis-ci.com/jamescarney3/js-form-data.svg?branch=dev
[buildUrl]: https://travis-ci.com/jamescarney3/js-form-data
[coverage]: https://coveralls.io/repos/github/jamescarney3/js-form-data/badge.svg?branch=dev
[coverageUrl]: https://coveralls.io/github/jamescarney3/js-form-data?branch=dev
[license]: https://img.shields.io/badge/License-BSD%202--Clause-orange.svg
[licenseUrl]: https://opensource.org/licenses/BSD-2-Clause

[githubRepo]: https://img.shields.io/static/v1.svg?message=%20&style=social&logo=github&label=GitHub%20Repo
[githubRepoUrl]: https://github.com/jamescarney3/js-form-data
[githubFollow]: https://img.shields.io/github/followers/jamescarney3.svg?label=Follow&style=social
[githubFollowUrl]: https://github.com/jamescarney3 
[githubStars]: https://img.shields.io/github/stars/jamescarney3/js-form-data.svg?style=social
[githubStarsUrl]: https://github.com/jamescarney3/js-form-data/stargazers
