import React from 'react'
import Debug from './../../src'

class App extends React.Component {
  static defaultProps = {
    firstProp: 'Hey debugging is fun',
    secondProp: 'Important data'
  }
  state = {
    name: 'Christian Bale',
    value: 10
  }
  handleChangeName(e) {
    this.setState({name: e.target.value})
  }
  handleChangeValue(e) {
    this.setState({value: e.target.value})
  }
  render() {
    return (
      <div>
        <p>
          <input type="text" value={this.state.name} onChange={::this.handleChangeName}/>
        </p>
        <p>
          <input type="text" value={this.state.value} onChange={::this.handleChangeValue}/>
        </p>
        <Debug component={this}/>
      </div>
    )
  }
}

React.render(<App/>, document.querySelector('#root'))
