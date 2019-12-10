# [@valudio/ui](https://valudio.github.io/ui) &middot; ![Release](https://github.com/valudio/ui/workflows/Release/badge.svg) [![npm version](https://img.shields.io/npm/v/@valudio/ui.svg?style=flat)](https://www.npmjs.com/package/@valudio/ui)

## Usage

In order to theme the components the provider should be added wrapping your app.

```
import { Provider } from '@valudio/ui'

<Provider theme={ theme }>
  <App />
</Provider>
```

## Development

All component should use or extend the `IBaseProp` on it's props. This interface by now only includes the property `isHidden` which you should use in your component:

```
...
  if (isHidden) return null 
...
```
