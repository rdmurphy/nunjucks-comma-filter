# Nunjucks Comma Filter [![Build Status](https://travis-ci.org/rdmurphy/nunjucks-comma-filter.svg?branch=master)](https://travis-ci.org/rdmurphy/nunjucks-comma-filter)

[Nunjucks](https://mozilla.github.io/nunjucks/) doesn't have a comma filter! This fixes that.

## Install

```sh
npm install --save-dev nunjucks-comma-filter
```

## Usage

```js
var nunjucks = require('nunjucks');
var commaFilter = require('nunjucks-comma-filter');

// However you end up with a nunjucks Environment
var env = nunjucks.configure('app', {watch: false});

env.addFilter('comma', commaFilter);
```

In your nunjucks template:

```html
{{ number_var|comma }}
```

## License

MIT &copy; Ryan Murphy
