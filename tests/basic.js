module.exports = {
  'Renders Chrome component' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('.Chrome', 1000)
      .end();
  }
};
