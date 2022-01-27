# useRegex
A react hook for processing regular expressions.

---
## How to use
Install `react-use-regex`:
```bash
# npm
npm install react-use-regex

# yarn
yarn add react-use-regex
```

Import and enjoy!
```js
import useRegex from 'react-use-regex'

function MyComponent() {
  const [
    isMatch, 
    matches, 
    indexOfFirstMatch, 
    replace
  ] = useRegex(/R.*?x/i, 'Hello, Regex!')

  // isMatch: true
  // matches: ['Regex']
  // indexOfFirstMatch: 7
  // replace('World') => 'Hello, World!'

  return (
    <h1>...</h1>
  )
}
```