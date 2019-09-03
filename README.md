# str
`str` is a small CLI app to converting strings from and to various formats

## Installation
```
$ npm i -g @nazieb/str
```

## Usage
Available `str` commands:

### `base64`
Encodes string to base64:
```
$ str base64 enc some string here 

// will output:
// c29tZSBzdHJpbmcgaGVyZQ==
```

Decodes base64 string to plain format:
```
$ str base64 dec c29tZSBzdHJpbmcgaGVyZQ== 

// will output:
// some string here
```

### `case`
Converts string to different casing.

All available casings are listed on [`change-case` library documentation](https://github.com/blakeembrey/change-case/blob/master/README.md#usage)

```
$ str case title some string here

// will output
// Some String Here
```

### `unix`
Convert UNIX timestamp to human readable format, and vice-versa

```
$ str unix 1567494691

// will output
// 2019-09-03T07:11:31.000Z
```

```
$ str unix 2019-09-03 07:11:31

// will output
// 1567494691
```

## Development
Some useful NPM commands during development:

### `npm build`
Transpiles the JS files to compatible version in `dist` directory with [Babel](https://babeljs.io/)

### `npm test`
Runs the tests inside `__tests__` directory using [Jest](https://jestjs.io/)

### `npm run lint`
Runs lint checking using [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

### `npm run lint -- --fix`
Auto-fix lint errors

