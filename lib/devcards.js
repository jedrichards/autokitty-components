import {render} from 'react-dom'
import {renderToString} from 'react-dom/server'
import Card from './Card'
import Chrome from './Chrome'
import dedent from 'dedent'
import pkg from '../package'
import React from 'react'

const cards = new Map()
const v = pkg.version

const renderCards = () => (
  <Chrome v={v}>
    {[...cards.values()].map((card, index) => <Card key={index} {...card}/>)}
  </Chrome>
)

export const card = ({
  name = `Card ${cards.size + 1}`,
  docs = '',
  target,
  targetProps
}) => {
  docs = dedent(docs)
  cards.set(name, {name, docs, target, targetProps})
}

export const renderCardsToEl = (id) => render(renderCards(), document.getElementById(id))

export const renderCardsToString = () => renderToString(renderCards())

export const reset = () => cards.clear()
