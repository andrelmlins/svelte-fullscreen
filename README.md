# Svelte FullScreen

[![npm version](https://badge.fury.io/js/svelte-fullscreen.svg)](https://www.npmjs.com/package/svelte-fullscreen) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-fullscreen/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-fullscreen.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-fullscreen) &bull; [![Dependencies](https://david-dm.org/andrelmlins/svelte-fullscreen.svg)](https://david-dm.org/andrelmlins/svelte-fullscreen) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-fullscreen.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-fullscreen/context:javascript)

Component that performs fullscreen in DOM Elements

## Installation

```
npm i svelte-fullscreen
// OR
yarn add svelte-fullscreen
```

## Demo [Link](https://svelte-fullscreen.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-fullscreen.git
cd svelte-fullscreen/example
yarn install && yarn start
```

## Examples

```js
<script>
  import SvelteFullscreen from "svelte-fullscreen";
</script>

<style>
  div {
    background-color: red;
    width: 120px;
    height: 120px;
  }
</style>

<SvelteFullscreen let:request let:exit>
  <div>
    <button onClick={() => onRequest()}>FullScreen</button>
    <button onClick={() => onExit()}>Screen</button>
  </div>
</SvelteFullscreen>
```

## Slot Properties

Raw component props (before transform):

| Prop      | Type | Description                |
| --------- | ---- | -------------------------- |
| onToggle  | func | Call for fullscreen toggle |
| onExit    | func | Call for fullscreen exit   |
| onRequest | func | Call for fullscreen enter  |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-fullscreen.png)](https://nodei.co/npm/svelte-fullscreen/)

## License

Svelte FullScreen is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-fullscreen/blob/master/LICENSE).
