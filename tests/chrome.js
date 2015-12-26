var pkg = require('../package.json')

module.exports = {
  'Renders the Chrome component' : function (browser) {
    browser
      .url('http://localhost:3001')
      .waitForElementVisible('.Chrome', 1000)
      .end()
  },
  'Renders the current version string in the Chrome component' : function (browser) {
    browser
      .url('http://localhost:3001')
      .getText('.Chrome-version', function (res) {
        this.assert.equal(res.value, pkg.version)
      })
      .end()
  }
}
