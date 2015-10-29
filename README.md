# React Component Debug

Simple component to debug a component.

## Installation

  $ npm install react-component-debug

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
