import {pretty} from 'js-object-pretty-print'
import dedent from 'dedent'
import Markdown from 'react-remarkable'
import radium from 'radium'
import React, {Component} from 'react'

@radium
class DevCardsChrome extends Component {
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

@radium
class DevCard extends Component {
  render () {
    const {docs, target: Target, props, name} = this.props
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
      docs: {
        padding: 20,
      },
      target: {
        padding: 20,
        borderTop: '1px solid #ccc'
      },
      props: {
        marginBottom: 0,
        backgroundColor: '#eee',
        color: '#888',
        padding: 20,
        borderTop: '1px solid #ccc'
      }
    }

    const renderDocs = () => {
      if (docs) {
        return (
          <div className="markdown-body" style={styles.docs}>
            <Markdown source={docs}/>
          </div>
        )
      }
    }

    const renderProps = () => {
      if (props && Object.keys(props).length > 0) {
        return <pre style={styles.props}>{pretty(props, 2, 'PRINT', false)}</pre>
      }
    }

    const renderTarget = () => {
      if (typeof Target === 'function') {
        return (
          <div style={styles.target}>
            <Target {...props}/>
          </div>
        )
      } else if (typeof Target === 'object'){
        return (
          <div style={styles.target}>
            {Target}
          </div>
        )
      }
    }

    return (
      <div style={styles.base}>
        <p style={styles.name}>{name}</p>
        {renderDocs()}
        {renderTarget()}
        {renderProps()}
      </div>
    )
  }
}

const cards = new Map()

const renderCards = () => (
  <DevCardsChrome>
    {[...cards.values()].map((card, index) => <DevCard key={index} {...card}/>)}
  </DevCardsChrome>
)

export const card = ({
  name = `Card ${cards.size + 1}`,
  docs = '',
  target,
  props
}) => {
  docs = dedent(docs)
  cards.set(name, {name, docs, target, props})
}

export const renderToEl = (id) => React.render(renderCards(), document.getElementById(id))

export const renderToString = () => React.renderToString(renderCards())

export const reset = () => cards.clear()
