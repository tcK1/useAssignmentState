# useAssignmentState &middot; [![NPM](https://img.shields.io/npm/v/use-assignment-state.svg)](https://www.npmjs.com/package/use-assignment-state)

React hook that give you the ability to have an state object that can perform changes with an assignment call.

I made this hook inspired in the new svelte 3.0 syntax, wich you can look [here](https://svelte.dev/examples#reactive-assignments).

This was created for fun and, to be honest, I don`t really know if you should be using it, but that's your choice.


## Install

```bash
npm install --save use-assignment-state
```
or
```bash
yarn add use-assignment-state
```

## Usage

```jsx
import React from 'react'
import useAssignmentState from 'use-assignment-state'

const Example = () => {
  const state = useAssignmentState({
    key: 'val',
  });

  return (
    <input
      value={state.key}
      onChange={(e) => { state.key = e.target.value; }}
    />
  )
}
```

### More examples
You can check more examples [here](https://github.com/tcK1/useAssignmentState/blob/master/example/src/index.jsx).

## License

MIT © [tcK1](https://github.com/tcK1)
