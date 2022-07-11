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

## Base props implementation

All component should use or extend the `IBaseProp` on it's props.

`isHidden` prop should be used like:
```JSX
const Component: React.FC<IProps> = ({ isHidden, ...props }) => {
  ...
  if (isHidden) return null 
  ...
}
```

`className` prop should be used like:
```JSX
const Component: React.FC<IProps> = ({ className, ...props }) => {
  ...
  return <Styled { ...props } className={ className }>...</Styled>
}
```

`style` prop should be used like:
```JSX
const Component: React.FC<IProps> = ({ style, ...props }) => {
  ...
  return <Styled { ...props } style={ style }>...</Styled>
}
```

## Externally reseting values

Components are designed to avoid controlling their state externally on your containers or pages. For example, you can't pass values to them, only it's initial value and options (in the case of a `Select` or `MultiSelect`).
In other words, they manage their own state and just send it's value when there's change.

So, if you want to reset their internal state you should do the next:

```JSX
const Component: React.FC<IProps> = ( => {
  const [ form, setForm ] = useState<HTMLFormElement>()
  const handleClear = event => {
    event.preventDefault()
    ref.reset()
  }
  ...
  return (
    <...>
      <form ref={ setForm }>
        <button onClick={ handleClear }>Reset</button>
        <Select { ... } form={ form } />
      </form>
    </...>
  )
}
```

Note that the ref is not managed with a `useRef` hooks since it doesn't re-render the component.

### Debugging

In order to run locally, internally using yarn for now.

 `npm i` or `yarn install`

 `npm run storybook` or `yarn storybook`
