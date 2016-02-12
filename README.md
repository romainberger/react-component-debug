# React Component Debug

Simple component to debug a component.

## Installation

    npm install  react-component-debug

## Usage

Use the `Debug` component in your component:

```javascript
import React from 'react'
import Debug from 'react-component-debug'

class MyComponent extends React.Component {
  static defaultProps = {
    firstProp: 'Hello world' 
  }
  state = {
    firstState: 'Hello debug'
  }
  render() {
    return <Debug component={this}/>
  }
}
```

## Webpack configuration for dev only

This component is intended to be used only in development. You can make this module available everywhere in your app as long with this configuration in webpack:

```javascript
// webpack.config.js

var plugins = []

if (process.argv.indexOf('-p')) {
  plugins.push(new webpack.ProvidePlugin({Debug: 'react-component-debug'}))
}

module.exports = {
  // your config here
  plugins: plugins
}
```

Then you can use the module anywhere without having to require it. Be sure to clean your code before building it for prod.
