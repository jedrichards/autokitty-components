import React from 'react'

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

export default ({children}) => (
  <div>
    <div style={styles.header}>
      <p style={styles.title}>AutoKitty DevCards ?.?.?</p>
    </div>
    <div style={styles.cards}>
      {children}
    </div>
  </div>
)
