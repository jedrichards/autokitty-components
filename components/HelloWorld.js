import React, {Component} from 'react'

export default class HelloWorld extends Component {
  render () {
    return <p>HelloWorld {this.props.foo}</p>
  }
}
