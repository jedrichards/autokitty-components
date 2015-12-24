var pkg = require('../package.json')

module.exports = {
  'Renders Chrome' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('.Chrome', 1000)
      .end()
  },
  'Renders the current version in Chrome' : function (browser) {
    browser
      .url('http://localhost:3000')
      .getText('.Chrome-version', function (res) {
        this.assert.equal(res.value, pkg.version)
      })
      .end()
  }
}
