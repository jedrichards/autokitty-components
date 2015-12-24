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
  inner: {
    maxWidth: 980,
    margin: '0 auto',
    padding: '0 20px 20px 20px'
  }
}

export default ({children, v = '0.0.0'}) => (
  <div className="Chrome">
    <div style={styles.header}>
      <p style={styles.title}>AutoKitty DevCards <span className="Chrome-version">{v}</span></p>
    </div>
    <div style={styles.inner}>
      {children}
    </div>
  </div>
)
