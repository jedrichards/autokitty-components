import './index'
import {renderCardsToString} from './lib/devcards'

export default () =>
  `<!DOCTYPE html>
  <html>
    <head>
      <title>AutoKitty Devcards</title>
      <link rel="stylesheet" href="/static/normalize.css">
      <link rel="stylesheet" href="/static/suitcss-base.css">
      <link rel="stylesheet" href="/static/github-markdown.css">
      <style>
        .markdown-body ol, ul {
          list-style: inherit !important;
        }
        .markdown-body *:first-child {
          margin-top: 0;
        }
        .markdown-body *:last-child {
          margin-bottom: 0;
        }
      </style>
    </head>
    <body>
      <div id="devcards">${renderCardsToString()}</div>
      <script type="text/javascript" src="/static/bundle.js"></script>
    </body>
  </html>`
