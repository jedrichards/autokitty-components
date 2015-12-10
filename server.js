import './index'
import html from './html'
import {renderCardsToString} from './lib/devcards'
import express from 'express'
import React from 'react'

const server = express()

server.get("/", (req, res) => res.send(html(renderCardsToString())))

const send = (file) =>
  (req, res) => res.sendFile(file, {root: __dirname})

server.get('/static/bundle.js', send('bundle.js'))
server.get('/static/normalize.css', send('node_modules/normalize.css/normalize.css'))
server.get('/static/suitcss-base.css', send('node_modules/suitcss-base/lib/base.css'))
server.get('/static/github-markdown.css', send('node_modules/github-markdown-css/github-markdown.css'))

server.listen(3000)

console.log('Dev server started on 3000')
