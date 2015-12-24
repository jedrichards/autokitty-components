import dedent from 'dedent'
import React from 'react'
import {render} from 'react-dom'
import {renderToString} from 'react-dom/server'
import Chrome from './Chrome'
import Card from './Card'

const cards = new Map()

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
