import React, {PropTypes, Component} from 'react'
import JSONTree from 'react-json-tree'

export default class Debug extends Component {
  render() {
    const theme = {
      scheme: 'monokai',
      author: 'wimer hazenberg (http://www.monokai.nl)',
      base00: '#272822',
      base01: '#383830',
      base02: '#49483e',
      base03: '#75715e',
      base04: '#a59f85',
      base05: '#f8f8f2',
      base06: '#f5f4f1',
      base07: '#f9f8f5',
      base08: '#f92672',
      base09: '#fd971f',
      base0A: '#f4bf75',
      base0B: '#a6e22e',
      base0C: '#a1efe4',
      base0D: '#66d9ef',
      base0E: '#ae81ff',
      base0F: '#cc6633'
    }

    return (
      <div style={{background: '#333', paddingRight: 20, paddingBottom: 1}}>
        {this.props.component.props && <JSONTree data={this.props.component.props} keyName="Props" theme={theme}/>}
        {this.props.component.state && <JSONTree data={this.props.component.state} keyName="State" theme={theme}/>}
      </div>
    )
  }
}
