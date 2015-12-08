import React, {Component, PropTypes} from 'react'
import {defcard, renderToEl, reset} from './devcards'
import radium from 'radium'

module.onReload && module.onReload(reset);

export const HelloWorld = defcard(
  'HelloWorld',
  `### Hello world component

  1. Good
  1. Bad

  > An aside`,
  @radium class HelloWorld extends Component {
    static propTypes = {
      foo: PropTypes.string
    }
    render () {
      return (
        <p
          style={{color: 'red', ':hover': {color: 'green'}}}>
          HelloWorld {this.props.foo} how quick is this?
          Answer: not quick enough
        </p>
      )
    }
  },
  {
    foo: 'yo!',
    bar: 'Baz',
    qux: {
      '1': '1',
      '2': 2
    },
    onClick: () => {}
  }
)

export const HelloWorld2 = defcard(
  'HelloWorld2',
  `This is just a paragraph`,
  class HelloWorld2 extends Component {
    render () {
      return <p>Hot reload? Yeap. HelloWorld2</p>
    }
  },
  {
    foo: 2
  }
)

if (typeof window !== 'undefined') renderToEl('devcards')
