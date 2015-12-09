import './index'
import {renderToString} from './devcards'
import express from 'express'
import React from 'react'

const server = express()

server.get("/", (req, res) => {
  const devcardsString = renderToString()
  res.send(
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
        <div id="devcards">${devcardsString}</div>
        <script type="text/javascript" src="/static/bundle.js"></script>
      </body>
    </html>`
  )
})

const send = (file) =>
  (req, res) => res.sendFile(file, {root: __dirname})

server.get('/static/bundle.js', send('bundle.js'))
server.get('/static/normalize.css', send('node_modules/normalize.css/normalize.css'))
server.get('/static/suitcss-base.css', send('node_modules/suitcss-base/lib/base.css'))
server.get('/static/github-markdown.css', send('node_modules/github-markdown-css/github-markdown.css'))

server.listen(3000)
console.log('Dev server started on 3000')
