# use-assignment-state

> React hook that give you the ability to have an state object that can perform changes with an assignment call.

[![NPM](https://img.shields.io/npm/v/use-assignment-state.svg)](https://www.npmjs.com/package/use-assignment-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-assignment-state
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-assignment-state'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [tcK1](https://github.com/tcK1)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
