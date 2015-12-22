import {pretty} from 'js-object-pretty-print'
import Markdown from 'react-remarkable'
import React from 'react'

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

export default ({
  docs,
  target,
  targetProps,
  name
}) => {
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
      if (targetProps && Object.keys(targetProps).length > 0) {
        return <pre style={styles.props}>{pretty(targetProps, 2, 'PRINT', false)}</pre>
      }
    }

    const Target = target
    const renderTarget = () => {
      return (
          <div>
            {(() => (
              typeof target === 'object' ?
                <div style={styles.target}>target</div> :
                typeof target === 'function' ?
                  <div style={styles.target}><Target {...targetProps}/></div> :
                  null
            ))()}
          </div>
      )
    }

    return (
      <div className="Card" style={styles.base}>
        <p style={styles.name}>{name}</p>
        {renderDocs()}
        {renderTarget()}
        {renderProps()}
      </div>
    )
}
