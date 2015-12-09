import React, {Component} from 'react'
import radium from 'radium'

@radium
export default class HelloWorld extends Component {
  render () {
    return <p>HelloWorld {this.props.foo}</p>
  }
}
