## Imagined usage
I'm using this with babel-plugin-auto-await to all me to really lazily write asynchronous code as if it was synchronous. Specifically using it so that i don't have to edit the synchronous boilerplate returned from HipTest auto generated projects. This allows me to refresh the tests from the server but still work with the asynchronous nature of webdriver.

## Installation
`npm install --save-dev babel-plugin-auto-async`

## Usage
### Via .babelrc (Recommended)
###### .babelrc
```json
{
  "plugins": ["auto-async"]
}
```

### Via CLI
`babel-node --plugins auto-async script.js`

### Via Node API
```javascript
require("babel-core").transform("code", {
  plugins: ["auto-async"]
});
```
