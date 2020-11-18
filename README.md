# eslint-config-macopedia

Shareable linters configuration across Macopedia's projects. 


## Instalation

```bash
$ yarn add eslint-config-macopedia --dev
```

## JavaScript projects

`.eslintrc.js`:
```js
extends: [
  'macopedia'
],
```

## Vue.js
It extends Javascript configuration

`.eslintrc.js`:
```js
extends: [
  'macopedia/vue'
],
```

## Nuxt.js

It extends Javascript + Vue.js configuration

`.eslintrc.js`:
```js
extends: [
  'macopedia/nuxt'
],
```

## Stylelint

`stylelint.config.js`:

```js
module.exports = {
  extends: ['eslint-config-macopedia/stylelint'],
}
```

## Prettier 
`prettierrc.js`:
```js
module.exports = {
  ...require('eslint-config-macopedia/prettier.config.js')
}
```