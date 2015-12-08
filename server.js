import './index'
import {renderToString} from './devcards'
import express from 'express'
import React from 'react'

const server = express()
const devcardsString = renderToString()

server.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
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
  </html>`)
})

const root = __dirname

server.get("/static/bundle.js", (req, res) => res.sendFile("bundle.js", {root}))
server.get("/static/normalize.css", (req, res) => res.sendFile("node_modules/normalize.css/normalize.css", {root}))
server.get("/static/suitcss-base.css", (req, res) => res.sendFile("node_modules/suitcss-base/lib/base.css", {root}))
server.get("/static/github-markdown.css", (req, res) => res.sendFile("node_modules/github-markdown-css/github-markdown.css", {root}))

server.listen(3000)
console.log('Dev server started on 3000')
