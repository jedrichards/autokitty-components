import radium from 'radium'
import React, {Component} from 'react'
import Markdown from 'react-remarkable'
import {pretty} from 'js-object-pretty-print'

@radium class DevCardsChrome extends Component {
  render () {
    const styles = {
      header: {
        backgroundColor: '#333'
      },
      title: {
        maxWidth: 980,
        padding: '8px 20px',
        margin: '0 auto',
        color: '#ccc'
      },
      cards: {
        maxWidth: 980,
        margin: '0 auto',
        padding: '0 20px'
      }
    }
    return (
      <div>
        <div style={styles.header}>
          <p style={styles.title}>AutoKitty DevCards ?.?.?</p>
        </div>
        <div style={styles.cards}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

@radium class DevCard extends Component {
  render () {
    const {documentation, MainObject, props, name} = this.props
    const propsString = Object.keys(props).length > 0 ? pretty(props, 2, 'PRINT', false) : '{}'
    const styles = {
      base: {
        border: '1px solid #ccc',
        borderRadius: 3,
        marginTop: 30
      },
      name: {
        margin: 0,
        backgroundColor: '#ccc',
        padding: '8px 20px',
        color: '#888'
      },
      documentation: {
        padding: 20,
        borderBottom: '1px solid #ccc',
      },
      mainObject: {
        padding: 20
      },
      props: {
        marginBottom: 0,
        backgroundColor: '#eee',
        color: '#888',
        padding: 20,
        borderTop: '1px solid #ccc'
      }
    }
    return (
      <div style={styles.base}>
        <p style={styles.name}>{name}</p>
        <div className="markdown-body" style={styles.documentation}>
          <Markdown source={documentation}/>
        </div>
        <div style={styles.mainObject}>
          <MainObject {...props}/>
        </div>
        <pre style={styles.props}>{propsString}</pre>
      </div>
    )
  }
}

const cards = new Map()

export const defcard = (name, documentation, MainObject, props = {}) => {
  cards.set(name, {name, documentation, MainObject, props})
  return MainObject
}

export const devcards = () => (
  <DevCardsChrome>
    {[...cards.values()].map((card, index) => {
      return (
        <div key={index}>
          <DevCard {...card}/>
        </div>
      )
    })}
  </DevCardsChrome>
)

export const renderToEl = (el) => React.render(devcards(), document.getElementById(el))

export const renderToString = () => React.renderToString(devcards())

export const reset = () => cards.clear()
