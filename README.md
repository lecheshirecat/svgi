# svgi

A lightweight SVG icon maker with TypeScript support

## Installation

```javascript
npm install @cheshirecat/svgi --save
```

## How to use

Default use in your main.js project

```typescript
import { addFamily } from '@cheshirecat/svgi'

import logos from './assets/icons/logos.json'
import ico from './assets/icons/ico.json'
...
addFamily('logo', logos)
addFamily('ico', fa)
...
```

## JSON files

The JSON value must be an array of three parameters: width (number), height (number), paths (string). You can separate multiple paths with '|'

```javascript
{
  "arrow-right": [
    256,
    512,
    "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
  ],
  ...
}
```

## Custom render function

```typescript
import { getIcon, makeIcon } from '@cheshirecat/svgi'

const iconObj = getIcon('ico', 'arrow-right')
console.log('iconObj =', iconObj)
/* iconObj = { width: 256, height: 512, paths: ['M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'] } */

const html = makeIcon('ico', 'arrow-right')
...
```

The rendered SVG element can then be easily customized with CSS.

```html
...
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="ico ico-arrow-right" data-name="arrow-right" role="img" viewBox="0 0 256 512">
  <path fill="currentColor" class="path path-1" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
</svg>
...
```

## License

[ISC](https://opensource.org/licenses/ISC)
