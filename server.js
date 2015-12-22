import express from 'express'
import React from 'react'
import view from './view'

const server = express()

const send = (file) =>
  (req, res) => res.sendFile(file, {root: __dirname})

server.get("/", (req, res) => res.send(view()))
server.get('/static/bundle.js', send('bundle.js'))
server.get('/static/normalize.css', send('node_modules/normalize.css/normalize.css'))
server.get('/static/suitcss-base.css', send('node_modules/suitcss-base/lib/base.css'))
server.get('/static/github-markdown.css', send('node_modules/github-markdown-css/github-markdown.css'))

export const start = (port, cb) => server.listen(port, cb)
