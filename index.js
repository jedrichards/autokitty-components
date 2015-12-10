import {card, renderCardsToEl, reset} from './lib/devcards'
import {HelloWorld, StatefulHelloWorld} from './components'
import React, {Component} from 'react'

card({
  target: HelloWorld
})

card({
  docs: 'This is a card without a name',
  target: HelloWorld
})

card({
  name: 'HelloWorld',
  docs: 'This card is named',
  target: HelloWorld
})

card({
  name: 'StatefulHelloWorld',
  docs: 'This card demonstrates a component with internal state',
  target: StatefulHelloWorld
})

card({
  name: 'HelloWorld with props',
  docs: 'This card is has been passed props',
  target: HelloWorld,
  targetProps: {foo: 'bar'}
})

card({
  docs: `
    ### Documentation

    Cards can render markdown documentation

    \`\`\`
    code.examples.work() === true
    \`\`\`
  `,
  target: HelloWorld
})

card({
  name: 'Doc only card',
  docs: '> Only docs here, friend'
})

card({
  docs: `
    ### ReactElement Cards

    Cards can be passed arbitrary ReactElement trees to render not just component classes.

    In this way components can be demonstrated while composed together.
  `,
  target: (
    <div>
      <HelloWorld/>
      <HelloWorld/>
    </div>
  )
})

if (typeof window !== 'undefined') {
  renderCardsToEl('devcards')
  reset()
}
