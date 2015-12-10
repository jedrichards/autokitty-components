import React, {Component} from 'react'

export default class StatefulHelloWorld extends Component {

  constructor (props) {
    super(props)
    this.state = {count: 0}
  }

  componentDidMount () {
    const tick = () => this.setState({count: this.state.count + 1})
    setInterval(tick, 1000)
  }

  render () {
    return <p>HelloWorld {this.state.count}</p>
  }
}
