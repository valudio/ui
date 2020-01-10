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

All component should use or extend the `IBaseProp` on it's props.

`isHidden` prop should be used like:
```JSX
const Component: React.FC<IProps> = ({ isHidden }) => {
  ...
  if (isHidden) return null 
  ...
}
```

`className` prop should be used like:
```JSX
const Component: React.FC<IProps> = ({ className }) => {
  ...
  return <Styled { ...props } className={ className }>...</Styled>
}
```

`style` prop should be used like:
```JSX
const Component: React.FC<IProps> = ({ className }) => {
  ...
  return <Styled { ...props } style={ style }>...</Styled>
}
```

### Debugging

In order to run locally

 `npm i`

 `npm run storybook`