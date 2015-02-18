# ot-js
[![Build Status](https://travis-ci.org/ggajos/ot-js.svg?branch=master)](https://travis-ci.org/ggajos/ot-js)

Goal of this library is to provide truly object oriented, reusable toolset of objects.

### Usage

[Download latest stable release](https://github.com/ggajos/ot-js/releases/latest) or use CDN:

```html
<script src='//cdn.rawgit.com/ggajos/ot-js/releases/download/0.1.0/ot-js.min.js'></script>
```
### Build

```sh
$ grunt release
```

### Crafted by

[![UWS.IE](http://uws-software-service.com/images/uws_logo.png)](http://uws.ie)

### Documentation

#### ot.cookie - Manipulate cookie objects in browser
```javascript
    ot.cookie('coo').write('value'); ot.cookie('coo').read();  //  "value"
    ot.cookie('coo').write('value'); ot.cookie('coo').remove(); ot.cookie('coo').read();  //  <empty string>
    ot.cookie('coo').write('value'); ot.cookie('coo').exists();  //  <true>
    ot.cookie('coo').remove(); ot.cookie('coo').exists();  //  <false>
    ot.cookie(); will throw exception
    ot.cookie(''); will throw exception
```

#### ot.is - Check type of object
```javascript
    ot.is([1, 2, 3]).aArray();  //  <true>
    ot.is('').aArray();  //  <false>
    ot.is(undefined).aArray();  //  <false>
    ot.is( 'body'; ).aFunction();  //  <true>
    ot.is('').aFunction();  //  <false>
    ot.is(undefined).aFunction();  //  <false>
    ot.is([1, 2, 3]).aString();  //  <false>
    ot.is('').aString();  //  <true>
    ot.is(null).aString();  //  <false>
    ot.is(undefined).aNull();  //  <true>
    ot.is(null).aNull();  //  <true>
    ot.is('').aNull();  //  <false>
    ot.is(1).aNumber();  //  <true>
    ot.is('').aNumber();  //  <false>
    ot.is(null).aNumber();  //  <false>
    ot.is(false).aBoolean();  //  <true>
    ot.is('').aBoolean();  //  <false>
    ot.is(null).aBoolean();  //  <false>
    ot.is(a: 'a').aObject();  //  <true>
    ot.is( ).aObject();  //  <false>
    ot.is('').aObject();  //  <false>
    ot.is(null).aObject();  //  <false>
```

#### ot.label - Utility class
```javascript
    ot.label('name').print( min: 10, max: -40 );  //  "name { min: 10, max: -40 }"
    ot.label('name').print();  //  "name { }"
    ot.label('name').print(null);  //  "name { }"
    ot.label(null).print(null); will throw exception
```

#### ot.list - Utility class
```javascript
    ifRandomReturnsZero(); ot.list([7, 5, 97]).random();  //  7
    ifRandomReturnsZero(); ot.list(['a', 'b']).random();  //  "a"
    ifRandomReturnsZero(); ot.list([]).random(); will throw exception
    ot.list(null); will throw exception
    ot.list(); will throw exception
    ot.list([7, 5, 97]).describe();  //  "list { elements: 7,5,97 }"
    ot.list([1, 2, 7]).find(function (it) return it > 5; );  //  7
    ot.list([1, 2, 7]).find(function (it) return it === 2; );  //  2
    ot.list([1, 2, 7]).find(function (it) return it > 10; );  //  <null>
    ot.list([]).find(function (it) return it > 10; );  //  <null>
    ot.list([]).empty();  //  <true>
    ot.list([1]).empty();  //  <false>
```

#### ot.method - Utility class
```javascript
    ot.method( throw Error(); ).isThrowingException();  //  <true>
    ot.method( ).isThrowingException();  //  <false>
    ot.method(''); will throw exception
    ot.method(); will throw exception
    ot.method( return 1; ).noReturnStatement();  //  <false>
    ot.method( 'nothing here'; ).noReturnStatement();  //  <true>
```

#### ot.range - Utility class
```javascript
    ifRandomReturnsZero(); ot.range(-3, 7).random();  //  -3
    ifRandomReturnsZero(); ot.range(0, 1).random();  //  0
    ifRandomReturnsZero(); ot.range(1, 1).random();  //  1
    ifRandomReturnsOne(); ot.range(-3, 7).random();  //  7
    ifRandomReturnsOne(); ot.range(0, 1).random();  //  1
    ot.range(null, 1); will throw exception
    ot.range(1, null); will throw exception
    ot.range('a', null); will throw exception
    ot.range('a'); will throw exception
    ot.range(); will throw exception
    ot.range(3, 7).describe();  //  "range { min: 3, max: 7 }"
```

#### ot.string - Utility class
```javascript
    ot.string('1').append('2').value();  //  "12"
    ot.string('1').append().value();  //  "1"
    ot.string('1').append(null).value();  //  "1"
    ot.string().describe();  //  "<undefined>"
    ot.string(null).describe();  //  "<null>"
    ot.string(undefined).describe();  //  "<undefined>"
    ot.string('').describe();  //  "<empty string>"
    ot.string(' ').describe();  //  "<blank string>"
    ot.string(true).describe();  //  "<true>"
    ot.string(false).describe();  //  "<false>"
    ot.string(4).describe();  //  "4"
    ot.string(4.5).describe();  //  "4.5"
    ot.string([1, 2, 3]).describe();  //  "<1,2,3>"
    ot.string('text').describe();  //  ""text""
    ot.string().isBlank();  //  <true>
    ot.string(4.5).isBlank();  //  <false>
    ot.string(false).isBlank();  //  <false>
    ot.string('').isBlank();  //  <true>
    ot.string(' ').isBlank();  //  <true>
    ot.string(' a ').isBlank();  //  <false>
    ot.string().value();  //  <empty string>
    ot.string(null).value();  //  <empty string>
    ot.string(undefined).value();  //  <empty string>
    ot.string('').value();  //  <empty string>
    ot.string(' ').value();  //  <blank string>
    ot.string(true).value();  //  "true"
    ot.string(false).value();  //  "false"
    ot.string(4).value();  //  "4"
    ot.string(4.5).value();  //  "4.5"
    ot.string([1, 2, 3]).value();  //  "1,2,3"
    ot.string(' a ').trim().value();  //  "a"
    ot.string('test').contains('a');  //  <false>
    ot.string('test').contains('t');  //  <true>
    ot.string().contains('t');  //  <false>
    ot.string('test').startsWith('a');  //  <false>
    ot.string('Xtest').startsWith('Xte');  //  <true>
    ot.string().startsWith('t');  //  <false>
    ot.string(null).substringAfter('abc').value();  //  <empty string>
    ot.string('').substringAfter('').value();  //  <empty string>
    ot.string('abcdef').substringAfter('abc').value();  //  "def"
    ot.string('abcdef').substringAfter('f').value();  //  <empty string>
    ot.string('abcdef').substringAfter('a').value();  //  "bcdef"
    ot.string('abcdef').substringAfter('X').value();  //  "abcdef"
    ot.string('a').wrap('X').value();  //  "XaX"
    ot.string('a').wrap().value();  //  "a"
```

#### ot.validate - Utility class
```javascript
    ot.validate().isArray(); will throw exception
    ot.validate([]).isArray(); silent execution
    ot.validate().isBoolean(); will throw exception
    ot.validate(true).isBoolean(); silent execution
    ot.validate().isFalse(); will throw exception
    ot.validate(false).isFalse(); silent execution
    ot.validate().isFunction(); will throw exception
    ot.validate( ).isFunction(); silent execution
    ot.validate().isNotEmptyArray(); will throw exception
    ot.validate([]).isNotEmptyArray(); will throw exception
    ot.validate([1]).isNotEmptyArray(); silent execution
    ot.validate().isTrue(); will throw exception
    ot.validate(true).isTrue(); silent execution
    ot.validate().notBlank(); will throw exception
    ot.validate(' ').notBlank(); will throw exception
    ot.validate('a').notBlank(); silent execution
    ot.validate().notNull(); will throw exception
    ot.validate(null).notNull(); will throw exception
    ot.validate(undefined).notNull(); will throw exception
    ot.validate('').notNull(); silent execution
    ot.validate([]).notNull(); silent execution
```
