# Svelte FullScreen

[![npm version](https://badge.fury.io/js/svelte-fullscreen.svg)](https://www.npmjs.com/package/svelte-fullscreen) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-fullscreen/blob/master/LICENSE) &bull; [![Node.js CI](https://github.com/andrelmlins/svelte-fullscreen/actions/workflows/nodejs.yml/badge.svg)](https://github.com/andrelmlins/svelte-fullscreen/actions/workflows/nodejs.yml) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/30d7b769-4f7a-40db-9575-032fca47b888/deploy-status)](https://app.netlify.com/sites/svelte-fullscreen/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-fullscreen.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-fullscreen/context:javascript)

Component that performs fullscreen in DOM Elements

## Installation

```
npm i svelte-fullscreen
// OR
yarn add svelte-fullscreen
```

<em>Note: to use this library in sapper, install as devDependency. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).</em>

## Demo [Link](https://svelte-fullscreen.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-fullscreen.git
cd svelte-fullscreen
yarn install && yarn start
```

## Examples

An example of how to use the library:

```js
<script>
  import Fullscreen from "svelte-fullscreen";
</script>

<style>
  div {
    background-color: red;
    width: 120px;
    height: 120px;
  }
</style>

<Fullscreen let:onRequest let:onExit>
  <div>
    <button on:click={() => onRequest()}>FullScreen</button>
    <button on:click={() => onExit()}>Screen</button>
  </div>
</Fullscreen>
```

## Properties

Raw component props (before transform):

| Prop   | Type | Description    |
| ------ | ---- | -------------- |
| change | func | Call in change |
| error  | func | Call in error  |

## Slot Properties

Raw component props (before transform):

| Prop      | Type | Description                |
| --------- | ---- | -------------------------- |
| onToggle  | func | Call for fullscreen toggle |
| onExit    | func | Call for fullscreen exit   |
| onRequest | func | Call for fullscreen enter  |

## Browsers Support

You can see the list of supported browsers [here](https://caniuse.com/fullscreen)

![Browsers support](assets/browser-support.png)

## License

Svelte FullScreen is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-fullscreen/blob/master/LICENSE).
